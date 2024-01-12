import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import gfgLogo from "/gfg.svg";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "../../contexts/userContext";


import ThemBtn from "../ThemeBtn";
import Login from "../../pages/Login";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [auth, setAuth] = useState(false);
  const {user, setUser} = useContext(UserContext);
  const nav = useNavigate();
  const mobileview = () => {
    setOpenMenu(!openMenu);
    setToggle(!toggle);
  };

  // const handleAuth = ()=>{
  //   setAuth(!auth);
  // }

  const navLinks = [
    {
      id: 1,
      path: "/competitions",
      text: "Competitions",
    },
    {
      id: 2,
      path: "/events",
      text: "Events",
    },
    {
      id: 3,
      path: "/blogs",
      text: "Blogs",
    },
    {
      id: 4,
      path: "/about-us",
      text: "About Us",
    },
  ];


  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser(false);
    alert("Successfully logged out");
    nav("/login");
  }


  return (
    <nav className="p-3 dark:bg-custom-dark-2 bg-custom-grey shadow mf:flex mf:items-center mf:justify-between">
      <div className="flex justify-between items-center">
        <Link className="flex flex-row" to="/">
          <img src={gfgLogo} alt="GeeksforGeeks" />
          <span className="flex flex-col mx-3">
            <span className="sm:text-2xl text-sm font-bold dark:text-slate-200">
              GeeksforGeeks
            </span>
            <span className="text-gfg-green text-xs font-medium">
              Chandigarh University
            </span>
          </span>
        </Link>

        <span>
          {!openMenu ? (
            <RxHamburgerMenu
              onClick={mobileview}
              className="h-6 w-6 dark:text-white mf:hidden lg:hidden sm:block mx-4 cursor-pointer"
              name="menu"
            />
          ) : (
            <IoClose
              name="close"
              onClick={mobileview}
              className="h-6 dark:text-white w-6 mf:hidden lg:hidden sm:block mx-4 cursor-pointer"
            />
          )}
        </span>
      </div>

      <ul
        className={`mf:flex mf:items-center z=[-1] mf:z-auto ${
          !toggle ? "hidden" : ""
        } transition-all ease-in duration-500`}
      >
        {navLinks.map((links) => {
          return (
            <li className="mx-4 my-6 mf:my-0" key={links.id}>
              <NavLink
                to={links.path}
                className="text-lg font-poppins dark:text-slate-100 text-black font-semibold hover:font-bold hover:border-b-2 hover:border-black dark:hover:border-slate-200 "
              >
                {links.text}
              </NavLink>
            </li>
          );
        })}



        {!user ? (
          <Link
            to="/login"
            className="text-slate-100 bg-gfg-green p-3 rounded-md font-semibold mx-4 my-2 md:my-2"
          >
            Login/SignUp
          </Link>
        ) : (
          <button className="text-slate-100 bg-gfg-green p-3 rounded-md font-semibold mx-4 my-2 md:my-2" onClick={handleSubmit}>
            Logout
          </button>
        )}

        
         
      
        {user && (
          <Link to="/profile">
            <RiAccountCircleLine className="h-8 w-8 dark:text-gray-300 mx-4 my-2" />
          </Link>
        )}
        <div className="p-3 sm:my-0 my-2">
          <ThemBtn />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
