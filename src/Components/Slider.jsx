import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import heroOne from "../assets/hero-1.png";
import heroTwo from "../assets/hero-2.png";
import heroThree from "../assets/hero-3.png";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          {" "}
          <div className="max-h-[450px] w-full overflow-hidden px-12">
            <img src={heroOne} alt="" className="w-full h-full object-cover" />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="max-h-[450px] w-full overflow-hidden px-12">
            <img src={heroTwo} alt="" className="w-full h-full object-cover" />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="max-h-[450px] w-full overflow-hidden px-12">
            <img
              src={heroThree}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
