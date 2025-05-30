import { useState } from "react";

function Module({ topic, duration, materials, number, clickHandler }) {
  const [currState, setState] = useState("inactive");

  const handleState = () => {
    setState((state) => (state === "active" ? "inactive" : "active"));
  };

  return (
    <div key={number}>
      <header
        className="flex justify-between bg-white px-8 py-3 border-y border-gray-200/70"
        onClick={handleState}
      >
        <section className="flex gap-8">
          <section className="w-10 h-10 border-2  rounded-full flex items-center justify-center bg-purple-grad">
            {number + 1}
          </section>
          <section>
            <h2 className="font-bold">{topic}</h2>
            <p className="text-sm">{duration}</p>
          </section>
        </section>
        {currState === "active" && (
          <span class="material-symbols-outlined">keyboard_arrow_up</span>
        )}
        {currState === "inactive" && (
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        )}
      </header>
      <main
        className={`${currState === "inactive" ? "hidden" : ""} bg-gray-200/30`}
      >
        {materials.map(({ topic, duration, type = "video" }, idx) => (
          <section key={idx} className="flex ml-5 items-center cursor" onClick={() => clickHandler(topic, type)}>
            {type === "video" && (
              <span class="material-symbols-outlined">videocam</span>
            )}
            {type === "pdf" && (
              <span class="material-symbols-outlined">picture_as_pdf</span>
            )}
            <div className="ml-4 p-2">
              <h3 className="text-sm">{topic}</h3>
              <p className="text-sm">{duration}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Module;
