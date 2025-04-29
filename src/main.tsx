import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen bg-white ">
          <div className="h-[175px] mb-10">
            <img src="/maily_big.jpeg" alt="" className="h-full w-full" />
          </div>
          <BarLoader className="mb-9" width={250} color="#426360" />
          <Toaster position="top-center" />
        </div>
      </>
    );
  }

  return (
    <StrictMode>
      <BrowserRouter>
        <App />
        <Toaster position="top-center" />
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Main />);
