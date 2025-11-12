'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface EventImage {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}

interface EventImageManagerProps {
  eventId: string;
  eventName: string;
}

export default function EventImageManager({ eventId, eventName }: EventImageManagerProps) {
  const router = useRouter();
  const [images, setImages] = useState<EventImage[]>([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleBack = () => {
    router.push('/events');
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Lütfen sadece resim dosyası seçin!');
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Lütfen bir resim seçin!');
      return;
    }

    // Mock upload - gerçek uygulamada API'ye gönderilecek
    const newImage: EventImage = {
      id: Date.now().toString(),
      name: selectedFile.name,
      url: previewUrl,
      thumbnail: previewUrl
    };

    setImages([...images, newImage]);
    setShowUploadModal(false);
    setSelectedFile(null);
    setPreviewUrl('');
    alert('Resim başarıyla yüklendi!');
  };

  const handleDeleteImage = (imageId: string) => {
    if (confirm('Bu resmi silmek istediğinize emin misiniz?')) {
      setImages(images.filter(img => img.id !== imageId));
    }
  };

  const handleCancelUpload = () => {
    setShowUploadModal(false);
    setSelectedFile(null);
    setPreviewUrl('');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#2B7FFF] hover:text-[#1a6eef] font-medium mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Etkinlik Listesine Dön
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">{eventName}</h2>
        <p className="text-sm text-gray-600">Resimler ({images.length})</p>
      </div>

      <div className="mb-6">
        <Button
          onClick={() => setShowUploadModal(true)}
          className="bg-gradient-to-r from-orange-500 to-blue-900 hover:from-orange-600 hover:to-blue-950"
        >
          + Resim Ekle
        </Button>
      </div>

      {images.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          Bu etkinliğe henüz resim eklenmemiş.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Önizleme
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Resim Adı
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody>
              {images.map((image) => (
                <tr key={image.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={image.thumbnail}
                      alt={image.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{image.name}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      title="Sil"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resim Yükle</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resim Seçin
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
              />
            </div>

            {previewUrl && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Önizleme:</p>
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            )}

            <div className="flex gap-3 justify-end">
              <Button
                onClick={handleCancelUpload}
                className="bg-gray-500 hover:bg-gray-600"
              >
                İptal
              </Button>
              <Button
                onClick={handleUpload}
                className="bg-[#2B7FFF] hover:bg-[#1a6eef]"
                disabled={!selectedFile}
              >
                Yükle
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
