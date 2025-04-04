"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserPage() {
  const { id } = useParams(); // Get dynamic ID from URL
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err: any) {
        setError(err.message || "Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
}
