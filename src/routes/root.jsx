import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import Home from "../pages/home";
import Menu from "../pages/menu";
import About from "../pages/about";
import Contact from "../pages/contact";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          children: [
               { index: true, element: <Home /> },
               {
                    path: '/menu',
                    element: <Menu />,
               },
               {
                    path: '/about',
                    element: <About />,
               },
               {
                    path: '/contact',
                    element: <Contact />,
               }
          ]
     }
])

export default routes;