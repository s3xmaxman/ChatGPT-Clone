"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { ChatBox } from "./chat-box";
import { useState } from "react";

export const ChatList = () => {
  const chats = useQuery(api.chats.list);
  const { chatId } = useParams<{ chatId: Id<"chats"> }>();
  const router = useRouter();
  const [selectedChatId, setSelectedChatId] = useState<Id<"chats"> | null>(
    chatId
  );

  const handleChatSelect = (chatId: Id<"chats">) => {
    setSelectedChatId(chatId);
    router.push(`/chat/${chatId}`);
  };

  if (chats === undefined) {
    return <div>Loading...</div>;
  }

  if (chats === null) {
    return null;
  }

  if (!chats) return null;

  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatBox
          key={chat._id}
          chat={chat}
          selected={chat._id === selectedChatId}
          onSelect={handleChatSelect}
        />
      ))}
    </div>
  );
};
