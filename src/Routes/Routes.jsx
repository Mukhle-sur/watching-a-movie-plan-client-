import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import AnotherShop from "../pages/AnotherShop/AnotherShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/shops",
        element: <AnotherShop></AnotherShop>,
      },
    ],
  },
]);

export default router;
