import { Link } from "react-router-dom";
import { gsap } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP

import Layout from "../components/layouts/Layout";
import "../css-files/HomePage.css";

import fb from "../assets/icons/facebook.svg";
import insta from "../assets/icons/instagram.svg";
import linkedIn from "../assets/icons/linkedin.svg";
import gmail from "../assets/icons/envelop.svg";
import qr from "../assets/events-img/event-img-1.jpg";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import axios from "axios";


gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch the blogs from the api
    axios.get("http://localhost:8000/api/v1/blog/all")
      .then(response => {
         // JSON data from the backend
         // Update the blogs state with the fetched data
         setBlogs(response.data.all)
      })
      .catch(error => {
        console.error(error); // Handle any errors
      });

      axios.get("http://localhost:8000/api/v1/users/all")
      .then(response => {
         // JSON data from the backend
         // Update the users state with the fetched data
          // console.log(response.data.users);
         setUsers(response.data.users)
      })
      .catch(error => {
        console.error(error); // Handle any errors
      });
  }, []);

  return (

    <Layout>
    
      <div className="homePage bg-custom-grey dark:bg-custom-dark">
        {/* Upcoming Events */}
        <section
          id="upcoming-contests"
          className="w-full  dark:bg-custom-dark bg-gfg-green h-2/5 p-4 flex flex-col"
        >
          <h1 className="text-white font-bold text-2xl sm:text-3xl my-7">
            Upcoming Events
          </h1>
          <div className="slider flex m-auto w-full sm:w-1/2 h-auto relative">
            <Slider />
          </div>
        </section>

        {/* Blogs Section */}
        <section className="text-center px-2 py-5 md:text-left md:p-[30px] dark:bg-white text-black ">
          <h1 className="font-bold text-2xl sm:text-3xl my-7">Blog Spot</h1>
          

          {/* Blogs */}
          <div className="text-left my-5 flex flex-col gap-5 dark:text-black">
            {blogs.map((blog) => {
              const user = users.find((user) => user.id === blog.username);
              const userName = user ? user.name : "Unknown User";
              return (
                <div
                  key={blog.id}
                  id={blog.id}
                  className="px-2 py-2 bg-white rounded-md shadow-sm md:p-5 dark:bg-custom-grey"
                >
                  <h2 className="text-[darkBlue] font-semibold text-base">
                    {userName}
                  </h2>
                  <p className="px-4 text-sm">{blog.description}</p>
                </div>
              );
            })}
          </div>
          {/* Write Blog */}
          <div className="flex items-center justify-center dark:text-black">
            <Link
              to="/blogs"
              className="bg-gfg-green hover:bg-custom-dark dark:bg-custom-dark hover:dark:bg-gfg-green w-fit py-2 px-6 rounded-lg text-white font-[500] text-base tracking-widest"
            >
              See More
            </Link>
          </div>
        </section>

        {/* Vacancies Section */}
        <section className="text-center px-2 py-5 bg-gfg-green md:text-left md:p-[30px] dark:bg-custom-dark my-5">
          <h1 className="text-xl text-center font-semibold md:font-bold mb-5 capitalize ">
            Vacancies for the core team
          </h1>
          {/* Roles */}
          <div className="vacancy">
            <div className="text-left px-4">
              <div>
                <img src="" alt="" />
              </div>

              <div>
                <h2 className="text-[18px] font-semibold sm:font-bold">
                  Applicable Roles
                </h2>
                <div className="flex flex-col py-2 px-5 text-base capitalize md:gap-5">
                  <h3 className=" cursor-pointer font-semibold">Code Rusher</h3>
                  <h3 className="cursor-pointer font-semibold">
                    Event Manager
                  </h3>
                  <h3 className="cursor-pointer font-semibold">
                    Content Writer{" "}
                  </h3>
                </div>
              </div>
            </div>
            {/* For Joining */}
            <div className="text-left px-4 mt-4 md:mt-0">
              <h2 className="font-semibold sm:font-bold text-[18px] capitalize md:font-semibold">
                To join as a member scan QR below
              </h2>
              <div className="my-4  relative w-[100px] h-[100px] mx-auto">
                <img className="object-cover w-full h-full" src={qr} alt="" />
              </div>
            </div>
          </div>
          <a
            className="resume text-sm font-bold tracking-widest md:w-full md:block md:text-center md:hover:tracking-[5px]"
            href="#"
          >
            Share your resume at....
          </a>
        </section>
        {/* Social Handles */}
        <section className="text-center px-2 py-5 md:p-[30px] dark:bg-custom-dark-2">
          <h1 className="capitalize text-xl font-semibold mb-5 ">Contact Us</h1>
          <div className="flex items-center justify-center gap-5 py-2 ">
            <a
              href=""
              className="hover:bg-white  py-2 px-2 rounded-full  icons   dark:shadow-lg"
            >
              <img
                className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] "
                src={fb}
                alt=""
              />
            </a>
            <a
              href=""
              className="hover:bg-white  py-2 px-2 rounded-full  icons  dark:shadow-lg"
            >
              <img
                className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] "
                src={gmail}
                alt=""
              />
            </a>
            <a
              href=""
              className="hover:bg-white  py-2 px-2 rounded-full  icons  dark:shadow-lg"
            >
              <img
                className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] "
                src={linkedIn}
                alt=""
              />
            </a>
            <a
              href=""
              className="hover:bg-white  py-2 px-2 rounded-full icons  dark:shadow-lg "
            >
              <img
                className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] "
                src={insta}
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
