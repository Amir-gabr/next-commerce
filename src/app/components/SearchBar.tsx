import Image from "next/image";
import React from "react";

export default function SearchBar() {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Search" />
        <button>
          {" "}
          <Image src="/search.png" alt="" width={16} height={16} />'{" "}
        </button>
      </form>
    </>
  );
}
