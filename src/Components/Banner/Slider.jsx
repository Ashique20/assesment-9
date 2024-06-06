import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="m-4 p-10 ">
      <Swiper 
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper rounded-2xl 	"
      >
        <SwiperSlide>
          <img
            className=" h-[700px] w-full"
            src="https://i.pinimg.com/736x/05/e5/18/05e518d8bb94194b73f840523b332996.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[700px] w-full"
            src="https://i.pinimg.com/564x/26/0b/44/260b44ad0dc268dcf0a8a32b30cea564.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[700px]"
            src="https://i.pinimg.com/564x/5a/b4/e6/5ab4e648f2f711c5f20e53f333a5d00f.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
