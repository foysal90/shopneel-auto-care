import { Link } from "react-router-dom";
import logo from "../../assets/SHOPNIL.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const {logOut, user, setLoading} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(()=> {
      alert('logged out')
      setLoading(true)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
      <li>
       {
       user?.email ? <button onClick={handleLogOut}>Log out</button>
       : 
       <Link to='/login'>Login</Link>
       }
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-20 my-5">
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
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div>
        {
          user && <p>{user.email}</p>
        }
      </div>
      <div className="navbar-end">
     <Link>
     <button className="btn btn-outline btn-error">Appointment</button>
     </Link>
      </div>
    </div>
  );
};

export default Header;
