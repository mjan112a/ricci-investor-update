interface SummaryMetricsProps {
  data: {
    Revenue: number;
    Expenses: number;
    Profit: number;
  }[];
}

export default function SummaryMetrics({ data }: SummaryMetricsProps) {
  const latestData = data[data.length - 1] || { Revenue: 0, Expenses: 0, Profit: 0 };
  const previousData = data[data.length - 2] || latestData;

  const calculateGrowth = (current: number, previous: number) => {
    if (!previous) return 0;
    return ((current - previous) / previous) * 100;
  };

  const metrics = [
    {
      label: 'Revenue',
      value: latestData.Revenue,
      growth: calculateGrowth(latestData.Revenue, previousData.Revenue),
      color: 'text-blue-600',
    },
    {
      label: 'Expenses',
      value: latestData.Expenses,
      growth: calculateGrowth(latestData.Expenses, previousData.Expenses),
      color: 'text-green-600',
    },
    {
      label: 'Profit',
      value: latestData.Profit,
      growth: calculateGrowth(latestData.Profit, previousData.Profit),
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
          <p className={`text-2xl font-semibold ${metric.color}`}>
            ${metric.value.toLocaleString()}
          </p>
          <p className={`text-sm ${metric.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {metric.growth >= 0 ? '↑' : '↓'} {Math.abs(metric.growth).toFixed(1)}%
          </p>
        </div>
      ))}
    </div>
  );
}