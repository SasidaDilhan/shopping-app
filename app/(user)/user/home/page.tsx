"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user.id);

  return (
    <div>
      Home
      <p>{user.name}</p>
      {user?.id && (
        <Link href={`/user/${user.id}`} className="text-blue-500 underline">
          Click Here!
        </Link>
      )}
    </div>
  );
};

export default page;
