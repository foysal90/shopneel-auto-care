import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import CheckOut from "../Shared/CheckOut/CheckOut";


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
                    path:'/login',
                    element: <Login/>
                },
                {
                    path:'/register',
                    element: <Register/>
                },
              
                {
                    path: '/serviceDetails/:id',
                    element:<ServiceDetails/>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/checkout/:id',
                    element:<CheckOut/>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                },
               
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