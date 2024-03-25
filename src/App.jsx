import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <RouterError />,
  },
  {
    path: "projects",
    element: <ProjectsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
