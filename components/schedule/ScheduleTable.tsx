'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface ScheduleSlot {
  day: string;
  period: number;
  courseName: string;
}

interface ScheduleTableProps {
  classId: string;
  branchId: string;
  onSave: (schedule: ScheduleSlot[]) => void;
}

export default function ScheduleTable({ classId, branchId, onSave }: ScheduleTableProps) {
  const [schedule, setSchedule] = useState<ScheduleSlot[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; period: number } | null>(null);
  const [courseName, setCourseName] = useState('');

  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
  const periods = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getCourse = (day: string, period: number) => {
    return schedule.find(s => s.day === day && s.period === period)?.courseName || '';
  };

  const handleSlotClick = (day: string, period: number) => {
    setSelectedSlot({ day, period });
    setCourseName(getCourse(day, period));
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (!selectedSlot) return;

    const newSchedule = schedule.filter(
      s => !(s.day === selectedSlot.day && s.period === selectedSlot.period)
    );

    if (courseName.trim()) {
      newSchedule.push({
        day: selectedSlot.day,
        period: selectedSlot.period,
        courseName: courseName.trim()
      });
    }

    setSchedule(newSchedule);
    setShowModal(false);
    setCourseName('');
    setSelectedSlot(null);
  };

  const handleCancel = () => {
    setShowModal(false);
    setCourseName('');
    setSelectedSlot(null);
  };

  const handleSave = () => {
    onSave(schedule);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        {classId} / {branchId} Ders Programı
      </h3>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700">
                Saat
              </th>
              {days.map(day => (
                <th key={day} className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map(period => (
              <tr key={period} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50">
                  {period}. Ders
                </td>
                {days.map(day => {
                  const course = getCourse(day, period);
                  return (
                    <td
                      key={`${day}-${period}`}
                      className="border border-gray-300 px-4 py-3 text-center cursor-pointer hover:bg-blue-50 transition-colors"
                      onClick={() => handleSlotClick(day, period)}
                    >
                      {course ? (
                        <span className="text-sm font-medium text-gray-900">{course}</span>
                      ) : (
                        <button className="text-[#2B7FFF] hover:text-[#1a6eef] text-xl font-bold">
                          +
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700"
        >
          Programı Kaydet
        </Button>
      </div>

      {/* Modal */}
      {showModal && selectedSlot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ders Ata</h3>
            
            <p className="text-sm text-gray-600 mb-4">
              {selectedSlot.day}, {selectedSlot.period}. Ders
            </p>

            <div className="mb-4">
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Ders adını yazın..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900 placeholder:text-gray-700"
                autoFocus
              />
              <p className="text-xs text-gray-500 mt-2">
                Dersini kaldırmak için alanı boş bırakın...
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <Button
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600"
              >
                İptal
              </Button>
              <Button
                onClick={handleConfirm}
                className="bg-[#2B7FFF] hover:bg-[#1a6eef]"
              >
                Onayla
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
