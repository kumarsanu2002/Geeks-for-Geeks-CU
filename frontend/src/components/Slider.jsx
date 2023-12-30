import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../assets/images/slide_image1.jpg";
import slide2 from "../assets/images/slide_image2.jpg";
import slide3 from "../assets/images/slide_image3.jpg";
import slide4 from "../assets/images/slide_image4.jpg";
import slide5 from "../assets/images/slide_image5.jpg";
import slide6 from "../assets/images/slide_image6.jpg";
import slide7 from "../assets/images/slide_image7.jpg";
import slide8 from "../assets/images/slide_image8.jpg";
import slide9 from "../assets/images/slide_image9.jpg";

const Slider = () => {
  SwiperCore.use([Autoplay]);
  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
  ];
  const registerNow = ()=>{
    alert("You have registered for this event.")
  };

  return (
    <>
      {images.length > 0 ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={60}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
          }}
          scrollbar={{ draggable: true }}
          className="py-3 border-2 border-slate-100 rounded-lg px-3"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={registerNow}
                className="object-contain aspect-[3/2] rounded-lg"
                src={image}
                alt={`slide-${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl m-10">Sorry! No Upcoming Events this time</h1>
        </div>
      )}
    </>
  );
};

export default Slider;
