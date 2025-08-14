// // // import Post from "../models/post.js";

// // // // @desc    Get all posts
// // // export const getPosts = async (req, res) => {
// // //   try {
// // //     const posts = await Post.find().sort({ createdAt: -1 });
// // //     res.json(posts);
// // //   } catch (err) {
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // };

// // // // @desc    Get single post by slug
// // // export const getPost = async (req, res) => {
// // //   try {
// // //     const post = await Post.findOne({ slug: req.params.slug });
// // //     if (!post) return res.status(404).json({ message: "Post not found" });
// // //     res.json(post);
// // //   } catch (err) {
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // };

// // // // @desc    Create new post with optional Cloudinary image
// // // export const createPost = async (req, res) => {
// // //     try {
// // //       const post = new Post({
// // //         title: req.body.title,
// // //         body: req.body.body,
// // //         author: req.body.author,
// // //         tags: req.body.tags ? req.body.tags.split(',') : [],
// // //         slug: req.body.slug,
// // //         image: req.file?.path || null // Cloudinary URL if uploaded
// // //       });
  
// // //       await post.save();
// // //       res.status(201).json(post);
// // //     } catch (err) {
// // //       res.status(400).json({ message: err.message });
// // //     }
// // //   };
  

// // // // @desc    Update post
// // // export const updatePost = async (req, res) => {
// // //   try {
// // //     const post = await Post.findOneAndUpdate(
// // //       { slug: req.params.slug },
// // //       req.body,
// // //       { new: true }
// // //     );
// // //     if (!post) return res.status(404).json({ message: "Post not found" });
// // //     res.json(post);
// // //   } catch (err) {
// // //     res.status(400).json({ message: err.message });
// // //   }
// // // };

// // // // @desc    Delete post
// // // export const deletePost = async (req, res) => {
// // //   try {
// // //     const post = await Post.findOneAndDelete({ slug: req.params.slug });
// // //     if (!post) return res.status(404).json({ message: "Post not found" });
// // //     res.json({ message: "Post deleted" });
// // //   } catch (err) {
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // };

// // import Post from "../models/post.js";
// // import cloudinary from "../config/cloudinary.js"; // needs config/cloudinary.js

// // // @desc    Get all posts
// // export const getPosts = async (req, res) => {
// //   try {
// //     const posts = await Post.find().sort({ createdAt: -1 });
// //     res.json(posts);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // @desc    Get single post by slug
// // export const getPost = async (req, res) => {
// //   try {
// //     const post = await Post.findOne({ slug: req.params.slug });
// //     if (!post) return res.status(404).json({ message: "Post not found" });
// //     res.json(post);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // @desc    Create new post with optional Cloudinary image
// // export const createPost = async (req, res) => {
// //   try {
// //     let imageUrl = null;
// //     let imagePublicId = null;

// //     if (req.file) {
// //       const result = await cloudinary.uploader.upload(req.file.path, {
// //         folder: "blog_posts",
// //       });
// //       imageUrl = result.secure_url;
// //       imagePublicId = result.public_id;
// //     }

// //     const post = new Post({
// //       title: req.body.title,
// //       body: req.body.body,
// //       author: req.body.author,
// //       tags: req.body.tags ? req.body.tags.split(",") : [],
// //       slug: req.body.slug,
// //       image: imageUrl,
// //       imagePublicId,
// //     });

// //     await post.save();
// //     res.status(201).json(post);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // };

// // // @desc    Update post (replace Cloudinary image if provided)
// // export const updatePost = async (req, res) => {
// //   try {
// //     const post = await Post.findOne({ slug: req.params.slug });
// //     if (!post) return res.status(404).json({ message: "Post not found" });

// //     let updatedData = { ...req.body };

// //     if (req.file) {
// //       // Delete old image if it exists
// //       if (post.imagePublicId) {
// //         await cloudinary.uploader.destroy(post.imagePublicId);
// //       }

// //       const result = await cloudinary.uploader.upload(req.file.path, {
// //         folder: "blog_posts",
// //       });
// //       updatedData.image = result.secure_url;
// //       updatedData.imagePublicId = result.public_id;
// //     }

// //     const updatedPost = await Post.findOneAndUpdate(
// //       { slug: req.params.slug },
// //       updatedData,
// //       { new: true }
// //     );

// //     res.json(updatedPost);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // };

// // // @desc    Delete post and Cloudinary image
// // export const deletePost = async (req, res) => {
// //   try {
// //     const post = await Post.findOneAndDelete({ slug: req.params.slug });
// //     if (!post) return res.status(404).json({ message: "Post not found" });

// //     // Remove image from Cloudinary if exists
// //     if (post.imagePublicId) {
// //       await cloudinary.uploader.destroy(post.imagePublicId);
// //     }

// //     res.json({ message: "Post deleted" });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };


// import Post from "../models/post.js";
// import cloudinary from "../config/cloudinary.js";

// // Helper: Validate required fields
// const validatePost = (data) => {
//   const errors = [];
//   if (!data.title || data.title.trim() === "") errors.push("Title is required");
//   if (!data.author || data.author.trim() === "") errors.push("Author is required");
//   if (!data.body || data.body.trim() === "") errors.push("Body content is required");
//   return errors;
// };

// // @desc    Get all posts with optional pagination & tag filtering
// export const getPosts = async (req, res) => {
//   try {
//     let { page = 1, limit = 10, tags } = req.query;
//     page = parseInt(page);
//     limit = parseInt(limit);

//     const filter = tags ? { tags: { $in: tags.split(",") } } : {};

//     const posts = await Post.find(filter)
//       .sort({ createdAt: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit);

//     const total = await Post.countDocuments(filter);

//     res.json({
//       total,
//       page,
//       totalPages: Math.ceil(total / limit),
//       posts,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // @desc    Get single post by slug
// export const getPost = async (req, res) => {
//   try {
//     const post = await Post.findOne({ slug: req.params.slug });
//     if (!post) return res.status(404).json({ message: "Post not found" });
//     res.json(post);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // @desc    Create new post with optional Cloudinary image
// export const createPost = async (req, res) => {
//   try {
//     const errors = validatePost(req.body);
//     if (errors.length > 0) return res.status(400).json({ message: errors.join(", ") });

//     let imageUrl = null;
//     let imagePublicId = null;

//     if (req.file) {
//       const result = await cloudinary.uploader.upload(req.file.path, { folder: "blog_posts" });
//       imageUrl = result.secure_url;
//       imagePublicId = result.public_id;
//     }

//     const post = new Post({
//       title: req.body.title,
//       body: req.body.body,
//       author: req.body.author,
//       tags: req.body.tags ? req.body.tags.split(",") : [],
//       slug: req.body.slug,
//       image: imageUrl,
//       imagePublicId,
//     });

//     await post.save();
//     res.status(201).json(post);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // @desc    Update post (replace Cloudinary image if provided)
// export const updatePost = async (req, res) => {
//   try {
//     const post = await Post.findOne({ slug: req.params.slug });
//     if (!post) return res.status(404).json({ message: "Post not found" });

//     // Validate updated fields if present
//     if (req.body.title || req.body.author || req.body.body) {
//       const errors = validatePost({ ...post.toObject(), ...req.body });
//       if (errors.length > 0) return res.status(400).json({ message: errors.join(", ") });
//     }

//     let updatedData = { ...req.body };

//     if (req.file) {
//       if (post.imagePublicId) await cloudinary.uploader.destroy(post.imagePublicId);
//       const result = await cloudinary.uploader.upload(req.file.path, { folder: "blog_posts" });
//       updatedData.image = result.secure_url;
//       updatedData.imagePublicId = result.public_id;
//     }

//     const updatedPost = await Post.findOneAndUpdate({ slug: req.params.slug }, updatedData, { new: true });
//     res.json(updatedPost);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // @desc    Delete post and Cloudinary image
// export const deletePost = async (req, res) => {
//   try {
//     const post = await Post.findOneAndDelete({ slug: req.params.slug });
//     if (!post) return res.status(404).json({ message: "Post not found" });

//     if (post.imagePublicId) await cloudinary.uploader.destroy(post.imagePublicId);
//     res.json({ message: "Post deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

import Post from "../models/post.js";
import cloudinary from "../config/cloudinary.js";

// Validation helper
const validatePost = (data) => {
  const errors = [];
  if (!data.title || data.title.trim() === "") errors.push("Title is required");
  if (!data.author || data.author.trim() === "") errors.push("Author is required");
  if (!data.body || data.body.trim() === "") errors.push("Body content is required");
  return errors;
};

// @desc Get all posts with pagination, tag filter, search & sort
export const getPosts = async (req, res) => {
  try {
    let { page = 1, limit = 10, tags, sortBy = "newest", search } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const filter = {};
    if (tags) filter.tags = { $in: tags.split(",") };
    if (search) filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { body: { $regex: search, $options: "i" } }
    ];

    let sortOption;
    switch (sortBy) {
      case "oldest":
        sortOption = { createdAt: 1 };
        break;
      case "popularity":
        sortOption = { popularity: -1 };
        break;
      case "newest":
      default:
        sortOption = { createdAt: -1 };
        break;
    }

    const posts = await Post.find(filter)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Post.countDocuments(filter);

    res.json({
      total,
      page,
      totalPages: Math.ceil(total / limit),
      posts,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get single post by slug and increment popularity
export const getPost = async (req, res) => {
    try {
      const post = await Post.findOneAndUpdate(
        { slug: req.params.slug },
        { $inc: { popularity: 1 } }, // increment popularity
        { new: true } // return the updated document
      );
  
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

// @desc Create post with featuredImage & multiple images
export const createPost = async (req, res) => {
    try {
      const errors = validatePost(req.body);
      if (errors.length) return res.status(400).json({ message: errors.join(", ") });
  
      let featuredImageObj = null;
      const imagesArray = [];
  
      // Single featured image
      if (req.files?.featuredImage) {
        const result = await cloudinary.uploader.upload(req.files.featuredImage[0].path, { folder: "blog_posts" });
        featuredImageObj = { url: result.secure_url, publicId: result.public_id };
      }
  
      // Multiple images
      if (req.files?.images) {
        for (let file of req.files.images) {
          const result = await cloudinary.uploader.upload(file.path, { folder: "blog_posts" });
          imagesArray.push({ url: result.secure_url, publicId: result.public_id });
        }
      }
  
      const post = new Post({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        tags: req.body.tags ? req.body.tags.split(",") : [],
        slug: req.body.slug,
        featuredImage: featuredImageObj,
        images: imagesArray,
      });
  
      await post.save();
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

// @desc Update post
// export const updatePost = async (req, res) => {
//   try {
//     const post = await Post.findOne({ slug: req.params.slug });
//     if (!post) return res.status(404).json({ message: "Post not found" });

//     if (req.body.title || req.body.author || req.body.body) {
//       const errors = validatePost({ ...post.toObject(), ...req.body });
//       if (errors.length) return res.status(400).json({ message: errors.join(", ") });
//     }

//     const updatedData = { ...req.body };

//     // Update featured image
//     if (req.files?.featuredImage) {
//       if (post.featuredImagePublicId) await cloudinary.uploader.destroy(post.featuredImagePublicId);
//       const result = await cloudinary.uploader.upload(req.files.featuredImage[0].path, { folder: "blog_posts" });
//       updatedData.featuredImage = result.secure_url;
//       updatedData.featuredImagePublicId = result.public_id;
//     }

//     // Add multiple images
//     if (req.files?.images) {
//       const newImages = [];
//       for (let file of req.files.images) {
//         const result = await cloudinary.uploader.upload(file.path, { folder: "blog_posts" });
//         newImages.push({ url: result.secure_url, publicId: result.public_id });
//       }
//       updatedData.images = [...(post.images || []), ...newImages];
//     }

//     const updatedPost = await Post.findOneAndUpdate({ slug: req.params.slug }, updatedData, { new: true });
//     res.json(updatedPost);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// @desc Update post with optional image addition/removal
export const updatePost = async (req, res) => {
    try {
      const post = await Post.findOne({ slug: req.params.slug });
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      // Validate required fields if they are being updated
      if (req.body.title || req.body.author || req.body.body) {
        const errors = validatePost({ ...post.toObject(), ...req.body });
        if (errors.length) return res.status(400).json({ message: errors.join(", ") });
      }
  
      const updatedData = { ...req.body };
  
      // --- Update featured image ---
      if (req.files?.featuredImage) {
        if (post.featuredImage?.publicId) {
          await cloudinary.uploader.destroy(post.featuredImage.publicId);
        }
        const result = await cloudinary.uploader.upload(req.files.featuredImage[0].path, { folder: "blog_posts" });
        updatedData.featuredImage = { url: result.secure_url, publicId: result.public_id };
      }
  
      // --- Add new multiple images ---
      if (req.files?.images) {
        const newImages = [];
        for (let file of req.files.images) {
          const result = await cloudinary.uploader.upload(file.path, { folder: "blog_posts" });
          newImages.push({ url: result.secure_url, publicId: result.public_id });
        }
        updatedData.images = [...(post.images || []), ...newImages];
      }
  
      // --- Remove selected images ---
      // req.body.removeImages is expected to be an array of publicIds to remove
      if (req.body.removeImages && Array.isArray(req.body.removeImages)) {
        for (let publicId of req.body.removeImages) {
          await cloudinary.uploader.destroy(publicId);
        }
        updatedData.images = (post.images || []).filter(img => !req.body.removeImages.includes(img.publicId));
      }
  
      const updatedPost = await Post.findOneAndUpdate(
        { slug: req.params.slug },
        updatedData,
        { new: true }
      );
  
      res.json(updatedPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

// @desc Delete post and all images
// export const deletePost = async (req, res) => {
//   try {
//     const post = await Post.findOneAndDelete({ slug: req.params.slug });
//     if (!post) return res.status(404).json({ message: "Post not found" });

//     // Delete featured image
//     if (post.featuredImagePublicId) await cloudinary.uploader.destroy(post.featuredImagePublicId);

//     // Delete multiple images
//     if (post.images && post.images.length > 0) {
//       for (let img of post.images) {
//         await cloudinary.uploader.destroy(img.publicId);
//       }
//     }

//     res.json({ message: "Post deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// @desc Delete post and all images
export const deletePost = async (req, res) => {
    try {
      const post = await Post.findOneAndDelete({ slug: req.params.slug });
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      // Delete featured image
      if (post.featuredImage?.publicId) {
        await cloudinary.uploader.destroy(post.featuredImage.publicId);
      }
  
      // Delete multiple images
      if (post.images && post.images.length > 0) {
        for (let img of post.images) {
          await cloudinary.uploader.destroy(img.publicId);
        }
      }
  
      res.json({ message: "Post deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  