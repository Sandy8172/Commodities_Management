"use client";
import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSignupSchema";
import { isAuthenticated, setSession } from "@/utils/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  //  Redirecting if already authenticated---------
  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/");
    }
  }, [router]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        return;
      }
      setSession(result.token);
      router.push("/signup");
      reset();

      alert("Login successful");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between bg">
      <section className="w-[60%] flex flex-col items-center justify-center font-sans">
        <Card className="w-full max-w-lg border-none shadow-none">
          <CardHeader>
            <CardTitle className={"text-5xl font-bold text-center "}>
              Welcome Back
            </CardTitle>
            <CardDescription
              className={"text-center capitalize text-black text-lg mt-2"}
            >
              sign in to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className={"h-12 bg-gray-100 placeholder:text-gray-400"}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Password"
                    className={"h-12 bg-gray-100 placeholder:text-gray-400"}
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-8 py-6 rounded-2xl text-md font-normal tracking-wider bg-violet-500"
                disabled={loading}
              >
                {loading ? "Loading... " : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <p className="text-lg">OR</p>
            <Button
              variant="outline"
              className="w-full mt-5 py-6 rounded-2xl text-md font-normal  "
            >
              <Image
                src="/google.png"
                width={20}
                height={20}
                alt="google-img"
              />
              Sign in with Google
            </Button>
            <Button
              variant="outline"
              className="w-full mt-2 py-6 rounded-2xl text-md font-normal  "
            >
              <Image
                src="/facebook.png"
                width={22}
                height={20}
                alt="google-img"
              />
              Sign in with Facebook
            </Button>
            <p className="mt-2">
              Don't have an acount?{" "}
              <Link href="/signup" className="text-blue-500 font-bold">
                Sign-up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </section>

      <section className="w-[40%]">
        <Image
          src="/SignIn.png"
          alt="Sign in Pic"
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-screen"
        />
      </section>
    </div>
  );
};

export default LoginPage;
