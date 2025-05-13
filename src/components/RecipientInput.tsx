import React, { useState } from "react";

interface RecipientInputProps {
  onRecipientsChange?: (recipients: string[]) => void; 
}

export default function RecipientInput({ onRecipientsChange }: RecipientInputProps) {
  const [recipients, setRecipients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddRecipient = () => {
    if (!isValidEmail(inputValue.trim())) {
      setError("Invalid email address");
      return;
    }
    if (inputValue.trim() && !recipients.includes(inputValue.trim())) {
      const updatedRecipients = [...recipients, inputValue.trim()];
      setRecipients(updatedRecipients);
      onRecipientsChange?.(updatedRecipients); // Appelle la fonction de rappel avec les destinataires mis à jour
      setInputValue("");
      setError(""); // Clear error on successful addition
    }
  };

  const handleRemoveRecipient = (index: number) => {
    const updatedRecipients = recipients.filter((_, i) => i !== index);
    setRecipients(updatedRecipients);
    onRecipientsChange?.(updatedRecipients); // Appelle la fonction de rappel avec les destinataires mis à jour
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddRecipient();
    }
  };

  return (
    <div className="border-b p-2">
      <div className="flex flex-wrap gap-2 max-h-[4.5rem] overflow-y-auto">
        {recipients.map((recipient, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 px-3 py-1 rounded-full"
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
