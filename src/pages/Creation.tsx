import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Creation() {
  const [checkedStates, setCheckedStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setCheckedStates((prev) => {
        const newStates = [...prev];
        if (currentIndex < newStates.length) {
          newStates[currentIndex] = true;
          currentIndex++;
        }
        return newStates;
      });

      if (currentIndex >= checkedStates.length) {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-6">
      <DotLottieReact
        src="creation.lottie"
        loop
        autoplay
        style={{ width: "250px", height: "250px" }}
      />
      <div className="text-2xl font-bold">
        <p>creation process</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms1" checked={checkedStates[0]} />
          <label
            htmlFor="terms1"
            className={`text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              checkedStates[0] ? "text-black" : "text-gray-400"
            }`}
          >
            saving Personal information
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" checked={checkedStates[1]} />
          <label
            htmlFor="terms2"
            className={`text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              checkedStates[1] ? "text-black" : "text-gray-400"
            }`}
          >
            check phone number
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms3" checked={checkedStates[2]}/>
          <label
            htmlFor="terms3"
            className={`text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              checkedStates[2] ? "text-black" : "text-gray-400"
            }`}
          >
            create account
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms4" checked={checkedStates[3]} />
          <label
            htmlFor="terms4"
            className={`text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              checkedStates[3] ? "text-black" : "text-gray-400"
            }`}
          >
            create storage
          </label>
        </div>
      </div>
    </div>
  );
}
