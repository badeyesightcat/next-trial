import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-10">
      <Logo />

      <ul className="flex items-center gap-4 flex-1">
        <li>
          <Link href={"/issue-board"}>Issue board</Link>
        </li>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
      </ul>

      <LogoutButton />
    </nav>
  );
};

export default Navbar;
