import React from "react";
type ProfileUserProps = {
  userName: string;
};
const ProfileUser = ({ userName }: ProfileUserProps) => {
  return <div className="font-bold text-2xl ml-2">{userName}</div>;
};

export default ProfileUser;
