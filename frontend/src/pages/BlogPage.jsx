import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import fakeComments from "../assets/fakeComments.json";
import { useState } from "react";

// when clicks on a comment in BlogsPage reviews, user gets redirected to this single threaded page.

// Temporary:
// End point : /blogspage



const BlogPage = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(fakeComments);
  });
  return (
    <Layout>
      <div className=" dark:bg-custom-dark-2 bg-gfg-green mx-auto w-fit sm:mx-0 sm:w-auto ">
        <div className="">
          <h1 className="text-center font-bold text-4xl py-7 text-white dark:text-white m-0">
            BLOGSPOT
          </h1>
        </div>
        <section className="container mx-auto px-4 py-8 bg-white w-auto p-0 m-0 rounded-md md:p-16">
          <div className="dark:text-black mt-6 text-lg">
            <h2 className="text-blue-950 font-bold text-2xl">username</h2>
            <div className="pl-4 mt-6">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                vero fugit nam laudantium sequi dignissimos? Repellendus a
                officiis sequi. Voluptatibus labore commodi ipsam? Dignissimos
                temporibus similique atque molestias explicabo eaque dolore
                dolorum nihil nobis, et soluta repudiandae numquam laudantium
                quos ut odio id saepe cumque autem vero voluptatem rerum porro
                sint minus. Quasi in, alias veniam, adipisci odit ratione
                nesciunt tempora hic explicabo recusandae eum dolorem optio esse
                voluptatum a.
              </p>

              <div className="text-right mt-6 flex flex-row md:flex-row justify-between">
                <span className="flex flex-row-reverse">
                  <div>
                    <button className="pl-3 pr-5 hover:scale-x-125 hover:scale-y-125">
                      <i className="fa fa-thumbs-up fa-thin dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green hover:"></i>
                    </button>
                  </div>
                  <p>Likes: 9</p>
                </span>
                <span className="flex flex-row-reverse">
                  <div>
                    <button className="pl-3 pr-5 hover:scale-x-125 hover:scale-y-125">
                      <i className="fa fa-share dark:text-gfg-dark text-gfg-green hover:text-gfg-dark dark:hover:text-gfg-green"></i>
                    </button>
                  </div>
                  <p>Share</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center font-bold text-3xl py-9 text-gfg-green  dark:text-gfg-green">
              COMMENTS :
            </h1>
            {comments.map((c) => {
              return (
                <div className="m-4">
                  <h1 className="text-blue-950 font-bold text-l mb-1">
                    {c.username}
                  </h1>
                  <p className="dark:text-black">{c.comment}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white  dark:text-white dark:bg-custom-dark-2 p-8">
            <div className="items-center justify-center p-5 dark:bg-custom-dark">
              <h1 className="text-center font-bold text-3xl pb-5 text-gfg-green">
                Add a Comment
              </h1>

              <div className="mt-3 text-center">
                <div>
                  <form>
                    <div className="flex flex-row">
                      <input
                        type="text"
                        placeholder="Comment.."
                        className="outline-none w-4/5 p-3 dark:text-black bg-custom-grey suggestion-input"
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;