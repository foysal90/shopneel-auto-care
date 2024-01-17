import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";


const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path:'/about',
                    element: <About/>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default Routes;