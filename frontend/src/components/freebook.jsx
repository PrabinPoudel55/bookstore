import React from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cards from "./Cards";
import list from "../assets/list.json";


function Freebook() {
    const filterData= list.filter((data) => data.category ==="Free");

    
  return(
  <>
  <div className="max-w-screen-2xl container md:mx-auto px-20">
    <div><h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
    <p>
        Whether you’re looking for a quick escape or a deep dive into a new subject, we have something for every reader.
    </p>
    </div>
  
  <div>
  <Swiper
   
  spaceBetween={20}
  slidesPerView={3}
  breakpoints={{
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  
{filterData.map((item) => (

  <SwiperSlide key={item.id}>

    <Cards item={item} />

  </SwiperSlide>

))}

    
  </Swiper>
</div>
  </div>
  </>
  );
}

export default Freebook;
