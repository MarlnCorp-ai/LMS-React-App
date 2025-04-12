
const RightSidebar = () => {
    const tasks = [
      { title: "Lab 4 Grade Clarification", course: "CS 546-A", time: "Mar 23 at 6:26pm" },
      { title: "Office Hours Rescheduling", course: "CS 583-A", time: "Mar 23 at 8:58pm" },
      { title: "Midterm Exam", course: "CS 584-A", time: "Mar 25 at 3:30pm" }
    ];
  
    const feedback = [
      { title: "Course Project - Proposal", comment: "10 out of 10" },
      { title: "Final Project Proposal", comment: "Approved!" }
    ];
  
    return (
      <div className="w-72 bg-white p-4 border-l">
        <h2 className="font-semibold mb-2">To Do</h2>
        <ul className="space-y-2 mb-6">
          {tasks.map((task, i) => (
            <li key={i} className="text-sm">
              <p className="text-blue-700">{task.title}</p>
              <p className="text-xs text-gray-500">{task.course} — {task.time}</p>
            </li>
          ))}
        </ul>
        <h2 className="font-semibold mb-2">Recent Feedback</h2>
        <ul className="text-sm space-y-1">
          {feedback.map((fb, i) => (
            <li key={i}>
              <strong>{fb.title}</strong>: {fb.comment}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RightSidebar;
  