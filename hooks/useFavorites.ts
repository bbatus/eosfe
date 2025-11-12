'use client';

import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('favoriteModules');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        setFavorites([]);
      }
    }
  }, []);

  const toggleFavorite = (moduleId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId];
      
      if (mounted) {
        localStorage.setItem('favoriteModules', JSON.stringify(newFavorites));
      }
      
      return newFavorites;
    });
  };

  const isFavorite = (moduleId: string) => favorites.includes(moduleId);

  return { favorites, toggleFavorite, isFavorite, mounted };
}
