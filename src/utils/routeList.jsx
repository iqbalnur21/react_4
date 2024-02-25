import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import ProtectedRoute from "./ProtectedRoute";

const routeList = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <MenuDetail />
      </ProtectedRoute>
    ),
  },
];

export default routeList;
