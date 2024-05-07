"use client";
import Link from "next/link";
import Card from "@/components/Card";
import { useState } from "react";

export default function SignUpPage() {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleLogIn = () => {
    if (inputFocused) {
      console.log("Loging up...");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <Card>
        <div className="flex flex-col  items-center card gap-5">
          <h1 className=" text-3xl font-semibold mt-5">Welcome Back</h1>
          <h5 className=" text-sm font-medium text-gray-500">
            Enter your credential to login
          </h5>

          <input
            className="bg-blue-100 rounded-md p-3 outline-none hover:bg-blue-200 hover:outline-none"
            type="text"
            placeholder="Username"
            required
          />

          <input
            className="bg-blue-100 rounded-md  p-3 outline-none hover:bg-blue-200 hover:outline-none"
            type="password"
            placeholder="Password"
            required
          />
          <button
            className={`bg-blue-600 px-20 py-2 rounded-lg text-white text-l hover:bg-blue-700 ${
              inputFocused ? "" : "cursor-not-allowed opacity-50"
            }`}
            onClick={handleLogIn}
            disabled={!inputFocused}
          >
            <Link href="/">Sign Up</Link>
          </button>
          <Link
            href="/forgot-password"
            className="text-blue-800 hover:underline"
          >
            Forgot password?
          </Link>
          <h5>
            Dont have an account?{" "}
            <Link href="/signup" className="text-blue-800 hover:underline">
              Sign Up
            </Link>
          </h5>
        </div>
      </Card>
    </div>
  );
}
SignUpPage.getLayout = function getLayout() {
  return null;
};
