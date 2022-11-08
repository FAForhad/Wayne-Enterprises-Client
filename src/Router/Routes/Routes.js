import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Allservices from '../../Pages/Allservices/Allservices';
import Home from '../../Pages/Home/Home';
import SignIn from '../../Pages/Signin/SignIn';
import Signup from '../../Pages/SignUp/Signup';

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
                }
            ]
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