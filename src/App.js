import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import IndividualPricing from "./Pages/Pricing/IndividualPricing";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import OrganizationPricing from "./Pages/Pricing/OrganizationPricing";
import SkillsAssessmentPage from "./Pages/SkillsAssessmentPage";
import CourseDashboard from "./Pages/Course/CourseDashboard";
import CourseContent from "./Pages/Course/CourseContent";
import LearningPaths from "./Pages/LearningPaths";
import MCQ from "./components/Exams/MCQ";
import LabSearch from "./components/Exams/LabSearch.js";
import EthicalHacking from "./components/Exams/EthicalHacking.js";
import NetSecFund from "./components/Exams/NetSecFund.js";
import CyberCloudEnv from "./components/Exams/CyberCloudEnv.js";
import AdvPenTesting from "./components/Exams/AdvPenTesting.js";
import  RegisterPage  from "./Pages/RegisterPage.js";
import LoginPage from "./components/corporate/login.js"
import TeamDashboard from "./components/corporate/ManagerDashboard.js";
import Dashboard from "./components/corporate/Dashboard.js"
import MyCourses from "./components/corporate/MyCourse.js"
const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/individuals/pricing", element: <IndividualPricing /> },
      { path: "/businesses/pricing", element: <OrganizationPricing /> },
      {
        path: "/industries/public-sector/pricing",
        element: <OrganizationPricing />,
      },
      { path: "/skills-assessment", element: <SkillsAssessmentPage /> },
      { path: "/learning-paths", element: <LearningPaths /> },
      { path: "/skills-assessment", element: <SkillsAssessmentPage /> }, 
      { path: "/mcq", element: <MCQ /> },
      { path: "/Search", element: <LabSearch />},
      { path: "/EthicalHacking", element: <EthicalHacking />},
      { path: "/NetworkSecurityFundamentals", element: <NetSecFund />},
      { path: "/CyberCloudEnv", element: <CyberCloudEnv />},
      { path: "/AdvPenTesting", element: <AdvPenTesting />},
      { path: "/register", element: <RegisterPage />},
      { path: "/corporateLogin", element: <LoginPage />},
      { path: "/corporateManagerDashboard", element: <TeamDashboard/>}, 
      { path: "/learner", element: <Dashboard/>},   
      { path: "/myCourse", element: <MyCourses/>},   
    ],
  },
  { path: "/courses", element: <CourseDashboard /> },
  { path: "/courses/1/player", element: <CourseContent /> },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
