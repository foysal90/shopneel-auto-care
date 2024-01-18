import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";


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
                },
                {
                    path: '/serviceDetails/:id',
                    element:<ServiceDetails/>
                    // loader: ({params}) => fetch(`services.json/${params.id}`)
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