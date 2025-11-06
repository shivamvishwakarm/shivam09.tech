"use client";
import React from "react";
import Image from "next/image";
const ProfileImage = () => {
  return (
    <Image
    quality={100}
    priority={true}
      className="size-16 md:size-32 rounded-full md:border-2 border-1 border-dashed  border-neutral-400 p-1"
      src="/profile.png"
      alt="profile"
      width={100}
      height={100}
    />
  );
};

export default ProfileImage;
