import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { Button } from "../components/ui/button";

export default function Phone() {
  return (
    <div className="w-[100vw] h-full grid grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-6 ">
        <h1 className="font-bold text-xl mb-3">
          enter the code sent to your phone
        </h1>
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
        <div>
          <Button size={"lg"} className="w-full ">
            verify code
          </Button>
        </div>
        <div>
          <p className="text-sm text text-gray-500">
            did ' t receive code ? resend it
          </p>
        </div>
      </div>
      <div className=" h-[100vh] flex justify-center items-center">
        <img
          src="src/assets/mailbox.png"
          alt="Description of image"
          className="w-2/3 h-2/3"
        />
      </div>
    </div>
  );
}
