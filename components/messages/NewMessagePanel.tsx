'use client';

import { useState } from 'react';

interface Recipient {
  id: string;
  name: string;
  role: 'parent' | 'student' | 'teacher';
  additionalInfo: string;
}

export default function NewMessagePanel() {
  const [activeTab, setActiveTab] = useState<'parent' | 'student' | 'teacher'>('parent');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  // Mock data
  const allRecipients: Record<string, Recipient[]> = {
    parent: [
      { id: 'p1', name: 'Ahmet Yılmaz', role: 'parent', additionalInfo: '11-A Velisi' },
      { id: 'p2', name: 'Ayşe Demir', role: 'parent', additionalInfo: '12-B Velisi' },
      { id: 'p3', name: 'Mehmet Kaya', role: 'parent', additionalInfo: '10-C Velisi' },
    ],
    student: [
      { id: 's1', name: 'Ali Yılmaz', role: 'student', additionalInfo: '11-A' },
      { id: 's2', name: 'Zeynep Demir', role: 'student', additionalInfo: '12-B' },
    ],
    teacher: [
      { id: 't1', name: 'Fatma Öztürk', role: 'teacher', additionalInfo: 'Matematik' },
      { id: 't2', name: 'Can Arslan', role: 'teacher', additionalInfo: 'Fizik' },
    ],
  };

  const recipients = allRecipients[activeTab];

  const filteredRecipients = recipients.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleAll = () => {
    if (selectedRecipients.length === filteredRecipients.length) {
      setSelectedRecipients([]);
    } else {
      setSelectedRecipients(filteredRecipients.map((r) => r.id));
    }
  };

  const handleToggleRecipient = (id: string) => {
    if (selectedRecipients.includes(id)) {
      setSelectedRecipients(selectedRecipients.filter((rid) => rid !== id));
    } else {
      setSelectedRecipients([...selectedRecipients, id]);
    }
  };

  const handleSend = () => {
    if (selectedRecipients.length === 0 || !message.trim()) {
      alert('Lütfen en az bir alıcı seçin ve mesaj yazın');
      return;
    }
    alert(`${selectedRecipients.length} kişiye mesaj gönderildi!`);
    setSelectedRecipients([]);
    setMessage('');
  };

  const getButtonText = () => {
    if (selectedRecipients.length === 0) return 'Alıcı seçin';
    if (selectedRecipients.length === 1) return '1 kişiye gönder';
    return `${selectedRecipients.length} kişiye gönder`;
  };

  const tabs = [
    { id: 'parent' as const, label: 'Veliler', icon: '👨‍👩‍👧' },
    { id: 'student' as const, label: 'Öğrenciler', icon: '🎓' },
    { id: 'teacher' as const, label: 'Öğretmenler', icon: '👨‍🏫' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Başlık */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">Yeni Mesaj Gönder</h2>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedRecipients([]);
            }}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Arama ve Toplu Seçim */}
      <div className="p-4 border-b border-gray-200 space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Kişi ara..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 font-medium">
            {selectedRecipients.length} kişi seçildi
          </span>
          <button
            onClick={handleToggleAll}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {selectedRecipients.length === filteredRecipients.length ? 'Tümünü Bırak' : 'Tümünü Seç'}
          </button>
        </div>
      </div>

      {/* Kişi Listesi */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {filteredRecipients.map((recipient) => (
            <label
              key={recipient.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedRecipients.includes(recipient.id)}
                onChange={() => handleToggleRecipient(recipient.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                {recipient.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{recipient.name}</p>
                <p className="text-xs text-gray-500">{recipient.additionalInfo}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Mesaj Yazma Alanı */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı buraya yazın..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            maxLength={500}
          />
          <p className="text-xs text-gray-500 mt-1 text-right">{message.length}/500 karakter</p>
        </div>

        <button
          onClick={handleSend}
          disabled={selectedRecipients.length === 0 || !message.trim()}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
}
