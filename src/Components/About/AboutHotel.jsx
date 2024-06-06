import Aos from "aos";
import { useEffect } from "react";

const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div>
        <h1 className="text-4xl text-center">About</h1>
     <div  data-aos="zoom-in-up" className="flex justify-evenly lg:flex-row flex-col gap-20 m-20 items-center">
  
        <img className="w-[200%]"
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-hotel-illustration-3d-png-image_10247636.png"
          alt=""
        />

      <div >
        <h1 className="text-5xl mb-10">Types of hospitality real estate</h1>
        <p className="text-lg">
          Hotels: Hotels are temporary lodging establishments that come in a
          range of sizes and offer different services. Some major types of
          hotels include boutique hotels, luxury hotels, business-class hotels,
          and large hotel chains. Their value can be affected by location and
          market
        </p>
      </div>
     </div>
     <div data-aos='fade-up-left' className="flex justify-evenly lg:flex-row flex-col m-20 items-center">
  
      <div className="m-20">
        <h1 className="text-6xl mb-10">Personal Island</h1>
        <p className="text-lg">
          Hotels: Hotels are temporary lodging establishments that come in a
          range of sizes and offer different services. Some major types of
          hotels include boutique hotels, luxury hotels, business-class hotels,
          and large hotel chains. Their value can be affected by location and
          market
        </p>
      </div>
      <img className="w-96"
          src="https://img.discountmags.com/https%3A%2F%2Fimg.discountmags.com%2Fproducts%2Fextras%2F437460-wanderlust-cover-2021-may-1-issue.jpg%3Fbg%3DFFF%26fit%3Dscale%26h%3D1019%26mark%3DaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2pzcy1hc3NldHMvaW1hZ2VzL2RpZ2l0YWwtZnJhbWUtdjIzLnBuZw%253D%253D%26markpad%3D-40%26pad%3D40%26w%3D775%26s%3Db00a451044e056d9a330549b5fc84561?auto=format%2Ccompress&cs=strip&h=1018&w=774&s=65924884121a98793d072a2d168d8128"
          alt=""
        />
     </div>
    </div>
  );
};

export default About;
