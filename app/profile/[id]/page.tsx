"use client";

import React, { useState } from "react";

interface UserProfileProps {
  params: {
    id: string;
  };
  searchParams: object;
}

interface UserInfo {
  username?: string;
  email?: string;
  id?: string;
}

const UserProfile = ({ params }: UserProfileProps) => {
  const [user, setUser] = useState<UserInfo>({});

  const getUserInfo = async () => {
    const response = await fetch("/api/user/me");
    const {
      data: { user },
    } = await response.json();
    console.log(user);
    setUser(user);
  };

  return (
    <>
      <button
        className="m-4 p-2 bg-slate-400 rounded-lg text-white"
        onClick={getUserInfo}
      >
        get information of the user
      </button>
      <div>UserProfile of {user.username}</div>
    </>
  );
};

export default UserProfile;
