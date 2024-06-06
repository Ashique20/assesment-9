import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { IoMdEye,IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const auth = getAuth(app);
  const { register } = useContext(AuthContext);
  const gitProvider = new GithubAuthProvider();

  const provider = new GoogleAuthProvider();

  const [hide, setHide] = useState(false);

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (passwordPattern.test(password)) {
      register(email, password)
        .then((result) => {
          toast.success("Welcome To the Personal Estate");
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          });
        })
        .catch((error) => {});
    } else {
      toast.error(
        "Must Contain an Upper case and a lower case or You must add 6 characters to create a password"
      );
    }
  };
  return (
    <div className="m-10 p-2 ">
      <div className="hero   rounded-lg">
        <div className="hero-content flex  flex lg:flex-row flex-col justify-evenly gap-40">
          <div>
            <div
              onClick={handleGoogle}
              className="cursor-pointer bg-white p-2 rounded-xl flex items-center gap-4"
            >
              <img
                className="w-8"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt=""
              />
              <p className="w-60">Sign In with Google</p>
            </div>
            <div
              onClick={handleGithub}
              className="cursor-pointer mt-8 bg-white p-2 rounded-xl flex items-center gap-4"
            >
              <img
                className="w-12"
                src="https://w7.pngwing.com/pngs/93/461/png-transparent-github-computer-icons-logo-readme-github-logo-monochrome-computer-wallpaper-thumbnail.png"
                alt=""
              />
              <p className="w-60">Sign In with GitHub</p>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body bg-[#edf0f0]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
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
                  <Link to="/login" className="label-text-alt link link-hover">
                    New here?Log in
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

export default Register;
