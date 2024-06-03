"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { yeseva } from "@/public/font";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formLoader, setFormLoader] = useState(false);

  const handleLogin = async () => {
    try {
      setFormLoader(true);

      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(user),
      });
      console.log("Login success");
      toast.success("Logged in successfully");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setFormLoader(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <fieldset className="flex flex-col w-6/12 mx-auto my-auto gap-4 relative max-w-md">
      {formLoader && <Spinner />}
      <legend
        className={`${yeseva.className} text-6xl text-black text-opacity-20 absolute -z-1 top-[-2rem] right-[-1rem]`}
      >
        Log in
      </legend>
      <label className="flex items-start gap-2 flex-col relative z-10">
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
        className="bg-[#01bf64] h-16 text-white text-xl disabled:bg-slate-300 disabled:cursor-not-allowed"
        onClick={handleLogin}
        disabled={buttonDisabled}
      >
        Log in to manage issues
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
