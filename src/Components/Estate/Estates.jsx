import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates,setStates] = useState([])
    useEffect(()=>{
        fetch('estate.json')
        .then(res => res.json())
        .then(data=>setStates(data))
    },[])
    return (
        <div >
            <div className=" lg:grid grid-cols-3 grid-cols-1 gap-10 m-10 ">
                {
                    estates.map(estate=><Estate estate={estate} key={estate.id}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;