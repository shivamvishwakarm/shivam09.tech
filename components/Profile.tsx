"use client";
import React from "react";
import Image from "next/image";
const ProfileImage = () => {
  return (
    <Image
      draggable={false}
      className="size-20 md:size-32 rounded-full "
      src="/profile.png"
      alt="profile"
      width={40}
      height={40}
    />
  );
};

export default ProfileImage;
