import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import RecipientInput from "../RecipientInput";
import { Button } from "../ui/button";

export default function TextEditor() {
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ color: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content: any) => {
    setCode(content);
  };
  return (
    <>
      <div className="mt-4 space-y-4 w-full h-full">
        <div className="w-full text-sm">
          <RecipientInput />
        </div>
        <div>
          <input type="text" placeholder="object" className="border-b border-b-gray-300 p-2 outline-none w-full text-sm" />
        </div>
        <div className="w-full relative flex-1  min-h-[325px] max-h-[375px]">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={code}
            onChange={handleProcedureContentChange}
            className="w-full border-none"
          />
        </div>
        <div>
          <Button>send</Button>
        </div>
      </div>
    </>
  );
}
