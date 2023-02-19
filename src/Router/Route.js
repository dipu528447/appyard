import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import MobileApplicationService from "../pages/MobileApplicaitonService/MobileApplicationService";
import Page5 from "../pages/page5/Page5";
import Page6 from "../pages/page6/Page6";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
    {
    path: "/Contact",
    element: <Page6/>,
    },
    {
        path: "/trackProject",
        element: <Page5/>,
    },
    {
        path: "/mobileApplication",
        element: <MobileApplicationService/>,
    },
    {
    path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1></div>
    }
]);