import React from "react";
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
import { z } from "zod";


const SignupPage = () => {
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
              sign up for free
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className={"h-12 bg-gray-100 placeholder:text-gray-400"}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Password"
                    className={"h-12 bg-gray-100 placeholder:text-gray-400"}
                  />
                </div>
              </div>
              <div className="mt-5">
                <input id="checkbox" type="checkbox" required />
                <label className="ml-2 text-sm">
                  I agree to all Term, Privacy Policy and fees
                </label>
              </div>
              <Button
                type="submit"
                className="w-full mt-5 py-6 rounded-2xl text-md font-normal tracking-wider bg-violet-500"
              >
                Get Started
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
              Already have an acount?
              <Link href="/login" className="text-blue-500 font-bold">
                Login
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

export default SignupPage;
