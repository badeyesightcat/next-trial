"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { yeseva } from "@/public/font";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formLoader, setFormLoader] = useState(false);

  const handleSignUp = async () => {
    try {
      setFormLoader(true);
      const response = await fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify(user),
      });
      console.log("Signup success", response);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed:", error.message);
      toast.error(error.message);
    } finally {
      setFormLoader(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <fieldset className="flex flex-col w-6/12 mx-auto my-auto gap-4 relative max-w-md">
      <legend
        className={`${yeseva.className} text-6xl text-black text-opacity-20 absolute -z-1 top-[-2rem] right-[-.5rem]`}
      >
        Sign up
      </legend>
      <label className="flex items-start gap-1 flex-col relative z-10">
        <span className="">Username</span>
        <input
          id="username"
          placeholder="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="bg-white rounded-2xl py-2 px-3 h-16 w-full"
        />
      </label>
      <label className="flex items-start gap-1 flex-col">
        <span className="">Email</span>
        <input
          id="email"
          placeholder="email address"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="bg-white rounded-2xl py-2 px-3 h-16 w-full"
        />
      </label>
      <label className="flex items-start gap-1 flex-col">
        <span className="">Password</span>
        <input
          id="password"
          placeholder="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="bg-white rounded-2xl py-2 px-3 h-16 w-full"
        />
      </label>
      <button
        type="button"
        className="bg-[#01bf64] h-16 text-white text-xl mt-7 disabled:bg-slate-300 disabled:cursor-not-allowed"
        onClick={handleSignUp}
        disabled={buttonDisabled}
      >
        Sign up to manage issues
      </button>
      <Link
        href={"/login"}
        className="border-b-4 hover:border-b-4 hover:border-b-[#01bf64] hover:border-dashed"
      >
        Or if you want to log in...
      </Link>
    </fieldset>
  );
};

export default SignUp;
