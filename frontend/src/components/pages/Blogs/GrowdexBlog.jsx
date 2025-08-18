// components/GrowDexBlog.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GrowDexBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts/public"); // public posts
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts", err);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading blog posts...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">GrowDex Blog</h1>

      {posts.length === 0 ? (
        <p>No posts yet. Check back later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="border rounded p-4 shadow hover:shadow-lg transition"
            >
              {post.featuredImage?.url && (
                <img
                  src={post.featuredImage.url}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">
                By {post.author} | {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-800 mb-2">{post.body.slice(0, 150)}...</p>
              <div className="flex gap-2 flex-wrap">
                {post.tags?.map((tag, i) => (
                  <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GrowDexBlog;
