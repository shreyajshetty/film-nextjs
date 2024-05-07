"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useState } from "react";
export default function SignUpPage() {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleSignUp = () => {
    if (inputFocused) {
      console.log("Signing up...");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center m-5 ">
      <Card>
        <div className="flex flex-col items-center justify-center   gap-5">
          <h1 className=" text-2xl font-semibold">Sign Up</h1>
          <h5 className=" text-sm font-medium text-gray-500">
            Create your account
          </h5>

          <input
            className="bg-blue-100 rounded-md p-3 outline-none hover:bg-blue-200 hover:outline-none"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="bg-blue-100 rounded-md  p-3 outline-none  hover:bg-blue-200 hover:outline-none"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="bg-blue-100 rounded-md  p-3 outline-none hover:bg-blue-200 hover:outline-none"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="bg-blue-100 rounded-md  p-3 outline-none hover:bg-blue-200 hover:outline-none"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <button
            className={`bg-blue-600 px-20 py-2 rounded-lg text-white text-l hover:bg-blue-700 ${
              inputFocused ? "" : "cursor-not-allowed opacity-50"
            }`}
            onClick={handleSignUp}
            disabled={!inputFocused}
          >
            <Link href="/">Sign Up</Link>
          </button>
        </div>
      </Card>
    </div>
  );
}
