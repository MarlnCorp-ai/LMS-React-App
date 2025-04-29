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
import RegisterPage from "./Pages/RegisterPage";
import AboutUs from "./components/company/aboutUs";
import TeamProfile from "./components/company/TeamProfile";

import IndividualCheckout from "./Pages/Checkout/IndividualCheckout";
import Payment from "./Pages/Checkout/Payment";
import Certifications from "./Pages/Certifications";
import PythonLabPage from "./Pages/Lab/pythonLabPage";
import LabPage from "./Pages/Lab/LabPage.jsx";
import SageAIPage from "./Pages/SageAIPage";
import CoursePage from "./Pages/Course/CoursePage";
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
      { path: "/about", element: <AboutUs /> },
      { path: "/team", element: <TeamProfile /> },
      { path: "/learning-paths", element: <LearningPaths /> },
      { path: "/mcq", element: <MCQ /> },
      { path: "/Search", element: <LabSearch />},
      { path: "/EthicalHacking", element: <EthicalHacking />},
      { path: "/NetworkSecurityFundamentals", element: <NetSecFund />},
      { path: "/CyberCloudEnv", element: <CyberCloudEnv />},
      { path: "/AdvPenTesting", element: <AdvPenTesting />},
      { path: "/register", element: <RegisterPage />},
      { path: "/lab", element: <LabPage /> }
    ],
  },
  { path: "/courses", element: <CourseDashboard /> },
  { path: "/courses/1/player", element: <CourseContent /> },
  { path: "/courses/1", element: <CoursePage />},
  { path: "/buy", element: <IndividualCheckout /> },
  { path: "/payment", element: <Payment /> },
  { path: "/certifications", element: <Certifications /> },
  { path: "/lab/workspace", element: <PythonLabPage /> },
  { path: "/sage", element: <SageAIPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
