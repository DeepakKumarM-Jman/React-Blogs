import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FavoriteBlogs = () => {
  const [likedBlogs, setLikedBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];

    const filteredBlogs = blogs.filter((blog) => likedBlogs.includes(blog.id));
    setLikedBlogs(filteredBlogs);
  }, [])

  function handleUnlike(blogId){
    const newBlogs = likedBlogs.filter((blog)=>blogId!==blog.id);
    setLikedBlogs(newBlogs);

    const likedBlogIds = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    const updatedBlogIds = likedBlogIds.filter((id)=>blogId!==id)
    localStorage.setItem("likedBlogs", JSON.stringify(updatedBlogIds))
  }

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Favorite Blogs</h2>

      {likedBlogs.length === 0 ? (
        <p className="text-gray-500">No favorite blogs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedBlogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg p-4">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-3" />
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600">By {blog.author} | Views: {blog.views}</p>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="bg-gray-600 text-white px-6 py-2 rounded-md transition ease-in-out duration-200 hover:scale-110 hover:bg-black"
                >
                  View
                </button>
                <button 
                  onClick={() => handleUnlike(blog.id)}
                  className="bg-gray-600 text-white px-6 py-2 rounded-md transition ease-in-out duration-200 hover:scale-110 hover:bg-black"
                >
                  Unlike
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteBlogs