'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface AddNoteFormProps {
  studentId: string;
}

export default function AddNoteForm({ studentId }: AddNoteFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isVisibleToParent: true,
  });

  // Mock student data
  const student = {
    id: studentId,
    firstName: 'Erçin',
    lastName: 'Akkaya',
    classId: '9',
    branchId: 'A',
  };

  const isFormValid = formData.title.trim() && formData.content.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Rehberlik notu başarıyla kaydedildi!');
      router.push('/guidance');
    }
  };

  return (
    <div>
      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Öğrenciye Not Gir</h1>
        <p className="text-sm text-gray-600">
          {student.firstName} {student.lastName} - {student.classId}-{student.branchId}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Not Başlığı */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Not Başlığı <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Bir başlık ekleyin"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={50}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.title.length}/50 karakter</p>
        </div>

        {/* Not İçeriği */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Not İçeriği <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Notunuzu girin..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={6}
            maxLength={500}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.content.length}/500 karakter</p>
        </div>

        {/* Veli Görüntüleme Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div>
            <label className="text-sm font-medium text-gray-700">Veli Görüntüleme</label>
            <p className="text-xs text-gray-500 mt-1">
              Bu not veliler tarafından görülebilir mi?
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, isVisibleToParent: !formData.isVisibleToParent })
            }
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              formData.isVisibleToParent ? 'bg-blue-600' : 'bg-red-500'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                formData.isVisibleToParent ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-gray-700">Durum:</span>
          {formData.isVisibleToParent ? (
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
              👁️ Veli Görebilir
            </span>
          ) : (
            <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
              🚫 Veli Göremez
            </span>
          )}
        </div>

        {/* Eylem Butonları */}
        <div className="flex items-center justify-between pt-4">
          <Button variant="secondary" onClick={() => router.push('/guidance')}>
            ← Geri Dön
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={!isFormValid}
            className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}
          >
            Kaydet
          </Button>
        </div>
      </form>
    </div>
  );
}
