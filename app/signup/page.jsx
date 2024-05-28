"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const SignUp = () => {
  const [user, setUser] = useState({});

  const handleSignUp = async () => {
    console.log(user);
  };

  return (
    <fieldset className="flex flex-col w-6/12 mx-auto p-8 my-auto gap-6 relative">
      <legend
        className={`${yeseva.className} text-6xl text-black text-opacity-20 absolute -z-1 top-[0.125rem] right-[-.5rem]`}
      >
        Sign up
      </legend>
      <label className="flex items-start gap-2 flex-col relative z-10">
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
      <label className="flex items-start gap-2 flex-col">
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
      <label className="flex items-start gap-2 flex-col">
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
        className="bg-[#01bf64] h-16 text-white text-xl"
        onClick={handleSignUp}
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
