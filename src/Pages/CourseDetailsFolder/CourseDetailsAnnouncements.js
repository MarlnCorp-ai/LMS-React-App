
import React from "react";

const announcements = [
  {
    id: 1,
    title: "Week 10 - April 8 - Attention and Transformer",
    date: "Apr 8, 2025, 2:46 PM",
    content: `Dear students, Today, we will explore the fascinating concept of attention and examine a real-world example—Transformers—the model that revolutionized AI.`,
  },
  {
    id: 2,
    title: "Week 9 - April 1 - Midterm discussion and Lecture on Machine Translation",
    date: "Apr 1, 2025, 2:06 PM",
    content: `In today's class, we will review the midterm exam questions, and you will have the opportunity to see your exam papers.`,
  },
  {
    id: 3,
    title: "Week 8 - March 25 - Midterm exam",
    date: "Mar 25, 2025, 9:00 AM",
    content: `Our midterm exam will take place today at 3:30 PM in Gateway North 204. The exam is paper-based, so remember to bring a pen or pencil.`,
  },
  {
    id: 4,
    title: "Week 7 - March 11 - CNN and tokenization",
    date: "Mar 11, 2025, 10:50 AM",
    content: `Today, we will discuss convolutional neural networks and their applications in natural language processing, along with tokenization techniques.`,
  },
  {
    id: 5,
    title: "Week 6 - March 4 - RNNs and beyond",
    date: "Mar 4, 2025, 10:14 AM",
    content: `I am not feeling well today, so our teaching assistant, Libo Zhang, will cover the lecture on RNNs and advanced models for language modeling.`,
  },
];

const CourseAnnouncements = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Announcements</h1>

      <div className="flex items-center justify-between mb-4">
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option value="all">All</option>
        </select>
        <button className="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">Mark All as Read</button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="w-full border border-gray-300 rounded px-3 py-2 mb-6 text-sm"
      />

      {announcements.map((announcement) => (
        <div key={announcement.id} className="border-t py-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
              NH
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-blue-900">{announcement.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
              <button className="text-blue-600 text-sm mt-1 hover:underline">↳ Reply</button>
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap mt-1">
              Posted on:<br /> {announcement.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseAnnouncements;
