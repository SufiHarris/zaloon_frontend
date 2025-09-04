"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { IconInput } from "@/components/shared/icon-input"; // <-- import your reusable input
import { Mail, Lock } from "lucide-react"; // example icons, you can swap
import Image from "next/image";
import picture from "../../../public/assets/Login.jpg";
import { PasswordInput } from "@/components/shared/passwordInput";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 max-h-screen">
        <Image
          src={picture}
          className="h-full w-full"
          layout="fill"
          objectFit="cover"
          alt=".."
        />
      </div>
      <div className="flex-1 z-10 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            <span className="text-white">Sign in to</span> your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Demo: Use any email with password "password"
          </p>

          <div className="mt-8 py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="text-sm text-red-700">{error}</div>
                </div>
              )}

              {/* Email Input */}
              <IconInput
                id="email"
                type="email"
                label="Email Address"
                icon={<Mail size={18} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                autoComplete="email"
              />

              <PasswordInput
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />

              <Button type="submit" disabled={loading} className="w-full ">
                {loading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="text-center">
                <Link
                  href="/signup"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Don't have an account? Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
