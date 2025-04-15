import React from "react";
import { FiExternalLink, FiDownload } from "react-icons/fi";

const categories = [
  {
    name: "Recommended Reading",
    resources: [
      { title: "Artificial Intelligence: A Modern Approach", type: "pdf", action: "download", url: "#" },
      { title: "Deep Learning by Ian Goodfellow", type: "link", action: "open", url: "https://www.deeplearningbook.org/" },
    ],
  },
  {
    name: "Tools & Software",
    resources: [
      { title: "Jupyter Notebook Setup Guide", type: "pdf", action: "download", url: "#" },
      { title: "Google Colab", type: "link", action: "open", url: "https://colab.research.google.com/" },
    ],
  },
  {
    name: "Code Repositories",
    resources: [
      { title: "NLP Basics GitHub Repo", type: "link", action: "open", url: "https://github.com/example/nlp-basics" },
      { title: "Pretrained Models Collection", type: "link", action: "open", url: "https://huggingface.co/models" },
    ],
  },
];

const CourseDetailsDigitalMaterial = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">📚 Digital Material Repository</h2>

      {categories.map((cat, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{cat.name}</h3>
          <ul className="space-y-2">
            {cat.resources.map((item, i) => (
              <li key={i} className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded">
                <span>{item.title}</span>
                {item.action === "download" ? (
                  <a href={item.url} download className="text-blue-600 flex items-center gap-1 hover:underline">
                    <FiDownload />
                    Download
                  </a>
                ) : (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1 hover:underline">
                    <FiExternalLink />
                    Open
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseDetailsDigitalMaterial;
