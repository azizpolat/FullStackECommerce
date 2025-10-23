import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4 sticky top-0 z-100 ">
      <Link href="/" className="flex items-center  ">
        <Image
          src="/logo.png"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
          alt="tredplt"
        />
        <p className="hidden md:block font-medium text-md tracking-wider font-semibold ">
          TRENDPLT
        </p>
      </Link>
      <div className="flex items-center gap-2 ">
        <Link href="/">
          <Search />
        </Link>
        <Home className="w-4 h-4 text-gray-600" />
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sing in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
