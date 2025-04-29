import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import IndividualPricing from "./Pages/Pricing/IndividualPricing";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import OrganizationPricing from "./Pages/Pricing/OrganizationPricing";
import SkillsAssessmentPage from "./Pages/SkillsAssessmentPage";
import CourseDashboard from "./Pages/Course/CourseDashboard";
import Business from "./Pages/Course/Business"; 
import Data from "./Pages/Course/Data"; 
import GenAI from "./Pages/Course/GenAI"; 
import SoftwareDev from "./Pages/Course/SoftwareDev";
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
import PrivateRoute from "./components/common/PrivateRoute";
import LoginPage from "./Pages/LoginPage";
import AdminDashboardPage from "./components/corporate/AdminDashboard.js"
import CorporateLoginPage from "./components/corporate/login.js"
import TeamDashboard from "./components/corporate/ManagerDashboard.js";
import Dashboard from "./components/corporate/Dashboard.js"
import MyCourses from "./components/corporate/MyCourse.js"

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "individuals/pricing", element: <IndividualPricing /> },
      { path: "businesses/pricing", element: <OrganizationPricing /> },
      {
        path: "industries/public-sector/pricing",
        element: <OrganizationPricing />,
      },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "about", element: <AboutUs /> },
      { path: "team", element: <TeamProfile /> },
      { path: "/corporateLogin", element: <CorporateLoginPage />},
      
      { path: "/corporateManagerDashboard", element: <TeamDashboard/>}, 
      { path: "/learner", element: <Dashboard/>},   
      { path: "/myCourse", element: <MyCourses/>},
      { path: "/AdminDashboard", element: <AdminDashboardPage/>},

      {
        element: <PrivateRoute />,
        children: [
          { path: "skills-assessment", element: <SkillsAssessmentPage /> },
          { path: "learning-paths", element: <LearningPaths /> },
          { path: "Search", element: <LabSearch /> },
          { path: "lab", element: <LabPage /> },
        ],
      },
    ],
  },

  { path: "/buy", element: <IndividualCheckout /> },
  { path: "/payment", element: <Payment /> },
  {
    element: <PrivateRoute />,
    children: [
      { path: "/courses", element: <CourseDashboard /> },
      { path: "/courses/1/player", element: <CourseContent /> },
      { path: "/courses/1", element: <CoursePage /> },
      { path: "/certifications", element: <Certifications /> },
      { path: "/lab/workspace", element: <PythonLabPage /> },
      { path: "/sage", element: <SageAIPage /> },
      { path: "mcq", element: <MCQ /> },
      { path: "EthicalHacking", element: <EthicalHacking /> },
      { path: "NetworkSecurityFundamentals", element: <NetSecFund /> },
      { path: "CyberCloudEnv", element: <CyberCloudEnv /> },
      { path: "AdvPenTesting", element: <AdvPenTesting /> },
      { path: "/business", element: <Business /> },
      { path: "/data", element: <Data /> },
      { path: "/genai", element: <GenAI /> },
      { path: "/softwaredev", element: <SoftwareDev /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;