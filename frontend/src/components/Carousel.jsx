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

const Carousel = () => {
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
          className="py-1 border-2 h-3/2 w-3/2 border-slate-100 rounded-lg px-1"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  className="object-contain w-full h-full sm:w-1/2 sm:h-1/2 rounded-md" // Adjust the image size
                  src={image}
                  alt={`slide-${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl m-10">
            Sorry! Images are not available of this event. 
          </h1>
        </div>
      )}
    </>
  );
};

export default Carousel;
