
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";


const Estate = ({ estate }) => {
    const navigate = useNavigate()
    const detail=()=>{
      navigate(`/detail/${estate.id}`)
    }
    
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div>
    
    <div data-aos="zoom-in-up" className="card  bottom-[200px] z-10  bg-white  mt-4  hover:shadow-2xl">
        <figure className="px-10 pt-10">
          <img
            src={estate.image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{estate.estate_title}</h2>
          <h2 className="card-title">{estate.segment_name}</h2>
          <p>{estate.description}</p>
          <p>{estate.area}</p>
          <p>{estate.price}</p>
          <div className="card-actions">
            <button onClick={detail}  className="btn bg-[#db9e77]">Buy Now</button>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Estate;
