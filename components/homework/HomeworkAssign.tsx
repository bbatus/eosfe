'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  studentNo: string;
}

export default function HomeworkAssign() {
  const router = useRouter();
  const [selectedHomework, setSelectedHomework] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(true);

  // Mock data
  const homeworks = [
    { id: '1', title: 'Matematik Ödevi - 10.11.2025 - 15.11.2025' },
    { id: '2', title: 'Fizik Ödevi - 11.11.2025 - 18.11.2025' },
  ];

  const students: Student[] = [
    { id: '1', firstName: 'Ahmet', lastName: 'Yılmaz', studentNo: '1001' },
    { id: '2', firstName: 'Ayşe', lastName: 'Demir', studentNo: '1002' },
    { id: '3', firstName: 'Mehmet', lastName: 'Kaya', studentNo: '1003' },
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedStudents(students.map((s) => s.id));
    } else {
      setSelectedStudents([]);
    }
    setSelectAll(!selectAll);
  };

  const handleStudentToggle = (studentId: string) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHomework || !selectedClass || !selectedBranch || selectedStudents.length === 0) {
      alert('Lütfen tüm alanları doldurun ve en az bir öğrenci seçin');
      return;
    }
    alert(`Ödev ${selectedStudents.length} öğrenciye atandı!`);
    router.push('/homework');
  };

  // Öğrenci listesini göster (sınıf ve şube seçildiyse)
  const showStudents = selectedClass && selectedBranch;

  return (
    <div>
      {/* Geri Dön Butonu */}
      <div className="mb-6">
        <Button variant="secondary" onClick={() => router.push('/homework')}>
          ← Geri Dön
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Ödev Ata</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ödev Seçimi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ödev Seçin
          </label>
          <select
            value={selectedHomework}
            onChange={(e) => setSelectedHomework(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-colors"
            required
          >
            <option value="">Atanacak ödevi seçin</option>
            {homeworks.map((hw) => (
              <option key={hw.id} value={hw.id}>
                {hw.title}
              </option>
            ))}
          </select>
        </div>

        {/* Sınıf ve Şube */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sınıf</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-colors"
              required
            >
              <option value="">Sınıf Seçin</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Şube</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-colors"
              required
              disabled={!selectedClass}
            >
              <option value="">Şube Seçin</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>

        {/* Öğrenci Listesi */}
        {showStudents && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Öğrenci Seçimi
              </label>
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-sm text-[#2B7FFF] hover:text-[#1a6eef] font-medium"
              >
                {selectAll ? 'Tümünü Kaldır' : 'Tümünü Seç'}
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      <input
                        type="checkbox"
                        checked={selectedStudents.length === students.length}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-[#2B7FFF] focus:ring-[#2B7FFF]"
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Ad
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Soyad
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Öğrenci No
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedStudents.includes(student.id)}
                          onChange={() => handleStudentToggle(student.id)}
                          className="rounded border-gray-300 text-[#2B7FFF] focus:ring-[#2B7FFF]"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.firstName}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.lastName}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{student.studentNo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              {selectedStudents.length} öğrenci seçildi
            </p>
          </div>
        )}

        {/* Ata Butonu */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={!selectedHomework || !selectedClass || !selectedBranch || selectedStudents.length === 0}
          >
            Ata
          </Button>
        </div>
      </form>
    </div>
  );
}
