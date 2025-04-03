"use client";

import { useParams } from "next/navigation";

export default function UserPage() {
  const { id } = useParams(); // Get dynamic ID from URL

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}
