'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';
import PageContainer from '@/components/layout/PageContainer';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import MealCalendar from '@/components/meal/MealCalendar';
import MealPlanForm from '@/components/meal/MealPlanForm';
import MealAttendance from '@/components/meal/MealAttendance';

function MealContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'plan' | 'attendance'>('plan');

  useEffect(() => {
    const date = searchParams.get('date');
    const tab = searchParams.get('tab');
    
    if (date) {
      setSelectedDate(date);
    }
    
    if (tab === 'attendance') {
      setActiveTab('attendance');
    } else {
      setActiveTab('plan');
    }
  }, [searchParams]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    router.push(`/meal?date=${date}`);
  };

  const handleSaveMealPlan = (meals: any) => {
    console.log('Saving meal plan:', meals);
    alert('Yemek planı kaydedildi!');
    setSelectedDate(null);
    router.push('/meal');
  };

  const handleSaveAttendance = (attendanceData: any) => {
    console.log('Saving attendance:', attendanceData);
    alert('Yoklama kaydedildi!');
    setSelectedDate(null);
    router.push('/meal');
  };

  const handleCancel = () => {
    setSelectedDate(null);
    router.push('/meal');
  };

  return (
    <PageContainer>
      {!selectedDate ? (
        <MealCalendar onDateSelect={handleDateSelect} />
      ) : activeTab === 'plan' ? (
        <MealPlanForm
          date={selectedDate}
          onSave={handleSaveMealPlan}
          onCancel={handleCancel}
        />
      ) : (
        <MealAttendance
          date={selectedDate}
          onSave={handleSaveAttendance}
          onClose={handleCancel}
        />
      )}
    </PageContainer>
  );
}

export default function MealPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <MealContent />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
