import { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  description?: string;
}

export default function ChartContainer({ title, children, description }: ChartContainerProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="w-full h-[400px]">
        {children}
      </div>
    </div>
  );
}