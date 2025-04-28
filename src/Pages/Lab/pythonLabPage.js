import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaCopy,
  FaDownload,
  FaShareAlt,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import Input from "../../components/ui/input";
import Tooltip from "../../components/ui/Tooltip";
import Button from "../../components/ui/button";
import { toast } from "react-toastify";

export default function PythonLabPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [editingFile, setEditingFile] = useState(null);
  const [newFileName, setNewFileName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem("pythonFiles")) || [];
    setFiles(savedFiles);
  }, []);

  const isValidFileName = (name) => /^[a-zA-Z0-9 _.-]+$/.test(name);

  const generateDefaultFileName = () => {
    let counter = 1;
    let fileName;
    do {
      fileName = `file${counter}.py`;
      counter++;
    } while (files.some((f) => f.name === fileName));
    return fileName;
  };

  const handleCreateFile = () => {
    const newFileName = generateDefaultFileName();
    const newFile = {
      name: newFileName,
      content: "",
      lastModified: new Date().toISOString(),
    };
    const updatedFiles = [...files, newFile];
    setFiles(updatedFiles);
    localStorage.setItem("pythonFiles", JSON.stringify(updatedFiles));
    setEditingFile(newFileName);
    toast.success("New file created!");
  };

  const handleRename = (oldName) => {
    if (!isValidFileName(newFileName)) {
      toast.error("Invalid filename. Use only letters, numbers, spaces, dashes or underscores.");
      return;
    }
    let updatedFileName = newFileName;
    if (!updatedFileName.endsWith(".py")) {
      updatedFileName += ".py";
    }
    const updatedFiles = files.map((file) =>
      file.name === oldName ? { ...file, name: updatedFileName } : file
    );
    setFiles(updatedFiles);
    localStorage.setItem("pythonFiles", JSON.stringify(updatedFiles));
    setEditingFile(null);
    setNewFileName("");
    toast.success("File renamed successfully!");
  };

  const handleDelete = (name) => {
    const updatedFiles = files.filter((file) => file.name !== name);
    setFiles(updatedFiles);
    localStorage.setItem("pythonFiles", JSON.stringify(updatedFiles));
    toast.error("File deleted.");
  };

  const handleDuplicate = (file) => {
    let baseName = file.name.replace(/( \(Copy\d*\))?\.py$/, "");
    let copyIndex = 1;
    let newName;
    do {
      newName = `${baseName} (Copy${copyIndex}).py`;
      copyIndex++;
    } while (files.some((f) => f.name === newName));

    const duplicateFile = {
      ...file,
      name: newName,
      lastModified: new Date().toISOString(),
    };
    const updatedFiles = [...files, duplicateFile];
    setFiles(updatedFiles);
    localStorage.setItem("pythonFiles", JSON.stringify(updatedFiles));
    toast.info("File duplicated.");
  };

  const handleDownload = (file) => {
    const blob = new Blob([file.content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
    toast("File downloaded.");
  };

  const handleShare = (file) => {
    toast.info(`Sharing not yet implemented for '${file.name}'`);
  };

  const filteredFiles = files
    .filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortAsc) return nameA.localeCompare(nameB);
      return nameB.localeCompare(nameA);
    });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-gray-800 shadow z-10 p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://www.python.org/static/opengraph-icon-200x200.png" alt="Python Logo" className="h-8 w-8" />
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-400">Python Lab</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar Instructions */}
        <aside className="w-full md:w-80 bg-gray-800 shadow-md p-6 border-r border-gray-700 overflow-y-auto">
          <h2 className="text-xl font-bold text-blue-400 mb-4">📘 Python Lab Instructions</h2>
          <div className="space-y-4 text-sm text-gray-300">
            <p>
              <strong>Module:</strong> Python Packages and Data Structures
              <br />Learn how to use <code>pprint</code>, and explore <strong>lists, tuples, and sets</strong>.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Task 2.1:</strong> Import the <code>pprint</code> module.</li>
              <li><strong>Task 2.2:</strong> Create a complex structure and use <code>print()</code> vs <code>pprint()</code>.</li>
              <li><strong>Task 2.3:</strong> Create and print <code>my_list = [1, 2, 3, 4, 5]</code>.</li>
              <li><strong>Task 2.4:</strong> Create and print <code>my_tuple = ('a', 'b', 'c')</code>.</li>
              <li><strong>Task 2.5:</strong> Practice with sets: <code>my_set = set([1, 2, 3, 2, 1])</code>.</li>
              <li><strong>Bonus:</strong> Try using <code>collections</code> module like <code>Counter</code>.</li>
            </ul>
            <p>
              Start by clicking the <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono">+ new file</span> button.
            </p>
          </div>
        </aside>

        {/* Main Lab Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {/* File actions + Search */}
          <div className="bg-gray-800 rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-4">
              <div className="flex items-center bg-gray-700 rounded-lg px-3 py-1 w-full sm:max-w-md">
                <FaSearch className="text-gray-400 mr-2" />
                <Input
                  placeholder="Search files..."
                  className="bg-transparent border-none focus:outline-none w-full text-gray-100"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Tooltip message={`Sort ${sortAsc ? "descending" : "ascending"}`}>
                  <button
                    onClick={() => setSortAsc((prev) => !prev)}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow"
                  >
                    {sortAsc ? <FaSortAmountDown /> : <FaSortAmountUp />}
                  </button>
                </Tooltip>
                <Tooltip message="Create new file">
                  <button
                    onClick={handleCreateFile}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow transition"
                  >
                    <FaPlus />
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* File Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFiles.map((file, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-xl shadow-md hover:bg-gray-600 transition transform hover:scale-105"
                >
                  <div className="flex justify-between items-center">
                    {editingFile === file.name ? (
                      <div className="flex items-center">
                        <Input
                          value={newFileName}
                          onChange={(e) => setNewFileName(e.target.value)}
                          className="bg-transparent text-gray-100 border-b border-gray-500 focus:outline-none mr-2"
                        />
                        <button
                          onClick={() => handleRename(file.name)}
                          className="text-blue-400 hover:text-blue-500"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <h3
                        onClick={() => navigate(`/editor/${encodeURIComponent(file.name)}`)}
                        className="text-lg font-semibold text-blue-400 hover:underline cursor-pointer"
                      >
                        {file.name}
                      </h3>
                    )}
                    <div className="flex gap-2">
                      <Tooltip message="Edit name">
                        <button
                          onClick={() => {
                            setEditingFile(file.name);
                            setNewFileName(file.name);
                          }}
                          className="text-blue-400 hover:text-blue-500"
                        >
                          <FaEdit />
                        </button>
                      </Tooltip>
                      <Tooltip message="Delete">
                        <button
                          onClick={() => handleDelete(file.name)}
                          className="text-red-400 hover:text-red-500"
                        >
                          <FaTrash />
                        </button>
                      </Tooltip>
                      <Tooltip message="Duplicate">
                        <button
                          onClick={() => handleDuplicate(file)}
                          className="text-blue-400 hover:text-blue-500"
                        >
                          <FaCopy />
                        </button>
                      </Tooltip>
                      <Tooltip message="Download">
                        <button
                          onClick={() => handleDownload(file)}
                          className="text-green-400 hover:text-green-500"
                        >
                          <FaDownload />
                        </button>
                      </Tooltip>
                      <Tooltip message="Share">
                        <button
                          onClick={() => handleShare(file)}
                          className="text-yellow-400 hover:text-yellow-500"
                        >
                          <FaShareAlt />
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    Last Modified: {new Date(file.lastModified).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="sticky bottom-0 bg-gray-800 text-center text-gray-500 text-sm p-2 border-t border-gray-700">
        © {new Date().getFullYear()} Marln LMS. All rights reserved.
      </footer>
    </div>
  );
}
