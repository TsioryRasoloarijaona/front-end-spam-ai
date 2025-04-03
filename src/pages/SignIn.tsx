import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const [pass, setPass] = useState(false);
  return (
    <div className="w-[100vw] flex justify-center items-center  h-[100vh] bg-[#F7F7F7]">
      <div className="flex flex-col justify-center items-center gap-8 w-1/2 ">
        <h1 className="font-bold text-3xl mb-3">login and start using smail</h1>
        <form action="" className="w-full flex flex-col items-center gap-6">
          <div className="w-1/2 space-y-1">
            <Label htmlFor="email">mail address</Label>
            <Input type="email" id="email" placeholder="email@smail.com" />
          </div>
          <div className="w-1/2 space-y-1">
            <Label htmlFor="email">password</Label>
            <div className="relative">
              <Input
                type={pass ? "text" : "password"}
                id="password"
                placeholder="password"
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={() => setPass(!pass)}
              >
                {pass ? (
                  <MdOutlineRemoveRedEye className="text-lg" />
                ) : (
                  <FaRegEyeSlash className="text-lg" />
                )}
              </button>
            </div>
          </div>
          <div className="w-1/2 mt-3">
            <Button size={"lg"} className="w-full">
              sign in <FaArrowRight />
            </Button>
          </div>
        </form>
        <div>
          <p>
            dont have an account ?{" "}
            <Link to={"/info"} className="underline">
              create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
