'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  studentNo: string;
  hasEaten: boolean;
}

interface MealAttendanceProps {
  date: string;
  onSave: (attendanceData: any) => void;
  onClose: () => void;
}

export default function MealAttendance({ date, onSave, onClose }: MealAttendanceProps) {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [showStudents, setShowStudents] = useState(false);

  const classes = ['9', '10', '11', '12'];
  const branches = ['A', 'B', 'C', 'D'];
  const mealTypes = ['Sabah', 'Öğle', 'İkindi', 'Akşam'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const loadStudents = () => {
    // Mock data - gerçek uygulamada API'den gelecek
    const mockStudents: Student[] = [
      { id: '1', firstName: 'Erçin', lastName: 'Akkaya', studentNo: '1001', hasEaten: true },
      { id: '2', firstName: 'Ayşe', lastName: 'Yılmaz', studentNo: '1002', hasEaten: true },
      { id: '3', firstName: 'Mehmet', lastName: 'Demir', studentNo: '1003', hasEaten: true },
      { id: '4', firstName: 'Zeynep', lastName: 'Kaya', studentNo: '1004', hasEaten: true },
    ];
    setStudents(mockStudents);
    setShowStudents(true);
  };

  const toggleStudentStatus = (id: string) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, hasEaten: !student.hasEaten } : student
    ));
  };

  const handleSave = () => {
    const attendanceData = {
      date,
      classId: selectedClass,
      branchId: selectedBranch,
      mealType: selectedMealType,
      students: students.map(s => ({
        studentId: s.id,
        hasEaten: s.hasEaten
      }))
    };
    onSave(attendanceData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{formatDate(date)}</h2>
        
        <div className="flex gap-4 border-b border-gray-200">
          <button 
            onClick={() => window.location.href = `/meal?date=${date}`}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Yemek Planı
          </button>
          <button className="px-4 py-2 text-sm font-medium text-[#2B7FFF] border-b-2 border-[#2B7FFF]">
            Yoklama
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Yemek Yoklaması</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sınıf</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
          >
            <option value="">Sınıf Seçin</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Şube</label>
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            disabled={!selectedClass}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent disabled:bg-gray-100 text-gray-900"
          >
            <option value="">Şube Seçin</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Öğün Tipi</label>
          <select
            value={selectedMealType}
            onChange={(e) => setSelectedMealType(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
          >
            <option value="">Öğün Tipi Seçin...</option>
            {mealTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <Button
        onClick={loadStudents}
        disabled={!selectedClass || !selectedBranch || !selectedMealType}
        className="mb-6 bg-[#2B7FFF] hover:bg-[#1a6eef] disabled:bg-gray-300"
      >
        Öğrencileri Listele
      </Button>

      {showStudents && (
        <>
          <div className="mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Ad Soyad</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Öğrenci No</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {student.firstName} {student.lastName}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{student.studentNo}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => toggleStudentStatus(student.id)}
                          className={`
                            px-4 py-2 rounded-md text-sm font-medium transition-colors
                            ${student.hasEaten
                              ? 'bg-green-500 text-white hover:bg-green-600'
                              : 'bg-red-500 text-white hover:bg-red-600'
                            }
                          `}
                        >
                          {student.hasEaten ? 'Yedi' : 'Yemedi'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600"
            >
              Kapat
            </Button>
            <Button
              onClick={handleSave}
              className="bg-[#2B7FFF] hover:bg-[#1a6eef]"
            >
              Yoklamayı Kaydet
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
