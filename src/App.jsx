import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import FavoriteBlogs from "./pages/FavoriteBlogs";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/add-blog" element={<AddBlog />} />
              <Route path="/edit-blog" element={<EditBlog />} />
              <Route path="/favorite-blogs" element={<FavoriteBlogs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
    // <h1>Hello</h1>
  );
};

export default App;
