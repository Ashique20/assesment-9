import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
import { IoMdEye,IoMdEyeOff } from "react-icons/io";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


const Login = () => {

  const auth = getAuth(app)
  const location = useLocation()
  const navigate = useNavigate()
  const [hide, setHide] = useState(false);

  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const {login} = useContext(AuthContext)
  const handleGithub =()=>{
    signInWithPopup(auth, gitProvider)
     .then((result) => {
     console.log(result.user)
     navigate(location?.state?location.state:'/')

      
     }).catch((error) => {
       console.error(error)
     })
   }

  const handleGoogle =()=>{
    signInWithPopup(auth, provider)
     .then((result) => {
     console.log(result.user)
     navigate(location?.state?location.state:'/')

      
     }).catch((error) => {
       console.error(error)
     })
   }
  
  const handleLogIn=(e)=>{
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email,password)
    .then((result) => {
      
      toast('Succecssfully Logged In')
      navigate(location?.state?location.state:'/')

      console.log(result.user);
    })
    .catch((error) => {
      toast.warning(error.message)
      console.error(error.message)
    });
   
  
 
  }
  return (
    <div className="m-10 p-2 ">

      <div className="hero selection:rounded-lg">
        <div className="hero-content flex lg:flex-row flex-col gap-40 justify-evenly">
      <div>
      <div onClick={handleGoogle} className="cursor-pointer bg-white p-2 rounded-xl flex  items-center gap-4">
              <img
                className="w-8"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt=""
              />
              <p className="w-60">Sign In with Google</p>
            </div>
            <div onClick={handleGithub} className="cursor-pointer mt-8 bg-white p-2 rounded-xl flex items-center gap-4">
              <img
                className="w-12"
                src="https://w7.pngwing.com/pngs/93/461/png-transparent-github-computer-icons-logo-readme-github-logo-monochrome-computer-wallpaper-thumbnail.png"
                alt=""
              />
              <p className="w-60">Sign In with GitHub</p>
            </div>
      </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex ">
            <form onSubmit={handleLogIn} className="card-body bg-[#edf0f0]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name='email'
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={hide ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="cursor-pointer absolute left-40 top-4"
                    onClick={() => setHide(!hide)}
                  >
                   {hide? <IoMdEye />:<IoMdEyeOff />
}
                  </span>
                </div>
                <label className="label">
                  <Link to="/register" className="label-text-alt link link-hover">
                    New here?Sign Up
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    
  );
};

export default Login;
