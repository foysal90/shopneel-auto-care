import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";


const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
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