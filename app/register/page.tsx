"use client";

import Image from "next/image";
import { useState } from "react";
import RegisterImage from "@/app/assets/register_image.png";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import Swal from "sweetalert2";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      // Check if the registration was successful (status code 200-299)
      // alert(data.message || "Registration successful!");
      Swal.fire({
        title: "Registration successful!",
        text: data.message,
        icon: "success",
      });
      router.push("/"); // Redirect to the login page
    } else {
      alert(data.error || "Registration failed."); //Display error message
      Swal.fire({
        title: "Registration successful!",
        text: data.error,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen w-full">
      <div className=" flex justify-center  w-5xl m-auto ">
        <div className=" hidden md:flex">
          <Image src={RegisterImage} alt="Register Blog Image" />
        </div>

        <div className="flex flex-col w-[400px] p-2 md:w-2xl justify-center  space-y-3">
          <span className=" flex justify-center items-center text-3xl font-bold">
            Register
          </span>
          <input
            className=" bg-white/20 rounded-3xl p-3"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className=" bg-white/20 rounded-3xl p-3"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" bg-white/20 rounded-3xl p-3"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="p-3 bg-white/20 hover:bg-green-500 duration-300 cursor-pointer   hover:text-black font-bold"
            onClick={handleRegister}
          >
            Register
          </button>

          <span>
            Already have an account?{" "}
            <Link href="/" className=" text-blue-500">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
