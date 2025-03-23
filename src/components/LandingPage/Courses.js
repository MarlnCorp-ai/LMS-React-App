import { useState } from "react";
import courses from "../../images/LandingPage/Courses.png";
import styles from "./styles/Courses.module.css";
import courseList1 from "../../images/LandingPage/courselist1.png";
import courseList3 from "../../images/LandingPage/courselist3.png";
import courseList4 from "../../images/LandingPage/courselist4.png";
import courseList2 from "../../images/LandingPage/courselist2.png";


function Courses() {
  const [categoryChosen, setCategory] = useState("Business skills");

  const onClickHandler = ({ target }) => {
    const value = target.textContent.trim();
    setCategory(value);
  };

  const categoryClass = styles.category;
  const courseListClass = styles.courseList;
  return (
    <div className={styles.courses}>
      <div>
        <div
          className={`${categoryClass} ${
            categoryChosen === "Business skills" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Business skills
        </div>
        <div
          className={`${categoryClass} ${
            categoryChosen === "Compliance" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Compliance
        </div>
        <div
          className={`${categoryClass} ${
            categoryChosen === "Safety" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Safety
        </div>
        <div
          className={`${categoryClass} ${
            categoryChosen === "Technology" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Technology
        </div>
      </div>
      <div>
        <div>
          <img
            src={courseList1}
            alt="Course List 1"
            className={`${courseListClass} ${
              categoryChosen === "Business skills" ? "active" : ""
            }`}
          />
        </div>
        <div>
          <img
            src={courseList2}
            alt="Course List 2"
            className={`${courseListClass} ${
              categoryChosen === "Compliance" ? "active" : ""
            }`}
          />
        </div>
        <div>
          <img
            src={courseList3}
            alt="Course List 3"
            className={`${courseListClass} ${
              categoryChosen === "Safety" ? "active" : ""
            }`}
          />
        </div>
        <div>
          <img
            src={courseList4}
            alt="Course List 4"
            className={`${courseListClass} ${
              categoryChosen === "Technology" ? "active" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

function temp()
{
    return <img src={courses} alt="Courses" className={styles.image}/>;
}

export default temp;
