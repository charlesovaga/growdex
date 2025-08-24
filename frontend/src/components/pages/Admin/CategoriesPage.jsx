"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Search, X, Link } from "lucide-react";

import axiosInstance from "../../../utils/axiosInstance";
import Loader from "../../loader/Loader";

export default function CategoriesTable() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        total: 0,
        page: 1,
        totalPages: 1,
        limit: 10,
      });
    
      useEffect(() => {
        fetchCategories(1, 10);
      }, []);

      const fetchCategories = async (page = 1, limit = 10) => {
        setLoading(true); // start loader
        try {

          const res =await axiosInstance.get(`/categories?page=${page}&limit=${limit}` );
      
          setCategories(res.data.categories || []); 
          setPagination({
            total: res.data.total,
            page: res.data.page,
            totalPages: res.data.totalPages,
            limit,
          });
        } catch (err) {
          console.error("Error fetching categories:", err);
        } finally {
          setLoading(false);
        }
      };
      

    // useEffect(() => {
    //   const fetchCategories = async () => {
    //     try {
    //       const res = await fetch("http://localhost:5000/api/categories");
    //       const data = await res.json();
    //       setCategories(data);
    //     } catch (err) {
    //       console.error("Error fetching categories:", err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   fetchCategories();
    // }, []);
    

  const [search, setSearch] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [editId, setEditId] = useState(null);

  // Delete confirmation
  const [deleteId, setDeleteId] = useState(null);

   const filtered = categories.filter((c) =>
       (c?.name || "").toLowerCase().includes(search.toLowerCase())
     );

  // const handleDelete = async () => {

  //   await fetch(`http://localhost:5000/api/categories/${deleteId}`, {
  //     method: "DELETE",
  //   });
  //   setCategories(categories.filter((c) => c._id !== deleteId));
  //   setDeleteId(null);
  // };

  const handleDelete = async () => {
    try {
   
      await axiosInstance.delete(`/categories/${deleteId}`);
      setCategories(categories.filter((c) => c._id !== deleteId));
    } finally {
      setDeleteId(null);
    }
  };
  
  

  // const handleSaveCategory = async () => {
  //   if (!newCategory.trim()) return;
  
  //   if (editId) {
  //     // update existing
  //     const res = await fetch(`http://localhost:5000/api/categories/${editId}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name: newCategory.trim() }),
  //     });
  //     const updated = await res.json();
  //     setCategories(categories.map((c) => (c._id === updated._id ? updated : c)));
  //   } else {
  //     // add new
  //     const res = await fetch("http://localhost:5000/api/categories", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name: newCategory.trim() }),
  //     });
  //     const added = await res.json();
  //     setCategories([added, ...categories]);
  //   }
  
  //   setNewCategory("");
  //   setEditId(null);
  //   setIsFormOpen(false);
  // };
  const handleSaveCategory = async () => {
    if (!newCategory.trim()) return;
  

  
    if (editId) {
      const { data: updated } = await axiosInstance.put(`/categories/${editId}`,
        { name: newCategory.trim() },

      );
      setCategories(categories.map((c) => (c._id === updated._id ? updated : c)));
    } else {
      const { data: added } = await axiosInstance.post(`/categories`,
        { name: newCategory.trim() },
   
      );
      setCategories([added, ...categories]);
    }
  
    setNewCategory("");
    setEditId(null);
    setIsFormOpen(false);
  };
  

  const openAddForm = () => {
    setNewCategory("");
    setEditId(null);
    setIsFormOpen(true);
  };

  const openEditForm = (category) => {
    setNewCategory(category.name);
    setEditId(category._id);
    setIsFormOpen(true);
  };

  return (
    <div className="w-full p-4 relative bg-white rounded-2xl">
      {/* Page content with blur when any modal is open */}
      <div
        className={
          isFormOpen || deleteId ? "blur-[2px] pointer-events-none" : ""
        }
      >
     {/* Top bar */}
<div className="flex justify-between items-center mb-4">
  {/* Search box */}
  <div className="relative w-1/3">
    <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-[70%] pl-9 bg-gray-50 pr-3 p-1 border rounded-full focus:outline-none "
    />
  </div>

  {/* Right side - Pagination + Add New */}
  <div className="flex items-center gap-6">
    {/* Pagination Info */}
    <div>
      {(pagination.page - 1) * pagination.limit + 1} -{" "}
      {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
      {pagination.total}
    </div>

    {/* Pagination Arrows */}
    <div className="flex items-center gap-3">
      <button
        disabled={pagination.page === 1}
        onClick={() => fetchCategories(pagination.page - 1, pagination.limit)}
        className="rounded disabled:opacity-50"
      >
        <span className="material-icons text-base">chevron_left</span>
      </button>

      <button
        disabled={pagination.page === pagination.totalPages}
        onClick={() => fetchCategories(pagination.page + 1, pagination.limit)}
        className="rounded disabled:opacity-50"
      >
        <span className="material-icons text-base">chevron_right</span>
      </button>
    </div>

    {/* Add New */}
    <button
      onClick={openAddForm}
      className="bg-yellow-400 text-white px-5 py-1 rounded-full font-medium shadow hover:bg-yellow-500 transition"
    >
      Add New
    </button>
  </div>
</div>

{loading ? (
  <div className="flex justify-center items-center h-[80vh]">
   <Loader/>
  </div>
) : filtered.length === 0 ? (
  <p className="text-gray-500 text-center py-10">No items found.</p>
) : (
<table className="w-full border-collapse">
  <thead>
    <tr className="text-left">
      <th className="px-4 py-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Category Name</span>
        </div>
      </th>
      <th className="px-4 py-2 text-right">Actions</th>
    </tr>
  </thead>
  <tbody>
    {filtered.map((c) => (
      <tr key={c._id} className="border-t border-t-gray-300">
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">{c.name}</span>
          </div>
        </td>
        <td className="px-4 py-2 text-right flex gap-3 justify-end">
          <button
            className="text-gray-600 hover:text-yellow-500"
            onClick={() => openEditForm(c)}
          >
            <Pencil size={18} />
          </button>
          <button
            className="text-gray-600 hover:text-red-500"
            onClick={() => setDeleteId(c._id)}
          >
            <Trash2 size={18} />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
)}

      </div>

      {/* Inline form (center card) */}
      {isFormOpen && (
        <div className="absolute inset-0 flex justify-center items-center z-50">
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg w-[40%] p-6  relative">
          <button
            onClick={() => setIsFormOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
              <X size={20} />
            </button>
            <h2 className="text-sm font-semibold mb-2 mt-4">
              {editId ? "Edit Category" : "Add New Category"}
            </h2>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name"
              className="w-full border border-gray-300 rounded-full px-3 py-1 mb-4 focus:outline-none "
              />
             <div className="flex justify-center gap-4 mb-12">
            <button
                onClick={() => setIsFormOpen(false)}
                className="px-12 text-sm py-2 border border-gray-200 bg-gray-50 rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCategory}
                className="px-12 py-2 text-sm bg-black text-white rounded-full "
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {deleteId && (
       <div className="absolute inset-0 flex justify-center items-center z-50">
       <div className="bg-white rounded-xl shadow-lg w-[40%] p-6 border border-gray-200 text-center relative">
         <h2 className="text-md font-semibold mb-3">
              Are you sure you want to delete?
            </h2>
            <p className="text-gray-500 mb-5">
              This action cannot be undone.
            </p>
            <div className="flex justify-center gap-2 mb-12 mt-6">
              <button
                onClick={() => setDeleteId(null)}
                className="px-12  py-2 text-sm border border-gray-200 bg-gray-50 rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-12 text-sm py-2  bg-red-500 text-white rounded-full hover:bg-red-600 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
