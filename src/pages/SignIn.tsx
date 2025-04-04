import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { postMethod } from "@/utils/fecthing";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie'
import { useWebSocket } from "./layouts/Inbox/webSocketContext";

interface loginRequest {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigate = useNavigate();
  const [pass, setPass] = useState(false);
  const {connectWebSocket} = useWebSocket()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginRequest>();

  const onSubmit: SubmitHandler<loginRequest> = (data) => {
    postMethod<loginRequest>(null, "api/account/signIn", data)
      .then((token) => {
        Cookies.set('authToken' , token , {expires: 1});
        connectWebSocket(token?.replace(/"/g, ""))
        navigate("/dash/inbox/2");
      })
      .catch((error) => {
        if (error.response) {
          alert("Invalid email or password");
        }
      });
  };

  return (
    <div className="w-[100vw] flex justify-center items-center h-[100vh] bg-[#F7F7F7]">
      <div className="flex flex-col justify-center items-center gap-8 w-1/2">
        <h1 className="font-bold text-3xl mb-3">login and start using smail</h1>
        <form
          className="w-full flex flex-col items-center gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-1/2 space-y-1">
            <Label htmlFor="email">mail address</Label>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Input
                  type="email"
                  id="email"
                  placeholder="email@smail.com"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="w-1/2 space-y-1">
            <Label htmlFor="password">password</Label>
            <div className="relative">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <Input
                    type={pass ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    className="pr-10"
                    {...field}
                  />
                )}
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="w-1/2 mt-3">
            <Button size={"lg"} className="w-full" type="submit">
              sign in <FaArrowRight />
            </Button>
          </div>
        </form>

        <div>
          <p>
            don't have an account?{" "}
            <Link to={"/info"} className="underline">
              create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
