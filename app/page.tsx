"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import LoginImage from "@/app/assets/login_robot.png";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className=" flex justify-center  w-4xl m-auto">
        <div>
          <Image src={LoginImage} alt="Login Robot Image" />
        </div>
        <div className="  flex flex-col w-2xl justify-center  space-y-3">
        <span className=" flex justify-center items-center text-3xl font-bold">Login</span>
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
          <div className=" flex justify-between gap-2">
            <button
              className="p-3 bg-white/20 rounded-3xl hover:bg-green-500 duration-300 cursor-pointer w-1/2  hover:text-black font-bold"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link
              href="/register"
              className="p-3 bg-white/20 rounded-3xl hover:bg-black duration-300 cursor-pointer w-1/2 font-bold flex justify-center"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
