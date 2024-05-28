import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-10">
      <Logo />

      <ul className="flex items-center gap-4">
        <li>
          <Link href={"/issue-board"}>Issue board</Link>
        </li>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
