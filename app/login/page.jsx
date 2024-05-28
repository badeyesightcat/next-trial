"use client";

import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});

  const handleLogin = async () => {
    console.log(user);
  };

  return (
    <fieldset className="flex flex-col w-6/12 mx-auto p-8 my-auto gap-6">
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
        onClick={handleLogin}
      >
        Sign up to manage issues
      </button>
      <Link
        href={"/signup"}
        className="border-b-4 hover:border-b-4 hover:border-b-[#01bf64] hover:border-dashed"
      >
        Or if you want to sign up...
      </Link>
    </fieldset>
  );
};

export default Login;
