import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";


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
            },
            {
                path:"/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default Route;