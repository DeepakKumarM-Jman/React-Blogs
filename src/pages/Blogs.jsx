import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [likedBlogs, setLikedBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);

    const storedLikes = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    setLikedBlogs(storedLikes);
  }, []);

  const toggleLike = (id) => {
    let updatedLikes = [...likedBlogs];

    if (updatedLikes.includes(id)) {
      updatedLikes = updatedLikes.filter((blogId) => blogId !== id);
    } else {
      updatedLikes.push(id);
    }

    setLikedBlogs(updatedLikes);
    localStorage.setItem("likedBlogs", JSON.stringify(updatedLikes));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Link to={`/blog/${blog.id}`} className="block">
                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-500">By {blog.author}</p>
                  <p className="text-sm text-gray-600 mt-1">Views: {blog.views}</p>
                </div>
              </Link>
              <button
                onClick={() => toggleLike(blog.id)}
                className={`w-full py-2 ${likedBlogs.includes(blog.id) ? "bg-red-300 text-white" : "bg-gray-200 text-gray-600"} hover:opacity-80`}
              >
                {likedBlogs.includes(blog.id) ? "Liked ❤️" : "Like 🤍"}
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No blogs found. Add a new blog to get started!</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
