"use client";

import React from "react";

type UserProfileProps = {
  params: {
    id: string;
  };
  searchParams: object;
};

const UserProfile = ({ params }: UserProfileProps) => {
  const { id } = params;

  return <div>UserProfile of {id}</div>;
};

export default UserProfile;
