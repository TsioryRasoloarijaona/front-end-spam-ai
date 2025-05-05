import { useSidebar } from "@/components/ui/sidebar";
import { CgMenuRightAlt } from "react-icons/cg";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className=" top-4 left-4 z-50 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 block  md:block"
    >
      <CgMenuRightAlt className="text-2xl font-black" />
    </button>
  );
}
