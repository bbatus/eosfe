'use client';

import { useState } from 'react';
import ConversationList from './ConversationList';
import ConversationWindow from './ConversationWindow';
import NewMessagePanel from './NewMessagePanel';

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantRole: 'parent' | 'student' | 'teacher';
  participantAvatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isSent: boolean;
}

export default function MessagingLayout() {
  // Main messaging layout with 3 columns
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      participantId: 'user1',
      participantName: 'Ahmet Yılmaz',
      participantRole: 'parent',
      lastMessage: 'Çocuğumun durumu hakkında bilgi alabilir miyim?',
      lastMessageTime: '2 saat önce',
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: '2',
      participantId: 'user2',
      participantName: 'Ayşe Demir',
      participantRole: 'teacher',
      lastMessage: 'Toplantı için uygun musunuz?',
      lastMessageTime: '5 saat önce',
      unreadCount: 0,
      isOnline: false,
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      conversationId: '1',
      senderId: 'user1',
      senderName: 'Ahmet Yılmaz',
      content: 'Merhaba, çocuğumun durumu hakkında bilgi alabilir miyim?',
      timestamp: '10:30',
      isRead: true,
      isSent: false,
    },
    {
      id: '2',
      conversationId: '1',
      senderId: 'admin',
      senderName: 'Admin',
      content: 'Tabii ki, öğrenciniz derslerde çok başarılı.',
      timestamp: '10:35',
      isRead: true,
      isSent: true,
    },
  ]);

  const handleSendMessage = (content: string) => {
    if (!activeConversation || !content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      conversationId: activeConversation.id,
      senderId: 'admin',
      senderName: 'Admin',
      content: content.trim(),
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      isRead: false,
      isSent: true,
    };

    setMessages([...messages, newMessage]);

    // Update last message in conversation
    setConversations(
      conversations.map((conv) =>
        conv.id === activeConversation.id
          ? { ...conv, lastMessage: content.trim(), lastMessageTime: 'Şimdi' }
          : conv
      )
    );
  };

  const activeMessages = messages.filter((msg) => msg.conversationId === activeConversation?.id);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 p-4 border-b border-gray-200">
        <span>Anasayfa</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">Mesajlaşma</span>
      </nav>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
      {/* Sol Panel: Konuşma Listesi */}
      <div className="w-full lg:w-1/4 border-r border-gray-200 flex flex-col">
        <ConversationList
          conversations={conversations}
          activeConversation={activeConversation}
          onSelectConversation={setActiveConversation}
        />
      </div>

      {/* Orta Panel: Konuşma Penceresi */}
      <div className="hidden md:flex lg:w-2/5 border-r border-gray-200 flex-col">
        <ConversationWindow
          conversation={activeConversation}
          messages={activeMessages}
          onSendMessage={handleSendMessage}
        />
      </div>

      {/* Sağ Panel: Yeni Mesaj Gönder */}
      <div className="hidden xl:flex lg:w-1/3 flex-col">
        <NewMessagePanel />
      </div>
      </div>
    </div>
  );
}
