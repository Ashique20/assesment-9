import { useLoaderData, useParams } from "react-router-dom";

const EstateDetail = () => {
    const estates = useLoaderData()
    const {detailId} = useParams()
    const estate = estates?.find(estate=>estate?.id == detailId)

    return (
        <div className="m-20 h-screen">
            <div className="card card-side bg-white shadow-xl ">
  <figure className="m-10 "><img className="rounded-xl w-96" src={estate.image} alt="Movie"/></figure>
  <div className="m-20">
    <h2 className="card-title text-2xl mb-2">{estate.estate_title}</h2>
    <h2 className="card-title  mb-2">{estate.segment_name}</h2>
    <p className=" mb-2">Price: {estate.price}</p>
    <p className="text-xl font-bold mb-2">{estate.description}</p>
    <p className=" mb-2">For {estate.status}</p>
    <p className=" mb-2">Area {estate.area}</p>
    <p className=" mb-2">{estate.location}</p>
    {estate.facilities.map(facility=><div className="flex flex-row">
        {facility}
    </div>)}
    <div className="card-actions justify-end">
      <button className="btn  bg-[#edf0f0]">Home</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EstateDetail;