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
import LoginPage from "./Pages/LoginPage";
import IndividualCheckout from "./Pages/Checkout/IndividualCheckout";
import Payment from "./Pages/Checkout/Payment";
import Certifications from "./Pages/Certifications";
import PythonLabPage from "./Pages/Lab/pythonLabPage";
import LabPage from "./Pages/Lab/LabPage.jsx";
import SageAIPage from "./Pages/SageAIPage";
import CoursePage from "./Pages/Course/CoursePage";
import PrivateRoute from "./components/common/PrivateRoute";
import CorporateLoginPage from "./components/corporate/login.js";
import TeamDashboard from "./components/corporate/ManagerDashboard.js";
import Dashboard from "./components/corporate/Dashboard.js";
import MyCourses from "./components/corporate/MyCourse.js";
import AdminDashboardPage from "./components/corporate/AdminDashboard.js";
import CourseAdmin from "./components/corporate/CourseAdmin.js";
import AdminReportCard from "./components/corporate/ReportPage.js";
import AdminCertificatePage from "./components/corporate/AdminCertificatePage.js";
import AdminMasterSettingsPage from "./components/corporate/AdminSettings.js";
import CertificationPath from "./Pages/CertificationPath.jsx";
import EditorPage from "./Pages/Lab/EditorPage.js";
import CloudComputing from "./components/Exams/CloudComputing.jsx";
import SoftwareEngineering from "./components/Exams/SoftwareEngineering.jsx";
import SoftwareDevelopment from "./components/Exams/SoftwareDevelopment.jsx";
import SoftwareDelivery from "./components/Exams/SoftwareDelivery.jsx";
import SoftwareSecurity from "./components/Exams/SoftwareSecurity.jsx";
import PythonTest from "./components/Exams/Python.jsx";
import DataEngineering from "./components/Exams/DataEngineering.jsx";
import GenerativeAI from "./components/Exams/GenerativeAI.jsx";

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
      { path: "/corporateLogin", element: <CorporateLoginPage /> },
      { path: "/setting", element: <AdminMasterSettingsPage /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: "skills-assessment", element: <SkillsAssessmentPage /> },
          { path: "Search", element: <LabSearch /> },
          { path: "/dashboards/manager", element: <TeamDashboard /> },
          { path: "/dashboards/learner", element: <Dashboard /> },
          { path: "/dashboards/learner/myCourse", element: <MyCourses /> },
          { path: "/dashboards/admin", element: <AdminDashboardPage /> },
          { path: "/coursesAdmin", element: <CourseAdmin /> },
          { path: "/report", element: <AdminReportCard /> },
          { path: "/certificate", element: <AdminCertificatePage /> },
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
      { path: "/certifications/1/path", element: <CertificationPath /> },
      { path: "lab", element: <LabPage /> },
      { path: "learning-paths", element: <LearningPaths /> },
      { path: "/lab/workspace", element: <PythonLabPage /> },
      { path: "/editor", element: <EditorPage /> },
      { path: "/sage", element: <SageAIPage /> },
      { path: "mcq", element: <MCQ /> },
      { path: "EthicalHacking", element: <EthicalHacking /> },
      { path: "NetworkSecurityFundamentals", element: <NetSecFund /> },
      { path: "/tests/cloud-computing", element: <CloudComputing /> },
      { path: "/tests/software-engineering", element: <SoftwareEngineering /> },
      { path: "/tests/software-development", element: <SoftwareDevelopment /> },
      { path: "/tests/software-delivery", element: <SoftwareDelivery /> },
      { path: "/tests/software-security", element: <SoftwareSecurity /> },
      { path: "/tests/python", element: <PythonTest /> },
      { path: "/tests/data-engineering", element: <DataEngineering /> },
      { path: "/tests/generative-ai", element: <GenerativeAI /> },
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
