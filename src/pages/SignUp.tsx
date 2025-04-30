import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { listCountry, country } from "../utils/country";

function selectCountry() {
  const list: country[] = listCountry;
  return (
    <>
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="country" />
        </SelectTrigger>
        <SelectContent>
          {list.map((item) => (
            <SelectItem
              key={item.code}
              value={item.dial_code}
            >{`${item.emoji} ${item.name} ${item.dial_code}`}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

function stringLength(str: string): boolean {
  return str.length >= 6;
}

function capitalLetter(str: string): boolean {
  return str.toLowerCase() !== str;
}

function numericNumber(str: string): boolean {
  return /\d/.test(str);
}

const SignUp: React.FC = () => {
  const [strLength, setStrLength] = useState(false);
  const [capLetter, setCapLetter] = useState(false);
  const [numNumber, setNumNumber] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [pass, setPass] = useState(false);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStrLength(stringLength(value));
    setCapLetter(capitalLetter(value));
    setNumNumber(numericNumber(value));
  };
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 items-center">
      <form className="flex flex-col justify-center items-center gap-6 px-4 md:px-0">
        <h1 className="font-bold text-2xl md:text-3xl mb-3 text-center">
          Create your account
        </h1>
        <div className="w-full md:w-1/2 space-y-1">
          <Label htmlFor="email">
            Choose your email address<span className="text-red-500">*</span>
          </Label>
          <div className="flex gap-2">
            <Input type="email" id="email" placeholder="email@smail.com" />
            <Input type="text" id="email" value={"@smail.com"} />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-1">
          <Label htmlFor="email">
            Phone number <span className="text-red-500">*</span>
          </Label>
          <div className="flex gap-2">
            {selectCountry()}
            <Input type="text" id="email" placeholder="phone number" />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          <Label htmlFor="email">Password</Label>
          <div className="relative">
            <Input
              type={pass ? "text" : "password"}
              id="password"
              placeholder="password"
              onChange={handlePasswordChange}
              className="pr-10"
              onFocus={() => {
                setShowCondition(true);
              }}
              onBlur={() => {
                setShowCondition(false);
              }}
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
          <div>
            <ul
              className="text-xs space-y-1"
              {...(showCondition
                ? { style: { display: "block" } }
                : { style: { display: "none" } })}
            >
              <li
                className={`flex items-center gap-2 ${
                  strLength ? "text-green-700" : "text-gray-500"
                }`}
              >
                At least 6 characters{" "}
                {strLength ? <MdDone /> : <RiErrorWarningLine />}
              </li>
              <li
                className={`flex items-center gap-2 ${
                  capLetter ? "text-green-700" : "text-gray-500"
                }`}
              >
                At least 1 capital letter{" "}
                {capLetter ? <MdDone /> : <RiErrorWarningLine />}
              </li>
              <li
                className={`flex items-center gap-2 ${
                  numNumber ? "text-green-700" : "text-gray-500"
                }`}
              >
                At least one numeric number{" "}
                {numNumber ? <MdDone /> : <RiErrorWarningLine />}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-3">
          <Button size={"lg"} className="w-full">
            Verify phone number
          </Button>
        </div>
        <div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/signIn"} className="underline">
              Sign in
            </Link>
          </p>
        </div>
      </form>
      <div className="hidden md:flex h-full justify-center items-center">
        <DotLottieReact src="Animation - 1743905592629.lottie" loop autoplay />
      </div>
    </div>
  );
};

export default SignUp;
