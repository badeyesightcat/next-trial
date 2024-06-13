"use client";

import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const getUserInfo = async () => {
    const response = await fetch("/api/user/me");
    const {
      data: { user },
    } = await response.json();
    console.log(user);
    router.push(`/profile/${user.username}`);
  };
  return (
    <div>
      <h1>Profile</h1>
      <button
        className="m-4 p-2 bg-slate-400 rounded-lg text-white"
        onClick={getUserInfo}
      >
        get information of the user
      </button>
    </div>
  );
};

export default Profile;
