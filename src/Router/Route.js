import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
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
    path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1></div>
    }
]);