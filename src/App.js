import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import IndividualPricing from "./Pages/IndividualPricing";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import BusinessPricing from "./Pages/BusinessPricing";
import PublicSectorPricing from "./Pages/PublicSectorPricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/individuals/pricing", element: <IndividualPricing /> },
      {path:"/businesses/pricing", element: <BusinessPricing />},
      {path:"/industries/public-sector/pricing", element: <PublicSectorPricing />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
