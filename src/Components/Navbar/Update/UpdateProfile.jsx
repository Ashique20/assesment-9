import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const auth = getAuth();
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState(user?.displayName);
  const [url, setUrl] = useState(user?.photoURL);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUserName(user?.displayName);
        setUrl(user?.photoURL);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div>
        <div className="avatar p-8">
          <div className="lg:w-80 w-40  rounded-full lg:ml-96">
            {user ? (
              <img src={user?.photoURL} />
            ) : (
              <img src="https://cdn4.iconfinder.com/data/icons/political-elections/50/46-512.png" />
            )}
          </div>
        </div>
        <div>
          <div className="border-black border-xl">
            <h1 className=" text-3xl">Name:{userName}</h1>
            <h1 className=" mt-4 text-3xl">Email:{user?.email}</h1>

            <h1 className=" mt-4 text-2xl font-bold">Photo Url: {url}</h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl ml-20 font-bold mt-10">Update:</h1>
        <form
          onSubmit={handleUpdate}
          className="hero hero-content card-body bg-[#edf0f0]"
        >
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

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
