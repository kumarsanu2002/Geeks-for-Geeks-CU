import Members from "../components/Members";
import Layout from "../components/layouts/Layout";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const AboutUs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const membersData = [
    {
      id: 1,
      imageurl: "src/assets/images/dl.jpg",
      name: "Himanshu Sharma",
      role: "Code Rusher",
    },
    {
      id: 2,
      imageurl: "src/assets/images/dl.jpg",
      name: "Piyush Singh",
      role: "Code Rusher",
    },
    {
      id: 3,
      imageurl: "src/assets/images/dl.jpg",
      name: "Shrestha Sengupta",
      role: "Code Rusher",
    },
    {
      id: 4,
      imageurl: "src/assets/images/dl.jpg",
      name: "Varun Verma",
      role: "Code Rusher",
    },
  ];


  const member = membersData.map((item) => (
    <Members
      key={item.id}
      name={item.name}
      url={item.imageurl}
      role={item.role}
    />
  ));


  return (
    <Layout>
      <div className="py-5 px-2 md:py-10 ">
        <h1 className="text-2xl font-bold text-center md:mb-5">About Us</h1>
        {/* mission vision etcetra */}
        <div className="flex flex-col gap-5  py-5 md:grid md:grid-cols-2  md:py-5 md:px-10 md:my-10  md:gap-10 ">
          <div className="bg-gfg-green  dark:bg-custom-grey dark:text-black py-4 px-2 rounded-lg">
            <h1 className="text-xl text-center font-bold mb-4">Mission</h1>
            <p className="text-base text-center md:mb-5 md:px-2 md:text-justify">
              The main mission of this Student Chapter of GeeksForGeeks is to
              bring to you all a personalised interface where you all can join
              and communicate and compete with all others of your own college.
            </p>
          </div>

          <div className="bg-gfg-green  dark:bg-custom-grey dark:text-black py-4 px-2 rounded-lg">
            <h1 className="text-xl text-center font-bold mb-4">Vision</h1>
            <p className="text-base text-center md:mb-5 md:px-2 md:text-justify">
              Empower and inspire through accessible knowledge and community.
              Our vision is to create a digital space that fosters learning,
              collaboration, and positive change.
            </p>
          </div>
          <div className="bg-gfg-green dark:bg-custom-grey dark:text-black py-4 px-2 rounded-lg">
            <h1 className="text-xl text-center font-bold mb-4">Goal</h1>
            <p className="text-base text-center md:mb-5 md:px-2 md:text-justify">
              The goal of our website is to provide users with valuable
              information, engaging content, and a seamless user experience that
              meets their needs and fosters meaningful connections.
            </p>
          </div>
          <div className="bg-gfg-green  dark:bg-custom-grey dark:text-black py-4 px-2 rounded-lg">
            <h1 className="text-xl text-center font-bold mb-4">History</h1>
            <p className="text-base text-center md:mb-5 md:px-2 md:text-justify">
              GeeksforGeeks, founded in 2008, emerged as a trusted online
              learning platform. It empowers geeks worldwide with comprehensive
              computer science resources, tutorials, and coding challenges.
            </p>
          </div>
        </div>
        {/* ends here  */}

        {/* Members  */}
        <div>
          <div className="relative bg-custom-grey rounded-lg py-5 dark:bg-custom-grey-2 md:py-10">
            <h1 className="text-2xl font-bold text-black text-center mb-5">Core Team</h1>
            <Carousel className="text-black font-medium" responsive={responsive}>{member}</Carousel>
          </div>
          {/* Faculty */}
          <div className="relative bg-custom-grey rounded-lg py-5 my-5 dark:bg-custom-grey-2">
            <h1 className="text-2xl font-bold text-center text-black mb-5">Faculty</h1>
            <Carousel className="text-black font-medium" responsive={responsive}>{member}</Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
