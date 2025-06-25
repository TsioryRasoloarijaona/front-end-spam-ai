import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TextEditor from "./textEditor/TextEditor";
import { MessagesSquareIcon } from "lucide-react";
import { useState } from "react";

import "react-quill/dist/quill.snow.css";

export default function NewMsg() {
  const [open, setOpen] = useState(false);

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="font-semibold px-3  bg-teal-700 text-white w-full py-2 rounded-md flex items-center gap-1.5 justify-center ">
            <MessagesSquareIcon />
            new message
          </button>
        </DialogTrigger>
        <DialogContent className="w-[900px] h-[600px]">
          <TextEditor onCloseDialog={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
