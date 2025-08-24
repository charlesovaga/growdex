// import React, { useState, useEffect } from "react";
// import axios from "axios";


// //  Set base URL for Axios
// // Change the port to match your backend
// axios.defaults.baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:5000"
//     : "https://your-production-backend.com";

// const AdminPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [search, setSearch] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState(search); //  Debounced search
//   const [sortBy, setSortBy] = useState("newest");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editingPost, setEditingPost] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     body: "",
//     tags: "",
//     slug: "",
//     featuredImage: null,
//     images: [],
//   });
//   const [previewFeatured, setPreviewFeatured] = useState(null);
//   const [previewImages, setPreviewImages] = useState([]);

//   //  Debounce effect for search
//   useEffect(() => {
//     const handler = setTimeout(() => setDebouncedSearch(search), 500);
//     return () => clearTimeout(handler);
//   }, [search]);

//   // Fetch posts
//   const fetchPosts = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("/api/posts", {
//         params: { page, limit, search: debouncedSearch, sortBy },
//       });
//       setPosts(res.data.posts);
//       setTotalPages(res.data.totalPages);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [page, debouncedSearch, sortBy]);

//   // Handle input change
//   const handleChange = (e) => {
//     if (e.target.name === "featuredImage") {
//       setFormData({ ...formData, featuredImage: e.target.files[0] });
//       setPreviewFeatured(URL.createObjectURL(e.target.files[0]));
//     } else if (e.target.name === "images") {
//       const files = Array.from(e.target.files);
//       setFormData({ ...formData, images: files });
//       setPreviewImages(files.map((f) => URL.createObjectURL(f)));
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   // Open modal for edit
//   const openEditModal = (post) => {
//     setEditingPost(post);
//     setFormData({
//       title: post.title,
//       author: post.author,
//       body: post.body,
//       tags: post.tags.join(","),
//       slug: post.slug,
//       featuredImage: null,
//       images: [],
//     });
//     setPreviewFeatured(post.featuredImage?.url || null);
//     setPreviewImages(post.images?.map((img) => img.url) || []);
//     setModalOpen(true);
//   };

//   // Submit form (create or update)
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = new FormData();
// //     data.append("title", formData.title);
// //     data.append("author", formData.author);
// //     data.append("body", formData.body);
// //     data.append("tags", formData.tags);
// //     data.append("slug", formData.slug);
// //     if (formData.featuredImage) data.append("featuredImage", formData.featuredImage);
// //     formData.images.forEach((img) => data.append("images", img));

// //     try {
// //       if (editingPost) {
// //         await axios.put(`/api/posts/${editingPost.slug}`, data);
// //       } else {
// //         await axios.post("/api/posts", data);
// //       }
// //       fetchPosts();
// //       setModalOpen(false);
// //       setEditingPost(null);
// //       setFormData({ title: "", author: "", body: "", tags: "", slug: "", featuredImage: null, images: [] });
// //       setPreviewFeatured(null);
// //       setPreviewImages([]);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };
// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     //  1. Basic validation
//     if (!formData.title.trim() || !formData.body.trim() || !formData.author.trim() || !formData.slug.trim()) {
//       alert("Please fill in all required fields: Title, Author, Body, Slug");
//       return;
//     }
  
//     try {
//       const data = new FormData();
//       data.append("title", formData.title.trim());
//       data.append("author", formData.author.trim());
//       data.append("body", formData.body.trim());
//       data.append("tags", formData.tags.trim());
//       data.append("slug", formData.slug.trim());
  
//       //  2. Featured image (optional)
//       if (formData.featuredImage) {
//         data.append("featuredImage", formData.featuredImage);
//       }
  
//       //  3. Multiple images (optional)
//       if (formData.images && formData.images.length > 0) {
//         formData.images.forEach((img) => data.append("images", img));
//       }
  
//       //  4. Create or update post
//       if (editingPost) {
//         await axios.put(`/api/posts/${editingPost.slug}`, data);
//       } else {
//         await axios.post("/api/posts", data);
//       }
  
//       //  5. Refresh posts and reset form
//       fetchPosts();
//       setModalOpen(false);
//       setEditingPost(null);
//       setFormData({ title: "", author: "", body: "", tags: "", slug: "", featuredImage: null, images: [] });
//       setPreviewFeatured(null);
//       setPreviewImages([]);
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Failed to save post. Please check the console.");
//     }
//   };
  
//   // Delete post
//   const handleDelete = async (slug) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       await axios.delete(`/api/posts/${slug}`);
//       fetchPosts();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Admin Posts</h1>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => setModalOpen(true)}
//         >
//           Create Post
//         </button>
//       </div>

//       {/* Search & Sort */}
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by title/body"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border p-2 rounded w-1/3"
//         />
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="newest">Newest</option>
//           <option value="oldest">Oldest</option>
//           <option value="popularity">Popularity</option>
//         </select>
//       </div>

//       {/* Dynamic Tag Filter */}
//       <div className="flex gap-2 mb-4 flex-wrap">
//       <div className="flex gap-2 mb-4 flex-wrap">
//   {Array.from(
//     new Set(
//       (posts || []).flatMap(post => post.tags || [])
//     )
//   ).map(tag => (
//     <button
//       key={tag}
//       onClick={() => setSearch(tag)}
//       className={`px-3 py-1 rounded ${
//         search === tag ? "bg-blue-500 text-white" : "bg-gray-200"
//       }`}
//     >
//       {tag}
//     </button>
//   ))}
// </div>

//       </div>

//       {/* Posts Table */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 border">Title</th>
//               <th className="p-2 border">Author</th>
//               <th className="p-2 border">Tags</th>
//               <th className="p-2 border">Popularity</th>
//               <th className="p-2 border">Created At</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//           {(posts || []).map((post) => (
//               <tr key={post._id}>
//                 <td className="p-2 border">{post.title}</td>
//                 <td className="p-2 border">{post.author}</td>

//                 {/* Inline editable tags */}
//                 <td className="p-2 border">
//                   <input
//                     type="text"
//                     value={post.tags.join(", ")}
//                     className="border p-1 rounded w-full"
//                     onChange={(e) => {
//                       const newTags = e.target.value.split(",").map(t => t.trim());
//                       setPosts(posts.map(p => p._id === post._id ? { ...p, tags: newTags } : p));
//                     }}
//                     onBlur={async () => {
//                       try {
//                         await axios.put(`/api/posts/${post.slug}`, { tags: post.tags.join(",") });
//                       } catch (err) {
//                         console.error(err);
//                       }
//                     }}
//                   />
//                 </td>

//                 {/* Inline editable popularity */}
//                 <td className="p-2 border flex items-center gap-1">
//                   <input
//                     type="number"
//                     value={post.popularity || 0}
//                     className="border p-1 rounded w-16"
//                     onChange={(e) => {
//                       const newPop = parseInt(e.target.value) || 0;
//                       setPosts(posts.map(p => p._id === post._id ? { ...p, popularity: newPop } : p));
//                     }}
//                     onBlur={async () => {
//                       try {
//                         await axios.put(`/api/posts/${post.slug}`, { popularity: post.popularity });
//                       } catch (err) {
//                         console.error(err);
//                       }
//                     }}
//                   />
//                   <button
//                     className="bg-green-500 text-white px-1 py-0.5 rounded"
//                     onClick={async () => {
//                       const newPop = (post.popularity || 0) + 1;
//                       setPosts(posts.map(p => p._id === post._id ? { ...p, popularity: newPop } : p));
//                       try {
//                         await axios.put(`/api/posts/${post.slug}`, { popularity: newPop });
//                       } catch (err) {
//                         console.error(err);
//                       }
//                     }}
//                   >
//                     +
//                   </button>
//                 </td>

//                 <td className="p-2 border">{new Date(post.createdAt).toLocaleDateString()}</td>

//                 <td className="p-2 border flex gap-2">
//                   <button
//                     className="bg-yellow-500 text-white px-2 py-1 rounded"
//                     onClick={() => openEditModal(post)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleDelete(post.slug)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Pagination */}
//       <div className="flex gap-2 mt-4">
//         <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded">Prev</button>
//         <span className="px-3 py-1 border rounded">{page} / {totalPages}</span>
//         <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded">Next</button>
//       </div>

//       {/* Create/Edit Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded w-2/3 max-h-full overflow-auto">
//             <h2 className="text-xl font-bold mb-4">{editingPost ? "Edit Post" : "Create Post"}</h2>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//               <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2 rounded"/>
//               <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="border p-2 rounded"/>
//               <textarea name="body" placeholder="Body" value={formData.body} onChange={handleChange} className="border p-2 rounded"/>
//               <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="border p-2 rounded"/>
//               <input name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} className="border p-2 rounded"/>

//               <div>
//                 <label className="block mb-1">Featured Image:</label>
//                 <input type="file" name="featuredImage" onChange={handleChange}/>
//                 {previewFeatured && <img src={previewFeatured} alt="Featured" className="mt-2 w-32 h-32 object-cover"/>}
//               </div>

//               <div>
//                 <label className="block mb-1">Multiple Images:</label>
//                 <input type="file" name="images" multiple onChange={handleChange}/>
//                 {/*  Improved image preview with remove */}
//                 <div className="flex gap-2 mt-2">
// {(previewImages || []).map((img, i) => (
//                     <div key={i} className="relative">
//                       <img src={img} alt={`img-${i}`} className="w-20 h-20 object-cover"/>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setPreviewImages(prev => prev.filter((_, idx) => idx !== i));
//                           setFormData(prev => ({
//                             ...prev,
//                             images: prev.images.filter((_, idx) => idx !== i)
//                           }));
//                         }}
//                         className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex gap-2 mt-4">
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingPost ? "Update" : "Create"}</button>
//                 <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setModalOpen(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPosts;



// // Inline indicators..
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// //  Set base URL for Axios
// // Change the port to match your backend
// axios.defaults.baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:5000"
//     : "https://your-production-backend.com";

// const AdminPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [search, setSearch] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState(search); //  Debounced search
//   const [sortBy, setSortBy] = useState("newest");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editingPost, setEditingPost] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     body: "",
//     tags: "",
//     slug: "",
//     featuredImage: null,
//     images: [],
//   });
//   const [previewFeatured, setPreviewFeatured] = useState(null);
//   const [previewImages, setPreviewImages] = useState([]);
  
//   //  New: form errors state
//   const [formErrors, setFormErrors] = useState([]);

//   //  Debounce effect for search
//   useEffect(() => {
//     const handler = setTimeout(() => setDebouncedSearch(search), 500);
//     return () => clearTimeout(handler);
//   }, [search]);

//   // Fetch posts
//   const fetchPosts = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("/api/posts", {
//         params: { page, limit, search: debouncedSearch, sortBy },
//       });
//       setPosts(res.data.posts);
//       setTotalPages(res.data.totalPages);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [page, debouncedSearch, sortBy]);

//   // Handle input change
//   const handleChange = (e) => {
//     if (e.target.name === "featuredImage") {
//       setFormData({ ...formData, featuredImage: e.target.files[0] });
//       setPreviewFeatured(URL.createObjectURL(e.target.files[0]));
//     } else if (e.target.name === "images") {
//       const files = Array.from(e.target.files);
//       setFormData({ ...formData, images: files });
//       setPreviewImages(files.map((f) => URL.createObjectURL(f)));
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   // Open modal for edit
//   const openEditModal = (post) => {
//     setEditingPost(post);
//     setFormData({
//       title: post.title,
//       author: post.author,
//       body: post.body,
//       tags: post.tags.join(","),
//       slug: post.slug,
//       featuredImage: null,
//       images: [],
//     });
//     setPreviewFeatured(post.featuredImage?.url || null);
//     setPreviewImages(post.images?.map((img) => img.url) || []);
//     setModalOpen(true);
//   };

//   // Submit form (create or update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     //  1. Basic validation
//     const errors = [];
//     if (!formData.title.trim()) errors.push("Title is required");
//     if (!formData.author.trim()) errors.push("Author is required");
//     if (!formData.body.trim()) errors.push("Body is required");
//     if (!formData.slug.trim()) errors.push("Slug is required");

//     if (errors.length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("title", formData.title.trim());
//       data.append("author", formData.author.trim());
//       data.append("body", formData.body.trim());
//       data.append("tags", formData.tags.trim());
//       data.append("slug", formData.slug.trim());

//       //  Featured image
//       if (formData.featuredImage) {
//         data.append("featuredImage", formData.featuredImage);
//       }

//       //  Multiple images
//       if (formData.images && formData.images.length > 0) {
//         formData.images.forEach((img) => data.append("images", img));
//       }

//       //  Create or update post
//       if (editingPost) {
//         await axios.put(`/api/posts/${editingPost.slug}`, data);
//       } else {
//         await axios.post("/api/posts", data);
//       }

//       //  Refresh posts and reset form
//       fetchPosts();
//       setModalOpen(false);
//       setEditingPost(null);
//       setFormData({ title: "", author: "", body: "", tags: "", slug: "", featuredImage: null, images: [] });
//       setPreviewFeatured(null);
//       setPreviewImages([]);
//       setFormErrors([]); //  clear errors after success
//     } catch (err) {
//       console.error(err);
//       setFormErrors([err.response?.data?.message || "Failed to save post. Please check the console."]);
//     }
//   };

//   // Delete post
//   const handleDelete = async (slug) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       await axios.delete(`/api/posts/${slug}`);
//       fetchPosts();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Admin Posts</h1>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => setModalOpen(true)}
//         >
//           Create Post
//         </button>
//       </div>

//       {/* Search & Sort */}
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by title/body"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border p-2 rounded w-1/3"
//         />
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="newest">Newest</option>
//           <option value="oldest">Oldest</option>
//           <option value="popularity">Popularity</option>
//         </select>
//       </div>

//       {/* Dynamic Tag Filter */}
//       <div className="flex gap-2 mb-4 flex-wrap">
//         {Array.from(new Set((posts || []).flatMap(post => post.tags || []))).map(tag => (
//           <button
//             key={tag}
//             onClick={() => setSearch(tag)}
//             className={`px-3 py-1 rounded ${search === tag ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       {/* Posts Table */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 border">Title</th>
//               <th className="p-2 border">Author</th>
//               <th className="p-2 border">Tags</th>
//               <th className="p-2 border">Popularity</th>
//               <th className="p-2 border">Created At</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(posts || []).map((post) => (
//               <tr key={post._id}>
//                 <td className="p-2 border">{post.title}</td>
//                 <td className="p-2 border">{post.author}</td>

//                 {/* Inline editable tags */}
//                 <td className="p-2 border">
//                   <input
//                     type="text"
//                     value={post.tags.join(", ")}
//                     className="border p-1 rounded w-full"
//                     onChange={(e) => {
//                       const newTags = e.target.value.split(",").map(t => t.trim());
//                       setPosts(posts.map(p => p._id === post._id ? { ...p, tags: newTags } : p));
//                     }}
//                     onBlur={async () => {
//                       try {
//                         await axios.put(`/api/posts/${post.slug}`, { tags: post.tags.join(",") });
//                       } catch (err) {
//                         console.error(err);
//                       }
//                     }}
//                   />
//                 </td>

//                 {/* Inline editable popularity */}
//                 <td className="p-2 border flex items-center gap-1">
//                   <input
//                     type="number"
//                     value={post.popularity || 0}
//                     className="border p-1 rounded w-16"
//                     onChange={(e) => {
//                       const newPop = parseInt(e.target.value) || 0;
//                       setPosts(posts.map(p => p._id === post._id ? { ...p, popularity: newPop } : p));
//                     }}
//                     onBlur={async () => {
//                       try {
//                         await axios.put(`/api/posts/${post.slug}`, { popularity: post.popularity });
//                       } catch (err) {
//                         console.error(err);
//                       }
//                     }}
//                   />
//                   <button
//                     className="bg-green-500 text-white px-1 py-0.5 rounded"
//                     onClick={async () => {
//                       const newPop = (post.popularity || 0) + 1;
//                       setPosts(posts.map(p => p._id === post._id ? { ...p, popularity: newPop } : p));
//                       try {
//                         await axios.put(`/api/posts/${post.slug}`, { popularity: newPop });
//                       } catch (err) {
//                         console.error(err);
//                       }
//                     }}
//                   >
//                     +
//                   </button>
//                 </td>

//                 <td className="p-2 border">{new Date(post.createdAt).toLocaleDateString()}</td>

//                 <td className="p-2 border flex gap-2">
//                   <button
//                     className="bg-yellow-500 text-white px-2 py-1 rounded"
//                     onClick={() => openEditModal(post)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleDelete(post.slug)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Pagination */}
//       <div className="flex gap-2 mt-4">
//         <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded">Prev</button>
//         <span className="px-3 py-1 border rounded">{page} / {totalPages}</span>
//         <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded">Next</button>
//       </div>

//       {/* Create/Edit Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded w-2/3 max-h-full overflow-auto">
//             <h2 className="text-xl font-bold mb-4">{editingPost ? "Edit Post" : "Create Post"}</h2>

//             {/*  Render form errors */}
//             {formErrors.length > 0 && (
//               <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
//                 <ul className="list-disc list-inside">
//                   {formErrors.map((err, idx) => (
//                     <li key={idx}>{err}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//               <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2 rounded"/>
//               <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="border p-2 rounded"/>
//               <textarea name="body" placeholder="Body" value={formData.body} onChange={handleChange} className="border p-2 rounded"/>
//               <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="border p-2 rounded"/>
//               <input name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} className="border p-2 rounded"/>

//               <div>
//                 <label className="block mb-1">Featured Image:</label>
//                 <input type="file" name="featuredImage" onChange={handleChange}/>
//                 {previewFeatured && <img src={previewFeatured} alt="Featured" className="mt-2 w-32 h-32 object-cover"/>}
//               </div>

//               <div>
//                 <label className="block mb-1">Multiple Images:</label>
//                 <input type="file" name="images" multiple onChange={handleChange}/>
//                 <div className="flex gap-2 mt-2">
//                   {(previewImages || []).map((img, i) => (
//                     <div key={i} className="relative">
//                       <img src={img} alt={`img-${i}`} className="w-20 h-20 object-cover"/>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setPreviewImages(prev => prev.filter((_, idx) => idx !== i));
//                           setFormData(prev => ({
//                             ...prev,
//                             images: prev.images.filter((_, idx) => idx !== i)
//                           }));
//                         }}
//                         className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex gap-2 mt-4">
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingPost ? "Update" : "Create"}</button>
//                 <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setModalOpen(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPosts;

// Moadl for deleting

import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import Loader from "../../loader/Loader";



const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [sortBy, setSortBy] = useState("newest");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
    tags: "",
    slug: "",
    featuredImage: null,
    images: [],
  });
  const [previewFeatured, setPreviewFeatured] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);

  //  Delete modal state
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    slug: null,
    title: ""
  });

  //  Debounce effect for search
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  // Fetch posts
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/posts", {
        params: { page, limit, search: debouncedSearch, sortBy },
      });
      setPosts(res.data.posts);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page, debouncedSearch, sortBy]);

  // Handle input change
  const handleChange = (e) => {
    if (e.target.name === "featuredImage") {
      setFormData({ ...formData, featuredImage: e.target.files[0] });
      setPreviewFeatured(URL.createObjectURL(e.target.files[0]));
    } else if (e.target.name === "images") {
      const files = Array.from(e.target.files);
      setFormData({ ...formData, images: files });
      setPreviewImages(files.map((f) => URL.createObjectURL(f)));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Open modal for edit
  const openEditModal = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      author: post.author,
      body: post.body,
     
      slug: post.slug,
      featuredImage: null,
      images: [],
    });
setTags((post?.tags || []).map(t => ({ name: t, selected: false })));

    setPreviewFeatured(post.featuredImage?.url || null);
    setPreviewImages(post.images?.map((img) => img.url) || []);
    setModalOpen(true);
  };

  // Submit form (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !formData.title.trim() ||
      !formData.body.trim() ||
      !formData.author.trim() ||
      !formData.slug.trim()
    ) {
      alert("Please fill in all required fields: Title, Author, Body, Slug");
      return;
    }
  
    try {
      const data = new FormData();
      data.append("title", formData.title?.trim() || "");
      data.append("author", formData.author?.trim() || "");
      data.append("body", formData.body?.trim() || "");
      data.append("tags", formData.tags?.trim() || "");
      data.append("slug", formData.slug?.trim() || "");
  
      if (formData.featuredImage)
        data.append("featuredImage", formData.featuredImage);
      if (formData.images && formData.images.length > 0) {
        formData.images.forEach((img) => data.append("images", img));
      }
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      if (editingPost) {
        await axiosInstance.put(`/posts/admin/${editingPost._id}`, data, config);
      } else {
        await axiosInstance.post("/posts", data, config);
      }
  
      fetchPosts();
      setModalOpen(false);
      setEditingPost(null);
      setFormData({
        title: "",
        author: "",
        body: "",
        tags: "",
        slug: "",
        featuredImage: null,
        images: [],
      });
      setPreviewFeatured(null);
      setPreviewImages([]);
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message || "Failed to save post. Please check the console."
      );
    }
  };
  

  // Open delete modal
  const confirmDelete = (id, title) => {
      setDeleteModal({ open: true, slug: id, title });
    };

  // Cancel delete
  const cancelDelete = () => {
    setDeleteModal({ open: false, slug: null, title: "" });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Posts</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setModalOpen(true)}
        >
          Create Post
        </button>
      </div>

      {/* Search & Sort */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title/body"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {/* Dynamic Tag Filter */}
      <div className="flex gap-2 mb-4 flex-wrap">
      {Array.from(new Set((posts || []).flatMap(post => post?.tags || []))).map(tag => (
          <button
            key={tag}
            onClick={() => setSearch(tag)}
            className={`px-3 py-1 rounded ${search === tag ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts Table */}
      {loading ? (
       <Loader/>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Author</th>
              <th className="p-2 border">Tags</th>
              <th className="p-2 border">Popularity</th>
              <th className="p-2 border">Created At</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(posts || []).map((post) => (
              <tr key={post._id}>
                <td className="p-2 border">{post.title}</td>
                <td className="p-2 border">{post.author}</td>

                {/* Inline editable tags */}
                <td className="p-2 border">
                  <input
                    type="text"
                    value={(post?.tags || []).join(", ")}

                    className="border p-1 rounded w-full"
                    onChange={(e) => {
                      const newTags = e.target.value.split(",").map(t => t.trim());
                      setPosts(posts.map(p => p._id === post._id ? { ...p, tags: newTags } : p));
                    }}
                    onBlur={async () => {
                      try {
                        await axiosInstance.put(`/posts/admin/${post._id}`, { tags: post.tags.join(",") });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  />
                </td>

                {/* Inline editable popularity */}
                <td className="p-2 border flex items-center gap-1">
                  <input
                    type="number"
                    value={post.popularity || 0}
                    className="border p-1 rounded w-16"
                    onChange={(e) => {
                      const newPop = parseInt(e.target.value) || 0;
                      setPosts(posts.map(p => p._id === post._id ? { ...p, popularity: newPop } : p));
                    }}
                    onBlur={async () => {
                      try {
                        await axiosInstance.put(`posts/admin/${post._id}`, { popularity: post.popularity });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  />
                  <button
                    className="bg-green-500 text-white px-1 py-0.5 rounded"
                    onClick={async () => {
                      const newPop = (post.popularity || 0) + 1;
                      setPosts(posts.map(p => p._id === post._id ? { ...p, popularity: newPop } : p));
                      try {
                        await axiosInstance.put(`/posts/admin/${post._id}`, { popularity: newPop });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    +
                  </button>
                </td>
              

                <td className="p-2 border">{new Date(post.createdAt).toLocaleDateString()}</td>

                <td className="p-2 border flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => openEditModal(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => confirmDelete(post._id, post.title)}
                  >
                    Delete
                  </button>
                </td>

                
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded">Prev</button>
        <span className="px-3 py-1 border rounded">{page} / {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded">Next</button>
      </div>

      {/* Create/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-2/3 max-h-full overlow-auto">
            <h2 className="text-xl font-bold mb-4">{editingPost ? "Edit Post" : "Create Post"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2 rounded"/>
              <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="border p-2 rounded"/>
              <textarea name="body" placeholder="Body" value={formData.body} onChange={handleChange} className="border p-2 rounded"/>
              <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="border p-2 rounded"/>
              <input name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} className="border p-2 rounded"/>

              <div>
                <label className="block mb-1">Featured Image:</label>
                <input type="file" name="featuredImage" onChange={handleChange}/>
                {previewFeatured && <img src={previewFeatured} alt="Featured" className="mt-2 w-32 h-32 object-cover"/>}
              </div>

              <div>
                <label className="block mb-1">Multiple Images:</label>
                <input type="file" name="images" multiple onChange={handleChange}/>
                <div className="flex gap-2 mt-2">
                  {(previewImages || []).map((img, i) => (
                    <div key={i} className="relative">
                      <img src={img} alt={`img-${i}`} className="w-20 h-20 object-cover"/>
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImages(prev => prev.filter((_, idx) => idx !== i));
                          setFormData(prev => ({
                            ...prev,
                            images: prev.images.filter((_, idx) => idx !== i)
                          }));
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingPost ? "Update" : "Create"}</button>
                <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/*  Delete Confirmation Modal */}
      {/* {deleteModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-80 text-center">
            <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
            <p className="mb-4">Are you sure you want to delete <strong>{deleteModal.title}</strong>?</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={async () => {
                  try {
                    await axiosInstance.delete(`/api/posts/admin/${deleteModal.slug}`);
                    fetchPosts();
                  } catch (err) {
                    console.error(err);
                  } finally {
                    cancelDelete();
                  }
                }}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} */}


      {/* Delete Modal */}
      {deleteModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-1/3">
            <h2 className="text-lg font-bold mb-4">Delete Post</h2>
            <p>Are you sure you want to delete "{deleteModal.title}"?</p>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={async () => {
                  try {
                    await axiosInstance.delete(`/posts/admin/${deleteModal.slug}`);
                    fetchPosts();
                    cancelDelete();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPosts;
