'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Branch {
  id: number;
  className: string;
  branchName: string;
}

export default function BranchList() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const branches: Branch[] = [
    { id: 1, className: '11', branchName: 'A' },
    { id: 2, className: '9', branchName: 'A' },
    { id: 3, className: '10', branchName: 'A' },
    { id: 4, className: '12', branchName: 'A' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Şube Kayıt Modülü</h1>
        <p className="text-sm text-gray-600">Şubeler</p>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
          <span>Toplam:</span>
          <span className="font-bold">{branches.length}</span>
          <span>şube</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button
          variant="primary"
          onClick={() => router.push('/registration?type=branch&action=add')}
          className="bg-gradient-to-r from-purple-500 to-orange-500"
        >
          + Şube Ekle
        </Button>
        <Button
          variant="secondary"
          className="bg-gradient-to-r from-amber-700 to-orange-500 text-white hover:from-amber-800 hover:to-orange-600"
        >
          📄 PDF İndir
        </Button>
      </div>

      {/* Search */}
      <Card className="mb-6">
        <input
          type="text"
          placeholder="Şube ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm placeholder-gray-400"
        />
      </Card>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sınıf</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Şube</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr key={branch.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{branch.className}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{branch.branchName}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => router.push(`/registration?type=branch&action=edit&id=${branch.id}`)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        title="Düzenle"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Bu şubeyi silmek istediğinizden emin misiniz?')) {
                            console.log('Delete branch:', branch.id);
                          }
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Sil"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-gray-200">
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
            Önceki
          </button>
          <button className="px-4 py-2 text-sm bg-[#2B7FFF] text-white rounded-md">
            1
          </button>
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
            Sonraki
          </button>
        </div>
      </Card>
    </div>
  );
}
