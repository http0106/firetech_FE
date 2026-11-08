import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../users/Home';
import Apps from '../App';
import Introduct from '../users/Introduct';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Apps />,
        children: [
            { index: true, element: <Home /> },
            // { path: 'dashboard', element: <Dashboard /> },'
            { path: 'introduction', element: <Introduct /> },
        ],
    },
]);

