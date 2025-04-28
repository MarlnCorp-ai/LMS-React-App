import Module from "./Module";
import Toggle from "../common/Toggle";

function SideBar() {
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
    <div className="flex flex-col gap-2 fixed right-0 top-0 w-[30rem] h-screen divide-y divide-black bg-white shadow-lg">
      <header className="flex flex-col gap-12 px-8 py-6">
        <section className="flex justify-between">
          <span class="material-symbols-outlined">keyboard_tab</span>
          <span class="material-symbols-outlined">skip_previous</span>
          <span class="material-symbols-outlined">skip_next</span>
          <span class="material-symbols-outlined">close</span>
        </section>
        <section>
          <h1 className="text-xl font-semibold mb-4">Python 3 Fundamentals</h1>
          <p>by Sarah Holderness</p>
        </section>
        <section>
          <p className="text-center text-lg font-semibold">Table of Contents</p>
        </section>
      </header>
      <main className="overflow-scroll h-[40rem]">
        {modules.map((module, idx) => (
          <Module {...module} number={idx} />
        ))}
      </main>
      <footer className="flex gap-8 items-center h-16 pl-8">
        <section className="flex gap-2">
            <Toggle /> <span>Autoplay</span>
        </section>
        <section className="bg-gray-300 p-2 rounded">Sage AI</section>
      </footer>
    </div>
  );
}

export default SideBar;
