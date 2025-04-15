
const CourseCards = () => {
    const courses = [
      { code: "CS 583-A", title: "Deep Learning", bg: "bg-red-600" },
      { code: "CS 584-A", title: "Natural Language Processing", bg: "bg-green-700" },
      { code: "Fall 2024", title: "Academic Integrity", bg: "bg-pink-600" }
    ];
  
    return (
      <div className="grid grid-cols-3 gap-4 mt-4">
        {courses.map((course, i) => (
          <div key={i} className={`${course.bg} text-white rounded-md h-28 p-4`}>
            <h3 className="font-bold">{course.title}</h3>
            <p className="text-sm">{course.code}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CourseCards;
  