"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import LoginImage from "@/app/assets/login_robot.png";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false, // ✅ Prevent auto redirection
    });

    if (response?.error) {
      Swal.fire({
        title: "Invalid email or password!",
        text: "Please enter valid credintials",
        icon: "error",
      });
    } else {
      window.location.href = "/user/home"; // ✅ Redirect on success
    }
  };
  const isDisabled = !email || !password;

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className=" flex flex-col justify-center items-center w-4xl m-auto  md:flex md:flex-row">
        <div className="hidden md:flex w-full">
          <Image
            width={500}
            height={80}
            src={LoginImage}
            alt="Login Robot Image"
          />
        </div>
        <div className="  flex flex-col w-[400px] p-2  justify-center md:w-4xl space-y-3">
          <span className=" flex justify-center items-center text-3xl font-bold">
            Login
          </span>
          <input
            className=" bg-white/20 rounded-3xl p-3"
            required
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" bg-white/20 rounded-3xl p-3"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className={`p-3 rounded-3xl font-bold duration-300 cursor-pointer ${
              isDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 hover:text-black"
            }`}
            onClick={handleLogin}
            disabled={isDisabled}
          >
            {loading ? "Logging in..." : "Login"} {/* ✅ Show loading text */}
          </button>
          <span>
            Dont't have an account?{" "}
            <Link href="/register" className=" text-blue-500">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
