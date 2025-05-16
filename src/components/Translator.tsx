import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdTranslate } from "react-icons/md";
import { useState } from "react";
import languages from "@/utils/language.json";

interface Language {
  text: string;
  lang: string;
}

export default function Translator({ text }: { text: string }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false); // État pour suivre l'état du Dialog

  const translate = async (lang: Language) => {
    try {
      const res = await fetch(
        "https://translation-service-edaw.onrender.com/api/translate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lang),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch translation");
      }

      const translated = await res.text();
      setTranslatedText(translated);
    } catch (error) {
      setTranslatedText("Translation failed. Please try again.");
    }
  };

  return (
    <div className="cursor-pointer">
      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => {
          setIsDialogOpen(isOpen);
          if (!isOpen) {
            setTranslatedText("");
          }
        }}
      >
        <DialogTrigger asChild>
          <button className="font-black px-3 text-xl text-black w-full py-2 rounded-full flex items-center gap-1.5 justify-center">
            <MdTranslate />
          </button>
        </DialogTrigger>
        <DialogContent className="">
          <div>
            <label
              htmlFor="language-select"
              className="block text-sm font-medium text-gray-700"
            >
              Select Language
            </label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={(e) => {
                const selectedLang = e.target.value;
                setSelectedLanguage(selectedLang);
                console.log(selectedLang);
                translate({ text, lang: selectedLang }); 
              }}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            >
              {languages.map((lang) => (
                <option
                  key={lang.code}
                  value={lang.code}
                  className="hover:bg-gray-200"
                >
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className={`${translatedText.length > 0 ? "" : "hidden"}`}>
            <p className="text-sm text-gray-600">{selectedLanguage}:</p>
            <p className="mt-2 p-2 text-sm border rounded bg-gray-100">
              {translatedText}
            </p>
          </div>
          <div className="">
            <p className="text-sm text-gray-600">Original Text:</p>
            <p className="mt-2 p-2 text-sm border rounded bg-gray-100">
              {text}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
