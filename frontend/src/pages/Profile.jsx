import { Link } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import linkedIn from "/linkedIn.png";
import twitter from "/twitter.png";
import github from "/github.png";

const profiileDetails = {
  name: "Rohit Kumar",
  userName: "Rohit1345",
  email: "rohitkumar4567@gmail.com",
  contact: "9876543212",
  uidMemberId: "21BCS1345",
  role: "Event Coordintor",
  languageUsed: "C++",
  year: "2nd Year",
  branch: "CSE",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  skills: [
    "C++",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "MongoDB",
  ],
  achievements: [
    "3 star coder on CodeChef",
    "3 star coder on Codeforces",
    "5 star coder on HackerRank",
    "5 star coder on HackerEarth",
    "5 star coder on LeetCode",
    "5 star coder on GeeksforGeeks",
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rohitkumar4567/",
    },
    {
      name: "GitHub",
      link: "https://www.github.com/in/rohitkumar4567/",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com/in/rohitkumar4567/",
    },
  ],
  codingScore: "1905",
  contestHistory: [
    "Beat the Challenge",
    "Achieve the star",
    "Ace the rank",
    "Weekly contest 1",
  ],
  codingStreak: "🔥3",
};

const Div = ({ value, label, onChange }) => (
  <div className="flex justify-center flex-col my-3 mx-4">
    <p className="mb-3 font-semibold font-serif">{label}</p>
    <input
      type="text"
      onChange={onChange}
      spellCheck="false"
      value={value}
      className="glassmorphism-input"
    />
  </div>
);

const Profile = () => {


  
  const onChange = () => {};
  return (
    <Layout>
      <div className="flex items-center justify-center h-full p-3">
        <div className="flex mf:flex-row flex-col gap-10">
          <div className="left-part relative p-4 sm:w-3/5 md:w-full mf:w-2/5 flex flex-col items-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="Profile-Img"
              className="h-40 w-40 border-2 border-gfg-green p-2 rounded-full aspect-[3/2] object-cover"
            />
            <h3 className="mt-4 font-semibold text-lg">
              {profiileDetails.userName}
            </h3>
            <h3 className="font-semibold">
              Streak: {profiileDetails.codingStreak}
            </h3>
            <h3 className="font-semibold">
              Coding Score: {profiileDetails.codingScore}
            </h3>
            <div className="border-b-2 border-custom-dark flex items-center justify-center">
              <p className="flex items-center my-4 sm:text-base text-sm">
                <Link target="blank" to={profiileDetails.socialLinks[0].link}>
                  <img
                    src={linkedIn}
                    className="sm:h-8 sm:w-8 h-5 w-5 mx-1 "
                    alt="linkedIn"
                  />
                </Link>
              </p>
              <p className="flex items-center my-4 sm:text-base text-sm">
                <Link target="blank" to={profiileDetails.socialLinks[1].link}>
                  <img
                    src={github}
                    alt="linkedIn"
                    className="sm:h-8 sm:w-8 h-5 w-5 mx-1 "
                  />
                </Link>
              </p>
              <p className="flex items-center my-4 sm:text-base text-sm">
                <Link target="blank" to={profiileDetails.socialLinks[2].link}>
                  <img
                    src={twitter}
                    alt="linkedIn"
                    className="sm:h-8 sm:w-8 h-5 w-5 mx-1"
                  />
                </Link>
              </p>
            </div>

            <div className=" w-full mt-3">
              <p className=" text-center font-bold text-sans font-poppins mb-3">
                Achievements
              </p>
              <div className="flex items-center justify-center">
                <ul>
                  {profiileDetails.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/profile/edit-profile" className="sm:w-3/5 w-full">
              <h3 className="bg-custom-dark dark:bg-custom-dark-2 text-white px-4 py-2 rounded-lg my-4 text-center">
                Edit Profile
              </h3>
            </Link>
          </div>

           


          <div className="right-part w-full sm:p-10 p-2">
            <h1 className="font-bold text-3xl mb-4 font-montserrat">
              Profile Details
            </h1>
            <form className="border-2 border-gfg-green dark:border-gray-500 rounded-lg sm:px-10 px-3 py-5 ">
              <div className="grid mf:grid-cols-3 grid-cols-1 ">
                <Div
                  value={profiileDetails.name}
                  id={"name"}
                  label={"Name"}
                  onChange={onChange}
                />
                <Div
                  value={profiileDetails.uidMemberId}
                  id={"uidMemberId"}
                  label={"Uid/Member Id"}
                  onChange={onChange}
                />
                <Div
                  value={profiileDetails.contact}
                  id={"contact"}
                  label={"Contact"}
                  onChange={onChange}
                />
                <Div
                  value={profiileDetails.email}
                  id={"email"}
                  label={"Email"}
                  onChange={onChange}
                />
                <Div
                  value={profiileDetails.languageUsed}
                  id={"languageUsed"}
                  label={"Language Used"}
                  onChange={onChange}
                />
                <Div
                  value={profiileDetails.role}
                  id={"role"}
                  label={"Role in GFG Community"}
                  onChange={onChange}
                />
                <Div
                  value={profiileDetails.branch + " " + profiileDetails.year}
                  id={"branch"}
                  label={"Branch & Year"}
                  onChange={onChange}
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profiileDetails.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gfg-green text-white rounded-full px-3 py-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center flex-col my-3">
                <p className="mb-3 font-semibold font-serif">Description</p>
                <p className="glassmorphism-input">
                  {profiileDetails.description}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Contest History</h3>
                <div className="flex flex-wrap gap-2">
                  {profiileDetails.contestHistory.map((contest, index) => (
                    <div
                      key={index}
                      className="bg-gfg-green text-white rounded-full px-3 py-1"
                    >
                      {contest}
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
