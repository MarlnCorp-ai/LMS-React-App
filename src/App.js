import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import IndividualPricing from "./Pages/Pricing/IndividualPricing";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import OrganizationPricing from "./Pages/Pricing/OrganizationPricing";
import SkillsAssessmentPage from "./Pages/SkillsAssessmentPage";
import CourseDashboard from "./Pages/Course/CourseDashboard";
import IndividualCheckout from "./Pages/Checkout/IndividualCheckout";
import CourseContent from "./Pages/Course/CourseContent";
const router = createBrowserRouter([
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
    ],
  },
  { path: "/courses", element: <CourseDashboard /> },
  { path: "/courses/1/player", element: <CourseContent /> },
  {
    path: "/buy",
    element: <IndividualCheckout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
