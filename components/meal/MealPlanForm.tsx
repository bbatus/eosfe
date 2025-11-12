'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface Meal {
  id: string;
  mealType: string;
  name: string;
}

interface MealPlanFormProps {
  date: string;
  onSave: (meals: Meal[]) => void;
  onCancel: () => void;
}

export default function MealPlanForm({ date, onSave, onCancel }: MealPlanFormProps) {
  const [meals, setMeals] = useState<Meal[]>([
    { id: '1', mealType: '', name: '' }
  ]);

  const mealTypes = ['Sabah', 'Öğle', 'İkindi', 'Akşam'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const addMeal = () => {
    setMeals([...meals, { id: Date.now().toString(), mealType: '', name: '' }]);
  };

  const removeMeal = (id: string) => {
    if (meals.length > 1) {
      setMeals(meals.filter(meal => meal.id !== id));
    }
  };

  const updateMeal = (id: string, field: 'mealType' | 'name', value: string) => {
    setMeals(meals.map(meal => 
      meal.id === id ? { ...meal, [field]: value } : meal
    ));
  };

  const handleSave = () => {
    const validMeals = meals.filter(meal => meal.mealType && meal.name);
    if (validMeals.length > 0) {
      onSave(validMeals);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{formatDate(date)}</h2>
        
        <div className="flex gap-4 border-b border-gray-200">
          <button className="px-4 py-2 text-sm font-medium text-[#2B7FFF] border-b-2 border-[#2B7FFF]">
            Yemek Planı
          </button>
          <button 
            onClick={() => window.location.href = `/meal?date=${date}&tab=attendance`}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Yoklama
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Yemek Bilgisi Gir</h3>

      <div className="space-y-4 mb-6">
        {meals.map((meal) => (
          <div key={meal.id} className="flex gap-3 items-start">
            <div className="flex-1">
              <select
                value={meal.mealType}
                onChange={(e) => updateMeal(meal.id, 'mealType', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
              >
                <option value="">Öğün Seçin</option>
                {mealTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <input
                type="text"
                value={meal.name}
                onChange={(e) => updateMeal(meal.id, 'name', e.target.value)}
                placeholder="Yemek Adı"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900 placeholder:text-gray-700"
              />
            </div>

            <button
              onClick={() => removeMeal(meal.id)}
              className="p-2.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              disabled={meals.length === 1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addMeal}
        className="text-[#2B7FFF] hover:text-[#1a6eef] font-medium text-sm mb-6 flex items-center gap-1"
      >
        <span className="text-lg">+</span> Yeni Yemek Ekle
      </button>

      <div className="flex gap-3 justify-end">
        <Button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600"
        >
          İptal
        </Button>
        <Button
          onClick={handleSave}
          className="bg-[#2B7FFF] hover:bg-[#1a6eef]"
        >
          Kaydet
        </Button>
      </div>
    </div>
  );
}
