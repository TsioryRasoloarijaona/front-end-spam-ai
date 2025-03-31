import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Info() {
  return (
    <div className="w-[100vw] flex justify-center items-center  h-[100vh] bg-[#F7F7F7]">
      <div className="flex flex-col justify-center items-center gap-6 w-1/2 ">
        <h1 className="font-bold text-3xl mb-3">
          fill your personnal information
        </h1>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">
            firstname<span className="text-red-500">*</span>
          </Label>
          <Input type="text" id="email" placeholder="firstname" />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">second name - optionnal</Label>
          <Input type="text" id="email" placeholder="second name" />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">lastname</Label>
          <Input type="text" id="email" placeholder="name" />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">
            birth date<span className="text-red-500">*</span>
          </Label>
          <Input type="date" id="email" placeholder="date of birth" />
        </div>
        <div className="w-1/2 mt-3">
          <Button size={"lg"} className="w-full">
            create account <FaArrowRight />
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
      </div>
    </div>
  );
}
