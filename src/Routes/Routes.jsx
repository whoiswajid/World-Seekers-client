import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import TourDetails from "../Pages/TourDetails/TourDetails";
import Blogs from "../Pages/ExtraPages/Blogs";
import AboutUs from "../Pages/AboutUs";
import Community from "../Pages/ExtraPages/Community";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../LayOut/DashBoard/DashboardLayout";
import AddPackage from "../Pages/Dashboards/Admin/AddPackage";
import ManageUser from "../Pages/Dashboards/Admin/ManageUsers";
import Tours from "../components/Tours/Tours";

import AdminRoute from "./AdminRoute";
import Bookings from "../Pages/TourDetails/Bookings";
import Profile from "../Pages/Dashboards/Profile";
import GuideProfile from "../components/TourGuide/GuideProfile";
import HomeTabs from "../Pages/Tabs/HomeTabs";
import AssignedTours from "../Pages/Dashboards/Guide/AssignedTours";
import GuideRoute from "./GuideRoute";
import TouristRoute from "./TouristRoute";
import UserProfile from "../Pages/Dashboards/User/UserProfile";
import MyBookings from "../Pages/Dashboards/User/MyBookings";
import WishList from "../Pages/Dashboards/User/WishList";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/tours',
        element: <PrivateRoute><Tours></Tours></PrivateRoute>
      },
      {
        path: '/tour/:id',
        element: <PrivateRoute><TourDetails></TourDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://world-seeker-server.vercel.app/tours/${params.id}`)
      },
      {
        path: '/bookings/:id',
        element: <Bookings></Bookings>,
        loader: ({ params }) => fetch(`https://world-seeker-server.vercel.app/tours/${params.id}`),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/tabs',
        element: <HomeTabs></HomeTabs>
      },
      {
        path: '/community',
        element: <Community></Community>
      },
      {
        path: '/GuideProfile/:id',
        element: <GuideProfile></GuideProfile>,
        loader: ({ params }) => fetch(`https://world-seeker-server.vercel.app/guides/${params.id}`)
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
          {
            path: 'add-package',
            element: <PrivateRoute><AdminRoute><AddPackage></AddPackage></AdminRoute></PrivateRoute>
          },
          {
            path: 'manage-users',
            element: <PrivateRoute><AdminRoute><ManageUser></ManageUser></AdminRoute></PrivateRoute>
          },
          {
            path: 'profile',
            element: <PrivateRoute> <Profile></Profile></PrivateRoute>
          },
          {
            path: 'assigned-tours',
            element: <PrivateRoute><GuideRoute><AssignedTours></AssignedTours></GuideRoute></PrivateRoute>
          },
          {
            path : 'user-profile',
            element: <PrivateRoute><TouristRoute><UserProfile></UserProfile></TouristRoute></PrivateRoute>
          },
          {
            path : 'my-bookings',
            element: <PrivateRoute><TouristRoute><MyBookings></MyBookings></TouristRoute></PrivateRoute>
          },
          {
            path: 'wish-list',
            element: <PrivateRoute><TouristRoute><WishList></WishList></TouristRoute></PrivateRoute>
          }
        ]
      },
    ]
  },
]);