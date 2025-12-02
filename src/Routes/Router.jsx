import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../Pages/ErrorPage";
import ToyDetails from "../Pages/ToyDetails";
import UpComingToys from "../Components/UpComingToys";
import NewArrival from "../Pages/NewArrival";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import ForgotPassword from "../Pages/ForgotPassword";
import AllToys from "../Pages/AllToys";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";


const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/login",
                Component:LoginPage
            },
            {
                path:"/register",
                Component:RegisterPage
            },
            {
                path:"/profile",
                element: <PrivateRoutes> <MyProfile/> </PrivateRoutes>
            },
            {
                path:"/upcoming-toys",
                element: <NewArrival/> 
            },
            {
                path:"/about-us",
                Component:AboutUs
            },
            {
                path:"/contact-us",
                Component:ContactUs
            },
            {
                path:"/all-toys",
                Component:AllToys
            },
            {
                path:"/reset-password",
                Component:ForgotPassword
            },
            {
                path:'/toy-detail/:id',
                element:  <ToyDetails/> 
            }
        ]
    },
    {
        path:"*",
        Component: ErrorPage
    }
])

export default router;