import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../css-files/Slider.css";

import slide1 from "../assets/images/slide_image1.jpg";
import slide2 from "../assets/images/slide_image2.jpg";
import slide3 from "../assets/images/slide_image3.jpg";
import slide4 from "../assets/images/slide_image4.jpg";
import slide5 from "../assets/images/slide_image5.jpg";
import slide6 from "../assets/images/slide_image1.jpg";
import slide7 from "../assets/images/slide_image2.jpg";
import slide8 from "../assets/images/slide_image3.jpg";
import slide9 from "../assets/images/slide_image4.jpg";

const Slider2 = () => {
  SwiperCore.use([Autoplay]);
  const images = [
    // slide1,
    // slide2,
    // slide3,
    // slide4,
    // slide5,
    // slide6,
    // slide7,
    // slide8,
    // slide9,
    {
      id: 1,
      title: "Event -1 ",
      image: slide1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 2,
      title: "Event -2 ",
      image: slide2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 3,
      title: "Event -3 ",
      image: slide3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 4,
      title: "Event -4 ",
      image: slide4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 5,
      title: "Event -5 ",
      image: slide5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 6,
      title: "Event -6 ",
      image: slide6,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 7,
      title: "Event -7 ",
      image: slide7,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 8,
      title: "Event -8 ",
      image: slide8,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
    {
      id: 9,
      title: "Event -9 ",
      image: slide9,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta erat mauris, a suscipit felis scelerisque sed. Vivamus diam orci.",
    },
  ];

  const registerNow = () => {
    // alert("You have registered for this event.")
    console.log("you clicked");
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
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          scrollbar={{ draggable: true }}
          className="py-3 border-2 border-slate-100 rounded-lg px-3"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="eventSlide" key={image.id}>
                <img
                  onClick={registerNow}
                  className="object-contain aspect-[3/2] rounded-lg "
                  src={image.image}
                />
                <div className=" eventSlide__desc text-center bg-custom-grey py-2 px-4 text-base font-semibold rounded-md   md:absolute md:top-0 md:left-0 md:inset-0 md:bg-[rgba(223,214,214,0.5)] md:rounded-lg md:text-white md:backdrop-blur-[2px] md:p-8 md:flex md:justify-evenly md:items-center md:flex-col mt-2">
                  <h3 className="md:text-2xl dark:text-black md:font-medium font-bold"> {image.title}</h3>
                  <p className="hidden md:block md:text-xl">{image.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl">No Upcoming Events</h1>
        </div>
      )}
    </>
  );
};

export default Slider2;
