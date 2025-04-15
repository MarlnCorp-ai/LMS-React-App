import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import IndividualPricing from "./Pages/IndividualPricing";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import BusinessPricing from "./Pages/BusinessPricing";
import PublicSectorPricing from "./Pages/PublicSectorPricing";
import SkillsAssessmentPage from './Pages/SkillsAssessmentPage';
import UniversityTab from './Pages/UniversityTab';
import CourseDetail from './Pages/CourseDetail';
import CourseModules from './Pages/CourseDetailsFolder/CourseDetailsModule'
import CourseHome from "./Pages/CourseDetailsFolder/CourseDetailsHome";
import CourseAnnouncements from "./Pages/CourseDetailsFolder/CourseDetailsAnnouncements"
import CourseZoom from './Pages/CourseDetailsFolder/CourseDetailsZoom'
import CourseAttendance from "./Pages/CourseDetailsFolder/CourseDetailsAttendance";
import CourseAssignments from "./Pages/CourseDetailsFolder/CourseDetailsAssignments";
import CourseQuizzes from "./Pages/CourseDetailsFolder/CourseDetailsQuizzes";
import CourseDetailsDiscussions from "./Pages/CourseDetailsFolder/CourseDetailsDiscussions";
import CourseDetailsPeople from "./Pages/CourseDetailsFolder/CourseDetailsPeople";
import CourseDetailsDigitalMaterial from "./Pages/CourseDetailsFolder/CourseDetailsDigitalMaterials";
import CourseDetailsAEFISTools from "./Pages/CourseDetailsFolder/CourseDetailsAEFIS";
import CourseDetailsSurvey from "./Pages/CourseDetailsFolder/CourseDetailsSurvey";
import CourseDetailsLibraryResources from "./Pages/CourseDetailsFolder/CourseDetailsLibrary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/individuals/pricing", element: <IndividualPricing /> },
      { path: "/businesses/pricing", element: <BusinessPricing /> },
      { path: "/industries/public-sector/pricing", element: <PublicSectorPricing /> },
      { path: "/skills-assessment", element: <SkillsAssessmentPage /> }, 
      
    ],
  },
      { path: "/my-university", element: <UniversityTab/>},
      { path: "/courses/:courseId", element: <CourseDetail />,
        children: [
          {path: "home", element: <CourseHome />,  // this becomes /courses/:courseId/home 
          },
          {path: "modules", element: <CourseModules />,  // this becomes /courses/:courseId/modules 
          },
          { path: "announcements", element: <CourseAnnouncements /> },  // this becomes /courses/:courseId/announcements 
          { path: "zoom", element: <CourseZoom /> },  // this becomes /courses/:courseId/zoom 
          { path: "attendance", element: <CourseAttendance /> },  // this becomes /courses/:courseId/attendance  CourseAssignments
          { path: "assignment", element: <CourseAssignments /> },  // this becomes /courses/:courseId/assignment  CourseAssignments
          { path: "quizzes", element: <CourseQuizzes /> },  // this becomes /courses/:courseId/assignment  CourseAssignments
          { path: "discussions", element: <CourseDetailsDiscussions /> },  // this becomes /courses/:courseId/discussions  CourseAssignments
          { path: "people", element: <CourseDetailsPeople /> },  // this becomes /courses/:courseId/discussions  CourseAssignments
          { path: "digital", element: <CourseDetailsDigitalMaterial /> },  // this becomes /courses/:courseId/discussions  CourseAssignments
          { path: "aefistools", element: <CourseDetailsAEFISTools /> },  // this becomes /courses/:courseId/discussions  CourseAssignments
          { path: "survey", element: <CourseDetailsSurvey /> },  // this becomes /courses/:courseId/discussions  CourseAssignments
          { path: "library", element: <CourseDetailsLibraryResources /> },  // this becomes /courses/:courseId/discussions  CourseAssignments
        ],
       },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
