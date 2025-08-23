import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Nav from "../../../pages/Landing Page/HeroPage/Nav";
import Banner from "../../../pages/Landing Page/HeroPage/Banner";
import Footer from "../../../pages/Landing Page/HeroPage/Footer";
import Loader from "../../loader/Loader";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);


  
  useEffect(() => {
    const trackView = async () => {
      try {
        await axiosInstance.post("http://localhost:5000/api/track/pageview", {
          page: `/blog/${slug}`,
          deviceType: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "web",
        });
      } catch (err) {
        console.error("Error tracking view", err);
      }
    };
    trackView();
  }, [slug]);
  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axiosInstance.get(`http://localhost:5000/api/posts/${slug}`);

        console.log("API response for single post:", res.data);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };
    
    fetchPost();
    
  }, [slug]);
  

  if (!post) return <Loader/>;

  return (
    <>
    <Nav/>
    <div className="blog-detail p-6 max-w-4xl mx-auto">
  {/* Categories and Tags */}
  <div className="flex justify-between mb-2 flex-wrap gap-2">
    <div className="flex gap-2 flex-wrap">
      {post.categories?.map((cat) => (
        <span
          key={cat._id}
          className="bg-black px-4 py-1 rounded-md text-sm text-white"
        >
          {cat.name}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-1 items-center">
  {post.tags?.map((tag, index) => (
    <React.Fragment key={tag._id}>
      <span className="px-2 py-1 text-sm ">{tag.name}</span>
      {index !== post.tags.length - 1 && (
        <span className="text-gray-500 font-bold self-center">•</span>
      )}
    </React.Fragment>
  ))}
</div>



  </div>

  {/* Title */}
  <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

  {/* Author & Date */}
  <p className="text-gray-600 mb-4 flex items-center gap-2">
    <span className="material-icons text-gray-400">person</span>
    {post.author} | {new Date(post.createdAt).toLocaleDateString()}
  </p>

  {/* Featured Image */}
  
  <div className="w-full aspect-[3/2] mb-4">
  {post.featuredImage?.url && (
    <img
      src={post.featuredImage.url}
      alt={post.title}
      className="w-full h-full object-cover object-top rounded"
    />
  )}
</div>



  {/* Post Body */}
  <div
    dangerouslySetInnerHTML={{ __html: post.body }}
    className="prose mb-4 text-justify md:text-justify"
    style={{ textAlign: 'justify' }}
  />
</div>

    <Banner/>
    <Footer/>
    </>
  );
};

export default BlogDetail;
