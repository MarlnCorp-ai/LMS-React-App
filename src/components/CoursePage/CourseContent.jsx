import React, { useState } from "react";
import Module from "../../components/CoursePage/Module";

const tabs = [
  { key: "contents", label: "Table of contents", component: TableOfContents },
  { key: "description", label: "Description", component: Description },
  { key: "transcript", label: "Transcript", component: Transcript },
  { key: "exercises", label: "Exercise files", component: ExerciseFiles },
  { key: "discussion", label: "Discussion", component: Discussion },
  { key: "related", label: "Related Courses", component: RelatedCourses },
];

export default function CourseNav() {
  const [active, setActive] = useState("contents");

  return (
    <div className="w-4/5 h-screen p-6 border-t-8">
      {/* Nav tabs */}
      <nav className="container mx-auto">
        <ul className="flex space-x-8 border-b border-gray-700">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                onClick={() => setActive(tab.key)}
                className={`
                  pb-2 text-base font-medium
                  ${
                    active === tab.key
                      ? "font-bold border-b-4 border-purple-grad"
                      : "text-gray-800 hover:text-gray-400"
                  }
                `}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Active tab content */}
      <div className="container mx-auto py-8 overflow-scroll">
        {tabs.map((tab) =>
          tab.key === active ? <tab.component key={tab.key} /> : null
        )}
      </div>
    </div>
  );
}

/* —————————————————————————— */
/* Example placeholder components */
/* Replace these with your real content */
function TableOfContents() {

    const modules = [
        {
          topic: "Course Overview",
          duration: "1m 25s",
          materials: [
            {
              topic: "Course Overview",
              duration: "1m 25s",
            },
          ],
        },
        {
          topic: "Run Python and Explore Data Types",
          duration: "23m 17s",
          materials: [
            {
              topic: "Introducing Data Types",
              duration: "4m 30s",
            },
            {
              topic: "Deemo: Install Python",
              duration: "5m 52s",
            },
            {
              topic: "Demo: Create a Tax Calculator",
              duration: "3m 33s",
            },
            {
              topic: "Strings and Input and Output",
              duration: "5m 56s",
            },
            {
              topic: "Demo: Age Calculator",
              duration: "3m 23s",
            },
          ],
        },
        {
          topic: "Conditions and Imports",
          duration: "22m 39s",
          materials: [
            {
              topic: "Conditions",
              duration: "10m 40s",
            },
            {
              topic: "Demo: Rock, Paper, Scissors Game",
              duration: "3m 48s",
            },
            {
              topic: "Import Python Modules",
              duration: "5m 34s",
            },
            {
              topic: "Demo: Randomize Rock, Paper, Scissors Game",
              duration: "2m 36s",
            },
          ],
        },
        {
          topic: "Lists and Loops",
          duration: "20m 13s",
          materials: [
            {
              topic: "Lists and Loops",
              duration: "5m 54s",
            },
            {
              topic: "Demo: Sum Expenses",
              duration: "3m 53s",
            },
            {
              topic: "Loops with range()",
              duration: "3m 45s",
            },
            {
              topic: "Demo: Loan Payment Calculator",
              duration: "6m 40s",
            },
          ],
        },
        {
          topic: "Dictionaries, JSON, and Pip",
          duration: "32m 19s",
          materials: [
            {
              topic: "Dictionaries",
              duration: "5m 41s",
            },
            {
              topic: "Demo: Create a Movie Schedule Dictionary",
              duration: "3m 8s",
            },
            {
              topic: "Combining Lists and Dictionaries",
              duration: "3m 55s",
            },
            {
              topic: "Demo: Parse a Nested Contacts Dictionary",
              duration: "2m 46s",
            },
            {
              topic: "Reading JSON and Installing Packages with Pip",
              duration: "7m 8s",
            },
            {
              topic: "Demo: Create a Python Virtual Environment",
              duration: "4m 6s",
            },
            {
              topic: "Demo: Use the Open Weather Map API",
              duration: "5m 33s",
            },
          ],
        },
        {
          topic: "Functions",
          duration: "14m 2s",
          materials: [
            {
              topic: "Functions",
              duration: "9m 38s",
            },
            {
              topic: "Demo: Create a Dice Rolling Game",
              duration: "4m 24s",
            },
          ],
        },
        {
          topic: "Classes and Objects",
          duration: "27m 20s",
          materials: [
            {
              topic: "Classes",
              duration: "6m 5s",
            },
            {
              topic: "Demo: Company Payroll with Classes",
              duration: "6m 42s",
            },
            {
              topic: "Class Inheritance",
              duration: "8m 10s",
            },
            {
              topic: "Demo: Company Payroll with In heritance",
              duration: "6m 21s",
            },
          ],
        },
        {
          topic: "Working with Files",
          duration: "34m 14s",
          materials: [
            {
              topic: "Reading Files",
              duration: "6m 43s",
            },
            {
              topic: "Demo: Writing Files",
              duration: "7m",
            },
            {
              topic: "File Manipulation",
              duration: "5m 35s",
            },
            {
              topic: "Demo: File Organization",
              duration: "9m 19s",
            },
          ],
        },
      ];
  return (
    <div className="flex flex-col gap-4">
        {/* Sub-nav line */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">This course is part of:</span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python logo"
              className="h-5 w-5"
            />
            <span className="text-sm font-medium">Python 3 Path</span>
          </div>
          <button className="text-purple-400 text-sm font-medium hover:text-purple-700">
            Expand All
          </button>
        </div>
        <main className="flex flex-col">
        {modules.map((module, idx) => (
          <Module {...module} number={idx} />
        ))}
      </main>
    </div>
  );
}
function Description() {
  return (
    <div className="text-justify">
      Python is a great programming language for beginners and experts alike
      because it's easy to learn and use and also has libraries that allow you
      to build pretty much anything. In this course, Python 3 Fundamentals,
      you'll learn the fundamentals of Python while building practical Python
      programs. First, you’ll explore data types, conditionals, and loops. Next,
      you’ll discover Python libraries, functions, and classes. Finally, you’ll
      learn how to manipulate files and do web requests. When you’re finished
      with this course, you’ll have the skills and knowledge of Python needed to
      create complex Python applications to solve a variety of problems.
    </div>
  );
}
function Transcript() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">Course Overview</h1>
      <p>
        Hi, everyone. My name is Sarah Holderness, and welcome to my course,{" "}
        <em>Python 3 Fundamentals</em>. Python is a great programming language
        for beginners and experts alike because it’s easy to learn and use and
        also has libraries that allow you to build pretty much anything from
        data science to machine learning to web development.
      </p>
      <p>
        In this course, we’re going to learn the fundamentals of Python while
        building practical Python programs like a loan calculator, a
        rock–paper–scissors game, an acronym translator, and a weather reader.
        Some of the major topics we’ll cover include writing a Python program,
        input and output, data types, web requests, and installing and using
        Python packages. By the end of this course, you’ll know the fundamentals
        of Python and will have real-world experience building practical Python
        programs. This course starts from the beginning, so there are no
        prerequisites. I hope you’ll join me on this journey!
      </p>

      <h2 className="text-2xl">Run Python and Explore Data Types</h2>
      <h3>Introducing Data Types</h3>
      <p>
        Hi, everyone. I’m Sarah Holderness, and this is{" "}
        <em>Python 3 Fundamentals</em> where we learn by building practical
        examples. In this module we’ll cover data types, input, and output.
      </p>
      <ul>
        <li>
          Integers (<code>int</code>) and floats (<code>float</code>)
        </li>
        <li>Automatic type inference</li>
        <li>
          Arithmetic operators (<code>+</code>, <code>-</code>, <code>*</code>,{" "}
          <code>/</code>)
        </li>
        <li>Using the interactive shell vs. scripts</li>
      </ul>
      <p>
        By the end, you’ll build a simple age-calculator program in both the
        shell and a script.
      </p>

      <h2 className="text-2xl">Demo: Install Python</h2>
      <p>
        We’ll check for an existing installation (<code>python --version</code>{" "}
        / <code>python3 --version</code>), download and run the installer from{" "}
        <a href="https://python.org/downloads">python.org/downloads</a>, enable
        “Add to PATH” on Windows, then verify with <code>python</code> in a new
        terminal.
      </p>
      <p>
        Next, install Visual Studio Code from{" "}
        <a href="https://code.visualstudio.com">code.visualstudio.com</a>, open
        your project folder, and install the Microsoft Python extension via the
        Extensions view. Finally, select your Python 3 interpreter in the
        Command Palette.
      </p>

      <h2>Demo: Create a Tax Calculator</h2>
      <pre>
        <code>
          amount = 10 tax = 0.06 total = amount + amount * tax print(total)
        </code>
      </pre>
      <p>
        Run with <code>python tax.py</code>. Adjust <code>amount</code> and{" "}
        <code>tax</code> to see different outputs.
      </p>

      <h2 className="text-2xl">Strings and Input / Output</h2>
      <p>
        Use <code>print()</code> to display values and <code>input()</code> to
        prompt the user. Strings live in quotes (<code>"text"</code> or{" "}
        <code>'text'</code>) and can be concatenated with <code>+</code>.
        Convert types with <code>int()</code> and <code>float()</code>.
      </p>

      <h2 className="text-2xl">Demo: Age Calculator</h2>
      <ol>
        <li>
          Get age:
          <pre>
            <code>age = int(input("How old are you? "))</code>
          </pre>
        </li>
        <li>
          Compute decades (<code>//</code>) and years (<code>%</code>):
          <pre>
            <code>decades = age // 10 years = age % 10</code>
          </pre>
        </li>
        <li>
          Print the result:
          <pre>
            <code>
              print(f"You are decades decades and years years old.")
            </code>
          </pre>
        </li>
      </ol>

      <h2 className="text-2xl">Conditionals and Imports</h2>
      <p>
        Use <code>if</code>, <code>elif</code>, and <code>else</code> with
        comparison operators (<code>==</code>, <code>&lt;</code>,{" "}
        <code>&gt;</code>, etc.) and logical operators (<code>and</code>,{" "}
        <code>or</code>, <code>not</code>).
      </p>

      <h2 className="text-2xl">Demo: Rock, Paper, Scissors Game</h2>
      <p>Outline:</p>
      <ol>
        <li>
          Get <code>computer_choice</code> (hardcoded, then random).
        </li>
        <li>
          Get <code>user_choice</code> via <code>input()</code>.
        </li>
        <li>
          Use <code>if/elif/else</code> to decide “Tie”, “You WIN”, or “You
          lose”.
        </li>
      </ol>

      <h2 className="text-2xl">Import Python Modules</h2>
      <p>
        Standard Library modules (e.g. <code>import random</code>) add
        functionality. Third-party packages (e.g. <code>requests</code>) are
        installed via <code>pip install requests</code>.
      </p>

      <h2 className="text-2xl">Demo: Randomize Rock, Paper, Scissors</h2>
      <p>Replace hardcoded choice with:</p>
      <pre>
        <code>
          import random computer_choice =
          random.choice(["rock","paper","scissors"])
        </code>
      </pre>

      <h2 className="text-2xl">Lists and Loops</h2>
      <p>
        Lists (<code>[]</code>) can hold any types. Use:
      </p>
      <ul>
        <li>
          <code>append()</code> / <code>remove()</code>
        </li>
        <li>
          <code>for item in my_list:</code>
        </li>
        <li>
          <code>if element in my_list:</code>
        </li>
      </ul>

      <h2 className="text-2xl">Demo: Sum Expenses</h2>
      <pre>
        <code>
          expenses = [10.50, 8, 5, 15, 20, 5, 3] print(f"You spent $
          sum(expenses)")
        </code>
      </pre>

      <h2 className="text-2xl">
        Loops with <code>range()</code>
      </h2>
      <p>
        <code>range(n)</code> generates <code>0…n−1</code>. Use it to repeat
        actions or index lists.
      </p>

      <h2 className="text-2xl">Demo: Loan Payment Calculator</h2>
      <p>
        Compute monthly interest (<code>APR/100/12</code>), loop for N months,
        add interest, subtract payment, handle final partial payment with{" "}
        <code>if balance &lt; payment</code>.
      </p>

      <h2 className="text-2xl">Dictionaries, JSON, and Pip</h2>
      <p>
        Dictionaries (<code>{}</code>) map keys to values. Access via{" "}
        <code>mydict[key]</code> or <code>mydict.get(key)</code>. JSON data is
        parsed into nested dicts/lists. Install packages globally or manage
        per-project with <code>python3 -m venv venv</code> and{" "}
        <code>pip install …</code>.
      </p>

      <h2 className="text-2xl">Demo: Create a Movie Schedule Dictionary</h2>
      <pre>
        <code>
          movies = "The Grinch": "11:00am", "Dune": "2:30pm", "Barbie": "5:45pm"
          choice = input("Which movie?") showtime = movies.get(choice) if
          showtime: print(f"choice shows at showtime") else: print("That
          movie isn't playing")
        </code>
      </pre>

      <h2 className="text-2xl">Combining Lists and Dictionaries</h2>
      <p>
        You can nest lists in dicts and vice versa. Loop nested structures with
        nested <code>for</code> or <code>.items()</code>.
      </p>

      <h2 className="text-2xl">Demo: Parse a Nested Contacts Dictionary</h2>
      <pre>
        <code>
          contacts = "students": [ "name":"Sarah", "email":"sarah@example.com",
          "name":"Hermione","email":"hermione@example.com", "name":"Harry",
          "email":"harry@example.com" ] for s in contacts["students"]:
          print(s["email"])
        </code>
      </pre>

      <h2 className="text-2xl">Reading JSON and Installing Packages with Pip</h2>
      <p>
        Use <code>requests</code> to fetch JSON:
      </p>
      <pre>
        <code>
          import requests r =
          requests.get("http://api.open-notify.org/astros.json") data = r.json()
          for person in data["people"]: print(person["name"])
        </code>
      </pre>

      <h2 className="text-2xl">Demo: Create a Python Virtual Environment</h2>
      <p>
        <code>python3 -m venv venv</code>, then{" "}
        <code>source venv/bin/activate</code> (mac/Linux) or{" "}
        <code>.\venv\Scripts\activate</code> (Windows).
      </p>

      <h2>Demo: Use the Open Weather Map API</h2>
      <pre>
        <code>
          import requests api_key = "YOUR_API_KEY" city = "Orlando" url =
          f"http://api.openweathermap.org/data/2.5/weather?q=city&appid=
          api_key&units=imperial" resp = requests.get(url).json() temp =
          resp["main"]["temp"] desc = resp["weather"][0]["description"]
          print(f"Today's weather in city: desc, temp°F")
        </code>
      </pre>

      <h2 className="text-2xl">Functions</h2>
      <p>
        Define reusable logic with <code>def</code> and return values with{" "}
        <code>return</code>. Parameters are local to the function.
      </p>

      <h2>Demo: Create a Dice Rolling Game</h2>
      <pre>
        <code>
          import random def roll_dice(): return random.randint(1,6) +
          random.randint(1,6) p1 = input("Player 1 name: ") p2 = input("Player 2
          name: ") r1 = roll_dice() r2 = roll_dice() print(f"p1 rolled r1")
          print(f"p2 rolled r2")
        </code>
      </pre>

      <h2 className="text-2xl">Classes and Objects</h2>
      <p>
        Use <code>class</code> and methods (<code>def</code> inside a class) to
        model real-world entities with state and behavior.
      </p>

      <h2 className="text-2xl">Demo: Company Payroll with Classes</h2>
        <code>
          class Employee: def __init__(self, fname, lname, salary): self.fname =
          fname self.lname = lname self.salary = salary def calc_paycheck(self):
          return self.salary / 52 class Company: def __init__(self):
          self.employees = [] def add_employee(self, emp):
          self.employees.append(emp)
          </code>
          <h2 className="text-2xl">Class Inheritance</h2>
          <p>
            Derived classes reuse and override parent behavior. Use{" "}
            <code>class Child(Parent):</code> and <code>super()</code> to chain
            constructors or call parent methods.
          </p>
          <h2 className="text-2xl">Demo: Company Payroll with Inheritance</h2>
          <p>
            Refactor <code>Employee</code> into a base class and derive{" "}
            <code>SalaryEmployee</code>, <code>HourlyEmployee</code>, and{" "}
            <code>CommissionEmployee</code> with specialized{" "}
            <code>calc_paycheck</code> methods.
          </p>
          <h2 className="text-2xl">Working with Files</h2>
          <h3 className="text-xl">Exceptions</h3>
          <p>
            Use <code>try/except</code> to catch runtime errors and prevent
            crashes:
          </p>
          <pre>
            <code>
              try: value = mydict["missing"] except KeyError: print("Key not
              found")
            </code>
          </pre>
          <h3 className="text-xl">Reading Files</h3>
          <p>
            Open files safely with <code>with open(...)</code> which
            auto-closes:
          </p>
          <pre>
            <code>
              with open("acronyms.txt","r") as f: for line in f: if user_input
              in line: print(line) break
            </code>
          </pre>
          <h3 className="text-xl">Demo: Writing Files</h3>
          <p>Append new acronyms:</p>
          <pre>
            <code>
              with open("acronyms.txt","a") as f: f.write(f"acronym –{" "}
              definition\n")
            </code>
          </pre>
          <p>
            Wrap in <code>try/except FileNotFoundError</code> to handle missing
            files gracefully.
          </p>
          <h3 className="text-xl">File Manipulation</h3>
          <p>
            Use <code>os</code>, <code>os.path</code>, and <code>shutil</code>{" "}
            to manage directories and move files:
          </p>
          <pre>
            <code>
              import os, shutil desktop = os.path.expanduser("~/Desktop") target
              = os.path.join(desktop,"CleanedUp") os.makedirs(target,
              exist_ok=True) for entry in os.listdir(desktop): src =
              os.path.join(desktop,entry) if os.path.isfile(src):
              shutil.move(src, os.path.join(target,entry))
            </code>
          </pre>
          <h2 className="text-2xl">Demo: File Organization</h2>
          <p>
            Automatically sort desktop files into subfolders by extension
            (images, documents, archives) by iterating over{" "}
            <code>os.listdir</code> and moving via <code>shutil.move</code>.
          </p>
    </div>
  );
}
function ExerciseFiles() {
  return <div className="flex flex-col gap-8 items-start">
    <p>These exercise files are intended to provide you with the assets you need to create a video-based hands-on experience. With the exercise files, you can follow along with the author and re-create the same solution on your computer.</p>
    <button className="border-4 p-2 border-purple-grad hover:bg-purple-grad">Download exercise files</button>
  </div>;
}
function Discussion() {
  return <div className="">[Here goes the discussion thread]</div>;
}
function RelatedCourses() {
  return <div className="">[Here go related courses]</div>;
}
