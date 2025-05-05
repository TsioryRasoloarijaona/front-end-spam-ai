import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { Button } from "../components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Phone() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-md px-4">
        <DotLottieReact src="whatsapp.lottie" loop autoplay style={{ width: "150px", height: "150px" }} />
        <h1 className="font-bold text-4xl mb-3 text-center">Code Confirmation</h1>
        <p className="text-sm">
          almost done we just need to verify your phone number -
          A code of 4 digits has been sent to your WhatsApp account 
          <span className="font-bold"> +62 812-3456-7890</span>. This code is valid for 5 minutes.
        </p>
        <InputOTP maxLength={4} className="w-full">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSeparator />
            <InputOTPSlot index={1} />
            <InputOTPSeparator />
            <InputOTPSlot index={2} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <div className="w-full">
          <Button size={"lg"} className="w-full bg-teal-700">
            Verify Code
          </Button>
        </div>
        <div>
          <p className="text-sm text-gray-500 text-center">
            Didn't receive the code? Resend it.
          </p>
        </div>
      </div>
    </div>
  );
}
