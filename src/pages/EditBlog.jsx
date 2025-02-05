import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = storedBlogs.find((b) => b.id === id);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      alert("Blog not found!");
      navigate("/blogs");
    }
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const updatedBlog = { ...blog };
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = storedBlogs.map((b) => (b.id === id ? updatedBlog : b));
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    alert("Blog updated successfully!");
    navigate(`/blogs/${id}`);
  };

  if (!blog) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Title Input */}
        <input
          type="text"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />

        {/* Author Input */}
        <input
          type="text"
          value={blog.author}
          onChange={(e) => setBlog({ ...blog, author: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />

        {/* Image Input */}
        <input
          type="text"
          value={blog.image}
          onChange={(e) => setBlog({ ...blog, image: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />

        {/* Content Editor */}
        <ReactQuill
          value={blog.content}
          onChange={(content) => setBlog({ ...blog, content })}
          className="bg-white"
          theme="snow"
        />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
