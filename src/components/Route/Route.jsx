import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";


const Route = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },

            {
                path:"/donation",
                element: <Donation></Donation>
            }
        ]
    }
])

export default Route;