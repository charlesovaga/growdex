// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axiosInstance from "../../../utils/axiosInstance";
// import Footer from "../../../pages/Landing Page/HeroPage/Footer";
// import Banner from "../../../pages/Landing Page/HeroPage/Banner";
// import Nav from "../../../pages/Landing Page/HeroPage/Nav";
// import profile from "../../../../src/assets/default-avatar.svg"

// const GrowDexBlog = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axiosInstance.get("/posts/public"); //  axiosInstance already has baseURL
//         console.log("Posts API response:", res.data);

//         // handle response shape
//         const data = Array.isArray(res.data) ? res.data : res.data.posts || [];
//         setPosts(data);
//         setError(""); // clear error if successful

//       } catch (err) {
//         console.error("Error fetching posts", err);
//         setPosts([]);
//         setError(
//           err.response?.data?.error || "Failed to fetch posts. Please try again later."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p>Loading blog posts...</p>;

//   return (
//     <>
//      <Nav/>
    
//     <div className="p-6 xl:px-18">
     
//       {posts.length === 0 ? (
//   <p>No posts yet. Check back later!</p>
// ) : (
//   <>
//     {/*  Top Featured Post */}

// <div className="mb-8">
//   <Link
//     to={`/blog/${posts[0].slug}`}
//     className="block relative rounded-lg shadow-lg"
//   >
//     {/* Featured Image */}
//     <div className="w-full aspect-[3/2]">
//     {posts[0].featuredImage?.url && (
//       <img
//         src={posts[0].featuredImage.url}
//         alt={posts[0].title}
//  className="w-full h-full object-cover rounded-t-lg"
//       />
      
//     )}
//     </div>
//   </Link>

// {/* Title Card (outside + in front) */}
// <div className="relative z-10 flex justify-center -mt-8 md-mt-28">
//   <div className="px-6 sm:px-8 w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[38%] 
//                   py-10 sm:py-8 bg-white text-black rounded-xl shadow-lg text-center max-w-3xl">

//     {/* Categories + Tags */}
//     <div className="flex justify-between mb-4 flex-wrap gap-2">
//       {/* Categories */}
//       <div className="flex gap-2 flex-wrap justify-center">
//         {posts[0].categories?.map((cat) => (
//           <span
//             key={cat._id}
//             className="bg-black px-4 py-1 rounded text-sm text-white"
//           >
//             {cat.name}
//           </span>
//         ))}
//       </div>

//       {/* Tags */}
//       <div className="text-sm">
//         {posts[0].tags && posts[0].tags.length > 0 && (
//           <span>{posts[0].tags.map((tag) => tag.name).join(" · ")}</span>
//         )}
//       </div>
//     </div>

//     {/* Title */}
//     <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-relaxed">
//       {posts[0].title}
//     </h2>

//     {/* Author + Date */}
//     <div className="flex justify-between items-center text-sm text-gray-600">
//       <div className="flex items-center gap-2">
//         <img
//           src={posts[0].authorImage || profile}
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = profile;
//           }}
//           alt={posts[0].author || "Author"}
//           className="w-6 h-6 rounded-full border border-gray-300 bg-white object-cover"
//         />
//         <span>By {posts[0].author}</span>
//       </div>
//       <span>{new Date(posts[0].createdAt).toLocaleDateString()}</span>
//     </div>

//   </div>
// </div>


// </div>

   
//   </>
// )}


//       {error && (
//         <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-400">
//           {error}
//         </div>
//       )}

//       {posts.length === 0 ? (
//         <p>No posts yet. Check back later!</p>
//       ) : (
//        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Excluding the featured posts from the grid */}
//   {/* {posts.map((post) => (
//     <Link
//       key={post._id}
//       to={`/blog/${post.slug}`}
//       className="rounded p-4 shadow-xs hover:shadow-lg transition relative"
//     > */}
//     {posts.slice(1).map((post) => (
//   <Link
//     key={post._id}
//     to={`/blog/${post.slug}`}
//     className="rounded p-4 shadow-xs hover:shadow-lg transition relative"
//   >
//       {/* Featured Image */}
//       {post.featuredImage?.url && (
//         <div className="w-full aspect-[3/2]">
//           <img
//             src={post.featuredImage.url}
//             alt={post.title}
//             className="w-full h-full object-cover rounded-t-lg"
//           />
//         </div>
//       )}

//       {/* Tags + Categories */}
//       <div className="flex justify-between items-start mb-3 mt-4">
//         {/* Categories */}
//         <div className="flex gap-2 flex-wrap justify-center">
//           {post.categories?.map((cat) => (
//             <span
//               key={cat._id}
//               className="bg-gray-100 px-6 py-1 rounded text-sm text-black"
//             >
//               {cat.name}
//             </span>
//           ))}
//         </div>

//         {/* Tags */}
//         <div className="text-sm">
//           {post.tags && post.tags.length > 0 && (
//             <span>{post.tags.map((tag) => tag.name).join(" · ")}</span>
//           )}
//         </div>
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl mt-4 mb-2">{post.title}</h2>

//       {/* Author + Date */}
//       <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
//         <div className="flex items-center gap-2">
//           <img
//             src={post.authorImage || profile}
//             onError={(e) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.src = profile;
//             }}
//             alt={post.author || "Author"}
//             className="w-6 h-6 rounded-full border border-gray-300 bg-white object-cover"
//           />
//           <span>By {post.author}</span>
//         </div>
//         <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//       </div>
//     </Link>
//   ))}
// </div>

//       )}
     
//     </div>
//     <Banner/>
//     <Footer/>
//     </>
//   );
// };

// export default GrowDexBlog;


import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Footer from "../../../pages/Landing Page/HeroPage/Footer";
import Banner from "../../../pages/Landing Page/HeroPage/Banner";
import Nav from "../../../pages/Landing Page/HeroPage/Nav";
import profile from "../../../../src/assets/default-avatar.svg"
import Loader from "../../loader/Loader";

const GrowDexBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
const [gridPosts, setGridPosts] = useState([]); // posts for the grid only

const fetchPosts = async (pageNumber = 1) => {
  setLoading(true);
  try {
    const res = await axiosInstance.get(`/posts/public?page=${pageNumber}&limit=14`);
    const data = res.data.posts || [];

    if (pageNumber === 1) {
      // first page: first post is featured
      setPosts(data);

      // slice for grid and round down to multiple of 3
      const gridData = data.slice(1);
      const multipleOf3 = gridData.length - (gridData.length % 3);
      setGridPosts(gridData.slice(0, multipleOf3));
    } else {
      // append new posts, but keep multiples of 3 for grid
      const combined = [...gridPosts, ...data];
      const multipleOf3 = combined.length - (combined.length % 3);
      setGridPosts(combined.slice(0, multipleOf3));
    }

    setTotalPages(res.data.totalPages || 1);
    setError("");
    setPage(pageNumber);
  } catch (err) {
    console.error("Error fetching posts", err);
    setError(
      err.response?.data?.error || "Failed to fetch posts. Please try again later."
    );
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchPosts(1); // fetch first page on mount
  }, []);

  if (loading && posts.length === 0) return <Loader/>;

  return (
    <>
      <Nav/>
      <div className="p-6 xl:px-18">

        {posts.length === 0 ? (
          <p>No posts yet. Check back later!</p>
        ) : (
          <>
            {/* Top Featured Post */}
            <div className="mb-8">
              <Link to={`/blog/${posts[0].slug}`} className="block relative rounded-lg shadow-lg">
                <div className="w-full aspect-[3/2]">
                  {posts[0].featuredImage?.url && (
                    <img
                      src={posts[0].featuredImage.url}
                      alt={posts[0].title}
                      className="w-full h-full object-cover object-top rounded-t-lg"
                    />
                  )}
                </div>
              </Link>

              <div className="relative z-10 flex justify-center -mt-8 md-mt-28">
                <div className="px-6 sm:px-8 w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[38%] py-10 sm:py-8 bg-white text-black rounded-xl shadow-lg text-center max-w-3xl">
                  <div className="flex justify-between mb-4 flex-wrap gap-2">
                    <div className="flex gap-2 flex-wrap justify-center">
                      {posts[0].categories?.map((cat) => (
                        <span key={cat._id} className="bg-black px-4 py-1 rounded text-sm text-white">{cat.name}</span>
                      ))}
                    </div>
                    <div className="text-sm">
                      {posts[0].tags?.length > 0 && <span>{posts[0].tags.map(tag => tag.name).join(" · ")}</span>}
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-relaxed">{posts[0].title}</h2>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <img
                        src={posts[0].authorImage || profile}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = profile; }}
                        alt={posts[0].author || "Author"}
                        className="w-6 h-6 rounded-full border border-gray-300 bg-white object-cover"
                      />
                      <span>By {posts[0].author}</span>
                    </div>
                    <span>{new Date(posts[0].createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {gridPosts.map((post) => (
    <Link key={post._id} to={`/blog/${post.slug}`} className="rounded p-4 shadow-xs hover:shadow-lg transition relative">
                  {post.featuredImage?.url && (
                    <div className="w-full aspect-[3/2]">
                      <img src={post.featuredImage.url} alt={post.title} className="w-full h-full object-cover object-top rounded-t-lg" />
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-3 mt-4">
                    <div className="flex gap-2 flex-wrap justify-center">
                      {post.categories?.map((cat) => (
                        <span key={cat._id} className="bg-gray-100 px-6 py-1 rounded text-sm text-black">{cat.name}</span>
                      ))}
                    </div>
                    <div className="text-sm">
                      {post.tags?.length > 0 && <span>{post.tags.map(tag => tag.name).join(" · ")}</span>}
                    </div>
                  </div>
                  <h2 className="text-2xl mt-4 mb-2">{post.title}</h2>
                  <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorImage || profile}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = profile; }}
                        alt={post.author || "Author"}
                        className="w-6 h-6 rounded-full border border-gray-300 bg-white object-cover"
                      />
                      <span>By {post.author}</span>
                    </div>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More button */}
            {page < totalPages && (
              <div className="flex justify-center mt-6">
               <button
  onClick={() => fetchPosts(page + 1)}
  disabled={loading}
  className="px-6 py-2 bg-black text-white rounded-lg flex items-center justify-center gap-2"
>
  {loading ? (
    <span className="w-5 h-5 rounded-full animate-spin border-2 border-t-transparent border-b-transparent border-l-white border-r-blue-400"></span>
  ) : (
    "Load More"
  )}
</button>

              </div>
            )}
          </>
        )}

        {error && (
          <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-400">{error}</div>
        )}

      </div>
      <Banner/>
      <Footer/>
    </>
  );
};

export default GrowDexBlog;
