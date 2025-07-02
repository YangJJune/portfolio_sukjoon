import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CareerPage from "./pages/CareerPage.tsx";
import ExperiencePage from "./pages/ExperiencePage.tsx";
import TopBar from "./components/TopBar.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col h-screen">
        <TopBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        path: "me",
        element: <AboutMePage />,
      },
      {
        path: "career",
        element: <CareerPage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-scdream h-full">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>
);
