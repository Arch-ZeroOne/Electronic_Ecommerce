import { createBrowserRouter } from "react-router-dom";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/register", Component: Register },
]);

export default router;
