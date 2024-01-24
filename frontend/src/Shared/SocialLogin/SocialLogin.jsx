import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
   const handleGoogleLogIn =() => {
    googleLogin()
    .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        alert('logged in')
        navigate(from, { replace: true })
    })
   }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="flex justify-center gap-5">
            <button  onClick={handleGoogleLogIn}  className="btn btn-circle btn-outline  ">
            <FcGoogle className="w-8 h-8 " />
            
            </button>
            <button className="btn btn-circle btn-outline  ">
            <BsGithub  className="w-8 h-8 " />
            </button>
            <button className="btn btn-circle btn-outline  ">
            <BsTwitter className="w-8 h-8 text-[#03A9F4] " />
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;