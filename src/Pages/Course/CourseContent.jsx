import VideoPlayer from "../../components/CoursePage/VideoPlayer";
import SideBar from "../../components/CoursePage/SideBar";
import courseOverview from "../../videos/CourseContents/CourseOverview.mp4";
import dataConcepts from "../../videos/CourseContents/EssentialDataConcepts.mp4";
import overViewPdf from "../../pdfs/CourseOverview.pdf";
import courseSummary from "../../pdfs/CourseSummary.pdf";
import jupyterNotebook from "../../pdfs/JupyterNotebook.pdf";
import pythonDS from "../../pdfs/PythonDS.pdf";
import pythonIde from "../../pdfs/PythonIDE.pdf";
import pythonPackages from "../../pdfs/PythonPackages.pdf";
import PDFViewer from "../../components/CoursePage/PDFViewer";

import { useState } from "react";

function CourseContent() {
  const [currPlayerType, setPlayerType] = useState("video");
  const [currContent, setContent] = useState(courseOverview);

  const clickHandler = (topic, type) => {
    setPlayerType(type);
    let content = type === "video" ? courseOverview : overViewPdf;
    if (type === "video") {
      if (topic === "Essential Data Concepts") {
        content = dataConcepts;
      }
    } else if (type === "pdf") {
      if (topic === "Course Summary") {
        content = courseSummary;
      } else if (topic === "Different Python IDE's") {
        content = pythonIde;
      } else if (topic === "Different Python Packages") {
        content = pythonPackages;
      } else if (topic === "Jupyter Notebook") {
        content = jupyterNotebook;
      } else if (topic === "Python Data Structures") {
        content = pythonDS;
      }
    }
    setContent(content);
  };

  return (
    <div className="w-full h-screen bg-gray-200">
      {currPlayerType === "video" && <VideoPlayer video={currContent} />}
      {currPlayerType === "pdf" && <PDFViewer file={currContent} />}
      <SideBar clickHandler={clickHandler} />
    </div>
  );
}

export default CourseContent;
