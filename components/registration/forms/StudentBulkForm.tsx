'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentBulkForm() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student bulk form submitted:', file);
    router.push('/registration?type=student');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/vnd.ms-excel' || droppedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header with Back and Save */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push('/registration?type=student')}
            className="flex items-center gap-2 px-4 py-2 bg-[#2B7FFF] text-white rounded-md hover:bg-[#1a6eef] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Geri Dön</span>
          </button>
          
          <button
            onClick={handleSubmit}
            disabled={!file}
            className={`px-6 py-2 rounded-md transition-colors text-sm font-medium ${
              file
                ? 'bg-[#2B7FFF] text-white hover:bg-[#1a6eef]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Kaydet
          </button>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Excel ile Öğrenci Ekle</h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Download Template Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-3 bg-[#2B7FFF] text-white rounded-md hover:bg-[#1a6eef] transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Örnek Format İndir
          </button>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-4 border-dashed rounded-xl p-16 text-center transition-all ${
              isDragging
                ? 'border-[#2B7FFF] bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {!file ? (
              <>
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-lg text-gray-700 mb-4">
                  Excel dosyasını buraya tıklayarak ya da sürükleyerek yükleyebilirsiniz.
                </p>
                <label className="inline-block">
                  <span className="px-6 py-3 bg-[#2B7FFF] text-white rounded-md hover:bg-[#1a6eef] cursor-pointer font-medium transition-colors">
                    Dosya Seç
                  </span>
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-900 mb-2">{file.name}</p>
                <p className="text-sm text-gray-500 mb-4">{(file.size / 1024).toFixed(2)} KB</p>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Dosyayı Kaldır
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
