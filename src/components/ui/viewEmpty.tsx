import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function ViewEmpty() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <DotLottieReact
          src="/msgview.lottie"
          loop
          autoplay
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </div>
  );
}
