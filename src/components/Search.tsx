import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaArrowRight } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { getMethod } from "@/utils/fecthing";
import Cookies from "js-cookie";
import { useEmailAddressStore } from "@/hooks/emailAddressStore";
import { MessageStructure } from "@/interfaces/dataTypes";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { stripHtmlTags } from "@/utils/stringUtils";
import React from "react";

export function Search() {
  const token: string = Cookies.get("authToken") || "";
  const { email } = useEmailAddressStore();
  const [data, setData] = useState<MessageStructure[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();

  const getEmails = async (keyword: string) => {
    try {
      const res: MessageStructure[] = await getMethod<MessageStructure[]>(
        token,
        `api/user/filter/${email}?keyword=${keyword}`,
        null
      );
      setData(res);
    } catch (error: any) {
      console.error("Error response:", error.response);
    }
  };

  const findLink = (mail: MessageStructure) => {
    let link;
    if (mail.messageSender.email != email && mail.spam == false) {
      link = `inbox/${mail.id}`;
    }
    if (mail.messageSender.email != email && mail.spam == true) {
      link = `spam/${mail.id}`;
    } else {
      link = `sent/${mail.id}`;
    }
    return link;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (value.trim() !== "") {
        getEmails(value);
      }
    }, 500);
  };

  const handleResultClick = (msg: MessageStructure) => {
    setKeyword("");
    setData([]);
    navigate(findLink(msg));
  };

  // Fonction utilitaire pour surligner le keyword dans un texte
  function highlightKeyword(text: string, keyword: string) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(regex, '<mark class="bg-yellow-200">$1</mark>'),
        }}
      />
    );
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="text-xl">
            <IoSearchSharp />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>filter your search results</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">keyword</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="keyword"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className=" w-full mx-auto bg-white text-sm ">
            <div
              className="space-y-4 max-h-64 overflow-y-auto"
              style={{ maxWidth: "100%" }}
            >
              {data.map((msg, idx) => (
                <div className="border-b pb-2" key={idx}>
                  <p className="flex justify-between font-medium text-gray-800">
                    {highlightKeyword(msg.object, keyword)}
                    <span>
                      <DialogClose asChild>
                        <button onClick={() => handleResultClick(msg)}>
                          <FaArrowRight />
                        </button>
                      </DialogClose>
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {msg.messageSender.email == email
                      ? "you"
                      : highlightKeyword(msg.messageSender.email, keyword)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {highlightKeyword(stripHtmlTags(msg.body), keyword)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
