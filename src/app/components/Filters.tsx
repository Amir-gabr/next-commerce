import React from "react";

export default function Filters() {
  return (
    <div className="flex justify-between gap-4">
      <div className="space-x-4">
        <select
          name="type"
          id=""
          className="py-1 px-2 rounded-lg focus:outline-0 border bg-black text-white"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <select
          name="size"
          id=""
          className="py-1 px-2 rounded-lg focus:outline-0 border bg-black text-white"
        >
          <option>Size</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="color"
          id=""
          className="py-1 px-2 rounded-lg focus:outline-0 border bg-black text-white"
        >
          <option>Color</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <select
          name="category"
          id=""
          className="py-1 px-2 rounded-lg focus:outline-0 border bg-black text-white"
        >
          <option>Category</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <select
          name="all filter"
          id=""
          className="py-1 px-2 rounded-lg focus:outline-0 border bg-black text-white"
        >
          <option>All filter</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div className="space-x-4">
        <input
          type="text"
          placeholder="min price"
          className="py-1 ps-3 rounded-lg ring-2 ring-pink-400 placeholder:text-white focus:outline-0 bg-black text-white"
        />
        <input
          type="text"
          placeholder="min price"
          className="py-1 ps-3 rounded-lg ring-2 ring-pink-400 focus:outline-0 placeholder:text-white bg-black text-white"
        />
        <select
          name="sort"
          id=""
          className="py-1 px-2 rounded-lg focus:outline-0 border bg-black text-white"
        >
          <option>Sort</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
    </div>
  );
}
