import React, { useState } from "react";

export default function RecipientInput() {
  const [recipients, setRecipients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddRecipient = () => {
    if (inputValue.trim() && !recipients.includes(inputValue.trim())) {
      setRecipients([...recipients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveRecipient = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddRecipient();
    }
  };

  return (
    <div className="border-b p-2">
      <div className="flex flex-wrap gap-2">
        {recipients.map((recipient, index) => (
          <div
            key={index}
            className="flex items-center border border-gray-300 px-3 py-1 rounded-full"
          >
            <span className="mr-2">{recipient}</span>
            <button
              type="button"
              className="text-black"
              onClick={() => handleRemoveRecipient(index)}
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add recipient"
          className="flex-grow outline-none"
        />
      </div>
    </div>
  );
}
