'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChartContainer from '@/components/ChartContainer';
import DataTable from '@/components/DataTable';
import SummaryMetrics from '@/components/SummaryMetrics';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFinancialData } from '@/context/FinancialDataContext';
import { useEffect, useState } from 'react';
import { financialData } from '@/data/financialData';

export default function Home() {
  const { data, setData } = useFinancialData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        setIsLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(financialData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [setData]);

  const displayData = data.length > 0 ? data : financialData;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-8">
          {isLoading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <>
              <SummaryMetrics data={displayData} />
              
              <ChartContainer title="Financial Overview" description="Monthly financial trends">
                <div className="w-full h-[400px]">
                  <ResponsiveContainer>
                    <LineChart
                      data={displayData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="Date" 
                        tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                      />
                      <YAxis 
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip 
                        formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                        labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="Revenue" 
                        stroke="#8884d8" 
                        activeDot={{ r: 8 }} 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Expenses" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Profit" 
                        stroke="#ff7300" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </ChartContainer>

              <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
                <h2 className="text-xl font-semibold mb-4">Financial Data</h2>
                <DataTable data={displayData} />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
