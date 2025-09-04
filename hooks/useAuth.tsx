"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { cookieUtils } from "@/lib/auth/cookies";
import { User, authAPI } from "@/lib/auth/auth";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = cookieUtils.get("auth-token");
    if (token) {
      authAPI.verifyToken(token).then((user) => {
        setUser(user);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authAPI.login(email, password);
    if (response.success && response.token && response.user) {
      cookieUtils.set("auth-token", response.token, 7);
      setUser(response.user);
      router.push("/dashboard");
      return { success: true };
    }
    return { success: false, message: response.message };
  };

  const signup = async (name: string, email: string, password: string) => {
    const response = await authAPI.signup(name, email, password);
    if (response.success && response.token && response.user) {
      cookieUtils.set("auth-token", response.token, 7);
      setUser(response.user);
      router.push("/dashboard");
      return { success: true };
    }
    return { success: false, message: response.message };
  };

  const logout = () => {
    cookieUtils.remove("auth-token");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
