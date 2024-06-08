"use client";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/user/logout");
      const data = await response.json();
      console.log(data);
      router.push("/login");
      toast.success("Logged out successfully");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="mr-8 px-4 py-2 border-4 border-transparent hover:border-[#01bf64] hover:border-dashed rounded-lg"
    >
      Log out
    </button>
  );
};

export default LogoutButton;
