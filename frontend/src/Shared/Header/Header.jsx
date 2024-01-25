import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/SHOPNIL.png";
import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Search from "../Search/Search";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  
 

  const handleLogOut = () => {
    logOut()
      .then(() => {
        //deleting access token from local storage when user is logged out
        //localStorage.removeItem('auto-care-access-token')
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your have logged out",
          showConfirmButton: navigate("/"),
          timer: 2000,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to='/services'>Services</NavLink>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <NavLink to='/contactus'>Contact us</NavLink>
      </li>
      
        {user?.email ? 
          <>
            
              <li><NavLink to="/bookings">My Bookings</NavLink></li>
             <li><button onClick={handleLogOut}>Log out</button></li>
            
          </>
         : 
          
            <li><NavLink to="/login">Login</NavLink></li>
          
        }
      
    </>
  );
  return (
    <div className="navbar bg-base-100 h-20 my-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-48 h-32 mt-5" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div>{user && <p>{user.email}</p>}</div>
       
      <Search/>



      <div className="navbar-end">
        <Link>
          <button className="btn btn-outline btn-error">Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
