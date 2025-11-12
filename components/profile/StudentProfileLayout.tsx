'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface StudentProfileLayoutProps {
  studentId: string;
}

export default function StudentProfileLayout({ studentId }: StudentProfileLayoutProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'attendance' | 'homework' | 'guidance' | 'exam'>(
    'attendance'
  );

  // Mock student data
  const student = {
    id: studentId,
    firstName: 'Erçin',
    lastName: 'Akkaya',
    tcNo: '63787247082',
    studentNo: '2024001',
    classId: '9',
    branchId: 'A',
    parentPhone: '0555 123 4567',
    parentEmail: 'veli@example.com',
  };

  const tabs = [
    { id: 'attendance' as const, label: 'Yoklama Bilgisi', icon: '📊' },
    { id: 'homework' as const, label: 'Ödev Bilgisi', icon: '📝' },
    { id: 'guidance' as const, label: 'Rehberlik Bilgisi', icon: '🎯' },
    { id: 'exam' as const, label: 'Deneme Sınavı Bilgisi', icon: '📈' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'attendance':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">
              {student.firstName} İsimli Öğrencinin Yoklama Bilgisi
            </h2>

            {/* Özet Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">📅</span>
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Toplam Ders Günü</p>
                    <p className="text-2xl font-bold text-blue-900">120</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">❌</span>
                  <div>
                    <p className="text-sm text-red-600 font-medium">Devamsızlık</p>
                    <p className="text-2xl font-bold text-red-900">5</p>
                  </div>
                </div>
                <p className="text-xs text-red-600 font-medium">4.2%</p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">✅</span>
                  <div>
                    <p className="text-sm text-green-600 font-medium">Devam Oranı</p>
                    <p className="text-2xl font-bold text-green-900">95.8%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablo */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Yoklama Kayıtları</h3>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Yoklama Tarihi
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Ders Saati
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Ders Adı
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                      Durum
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">10.11.2025</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1. Ders</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Matematik</td>
                    <td className="px-4 py-3 text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        Var
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 bg-gray-50 text-center text-sm text-gray-500">
                Toplam Kayıt Sayısı: 0
              </div>
            </div>
          </div>
        );

      case 'homework':
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Ödev bilgisi yakında eklenecek</p>
          </div>
        );

      case 'guidance':
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Rehberlik bilgisi yakında eklenecek</p>
          </div>
        );

      case 'exam':
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Sınav bilgisi yakında eklenecek</p>
          </div>
        );
    }
  };

  return (
    <div>
      {/* Kontroller */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="secondary" onClick={() => router.back()}>
          ← Geri Dön
        </Button>
        <Button variant="secondary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Yazdır
        </Button>
      </div>

      {/* Öğrenci Bilgi Kartı */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-6 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-3xl border-4 border-white/30">
            {student.firstName[0]}
            {student.lastName[0]}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">
              {student.firstName} {student.lastName}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                {student.classId}-{student.branchId}
              </span>
              <span>TC: {student.tcNo}</span>
              <span>No: {student.studentNo}</span>
            </div>
            <div className="mt-2 text-sm opacity-90">
              <p>Veli Tel: {student.parentPhone}</p>
              <p>Veli E-posta: {student.parentEmail}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sekmeler */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
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
      </div>

      {/* Sekme İçeriği */}
      <div>{renderTabContent()}</div>
    </div>
  );
}
