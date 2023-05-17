import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginFormPage from "../pages/LoginFormPage/LoginFormPage.js";
import RobotsPage from "../pages/RobotsPage/RobotsPage.js";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <LoginFormPage />,
      },
      {
        path: "/robots",
        element: <RobotsPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
