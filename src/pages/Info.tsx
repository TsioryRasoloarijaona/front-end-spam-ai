import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Info() {
  return (
    <div className="w-[100vw] h-full grid grid-cols-2">
      <form className="flex flex-col justify-center items-center gap-6 ">
        <h1 className="font-bold text-3xl mb-3">create your account</h1>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">
            first name<span className="text-red-500">*</span>
          </Label>

          <Input type="text" id="email" placeholder="email@smail.com" />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">lastname</Label>
          <Input type="text" id="email" placeholder="phone number" />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">second name</Label>
          <Input type="text" id="email" placeholder="phone number" />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="email">
            date of birth<span className="text-red-500">*</span>
          </Label>
          <Input type="date" id="email" placeholder="phone number" />
        </div>
        <div className="w-1/2 mt-3">
          <Button size={"lg"} className="w-full">
            next
          </Button>
        </div>
        <div>
          <p>
            already have an account ?{" "}
            <Link to={"/signIn"} className="underline">
              sign in
            </Link>
          </p>
        </div>
      </form>
      <div className=" h-[100vh] flex justify-center items-center">
        <DotLottieReact src="Animation - 1743905592629.lottie" loop autoplay />
      </div>
    </div>
  );
}
