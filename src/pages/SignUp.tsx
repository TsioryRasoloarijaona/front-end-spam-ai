import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
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
  const [password, setPassword] = useState("");
  const [strLength, setStrLength] = useState(false);
  const [capLetter, setCapLetter] = useState(false);
  const [numNumber, setNumNumber] = useState(false);
  const [pass, setPass] = useState(false);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setStrLength(stringLength(value));
    setCapLetter(capitalLetter(value));
    setNumNumber(numericNumber(value));
  };
  return (
    <div className="w-[100vw] h-full grid grid-cols-2">
      <form className="flex flex-col justify-center items-center gap-6 ">
        <h1 className="font-bold text-3xl mb-3">create your account</h1>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">
            choose your email adddress<span className="text-red-500">*</span>
          </Label>
          <div className="flex gap-2">
            <Input type="email" id="email" placeholder="email@smail.com" />
            <Input type="text" id="email" value={"@smail.com"} />
          </div>
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">
            phone number <span className="text-red-500">*</span>
          </Label>
          <div className="flex gap-2">
            {selectCountry()}
            <Input type="text" id="email" placeholder="phone number" />
          </div>
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">password</Label>
          <div className="relative">
            <Input
              type={pass ? "text" : "password"}
              id="password"
              placeholder="password"
              onChange={handlePasswordChange}
              className="pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={() => setPass(!pass)}
            >
              {pass ? (
                <MdOutlineRemoveRedEye className="text-lg"/>
              ) : (
                <FaRegEyeSlash className="text-lg" />
              )}
            </button>
          </div>
          <div>
            <ul className="text-xs  space-y-1">
              <li
                className={`flex items-center gap-2 ${
                  strLength ? "text-green-700" : "text-gray-500"
                }`}
              >
                at least 6 characters{" "}
                {strLength ? <MdDone /> : <RiErrorWarningLine />}
              </li>
              <li
                className={`flex items-center gap-2 ${
                  capLetter ? "text-green-700" : "text-gray-500"
                }`}
              >
                at least 1 capital letter{" "}
                {capLetter ? <MdDone /> : <RiErrorWarningLine />}
              </li>
              <li
                className={`flex items-center gap-2 ${
                  numNumber ? "text-green-700" : "text-gray-500"
                }`}
              >
                at least one numeric number{" "}
                {numNumber ? <MdDone /> : <RiErrorWarningLine />}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 mt-3">
          <Button size={"lg"} className="w-full">
            verify phone number
          </Button>
        </div>
        <div>
          <p>
            already have an account ?{" "}
            <Link to={"/"} className="underline">
              sign in
            </Link>
          </p>
        </div>
      </form>
      <div className=" h-[100vh] flex justify-center items-center">
        <img
          src="src/assets/mailbox.png"
          alt="Description of image"
          className="w-2/3 h-2/3"
        />
      </div>
    </div>
  );
};

export default SignUp;
