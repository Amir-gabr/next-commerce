import Image from "next/image";
import React from "react";

export default function SearchBar() {
  return (
    <>
      <form className="md:w-3/5 lg:w-2/3 relative">
        <input
          type="text"
          placeholder="Search"
          className="py-1 px-3 border rounded-md w-full"
        />
        <button>
          <Image
            src="/search.png"
            alt=""
            width={16}
            height={16}
            className="absolute right-2 top-1/2 -translate-y-1/2 "
          />
        </button>
      </form>
    </>
  );
}
