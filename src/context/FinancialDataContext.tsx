'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FinancialData {
  Date: string;
  Revenue: number;
  Expenses: number;
  Profit: number;
}

interface FinancialDataContextType {
  data: FinancialData[];
  setData: (data: FinancialData[]) => void;
  dateRange: [Date, Date];
  setDateRange: (range: [Date, Date]) => void;
}

const FinancialDataContext = createContext<FinancialDataContextType | undefined>(undefined);

export function FinancialDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FinancialData[]>([]);
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(new Date().setMonth(new Date().getMonth() - 6)),
    new Date(),
  ]);

  return (
    <FinancialDataContext.Provider value={{ data, setData, dateRange, setDateRange }}>
      {children}
    </FinancialDataContext.Provider>
  );
}

export function useFinancialData() {
  const context = useContext(FinancialDataContext);
  if (context === undefined) {
    throw new Error('useFinancialData must be used within a FinancialDataProvider');
  }
  return context;
}