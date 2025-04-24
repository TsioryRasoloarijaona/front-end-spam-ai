import { Link } from "react-router";


export default function Landing() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="flex gap-4">
            <Link to="/info" className="bg-black text-white px-4 py-2 rounded-md">create a new account</Link>
            <Link to="/signIn" className="border border-gray-400 px-4 py-2 rounded-md">sign in</Link>
            <div>push</div>
        </div>
    </div>
  )
}
