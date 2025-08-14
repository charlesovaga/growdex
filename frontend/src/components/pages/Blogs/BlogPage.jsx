import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/posts", { params: { sortBy: "newest" } });
      setPosts(res.data.posts);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    const listener = () => fetchPosts();
    window.addEventListener("postsUpdated", listener);
    return () => window.removeEventListener("postsUpdated", listener);
  }, []);
  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">GrowDex Blog</h1>

      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="border rounded p-4 shadow hover:shadow-lg transition">
              {post.featuredImage && (
                <img
                  src={post.featuredImage.url || post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">By {post.author} | {new Date(post.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-800 mb-2">{post.body.slice(0, 150)}...</p>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
