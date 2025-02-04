import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const sortedBlogs = storedBlogs.sort((a, b) => b.views - a.views).slice(0, 5);
    setPopularBlogs(sortedBlogs);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Caption Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to BlogSite</h1>
        <p className="text-lg text-gray-600 mt-2">Read, write, and share amazing stories!</p>
      </div>

      {/* Popular Blogs Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-5">Popular Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBlogs.length > 0 ? (
            popularBlogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
                  <p className="text-sm text-gray-600">By {blog.author}</p>
                  <p className="text-sm text-gray-500 mt-1">Views: {blog.views}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600">No blogs yet. Start by adding a new one!</p>
          )}
        </div>
      </div>

      {/* View All Blogs Button */}
      <div className="mt-8 text-center">
        <Link to="/blogs" className="bg-gray-600 text-white px-6 py-2 rounded-md transition ease-in-out duration-200 hover:scale-110 hover:bg-black">
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default Home;
