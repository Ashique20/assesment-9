import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

} from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      console.log(currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);




  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const register = (email, password) => {
    setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
   
  };

  const login = (email, password) => {
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
     
  };

  const shared = { register, login, user, logOut,loading };

  return <AuthContext.Provider value={shared}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
