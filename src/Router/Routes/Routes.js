import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../../Layouts/Error/error';
import Main from '../../Layouts/Main/Main';
import Addservices from '../../Pages/AddServices/Addservices';
import Allservices from '../../Pages/Allservices/Allservices';
import { Blogs } from '../../Pages/Blogs/Blogs';
import Detailspage from '../../Pages/DetailsPgae/Detailspage';
import Home from '../../Pages/Home/Home';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import SignIn from '../../Pages/Signin/SignIn';
import Signup from '../../Pages/SignUp/Signup';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/services',
                    element: <Allservices></Allservices>
                },
                {
                    path: '/signin',
                    element: <SignIn></SignIn>
                },
                {
                    path: 'signup',
                    element: <Signup></Signup>
                },
                {
                    path: 'services/:id',
                    element: <Detailspage></Detailspage>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/addServices',
                    element: <PrivateRoute><Addservices></Addservices></PrivateRoute>
                },
                {
                    path: '/myreviews',
                    element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
                },
                {
                    path: 'blogs',
                    element: <Blogs></Blogs>
                }
            ]
        },
        {
            path: '*',
            element: <Error></Error>
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>
            </RouterProvider>
        </div>
    );
};

export default Routes;