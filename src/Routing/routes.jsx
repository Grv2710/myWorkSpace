import Layout from "../Components/Layout";
import Home from "../Components/Home/Home";
import Demo from "../Components/Demo/Demo";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {   
        path:"/",
        element: <Layout/>,
        children : [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/demo",
                element: <Demo/>
            }
        ]
    }
])

export default router