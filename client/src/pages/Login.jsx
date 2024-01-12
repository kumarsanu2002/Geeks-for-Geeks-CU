import Layout from "../components/layouts/Layout";
import Register from "../assets/authentication-image/Register.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const Login = () => {

  const[email , setEmail] = useState()
  const[password , setPassword] = useState()
  const navigate = useNavigate()
  const apiKey = "http://localhost:8000/api/v1";
  const {user,setUser,login} = useContext(UserContext);

  const handleSubmit = (e) =>{
     e.preventDefault()
     axios.post(`${apiKey}/users/login`,{email,password}).then(res=>{
      console.log(res);
     })   
     .catch(error => {
      // handle login error
      if (error.response.status === 400) {
         alert('Invalid login details');
      } else {
         console.log('Error:', error);
      }
     });

     setUser(true);
     login();
     navigate("/");

  }


  return (
    <Layout>
      <div className=" dark:text-slate-100 relative text-black h-full w-full overflow-y-auto p-3 flex sm:flex-row flex-col">

        <div className="left  sm:w-1/2 w-full h-screen hidden sm:flex items-center justify-end">
          <img src={Register} className="object-cover" alt="Login" />
        </div>

        <div className="right sm:w-1/2 w-full h-screen items-center flex justify-center">
          <form className="authentication w-4/5 z-10 bg-tr authentication flex p-3 flex-col glassmorphism" onSubmit={handleSubmit}>
            <h1 className="font-medium text-center text-2xl my-4">
              Login with credentials
            </h1>
            <div className="flexflex-col">
              <div className="flex flex-col my-3">
                <label className="my-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="glassmorphism-input"
                  onChange={(e) =>  setEmail(e.target.value) }
                  
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="my-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="glassmorphism-input"
                  onChange={(e) =>  setPassword(e.target.value) }

                />
              </div>
            </div>

            <div className=" p-3 flex items-center gap-2 sm:flex-row flex-col justify-between">
              <button className="bg-gfg-green my-3 text-base sm:text-lg  text-white rounded-md px-5 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2">
                Login
              </button>
              <Link to="/register" className="text-sm mx-4">
                New User?{" "}
                <span className="font-heading underline text-sm font-semibold text-blue-500">
                  Register Me
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
