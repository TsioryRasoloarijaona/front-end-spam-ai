import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { UserInfo } from "@/interfaces/UserInfo";
import { useState } from "react";
import { postMethod } from "@/utils/fecthing";
import { useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Info() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserInfo>();
  const [gender , setGender] = useState<"MALE" | "FEMALE">();

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    data.gender = gender ?? "MALE"; 
    console.log("Form Data:", data);
    postMethod<UserInfo>(null, "api/people/info/save", data)
      .then((response) => {
        console.log("Response:", response);
        navigate(`/signUp/${response.replace(/"/g, "")}`);
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-[100vw] h-full grid grid-cols-2">
      <form
        className="flex flex-col justify-center items-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-3xl mb-3">create your account</h1>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="firstName">
            first name<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <Input
                type="text"
                id="firstName"
                placeholder="first name"
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="lastName">lastname</Label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <Input
                type="text"
                id="lastName"
                placeholder="last name"
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="secondName">second name</Label>
          <Controller
            name="secondName"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                id="secondName"
                placeholder="second name"
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
        </div>
        <div className="w-1/2 space-y-1">
          <Label htmlFor="dateOfBirth">
            date of birth<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="dateOfBirth"
            control={control}
            rules={{ required: "Date of birth is required" }}
            render={({ field }) => (
              <Input
                type="date"
                id="dateOfBirth"
                placeholder=""
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>
        <div className="w-1/2 space-y-1">
          <Label>gender</Label>
          <Select
            onValueChange={(value) => {
              setGender(value as "MALE" | "FEMALE");
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>
        <div className="w-1/2 mt-3">
          <Button size={"lg"} className="w-full bg-teal-700 hover:bg-teal-500" type="submit">
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
        
      </div>
    </div>
  );
}
