import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Home/Home";


const Route = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default Route;