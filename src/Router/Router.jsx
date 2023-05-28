import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../App'
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Review from "../pages/Review/Review";
import Partners from "../pages/Parters/Partners";
import Success from "../pages/Success/Success";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/review',
                element: <Review />
            },
            {
                path: '/partners',
                element: <Partners />
            },
            {
                path: '/success-stories',
                element: <Success />
            },
        ]
    },
]);
