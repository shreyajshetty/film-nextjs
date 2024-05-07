"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`Password reset email sent to: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 ">
      <Card>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-semibold mt-0">Forgot Password?</h1>
          <h5 className="text-sm font-medium text-gray-500">
            Enter your email address to reset your password
          </h5>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="bg-blue-100 rounded-md p-3 outline-none hover:bg-blue-200 hover:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 px-20 py-2 rounded-lg text-white text-l hover:bg-blue-700"
            >
              Reset Password
            </button>
          </form>

          <Link href="/login" className="text-blue-800 hover:underline">
            Back to Login
          </Link>
        </div>
      </Card>
    </div>
  );
}
