import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {sampleBlogs} from "../utils/localStorageUtils";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    // const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    // setBlogs(allBlogs);
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const sortedBlogs = storedBlogs.sort((a, b) => b.views - a.views).slice(0, 5);
    setPopularBlogs(sortedBlogs);
  }, [blogs]);

  function addSampleBlogs(){
    localStorage.setItem("blogs", JSON.stringify(sampleBlogs));
    setBlogs(sampleBlogs);
    console.log(sampleBlogs);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to ReactBlogs</h1>
        <p className="text-lg text-gray-600 mt-2">Read, write, and share amazing stories!</p>
      </div>

      {popularBlogs.length === 0 ? (
        <div className="pt-5 flex flex-col items-center">
        <p className="text-gray-600">No blogs yet.</p>
        <button
          onClick={addSampleBlogs}
          className="mt-6 bg-gray-600 text-white px-6 py-2 rounded-md transition ease-in-out duration-200 hover:scale-110 hover:bg-black"
        >
          Add Sample Blogs
        </button>
        </div>
      ): (<>
      <div>
        <h2 className="text-2xl font-semibold mb-5 text-center">Popular Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {popularBlogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition" style={{ width: '330px', height: '280px' }}>
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
                <p className="text-sm text-gray-600">By {blog.author}</p>
                <p className="text-sm text-gray-500 mt-1">Views: {blog.views}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/blogs" className="bg-gray-600 text-white px-6 py-2 rounded-md transition ease-in-out duration-200 hover:scale-110 hover:bg-black">
          View All Blogs
        </Link>
      </div>
      </>
      )}

    </div>
  );
};

export default Home;
