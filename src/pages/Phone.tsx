import { Button } from "../components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useAccountStore from "@/hooks/accountStore";
import React, { useState } from "react";
import { toast } from "sonner";
import { UserAccount } from "@/interfaces/UserAccount";
import { postMethod, postMethodUuid } from "@/utils/fecthing";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useWebSocket } from "@/hooks/webSocketContext";

export default function Phone() {
  const { phoneNumber, email, password, peopleInfo } = useAccountStore();
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();
  const { connectWebSocket } = useWebSocket();

  const postAction = async (code: string) => {
    const Authorization: string = await postMethod<string>(
      null,
      `api/account/verification/${phoneNumber}/${code}`,
      ""
    );
    console.log("Authorization:", Authorization);
    const data: UserAccount = {
      peopleInfo: {
        id: peopleInfo.id,
      },
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    const token: string = await postMethodUuid<UserAccount>(
      Authorization.replace(/"/g, ""),
      "api/account/save",
      data
    );
    console.log("Token:", token);
    Cookies.set("authToken", token, { expires: 1 });
    connectWebSocket(token?.replace(/"/g, ""));
    navigate("/dash/inbox/2");
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{4}$/.test(otpCode)) {
      console.log("Submitted OTP Code:", otpCode);
      postAction(otpCode);
    } else {
      toast.error("Invalid OTP Code. Please enter exactly 4 digits.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-md px-4">
        <DotLottieReact
          src="whatsapp.lottie"
          loop
          autoplay
          style={{ width: "150px", height: "150px" }}
        />
        <h1 className="font-bold text-4xl mb-3 text-center">
          Code Confirmation
        </h1>
        <p className="text-sm">
          almost done we just need to verify your phone number - A code of 4
          digits has been sent to your WhatsApp account
          <span className="font-semibold"> {phoneNumber} </span>
        </p>
        <form action="" className="space-y-6" onSubmit={(e) => submit(e)}>
          <div className="flex justify-between gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-700"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d?$/.test(value)) {
                    setOtpCode((prev) => {
                      const otpArray = prev.split("");
                      otpArray[index] = value;
                      const combinedCode = otpArray.join("");
                      console.log("Combined Code Updated:", combinedCode);
                      return combinedCode;
                    });

                    if (value && index < 3) {
                      const nextInput = e.target
                        .nextElementSibling as HTMLInputElement;
                      nextInput?.focus();
                    }
                  } else {
                    e.target.value = "";
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.currentTarget.value &&
                    index > 0
                  ) {
                    const prevInput = e.currentTarget
                      .previousElementSibling as HTMLInputElement;
                    prevInput?.focus();
                  }
                }}
              />
            ))}
          </div>
          <div className="w-full">
            <Button size={"lg"} className="w-full bg-teal-700" type="submit">
              Verify Code
            </Button>
          </div>
        </form>
        <div>
          <p className="text-sm text-gray-500 text-center">
            Didn't receive the code? Resend it.
          </p>
        </div>
      </div>
    </div>
  );
}
