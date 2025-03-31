"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className=" flex justify-center items-center">
      <div className=" bg-white text-black w-3xl flex flex-col space-y-2.5 items-center">
        <h2>Register</h2>
        <div className=" space-y-2.5  w-auto">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
