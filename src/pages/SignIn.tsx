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
import Cookies from "js-cookie";
import { useWebSocket } from "../hooks/webSocketContext";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ThemeButton from "@/components/ui/ThemeButton";

interface loginRequest {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigate = useNavigate();
  const [pass, setPass] = useState(false);
  const { connectWebSocket } = useWebSocket();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<loginRequest>();
  const email = watch("email");
  const password = watch("password");

  const onSubmit: SubmitHandler<loginRequest> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      postMethod<loginRequest>(null, "api/account/signIn", data)
        .then((token) => {
          Cookies.set("authToken", token, { expires: 1 });
          connectWebSocket(token?.replace(/"/g, ""));
          navigate("/dash/inbox/2");
        })
        .catch((error) => {
          if (error.response) {
            toast.error("Invalid email or password");
            reset({
              email: "",
              password: "",
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-white px-4">
      <ThemeButton/>
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-md md:w-1/2">
        <DotLottieReact
          src="message.lottie"
          loop
          autoplay
          style={{ width: "150px", height: "150px" }}
        />
        <h1 className="font-bold text-2xl md:text-3xl mb-3 text-center">
          Welcome back
        </h1>
        <form
          className="w-full flex flex-col items-center gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full space-y-1">
            <Label htmlFor="email">Mail Address</Label>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Input
                  type="email"
                  id="email"
                  placeholder="email@maily.tech"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full space-y-1">
            <Label htmlFor="password">Password</Label>
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
            <p className="text-sm text-right mt-3">Forgot password?</p>
          </div>

          <div className="w-full mt-3">
            <Button
              size={"lg"}
              className="w-full bg-teal-700 hover:bg-teal-800"
              type="submit"
              disabled={isLoading || !email || !password}
            >
              {isLoading ? (
                <PulseLoader size={8} color="#ffffff" />
              ) : (
                <>
                  Sign In <FaArrowRight />
                </>
              )}
            </Button>
          </div>
        </form>

        <div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to={"/info"} className="underline">
              Create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
