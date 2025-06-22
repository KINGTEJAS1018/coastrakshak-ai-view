
// src/context/UserGamificationContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserType {
  id: number;
  name: string;
  xp: number;
  level: number;
  badges: string[];
  streak: number;
  wasteCollected: number;
  missionsCompleted: number[];
}

interface GamificationContextType {
  user: UserType;
  updateXP: (amount: number) => void;
}

const defaultUser: UserType = {
  id: 21,
  name: 'Tejas',
  xp: 450,
  level: 4,
  badges: ['Starter'],
  streak: 3,
  wasteCollected: 6.3,
  missionsCompleted: [1],
};

const UserGamificationContext = createContext<GamificationContextType | null>(null);

export const useGamification = (): GamificationContextType => {
  const context = useContext(UserGamificationContext);
  if (!context) throw new Error('useGamification must be used within a provider');
  return context;
};

export const UserGamificationProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(defaultUser);

  const updateXP = (amount: number) => {
    setUser((prev) => {
      const newXP = prev.xp + amount;
      return {
        ...prev,
        xp: newXP,
        level: Math.floor(newXP / 100),
      };
    });
  };

  return (
    <UserGamificationContext.Provider value={{ user, updateXP }}>
      {children}
    </UserGamificationContext.Provider>
  );
};
