import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import IndividualPricing from "./Pages/IndividualPricing";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import PublicSectorPricing from "./Pages/PublicSectorPricing";
import SkillsAssessmentPage from './Pages/SkillsAssessmentPage';
import CourseDashboard from "./Pages/CourseDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/individuals/pricing", element: <IndividualPricing /> },
      { path: "/businesses/pricing", element: <PublicSectorPricing /> },
      { path: "/industries/public-sector/pricing", element: <PublicSectorPricing /> },
      { path: "/skills-assessment", element: <SkillsAssessmentPage /> }, 
      { path: "/courses", element: <CourseDashboard />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
