import React from "react";

const resources = [
  {
    title: "Speech and Language Processing",
    description: "Textbook by Jurafsky & Martin on NLP fundamentals.",
    link: "https://web.stanford.edu/~jurafsky/slp3/",
    emoji: "📘",
  },
  {
    title: "NLTK Book",
    description: "Practical NLP using Python with NLTK library.",
    link: "https://www.nltk.org/book/",
    emoji: "📙",
  },
  {
    title: "Stanford NLP YouTube Lectures",
    description: "Free video lectures on NLP by Stanford University.",
    link: "https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn",
    emoji: "🎥",
  },
  {
    title: "Hugging Face Transformers",
    description: "State-of-the-art NLP models, datasets, and tools.",
    link: "https://huggingface.co/transformers/",
    emoji: "🤗",
  },
  {
    title: "GitHub NLP Codebase",
    description: "Starter code and project examples for NLP.",
    link: "https://github.com/rohan-paul/Awesome-NLP",
    emoji: "💻",
  },
  {
    title: "Zotero Citation Manager",
    description: "Tool for managing and citing academic sources.",
    link: "https://www.zotero.org/",
    emoji: "📝",
  },
];

const CourseDetailsLibraryResources = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">📚 Library Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-2 text-blue-600 mb-2">
              <span className="text-xl">{res.emoji}</span>
              <h3 className="text-lg font-semibold">{res.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">{res.description}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              Access Resource →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailsLibraryResources;
