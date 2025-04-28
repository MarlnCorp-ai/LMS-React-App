import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import {
  FaPlay,
  FaArrowLeft,
  FaDownload,
  FaSave,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function EditorPage() {
  const { fileName } = useParams();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("This is a mocked output.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [editorHeight, setEditorHeight] = useState(600);
  const [editorWidth, setEditorWidth] = useState(600);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const resizerRef = useRef(null);

  

  useEffect(() => {
    const loadPyodideInstance = async () => {
      try {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
          });
          setPyodide(pyodideInstance);
          setIsPyodideReady(true);
        };
        script.onerror = () => setError("Failed to load Pyodide.");
        document.body.appendChild(script);
      } catch (err) {
        setError("Failed to load Pyodide.");
      }
    };

    loadPyodideInstance();
  }, []);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("pythonFiles")) || [];
    const file = storedFiles.find((f) => f.name === fileName);
    setCode(file?.content || "print('Hello, World!')");
  }, [fileName]);

  const handleEditorChange = (value) => setCode(value);

  const handleEditorDidMount = (editor, monacoInstance) => {
    editorRef.current = editor;
    monacoRef.current = monacoInstance;
  };

  const handleRunCode = async () => {
    if (!isPyodideReady) {
      setError("Pyodide is not ready yet.");
      return;
    }

    setLoading(true);
    setError(null);
    setOutput(""); // Clear the output initially

    try {
      // Clear previous error markers
      if (editorRef.current && monacoRef.current) {
        const model = editorRef.current.getModel();
        monacoRef.current.editor.setModelMarkers(model, "errors", []);
      }

      await pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
        sys.stderr = sys.stdout
      `);

      await pyodide.runPythonAsync(code);

      const outputResult = await pyodide.runPythonAsync("sys.stdout.getvalue()");

      // Check if the output is empty
      if (!outputResult) {
        setOutput("No output"); // Show a default message if no output
      } else {
        setOutput(outputResult); // Otherwise, show the result
      }
    } catch (err) {
      const message = err.message || "";
      const match = message.match(/line (\d+)/i);
      const lineNumber = match ? parseInt(match[1]) : 1;
      const errorMessage = message;

      // Highlight the error line in Monaco editor
      if (editorRef.current && monacoRef.current) {
        const model = editorRef.current.getModel();
        monacoRef.current.editor.setModelMarkers(model, "errors", [
          {
            startLineNumber: lineNumber,
            startColumn: 1,
            endLineNumber: lineNumber,
            endColumn: 100,
            message: errorMessage,
            severity: monacoRef.current.MarkerSeverity.Error,
          },
        ]);
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadFile = () => {
    if (!fileName) {
      setError("File name is not defined.");
      return;
    }

    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const handleSaveFile = () => {
    const storedFiles = JSON.parse(localStorage.getItem("pythonFiles")) || [];
    const updatedFiles = storedFiles.map((file) =>
      file.name === fileName ? { ...file, content: code } : file
    );
    localStorage.setItem("pythonFiles", JSON.stringify(updatedFiles));
    alert("File saved!");
  };

  const handleBack = () => navigate("/");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const startResize = (e) => {
    const startX = e.clientX;
    const startWidth = editorWidth;

    const handleMouseMove = (moveEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      if (newWidth > 300 && newWidth < 1000) {
        setEditorWidth(newWidth);
      }
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResize);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative flex flex-col lg:flex-row">
      {/* Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          {sidebarCollapsed ? <FaBars size={18} /> : <FaTimes size={18} />}
        </button>
      </div>

      {/* Backdrop */}
      {!sidebarCollapsed && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
  className={`fixed lg:static top-0 left-0 h-full bg-[#1e293b] text-white p-5 z-40 transition-transform duration-300 ease-in-out 
    ${sidebarCollapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0"} 
    w-64 lg:w-1/4 overflow-y-auto`}
  style={{ maxHeight: '100vh' }}  // Ensures the sidebar doesn't extend beyond the viewport
>
  <h2 className="text-xl font-bold text-blue-400 mb-4">🧠 Python Instructions</h2>
  <div className="space-y-5 text-sm text-gray-300 leading-relaxed">
    {/* Variable & Data Types */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">🔤 Variables and Data Types</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`# String
name = "Alice"
# Integer
age = 25
# Float
height = 5.8
# Boolean
is_student = True`}
      </code>
    </div>

    {/* Basic Arithmetic Operations */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">➗ Basic Arithmetic Operations</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`a = 10
b = 5
# Addition
print(a + b)  # Output: 15
# Subtraction
print(a - b)  # Output: 5
# Multiplication
print(a * b)  # Output: 50
# Division
print(a / b)  # Output: 2.0`}
      </code>
    </div>

    {/* Lists */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">🍎 Lists</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`fruits = ["apple", "banana", "cherry"]
# Accessing elements
print(fruits[0])  # Output: apple
# Adding elements
fruits.append("orange")
# Loop through list
for fruit in fruits:
    print(fruit)`}
      </code>
    </div>

    {/* Conditional Statements */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">⚖️ Conditional Statements</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`x = 10
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")`}
      </code>
    </div>

    {/* Loops */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">🔄 Loops</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`# For loop
for i in range(5):
    print(i)
# While loop
x = 0
while x < 5:
    print(x)
    x += 1`}
      </code>
    </div>

    {/* Functions */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">🛠️ Functions</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`def greet(name):
    return f"Hello, {name}!"
# Call the function
print(greet("Alice"))  # Output: Hello, Alice!`}
      </code>
    </div>

    {/* Dictionaries */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">📚 Dictionaries</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}
# Accessing values
print(person["name"])  # Output: Bob`}
      </code>
    </div>

    {/* Importing Modules */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">🔌 Importing Modules</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`import math
# Using math module to calculate square root
print(math.sqrt(16))  # Output: 4.0`}
      </code>
    </div>

    {/* Error Handling */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">⚠️ Error Handling (Exceptions)</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`try:
    x = 10 / 0  # Division by zero error
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Execution completed")`}
      </code>
    </div>

    {/* File Handling */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">📂 File Handling</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`# Write to file
with open("example.txt", "w") as file:
    file.write("Hello, World!")

# Read from file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)  # Output: Hello, World!`}
      </code>
    </div>

    {/* List Comprehension */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">💡 List Comprehension</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`squares = [x**2 for x in range(1, 6)]
print(squares)  # Output: [1, 4, 9, 16, 25]`}
      </code>
    </div>

    {/* Lambda Functions */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">🔨 Lambda Functions</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`add = lambda a, b: a + b
print(add(2, 3))  # Output: 5`}
      </code>
    </div>

    {/* Classes and Objects */}
    <div>
      <h3 className="text-blue-300 font-semibold mb-1">🧑‍💻 Classes and Objects</h3>
      <code className="block bg-[#334155] p-2 rounded-md whitespace-pre">
        {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

# Create an object of the class
person1 = Person("Alice", 25)
print(person1.greet())  # Output: Hello, my name is Alice and I am 25 years old.`}
      </code>
    </div>
  </div>
</aside>


      {/* Editor + Output */}
      <main className="flex-1 p-6 space-y-4 z-10">
        {/* Top Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full text-sm"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleRunCode}
              className="bg-green-600 hover:bg-green-700 p-2 rounded-full text-sm"
            >
              <FaPlay />
            </button>
            <button
              onClick={handleDownloadFile}
              className="bg-yellow-600 hover:bg-yellow-700 p-2 rounded-full text-sm"
            >
              <FaDownload />
            </button>
            <button
              onClick={handleSaveFile}
              className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full text-sm"
            >
              <FaSave />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Editor */}
          <div
            className="relative border border-gray-300 rounded-xl shadow-xl overflow-hidden"
            style={{ width: editorWidth }}
          >
            <Editor
              height={editorHeight}
              defaultLanguage="python"
              theme="vs-dark"
              value={code}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
              options={{
                minimap: { enabled: false },
                lineNumbers: "on",
                fontSize: 16,
                fontFamily: "Fira Code, monospace",
                wordWrap: "on",
              }}
            />
            <div
              ref={resizerRef}
              className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-gray-400 hover:bg-gray-500"
              onMouseDown={startResize}
            />
            <div
              className="cursor-row-resize h-2 bg-gray-400 hover:bg-gray-500 transition-all"
              onMouseDown={(e) => {
                const startY = e.clientY;
                const startHeight = editorHeight;

                const handleMouseMove = (moveEvent) => {
                  const newHeight = startHeight + (moveEvent.clientY - startY);
                  if (newHeight > 300 && newHeight < 1000) {
                    setEditorHeight(newHeight);
                  }
                };

                const handleMouseUp = () => {
                  window.removeEventListener("mousemove", handleMouseMove);
                  window.removeEventListener("mouseup", handleMouseUp);
                };

                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
              }}
            />
          </div>

          {/* Output */}
          <div
            className="bg-[#1e293b] p-5 rounded-lg overflow-auto flex-1"
            style={{ height: `${editorHeight}px` }}
          >
            <h2 className="text-md font-semibold text-blue-400 mb-3">Output</h2>
            {loading ? (
              <p className="text-sm text-gray-400">Running...</p>
            ) : (
              <pre className="text-sm whitespace-pre-wrap text-gray-200">
                {error ? <span className="text-red-400">{error}</span> : output}
              </pre>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
