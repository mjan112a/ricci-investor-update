export interface FinancialRecord {
  Date: string;
  Revenue: number;
  Expenses: number;
  Profit: number;
}

export const financialData: FinancialRecord[] = [
  { Date: '2023-01-01', Revenue: 125000, Expenses: 75000, Profit: 50000 },
  { Date: '2023-02-01', Revenue: 145000, Expenses: 82000, Profit: 63000 },
  { Date: '2023-03-01', Revenue: 160000, Expenses: 88000, Profit: 72000 },
  { Date: '2023-04-01', Revenue: 175000, Expenses: 92000, Profit: 83000 },
  { Date: '2023-05-01', Revenue: 190000, Expenses: 98000, Profit: 92000 },
  { Date: '2023-06-01', Revenue: 210000, Expenses: 105000, Profit: 105000 },
  { Date: '2023-07-01', Revenue: 225000, Expenses: 110000, Profit: 115000 },
  { Date: '2023-08-01', Revenue: 245000, Expenses: 118000, Profit: 127000 },
  { Date: '2023-09-01', Revenue: 260000, Expenses: 125000, Profit: 135000 },
  { Date: '2023-10-01', Revenue: 280000, Expenses: 132000, Profit: 148000 },
  { Date: '2023-11-01', Revenue: 295000, Expenses: 138000, Profit: 157000 },
  { Date: '2023-12-01', Revenue: 320000, Expenses: 145000, Profit: 175000 }
];

// Helper functions for data analysis
export const getLatestData = () => financialData[financialData.length - 1];

export const calculateGrowth = (current: number, previous: number): number => {
  if (!previous) return 0;
  return ((current - previous) / previous) * 100;
};

export const getMonthlyGrowth = () => {
  const latest = getLatestData();
  const previousMonth = financialData[financialData.length - 2];
  
  return {
    revenue: calculateGrowth(latest.Revenue, previousMonth.Revenue),
    expenses: calculateGrowth(latest.Expenses, previousMonth.Expenses),
    profit: calculateGrowth(latest.Profit, previousMonth.Profit)
  };
};

export const getYearlyTotals = () => {
  return financialData.reduce((acc, curr) => ({
    Revenue: acc.Revenue + curr.Revenue,
    Expenses: acc.Expenses + curr.Expenses,
    Profit: acc.Profit + curr.Profit
  }), { Revenue: 0, Expenses: 0, Profit: 0 });
};