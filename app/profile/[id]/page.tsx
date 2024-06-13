"use client";

interface UserProfileProps {
  params: {
    id: string;
  };
  searchParams: object;
}

const UserProfile = ({ params }: UserProfileProps) => {
  // console.log(params);
  return (
    <>
      <div>UserProfile of {params.id}</div>
    </>
  );
};

export default UserProfile;
