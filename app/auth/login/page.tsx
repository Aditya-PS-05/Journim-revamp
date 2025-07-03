"use client";

import { EyeOffIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        toast.error("Invalid credentials. Please try again.");
        return;
      }

      toast.success("Login successful! Welcome back.");
      router.replace("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] h-[1024px] relative">
        <div className="absolute w-[618px] h-[816px] top-[104px] left-[720px]">
          <div className="relative h-[816px]">
            <img
              className="absolute w-[616px] h-[816px] top-0 left-0 object-cover rounded-lg"
              alt="Mountain"
              src="/images/auth/mountain.png"
            />
            <div className="absolute w-[616px] h-[58px] top-[758px] left-0.5 rounded-[30px_30px_0px_0px] [background:linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]" />

            <div className="inline-flex items-start gap-2 absolute top-[782px] left-[274px]">
              <div className="relative w-8 h-2.5 bg-[#2dc3d7] rounded-[5px]" />
              <div className="relative w-2.5 h-2.5 bg-neutrals rounded-[5px]" />
              <div className="relative w-2.5 h-2.5 bg-neutrals rounded-[5px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[512px] items-start gap-12 absolute top-[204px] left-[104px]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <h1 className="text-[40px] font-medium font-montserrat text-black mt-[-1.00px]">
              Login
            </h1>

            <p className="opacity-75 text-blackish-green font-montserrat-regular-16px">
              Login to access your Journim account
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-10 relative self-stretch w-full"
          >
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="w-full">
                <div className="flex items-center border border-[#79747e] rounded bg-neutrals">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-4 pr-0 py-2 rounded bg-neutrals border-none"
                    placeholder="john.doe@gmail.com"
                  />
                  <span className="bg-white inline-flex items-center px-1 py-0 absolute -top-2 left-3 bg-neutrals text-[#1c1b1f] text-sm">
                    Email
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="relative">
                  <div className="flex items-center border border-[#79747e] rounded bg-neutrals">
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      className="h-14 pl-4 pr-0 py-2 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="**********"
                    />
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      className="h-12 w-12"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-6 w-6" />
                      ) : (
                        <EyeIcon className="h-6 w-6" />
                      )}
                    </Button>
                  </div>
                  <span className="bg-white inline-flex items-center px-1 py-0 absolute -top-2 left-3 bg-neutrals text-blackish-green text-sm">
                    Password
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember-me" />
                  <label
                    htmlFor="remember-me"
                    className="font-montserrat-medium-14px text-blackish-green"
                  >
                    Remember me
                  </label>
                </div>

                <Button
                  variant="link"
                  className="p-0 h-auto font-montserrat-medium-14px text-slamon"
                >
                  Forgot Password
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#2dc3d7] text-blackish-green font-montserrat-semibold-14px hover:bg-[#25afc1] disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
              <p className="w-full text-center text-sm">
                <span className="font-medium text-[#112211]">
                  Don&apos;t have an account?{" "}
                </span>
                <Button
                  variant="link"
                  className="p-0 h-auto font-montserrat-semibold-14px text-[#ff8682]"
                >
                  <Link href="/auth/signup">Sign up</Link>
                </Button>
              </p>
            </div>

            <div className="flex items-center gap-4 w-full">
              <Separator className="flex-1 bg-blackish-green opacity-25" />
              <span className="opacity-50 font-montserrat-regular-14px text-blackish-green">
                Or login with
              </span>
              <Separator className="flex-1 bg-blackish-green opacity-25" />
            </div>

            <div className="flex items-start gap-4 w-full">
              <Card className="flex-1 border border-[#2dc3d7] rounded p-2">
                <CardContent className="flex justify-center items-center">
                  <img
                    className="w-6 h-6 m-4"
                    alt="Facebook"
                    src="/images/auth/facebook.png"
                  />
                </CardContent>
              </Card>

              <Card className="flex-1 border border-[#2dc3d7] rounded p-2">
                <CardContent className="flex justify-center items-center">
                  <img
                    className="w-6 h-6 m-4"
                    alt="Google"
                    src="/images/auth/google.png"
                  />
                </CardContent>
              </Card>

              <Card className="flex-1 border border-[#2dc3d7] rounded p-2">
                <CardContent className="flex justify-center items-center">
                  <img
                    className="w-6 h-6 m-4"
                    alt="Apple"
                    src="/images/auth/apple.png"
                  />
                </CardContent>
              </Card>
            </div>
          </form>
        </div>

        <div className=" american-captain absolute top-[123px] left-[104px] [font-family:'American_Captain-Regular',Helvetica] font-normal text-[#2dc3d7] text-[42px] tracking-[0] leading-normal whitespace-nowrap">
          Journim
        </div>
      </div>
    </div>
  );
}
