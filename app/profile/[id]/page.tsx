"use client";

import React, { useState } from "react";

type UserProfileProps = {
  params: {
    id: string;
  };
  searchParams: object;
};

type UserInfo = {
  username?: string;
  email?: string;
  id?: string;
};

const UserProfile = ({ params }: UserProfileProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  const getuserInfo = async () => {
    const response = await fetch("/api/user/me");
    const {
      data: { userInfo },
    } = await response.json();
    console.log(userInfo);
    setUserInfo(userInfo);
  };

  return (
    <>
      <button
        className="m-4 p-2 bg-slate-400 rounded-lg text-white"
        onClick={getuserInfo}
      >
        get information of the user
      </button>
      <div>UserProfile of {userInfo.username}</div>
    </>
  );
};

export default UserProfile;
