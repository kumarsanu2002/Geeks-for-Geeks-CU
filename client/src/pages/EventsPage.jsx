import {useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Slider from "../components/Slider";
import Layout from "../components/layouts/Layout";
import Carousel from "../components/Carousel";
import axios from "axios";
import Event from "../assets/images/past_events.png";
import { UserContext } from "../contexts/userContext";

const EventsPage = () => {
  // Delete this data and pass the props in this page of the past events. //
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "First Offline Meet",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, tenetur! Et repellendus eveniet, dolor dolores accusantium minus ipsum in, quisquam natus quae sequi repellat? Eum quia, numquam id officiis accusamus repellat provident. Soluta cum assumenda sint rerum facilis illo laboriosam accusantium possimus odio dignissimos pariatur dolore a fuga natus, repellendus eius doloremque dolorum ipsam quae corrupti deleniti. Magni, at impedit?",
      image: Event,
    },
    {
      id: 2,
      title: "Orientation Session",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, tenetur! Et repellendus eveniet, dolor dolores accusantium minus ipsum in, quisquam natus quae sequi repellat? Eum quia, numquam id officiis accusamus repellat provident. Soluta cum assumenda sint rerum facilis illo laboriosam accusantium possimus odio dignissimos pariatur dolore a fuga natus, repellendus eius doloremque dolorum ipsam quae corrupti deleniti. Magni, at impedit?",
      image: Event,
    },
    {
      id: 3,
      title: "Example session",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, tenetur! Et repellendus eveniet, dolor dolores accusantium minus ipsum in, quisquam natus quae sequi repellat? Eum quia, numquam id officiis accusamus repellat provident. Soluta cum assumenda sint rerum facilis illo laboriosam accusantium possimus odio dignissimos pariatur dolore a fuga natus, repellendus eius doloremque dolorum ipsam quae corrupti deleniti. Magni, at impedit?",
      image: Event,
    },
  ]);



 // Suggestion part
 const[suggestion , setSuggestion] = useState("")
  const {setUser, user} = useContext(UserContext);

 const handleSubmit = (e) =>{
     e.preventDefault()

    if(!user)
    {
      alert("Please login first to submit your suggestion!")
      return;
    }

     if(!suggestion){
      alert("Can not submit blank suggestion!")  
      return;
    }

     axios.post('https://gfgcu.onrender.com/api/v1/task/new',suggestion)
     .then(result => console.log(result)) 
     .catch(err=>console.log(err))

     alert("Your suggestion has been submitted.")
 }


  return (
    <Layout>
      <div className="dark:text-slate-100 text-black h-full w-full overflow-y-auto flex flex-col">
        {/* Upcoming Events */}
        <section id="upcoming-contests" className="w-full  dark:bg-custom-dark bg-gfg-green h-2/5 p-4 flex flex-col">
          <h1 className="text-white font-bold text-2xl sm:text-3xl my-7">
            Upcoming Events
          </h1>
          <div className="slider flex m-auto w-full sm:w-1/2 h-auto relative">
            <Slider />
          </div>
        </section>

        {/* Past Events */}
        <section id="past-events" className="bg-slate-100 p-4 w-full h-4/5 flex flex-col">
          <h1  className="font-bold dark:text-black text-2xl sm:text-2xl my-3">
            Past Events
          </h1>
          <div className="flex flex-col relative justify-center">
            {events.map((event, index) => {
              const isOdd = index % 2 !== 0;

              return (
                <div
                  key={event.id}
                  className={`past-event-details bg-slate-100 flex flex-auto items-center justify-between w-full h-full rounded-xl p-4 my-2 ${
                    isOdd
                      ? "sm:flex-row-reverse flex-col-reverse"
                      : "sm:flex-row flex-col-reverse"
                  }`}
                >
                  <div className="w-full">
                    <h3 className="font-bold text-lg sm:text-xl text-custom-violet">
                      {event.title}
                    </h3>
                    <p className="text-sm sm:text-lg dark:text-black text-justify cursor-pointer">
                      {event.content}
                    </p>
                  </div>

                  <div className="slider flex m-auto w-full sm:w-1/2 h-1/2 relative">
                    <Carousel />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Suggestions */}
        <section className="relative  dark:bg-custom-dark bg-gfg-green p-4  h-4/5">
          <div className="bg-slate-100 flex flex-col items-center justify-center p-5 dark:bg-custom-black rounded-xl w-full h-full">
            <h1  className="text-slate-black dark:text-gfg-green font-bold text-xl md:text-2xl sm:text-3xl">
              Your Suggestion Matters A Lot
            </h1>
            <div className="flex my-4 flex-col">
              <p>Send your feedback regarding the events you have attended.</p>

              <form onSubmit={handleSubmit} >
                <div className="flex flex-row">
                  <input
                    type="text"
                    placeholder="Write your own suggestions here.."
                    className="outline-none w-4/5 p-3 dark:text-black bg-custom-grey suggestion-input"
                    onChange={(e)=>setSuggestion(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-1/5 sm:w-1/6 bg-gfg-green text-slate-100 font-bold suggestion-button"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EventsPage;
