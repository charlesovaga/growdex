import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Pencil, Trash2, Share2, Eye, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Loader from "../../loader/Loader";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [sharePostId, setSharePostId] = useState(null);
const shareMenuRef = useRef(null);

    const [pagination, setPagination] = useState({
      total: 0,
      page: 1,
      totalPages: 1,
      limit: 10,
    });
    
    const [message, setMessage] = useState({ text: "", type: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [deleteId, setDeleteId] = useState(null);
    const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPosts(1, 10, search);
  }, [search]);

  const fetchPosts = async (page = 1, limit = 10, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(
        `/posts?page=${page}&limit=${limit}&search=${searchQuery}`
      );
      setPosts(res.data.posts || []);
      setPagination({
        total: res.data.total,
        page: res.data.page,
        totalPages: res.data.totalPages,
        limit,
      });
    } catch (err) {
      console.error("Error fetching posts:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/admin/${deleteId}`);
      setPosts(posts.filter((p) => p._id !== deleteId));
      setDeleteId(null);
      setMessage({ text: "Post deleted successfully!", type: "success" });
    } catch (err) {
      console.error("Error deleting post:", err);
      setMessage({ text: "Failed to delete post.", type: "error" });
    }
  
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
        setSharePostId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleCopy = async (post) => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/blog/${post.slug}`
      );
      setSharePostId(null);
      setMessage({ text: " Link copied successfully!", type: "success" });
    } catch (err) {
      setMessage({ text: "Failed to copy link.", type: "error" });
    }

    // Auto hide after 3s
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const handleShareClick = (url) => {
    window.open(url, "_blank");
    setSharePostId(null); // close menu after click
  };
  

  return (
    <div className="">
      {message.text && (
        <div
          className={`mb-4 px-4 py-2 rounded-md text-sm font-medium ${
            message.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message.text}
        </div>
      )}
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
  {/* Left side - Search */}
  <div className="relative w-1/3">
    <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-[70%] pl-9 bg-gray-50 pr-3 p-1 border rounded-full focus:outline-none "
    />
  </div>

  {/* Right side - Pagination + Archive + Add New */}
  <div className="flex items-center text-sm gap-6">
    {/* Pagination Info */}
    <div>
      {(pagination.page - 1) * pagination.limit + 1} -{" "}
      {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
      {pagination.total}
    </div>

    {/* Pagination Arrows + Archive */}
    <div className="flex items-center gap-3">
      <button
        disabled={pagination.page === 1}
        onClick={() => fetchPosts(pagination.page - 1, pagination.limit)}
        className="rounded disabled:opacity-50"
      >
        <span className="material-icons text-sm">chevron_left</span>
      </button>

      <button
        disabled={pagination.page === pagination.totalPages}
        onClick={() => fetchPosts(pagination.page + 1, pagination.limit)}
        className="rounded disabled:opacity-50"
      >
        <span className="material-icons text-base">chevron_right</span>
      </button>

      <button className="text-black hover:underline text-sm">Archive</button>
    </div>

    {/* Add New */}
    <Link
      to="/admin/posts/new"
      className="bg-yellow-400 text-white px-5 py-1 rounded-full font-medium shadow hover:bg-yellow-500 transition"
      >
      Add New
    </Link>
  </div>
</div>



      {/* Table */}
      {loading ? (
  
 <div className="flex justify-center items-center h-[60vh]">
    <Loader /> {/* Or your spinning circle */}
  </div>
 
) : (!posts || posts.length === 0) ? (
  <p className="text-gray-500 text-center py-10">No posts available.</p>
) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-600 text-sm">
  <tr>
    <th className="px-4 py-3 font-medium">
      <div className="flex items-center space-x-6">
        <input type="checkbox" />
        <span>Author</span>
      </div>
    </th>
    <th className="px-4 py-3 font-medium">Post Title</th>
    <td className="px-4 py-3 flex justify-end space-x-3"> Actions </td>

  </tr>
</thead>



            <tbody className="text-sm divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-50">

     {/* Author + Checkbox in same cell */}
     {/* <td className="flex items-center space-x-1 p-1 px-4">
        <input type="checkbox" value={post._id} className="mr-2" />
        <img
          src={
            post.featuredImage?.url ||
            post.image ||
            "/src/assets/default-avatar.svg"
          }
          alt={post.title}
          className="w-9 h-9 rounded-full border"
        />
        <div className="ml-2">
          <p className="font-medium">{post.author}</p>
          <span className="text-gray-500 text-sm">
            {post.author === "Joy Amuche" ? "Admin" : "Contributor"}
          </span>
        </div>
      </td> */}

<td className="p-1 px-4">
  <div className="flex items-center">
    {/* Checkbox */}
    <input
      type="checkbox"
      value={post._id}
      className="mr-5" //  custom spacing
    />

    {/* Avatar + Author */}
    <div className="flex items-center">
      <img
        src={
          post.featuredImage?.url ||
          post.image ||
          "/src/assets/default-avatar.svg"
        }
        alt={post.title}
        className="w-9 h-9 rounded-full border border-gray-300"
      />
      <div className="ml-2">
        <p className="font-medium">{post.author}</p>
        <span className="text-gray-500 text-xs">
          {post.author === "Joy Amuche" ? "Admin" : "Contributor"}
        </span>
      </div>
    </div>
  </div>
</td>

                  {/* Post Title */}
                  <td className="px-4 py-3 text-xs text-gray-700">{post.title}</td>

                  {/* Actions */}
                  <td className="px-2 py-2 flex justify-end space-x-2">
                  <button
  onClick={() => navigate (`/admin/posts/edit/${post._id}`)}
  className="p-1 mt-2  text-gray-600 hover:text-black"
>
  <Pencil size={16} />
</button>
<button
  onClick={() => setDeleteId(post._id)}
  className="p-1 mt-2 text-black "
>
  <Trash2 size={16} />
</button>


                  {/* Share button with dropdown */}
<div className="relative">
  <button
    onClick={() =>
      setSharePostId(sharePostId === post._id ? null : post._id)
    }
    className="p-1 mt-2 text-gray-600 hover:text-black"
  >
    <Share2 size={16} />
  </button>

  {sharePostId === post._id && (
    <div
      ref={shareMenuRef}
      className="absolute right-0 mt-2 bg-white border rounded shadow-md p-2 z-10 w-44"
    >
      <button
        onClick={() => handleCopy(post)}
        className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
      >
        📋 Copy Link
      </button>
      <button
        onClick={() =>
          handleShareClick(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.origin + "/blog/" + post.slug
            )}&text=${encodeURIComponent(post.title)}`
          )
        }
        className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
      >
        🐦 Share on Twitter
      </button>
      <button
        onClick={() =>
          handleShareClick(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              window.location.origin + "/blog/" + post.slug
            )}`
          )
        }
        className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
      >
        📘 Share on Facebook
      </button>
      <button
        onClick={() =>
          handleShareClick(
            `https://wa.me/?text=${encodeURIComponent(
              post.title +
                " " +
                window.location.origin +
                "/blog/" +
                post.slug
            )}`
          )
        }
        className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
      >
        💬 Share on WhatsApp
      </button>
      <button
        onClick={() =>
          handleShareClick(
            `mailto:?subject=${encodeURIComponent(
              post.title
            )}&body=${encodeURIComponent(
              window.location.origin + "/blog/" + post.slug
            )}`
          )
        }
        className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
      >
        📧 Share via Email
      </button>
    </div>
  )}
</div>

                    <button
  onClick={() => navigate(`/blog/${post.slug}`)}
  className="bg-gray-100  hover:bg-gray-200 px-4  rounded-full text-[10px] flex items-center space-x-1"
>

  <span>View</span>
</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

{deleteId && (
        <div className="absolute inset-0 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-[40%] p-6 border border-gray-200 text-center relative">
            <button
              onClick={() => setDeleteId(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h2 className="text-md font-semibold mb-3">
              Are you sure you want to delete this post?
            </h2>
            <p className="text-gray-500 mb-5">This action cannot be undone.</p>
            <div className="flex justify-center gap-2 mb-12 mt-6">
              <button
                onClick={() => setDeleteId(null)}
                className="px-12 py-2 text-sm border border-gray-200 bg-gray-50 rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-12 text-sm py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsPage;
