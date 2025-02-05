import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = storedBlogs.find((b) => b.id === id);

    if (foundBlog) {
      foundBlog.views += 1;
      const updatedBlogs = storedBlogs.map((b) => (b.id === id ? foundBlog : b));
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setBlog(foundBlog);
    } else {
      alert("Blog not found!");
      navigate("/blogs");
    }
  }, [id, navigate]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const updatedBlogs = storedBlogs.filter((b) => b.id !== id);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  
      const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
      const updatedLikedBlogs = likedBlogs.filter((blogId) => blogId !== id);
      localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs));
  
      alert("Blog deleted successfully!");
      navigate("/blogs");
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedBlog = { ...blog, comments: [...blog.comments, newComment] };
      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const updatedBlogs = storedBlogs.map((blogItem) =>
        blogItem.id === id ? updatedBlog : blogItem
      );

      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setBlog(updatedBlog);
      setNewComment("");
    }
  };

  if (!blog) return <div className="text-center text-xl">Loading...</div>;

  return (
    <>
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 mt-2">By <strong>{blog.author}</strong> | Views: {blog.views}</p>

      <div className="mt-4 border-t pt-4" dangerouslySetInnerHTML={{ __html: blog.content }} />

      <div className="flex justify-between mt-6">
        <button 
          onClick={() => navigate(`/edit/${id}`)} 
          className="bg-gray-600 text-white px-6 py-2 rounded-md transition ease-in-out duration-200 hover:scale-110 hover:bg-black"
        >
          Edit
        </button>
        <button 
          onClick={handleDelete} 
          className="bg-gray-600 text-white px-6 py-2 rounded-md transition ease-in-out duration-200 hover:scale-110 hover:bg-black"
        >
          Delete
        </button>
      </div>
    </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center">Comments</h2>

        <div className="mt-4">
          {blog.comments.length > 0 ? (
            blog.comments.map((comment, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded-lg max-w-3xl mb-2 mx-auto">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>

        <div className="flex justify-between max-w-3xl items-center mx-auto gap-10">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="1"
            className="w-full p-2 border rounded-md mb-2 items-center"
            placeholder="Write a comment..."
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-6 h-11 rounded-md hover:bg-blue-600 "
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPage;