import { useEffect, useState } from "react";

import RichTextEditor from "../../editor/RichTextEditor"; // adjust path to your editor
import { useDropzone } from "react-dropzone";
import axios from "axios";
import icon from "../../../assets/iconamoon_cloud-upload.png"
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast"; 
import { Loader2 } from "lucide-react";
import axiosInstance from "../../../utils/axiosInstance";


const AddPost = () => {
  // Inside your CreatePost.jsx
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/api/categories");
        
        // normalize result
        const cats = Array.isArray(res.data) ? res.data : res.data.categories || [];
        setCategories(cats);
        
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]); // safe fallback
      }
    };
    fetchCategories();
  }, []);
  

const { id } = useParams();
const navigate = useNavigate();
const [selectedCategories, setSelectedCategories] = useState([]);

// const handleCategoryChange = (category) => {
//   setSelectedCategories((prev) =>
//     prev.includes(category)
//       ? prev.filter((c) => c !== category)
//       : [...prev, category]
//   );
// };
  //  fetch tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axiosInstance.get("/api/tags");
  
        // normalize result
        const t = Array.isArray(res.data) ? res.data : res.data.tags || [];
        setTags(t);
  
        console.log("Tags API response:", res.data);
      } catch (err) {
        console.error("Error fetching tags:", err);
        setTags([]); // safe fallback so .map won’t break
      }
    };
  
    fetchTags();
  }, []);
  
  const [postSlug, setPostSlug] = useState(null);
  useEffect(() => {
    if (!id) return; // only fetch when editing
  
    const fetchPost = async () => {
      try {
        const res = await axiosInstance.get(`/api/posts/admin/${id}`);
        const post = res.data;
  
        setTitle(post.title || "");
        setBody(post.body || "");
        setSelectedCategories(post.categories?.map(c => c._id) || []);
        setSelectedTags(post.tags?.map(t => t._id) || []);
        setPostSlug(post.slug);
        // preload featuredImage (keep URL so user can see it)
        if (post.featuredImage?.url) {
          setFeaturedImage(post.featuredImage.url); 
        }
      } catch (err) {
        console.error("Error fetching post:", err.response?.data || err.message);
      }
    };
  
    fetchPost();
  }, [id]);
  

const handleAddCategory = async () => {
  const trimmed = newCategory.trim();
  if (!trimmed) return;

  try {
    const res = await axiosInstance.post("/api/categories", { name: trimmed });

    // Add to state & auto-select
    setCategories((prev) => [...prev, res.data]);
    setSelectedCategories((prev) => [...prev, res.data._id]); //  store ID not name

    setNewCategory("");
    setShowNewCategoryInput(false);
  } catch (err) {
    console.error("Error adding category:", err.response?.data || err.message);
  }
};



const handleAddTag = async () => {
  if (!newTag.trim()) return;

  try {
    const res = await axiosInstance.post("/api/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTag.trim() }),
    });

    const added = await res.json();
    setTags((prev) => [...prev, added]);  // add to tags list
    setSelectedTags((prev) => [...prev, added._id]); // auto-select
    setNewTag("");
    setShowNewTagInput(false);
  } catch (err) {
    console.error("Error adding tag:", err);
  }
};




const handleRemoveTag = (tag) => {
  setTags(tags.filter((t) => t !== tag));
};
// When adding a new tag with checkboxes
// const handleAddTag = () => {
//   if (!tagInput) return;
//   const newTags = tagInput.split(",").map((t) => ({
//     name: t.trim(),
//     selected: false, // initialize as not selected
//   }));
//   setTags([...tags, ...newTags]);
//   setTagInput("");
// };

const handleToggleTag = async (tagObj) => {
  const nextSelected = !Boolean(tagObj.selected);

  // optimistic UI
  setTags(prev =>
    prev.map(t => (t.name === (tagObj.name || tagObj)
      ? { ...t, name: (tagObj.name || tagObj), selected: nextSelected }
      : t))
  );

  try {
    await axiosInstance.patch(`/admin/api/posts/${id}/tags`, {
      tag: tagObj.name || tagObj,
      selected: nextSelected,
    });
  } catch (err) {
    // revert on error
    setTags(prev =>
      prev.map(t => (t.name === (tagObj.name || tagObj)
        ? { ...t, selected: !nextSelected }
        : t))
    );
    console.error("Tag toggle failed:", err?.response?.data || err.message);
  }
};




  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);             // fetched from backend
  const [selectedTags, setSelectedTags] = useState([]); // checkboxes
  const [showNewTagInput, setShowNewTagInput] = useState(false);
  const [newTag, setNewTag] = useState("");
  



 


  // const handlePublish = async (e) => {


  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   try {
  //     const formData = new FormData();
  //     formData.append("title", title);
  //     formData.append("body", body);
  //     formData.append("author", "Admin"); // default for now
  //     formData.append("categories", JSON.stringify(selectedCategories));

  //     // formData.append("tags", JSON.stringify(tags));

  //     formData.append("tags", JSON.stringify(selectedTags));


      

  //     if (featuredImage) {
  //       formData.append("featuredImage", featuredImage);
  //     }

  //     images.forEach((img) => {
  //       formData.append("images", img);
  //     });

  //     const res = await axios.post("http://localhost:5000/api/posts", formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     setMessage(" Post published successfully!");
  //     setTitle("");
  //     setBody("");
  //     setFeaturedImage(null);
  //     setImages([]);
  //     setSelectedCategories([]);
  //     setTags([]);
  //   } catch (err) {
  //     setMessage("❌ Error publishing post: " + (err.response?.data?.message || err.message));
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
      formData.append("author", "Admin");
      formData.append("categories", JSON.stringify(selectedCategories));
      formData.append("tags", JSON.stringify(selectedTags));
  
      if (featuredImage && typeof featuredImage !== "string") {
        formData.append("featuredImage", featuredImage);
      }
  
      images.forEach((img) => {
        formData.append("images", img);
      });
  
      let res;
      if (id) {
        // UPDATE post
        res = await axiosInstance.put(`/api/posts/admin/${id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        toast.success("Post updated successfully!");
        navigate("/admin/posts"); //  redirect after update
      } else {
        // CREATE new post
        res = await axiosInstance.post(`/api/posts/admin`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        toast.success(" Post published successfully!");
      }
  
      // Reset only if new post
      if (!id) {
        setTitle("");
        setBody("");
        setFeaturedImage(null);
        setImages([]);
        setSelectedCategories([]);
        setTags([]);
      }
  
    } catch (err) {
      toast.error(" Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };
  
  const onDrop = (acceptedFiles) => {
    setFeaturedImage(acceptedFiles[0]); // only one featured image
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });
  return (
    <div className="">
      {/* Top header */}
  


      {/* Title input */}
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-4 py-2 rounded-2xl border-gray-300 bg-white mb-4"
      />

      {/* Layout */}
      <div className="grid grid-cols-6 gap-2 h-[calc(100vh-100px)]bg-[#F0F0F1] ">
  {/* Editor */}
  <div className="col-span-5 flex flex-col   border bg-white border-gray-300 rounded-xl">
    <label className="block font-semibold mb-2 px-4 p-2" >Description</label>
    <div className="flex-1">
    <RichTextEditor value={body} onChange={setBody} />

    </div>
  </div>

        {/* Sidebar */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Actions */}
          <div className="flex bg-white rounded-2xl border border-gray-300 p-4 flex-col gap-2">


        
<button
  onClick={() => {
    if (postSlug) {
      window.open(`/blog/${postSlug}`, "_blank");
    } else {
      toast.error("Please publish the post first before previewing.");
    }
  }}
  className="bg-gray-200 px-4 py-2 rounded-full border border-black"
>
  Preview
</button>

<button
  onClick={handlePublish}
  disabled={loading}
  className="bg-black text-white px-4 py-2 rounded-full disabled:opacity-50 flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <span className="w-4 h-4 rounded-full animate-spin border-2 border-t-transparent border-b-transparent border-l-white border-r-blue-400"></span>

    </>
  ) : (
    id ? "Update" : "Publish"
  )}
</button>


          </div>

          {/* Featured Image */}
         

          <div className="bg-white border border-gray-300 rounded-2xl ">
            <div className="p-3">
  <h2 className="mb-1 text-gray-500 text-xs">Feature Image</h2>
  </div>
  <hr className="border-t border-gray-200 w-full " />
  <div className="p-3">
  <div
    {...getRootProps()}
    className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer transition ${
      isDragActive ? "border-black bg-gray-100" : "border-gray-500"
    }`}
  >
    {/* Hidden input for file picker */}
    <input {...getInputProps()} />

    {/* Show uploaded image OR placeholder */}
    {/* {featuredImage ? (
      <img
        src={URL.createObjectURL(featuredImage)}
        alt="Preview"
        className="mx-auto rounded-lg max-h-48"
      />
    ) : (
      <img src={icon} className="text-gray-400 w-4 h-4" />
    )} */}

{featuredImage ? (
  typeof featuredImage === "string" ? (
    <img src={featuredImage} alt="Preview" className="mx-auto rounded-lg max-h-48" />
  ) : (
    <img src={URL.createObjectURL(featuredImage)} alt="Preview" className="mx-auto rounded-lg max-h-48" />
  )
) : (
  <img src={icon} className="text-gray-400 w-4 h-4" />
)}

  </div>
  </div>

  {/* + Add Image trigger (click opens file picker) */}
  <p
    className="text-gray-500 mt-2 text-sm flex items-center justify-center gap-1 cursor-pointer hover:text-black"
    onClick={() => document.querySelector('input[type="file"]').click()}
  >
    <span className="text-lg font-bold">+</span> Add Image
  </p>
</div>



          {/* Categories */}
         {/* Select Category */}
         {/* <div className="border rounded p-3 mt-4">
  <h3 className="font-medium mb-2">Select Category</h3>
  <div className="flex flex-col gap-1">
    {categories.map((cat) => (
      <label key={cat} className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-black"   //  force checkbox to be black
          checked={selectedCategories.includes(cat)}
          onChange={() => handleCategoryChange(cat)}
        />
        {cat}
      </label>
    ))}
  </div>
  <button
    onClick={() =>
      setCategories([...categories, `New Category ${categories.length + 1}`])
    }
    className="text-black text-sm mt-2 hover:underline"
  >
    + Add Category
  </button>
</div> */}

{/* Categories */}
<div className="border border-gray-300 rounded-2xl mt-4 relative bg-white">
  <div className="p-3">
  <h3 className="font-medium mb-1 text-md">Select Category</h3>
  </div>
  <hr className="border-t border-gray-200 w-full mb-3" />

  {/* Categories checkboxes */}
  <div className="flex flex-col gap-2 p-3 bg-white rounded-md shadow-inner">
    {categories.map((cat) => (
      <label key={cat._id} className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-black"
          checked={selectedCategories.includes(cat._id)}
          onChange={() => {
            setSelectedCategories((prev) =>
              prev.includes(cat._id)
                ? prev.filter((c) => c !== cat._id)
                : [...prev, cat._id]
            );
          }}
        />
        {cat.name}
      </label>
    ))}
  </div>

  {/* + Add button */}
  {!showNewCategoryInput && (
    <button
      onClick={() => setShowNewCategoryInput(true)}
      className="mt-2 p-3 text-black text-sm hover:underline"
    >
      + Add Category
    </button>
  )}

  {/* New category input */}
  {showNewCategoryInput && (
    <div className="mt-2 relative w-full flex gap-2 shadow-2xl">
      <input
        type="text"
        placeholder="New category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddCategory();
          }
        }}
        className="w-full border text-md px-4 rounded-xl pr-20"
      />
      <button
        onClick={handleAddCategory}
        className="absolute text-md right-1 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 -mr-1 rounded-r-xl"
      >
        Add
      </button>
    </div>
  )}
</div>



           
       {/* Tags */}
{/* Tags */}
<div className="border border-gray-300 rounded-2xl mt-4 relative bg-white">
  <div className="p-3">
    
  <h3 className="font-medium mb-1 text-md">Select Tags</h3>
  
  </div>

  <hr className="border-t border-gray-200 w-full mb-3" />



  {/* Tags checkboxes */}
  <div className="flex flex-col gap-2 p-3 bg-white rounded-md shadow-inner">
    {tags.map((tag) => (
      <label key={tag._id} className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-black"
          checked={selectedTags.includes(tag._id)}
          onChange={() => {
            setSelectedTags((prev) =>
              prev.includes(tag._id)
                ? prev.filter((t) => t !== tag._id)
                : [...prev, tag._id]
            );
          }}
        />
        {tag.name}
      </label>
    ))}
  </div>

  {/* + Add button */}
  {!showNewTagInput && (
    <button
      onClick={() => setShowNewTagInput(true)}
      className="mt-2 p-3 text-black text-sm hover:underline"
    >
      + Add Tag
    </button>
  )}

  {/* New tag input */}
  {showNewTagInput && (
    <div className="mt-2 relative w-full flex gap-2">
      <input
        type="text"
        placeholder="New tag"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag();
          }
        }}
        className="w-full border text-md px-4 rounded-xl pr-20"
      />
      <button
        onClick={handleAddTag}
        className="absolute text-md right-1 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 -mr-1 rounded-r-xl"
      >
        Add
      </button>
    </div>
  )}
</div>


{/* Tags Checkboxes */}
 {/* <div className="border rounded p-2 mt-4">
  <h3 className="font-medium mb-2">Tags</h3>


 
  <div className="relative w-full mb-2">
  <input
    type="text"
    value={tagInput}
    onChange={(e) => setTagInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter" && tagInput.trim()) {
        e.preventDefault(); // stop form submit
        setTags((prev) => [...prev, { name: tagInput.trim(), selected: true }]);
        setTagInput(""); // clear input
      }
    }}
    placeholder=""
    className="w-full border text-md px-4 rounded-xl pr-20" // extra padding on right for button
  />
  <button
    onClick={handleAddTag}
    className="absolute text-md right-1 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2  -mr-1  rounded-r-xl"
  >
    Add
  </button>
</div>


 
  <div className="flex flex-col gap-2">
  <div className="flex flex-col gap-2">
  {tags.map((tag) => (
    <label key={tag.name} className="flex items-center gap-2 cursor-pointer text-md">
      <input
        type="checkbox"
        className="accent-black"
        checked={tag.selected}
        onChange={() => handleToggleTag(tag.name)}
      />
      {tag.name}
    </label>
  ))}
</div>


  </div>
</div>  */}


        </div>
      </div>
    </div>
  );
};

export default AddPost;
