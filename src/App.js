import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import IndividualPricing from "./Pages/IndividualPricing";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import BusinessPricing from "./Pages/BusinessPricing";
import PublicSectorPricing from "./Pages/PublicSectorPricing";
import SkillsAssessmentPage from './Pages/SkillsAssessmentPage';
import MCQ from "./components/Exams/MCQ";
import LabSearch from "./components/Exams/LabSearch.js";
import EthicalHacking from "./components/Exams/EthicalHacking.js";
import NetSecFund from "./components/Exams/NetSecFund.js";
import CyberCloudEnv from "./components/Exams/CyberCloudEnv.js";
import AdvPenTesting from "./components/Exams/AdvPenTesting.js";

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
      { path: "/mcq", element: <MCQ /> },
      { path: "/Search", element: <LabSearch />},
      { path: "/EthicalHacking", element: <EthicalHacking />},
      { path: "/NetworkSecurityFundamentals", element: <NetSecFund />},
      { path: "/CyberCloudEnv", element: <CyberCloudEnv />},
      { path: "/AdvPenTesting", element: <AdvPenTesting />

      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
