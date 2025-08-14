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
    <div className="blog-detail">
      {post.featuredImage?.url && (
        <img src={post.featuredImage.url} alt={post.title} />
      )}
      <h1>{post.title}</h1>
      <p>By {post.author}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default BlogDetail;
