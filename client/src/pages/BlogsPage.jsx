import Layout from "../components/layouts/Layout";
// fake data for now, later fetch it from the data base
import Blogs from "../assets/fakedb.json";
import { useEffect } from "react";
import { useState } from "react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // fetch the blogs from the api
    setBlogs(Blogs);
  });

 
  // console.log(blogs);
  return (
    // Layout has pre-defined margins 
    <Layout>
      <div className="dark:bg-custom-dark-2 overflow-y-auto overflow-x-hidden bg-gfg-green p-0 m-0">
        {/* Blog Spot  */}
        <div className="">
          <h1 className="text-center font-bold text-4xl py-7 text-white dark:text-white m-0">
            BLOGSPOT
          </h1>
        </div>

        <section className="container mx-auto px-4 py-8 rounded-md bg-white w-auto p-0 m-0">
          <h1 className="text-center font-bold text-2xl text-gfg-green">
            Read What People Write About US
          </h1>

          <ul className="p-2 pt-8 dark:text-black">
            {/* only limited reviews */}
            {blogs.slice(0, 3).map((user) => (
              <li key={user.username}>
                <ul key={user.username}>
                  {user.blogs.map((blog) => (
                    <li
                      key={blog.username}
                      className="bg-custom-grey border p-4 m-4 rounded"
                    >
                      <h2 className="text-blue-950 font-bold text-l">
                        {user.username}
                      </h2>
                      <div className="pl-4">
                        <p>{blog.text}</p>

                        <div className="text-right mt-6 flex flex-col md:flex-row">
                          <span className="flex flex-row-reverse">
                            <div>
                              <button className="pl-5 pr-5">
                                <i className="fa fa-thumbs-up fa-thin dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green hover:"></i>
                              </button>
                            </div>
                            <p>Likes: {blog.likes}</p>
                          </span>
                          <span className="flex flex-row-reverse">
                            <div>
                              <button className="pl-5 pr-5">
                                <i className="fa fa-comment dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green"></i>
                              </button>
                            </div>
                            <p>Comments: {blog.comments}</p>
                          </span>
                          <span className="flex flex-row-reverse">
                            <div>
                              <button className="pl-5 pr-5">
                                <i className="fa fa-share dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green"></i>
                              </button>
                            </div>
                            <p>Share</p>
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="text-center sm:text-right px-4">
            <button className="text-black hover:text-white hover:bg-gfg-green border-2 border-green-800 rounded-md p-3">
              Load more...
            </button>
          </div>
        </section>

        {/* Pre fotter */}
        <section className="relative  dark:bg-custom-dark bg-gfg-green p-4  h-4/5">
          <div className="bg-white rounded-md  dark:text-white dark:bg-custom-dark-2 p-8">
            <div className="items-center justify-center p-5 dark:bg-custom-dark">
              <h1 className="text-center font-bold text-3xl pb-5">
                Want to share your own experience?
              </h1>

              <div className="mt-3 text-center">
                <h2 className="mb-3">Write your review and post it on our community page!</h2>
                <form className="flex flex-row items-center justify-center relative">
                  {/* bug in input, when the screen size is below 640px it overflows */}
                <input
                  type="text"
                  placeholder={"Write your review here:"}
                  className={`dark:text-black rounded p-1 w-96 outline outline-green-700 dark:outline-none mr-1 `}
                  
                />
                  <button className="bg-gfg-green text-white hover:bg-custom-dark dark:bg-custom-dark-2 dark:text-white w-13 px-4 rounded h-8 dark:hover:bg-gfg-green dark:hover:text-black font-bold hover: transf">
                    POST
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogsPage;