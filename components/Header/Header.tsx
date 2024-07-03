import React from "react";
import SearchInput from "../SearchInput";
import Link from "next/link";

function Header({ title }: { title: string }) {
  return (
    <header className="p-10 pb-0 flex flex-col items-center sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      </Link>
      <SearchInput />
    </header>
  );
}

export default Header;
