import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#edf0f0] relative">
            <Navbar></Navbar>
           
            <Outlet></Outlet>
            <Footer className=' bg-[#edf0f0]'></Footer>
        </div>
    );
};

export default Root;