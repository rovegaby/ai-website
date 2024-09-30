"use client";

import { useState } from "react";
import { BorderBeam } from "./ui/border-beam";
import ShimmerButton from "./ui/shimmer-button";
import { useTheme } from 'next-themes';

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();
      const aiResponse: Message = { role: "assistant", content: data.response };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error:", error);
      // You can add error handling here, such as displaying an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden relative">
      <BorderBeam 
        className="z-10"
        size={250}
        duration={20}
        colorFrom={theme === 'dark' ? "#6366f1" : "#3b82f6"}
        colorTo={theme === 'dark' ? "#a855f7" : "#8b5cf6"}
      />
      <div className="h-[400px] overflow-y-auto p-3 space-y-3 relative z-20">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[70%] p-2 rounded-lg text-sm ${
              message.role === "user" 
                ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100" 
                : "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100"
            }`}>
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded-lg text-sm">
              AI is thinking...
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-3 border-t dark:border-gray-700 relative z-20">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 text-sm border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter your question..."
            disabled={isLoading}
          />
          <ShimmerButton
            type="submit"
            disabled={isLoading}
            className="px-3 py-1 text-xs font-medium"
            background={theme === 'dark' ? "linear-gradient(to right, #6366f1, #a855f7)" : "linear-gradient(to right, #3b82f6, #8b5cf6)"}
          >
            Send
          </ShimmerButton>
        </div>
      </form>
    </div>
  );
}