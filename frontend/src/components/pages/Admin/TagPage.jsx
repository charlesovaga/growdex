"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Search, X, Link } from "lucide-react";
import axios from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import Loader from "../../loader/Loader";
import { setLoading } from "../../../store/slices/authSlice";

export default function TagTable() {
    const [tags, setTags] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        total: 0,
        page: 1,
        totalPages: 1,
        limit: 10,
      });

      useEffect(() => {
        fetchTags(1, 10);
      }, []);
    

    // const fetchTags = async (page = 1, limit = 10) => {
    //     try {
    //       const res = await fetch(`http://localhost:5000/api/tags?page=${page}&limit=${limit}`);
    //       const data = await res.json();
      
    //       setTags(data.tags || []);  // assuming backend returns { tags, total, page, totalPages }
    //       setPagination({
    //         total: data.total,
    //         page: data.page,
    //         totalPages: data.totalPages,
    //         limit,
    //       });
    //     } catch (err) {
    //       console.error("Error fetching tags:", err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
      
      
    
    // useEffect(() => {
    //   const fetchTags = async () => {
    //     try {
    //       const res = await fetch("http://localhost:5000/api/tags");
    //       const data = await res.json();
    //       setTags(data);
    //     } catch (err) {
    //       console.error("Error fetching tag:", err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   fetchTags();
    // }, []);
    
    const fetchTags = async (page = 1, limit = 10) => {
      setLoading(true); // start loader
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axiosInstance.get(`/tags`, {
          params: { page, limit }
        });
    
        const data = res.data;
        setTags(data.tags || []);
        setPagination({
          total: data.total,
          page: data.page,
          totalPages: data.totalPages,
          limit,
        });
      } catch (err) {
        console.error("Error fetching tags:", err);
      } finally {
        setLoading(false);
      }
    };
    
  const [search, setSearch] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [editId, setEditId] = useState(null);
  

  // Delete confirmation
  const [deleteId, setDeleteId] = useState(null);

  const filtered = tags.filter((c) =>
    (c.name || "").toLowerCase().includes(search.toLowerCase())
  );
  

  const handleDelete = async () => {
    await axiosInstance.delete(`/tags/${deleteId}`);
    setTags(tags.filter((c) => c._id !== deleteId));
    setDeleteId(null);
  };
  
  const handleSaveCategory = async () => {
    if (!newTag.trim()) return;
  

  
    if (editId) {
      const { data: updated } = await axiosInstance.put(
        `/tags/${editId}`,
        { name: newTag.trim() }
      );
      setTags(tags.map((c) => (c._id === updated._id ? updated : c)));
    } else {
      const { data: added } = await axiosInstance.post(
        `/tags`,
        { name: newTag.trim() }

      );
      setTags([added, ...tags]);
    }
  
    setNewTag("");
    setEditId(null);
    setIsFormOpen(false);
  };
  
  

  const openAddForm = () => {
    setNewTag("");
    setEditId(null);
    setIsFormOpen(true);
  };

  const openEditForm = (tag) => {
    setNewTag(tag.name);
    setEditId(tag._id);
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

  {/* Right side - Pagination + Archive + Add New */}
  <div className="flex items-center gap-6">
    {/* Pagination Info */}
    <div>
      {(pagination.page - 1) * pagination.limit + 1} -{" "}
      {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
      {pagination.total}
    </div>

    {/* Pagination Arrows + Archive */}
    <div className="flex items-center gap-3">
      <button
        disabled={pagination.page === 1}
        onClick={() => fetchTags(pagination.page - 1, pagination.limit)}
      >
        <span className="material-icons text-base">chevron_left</span>
      </button>

      <button
        disabled={pagination.page === pagination.totalPages}
        onClick={() => fetchTags(pagination.page + 1, pagination.limit)}
      >
        <span className="material-icons text-base">chevron_right</span>
      </button>
{/* 
      <button className="text-blue-600 hover:underline">Archive</button> */}
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


        {/* Table */}
        {/* <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2">Tag Name</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2">{c.name}</td>
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
        </table> */}

        {/* Table */}
        {loading ? (
  <div className="flex justify-center items-center h-[80vh]">
<Loader/>
  </div>
) : filtered.length === 0 ? (
  <p className="text-gray-500 text-center py-10">No items found.</p>
) : (
<table className="w-full border-collapse">
  <thead>
    <tr className="text-left ">
      <th className="px-4 py-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Tag Name</span>
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
            <span>{c.name}</span>
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
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Enter tag name"
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
            <p className="text-gray-500 text-sm mb-5">
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
