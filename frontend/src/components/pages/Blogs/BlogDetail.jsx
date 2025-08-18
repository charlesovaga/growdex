import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="blog-detail p-6">
      {post.featuredImage?.url && (
        <img src={post.featuredImage.url} alt={post.title} className="w-full h-64 object-cover rounded mb-4"/>
      )}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">By {post.author} | {new Date(post.createdAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body }} className="prose mb-4" />
      <div className="flex gap-2 flex-wrap">
        {post.tags?.map((tag, i) => (
          <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
