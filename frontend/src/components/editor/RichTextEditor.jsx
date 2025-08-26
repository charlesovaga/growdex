// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";

// function RichTextEditor({ value, onChange }) {
//   const [editorValue, setEditorValue] = useState(value || "");
//   const quillRef = useRef(false);

//   useEffect(() => {
//     if (typeof window !== "undefined" && !quillRef.current) {
//       quillRef.current = true;
//       setTimeout(() => {
//         document.querySelectorAll(".ql-toolbar").forEach((toolbar, index) => {
//           if (index > 0) toolbar.remove();
//         });
//       }, 500);
//     }
//   }, []);

//   useEffect(() => {
//     setEditorValue(value || "");
//   }, [value]);

//   return (
//     <div className="relative">
//       <ReactQuill
//         theme="snow"
//         value={editorValue}
//         onChange={(content) => {
//           setEditorValue(content);
//           onChange(content);
//         }}
//         modules={{
//           toolbar: [
//             [
//               { font: [] },
//               { header: [1, 2, 3, 4, 5, 6, false] },
//               { size: ["small", false, "large", "huge"] },
//               "bold",
//               "italic",
//               "underline",
//               "strike",
//               { color: [] },
//               { background: [] },
//               { script: "sub" },
//               { script: "super" },
//               { list: "ordered" },
//               { list: "bullet" },
//               { align: [] },
//               "blockquote",
//               "code-block",
//               "link",
//               "clean",
//             ],
//           ],
//         }}
//         placeholder="Write a detailed description here..."
//         className="bg-transparent text-white rounded-md"
//       />

//       <style>
//         {`
//         .ql-toolbar  {
//  background-color: #F0F0F1 !important;
//           border: none !important;
//         }
//         .ql-container {

//       border: none !important;
//     }
//         .ql-snow {
//           border: none !important; /* removes ALL borders */
          
//         }
//         .ql-editor {
//           min-height: 200px;
//           color: black; /* text color */
//         }
//         .ql-editor.ql-blank::before {
//           color: #aaa !important;
//         }
//         .ql-picker,
//         .ql-picker-options,
//         .ql-picker-item,
//         .ql-stroke {
//           color: black !important;
//           stroke: black !important;
//         }
//         `}
//       </style>
//     </div>
//   );
// }

// export default RichTextEditor;


// Image upload
"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axiosInstance from "../../utils/axiosInstance";

function RichTextEditor({ value, onChange }) {
  const [editorValue, setEditorValue] = useState(value || "");
  const quillRef = useRef(null);

  // custom image upload handler
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axiosInstance.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const imageUrl = res.data.url;
        editor.insertEmbed(range.index, "image", imageUrl);

        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        if (range) {
          editor.insertEmbed(range.index, "image", imageUrl);
        }
        
      } catch (err) {
        console.error("Image upload failed:", err);
      }
    };
  };

  useEffect(() => {
    setEditorValue(value || "");
  }, [value]);

  return (
    <div className="relative">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={editorValue}
        onChange={(content) => {
          setEditorValue(content);
          onChange(content);
        }}
        modules={{
          toolbar: {
            container: [
              [
                { font: [] },
                { header: [1, 2, 3, 4, 5, 6, false] },
                { size: ["small", false, "large", "huge"] },
                "bold",
                "italic",
                "underline",
                "strike",
                { color: [] },
                { background: [] },
                { script: "sub" },
                { script: "super" },
                { list: "ordered" },
                { list: "bullet" },
                { align: [] },
                "blockquote",
                "code-block",
                "link",
                "image",
                "clean",
              ],
            ],
            handlers: {
              image: imageHandler, 
            },
          },
        }}
        placeholder="Write a detailed description here..."
        className="bg-transparent text-white rounded-md"
      />

      <style>
        {`
        .ql-toolbar  {
          background-color: #F0F0F1 !important;
          border: none !important;
        }
        .ql-container {
          border: none !important;
        }
        .ql-snow {
          border: none !important;
        }
        .ql-editor {
          min-height: 200px;
          color: black;
        }
        .ql-editor.ql-blank::before {
          color: #aaa !important;
        }
        .ql-picker,
        .ql-picker-options,
        .ql-picker-item,
        .ql-stroke {
          color: black !important;
          stroke: black !important;
        }
        `}
      </style>
    </div>
  );
}

export default RichTextEditor;
