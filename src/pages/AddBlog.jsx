import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: uuidv4(),
      title,
      author,
      image,
      content,
      views: 0,
      comments: [],
    };

    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    storedBlogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(storedBlogs));

    alert("Blog added successfully!");
    navigate("/blogs");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />

        <ReactQuill
          value={content}
          onChange={setContent}
          className="bg-white field-sizing-content"
          theme="snow"
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
