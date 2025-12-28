import React from 'react';

interface RiskChartProps {
    data: {
        label: string;
        value: number;
        color: string;
    }[];
}

const RiskChart: React.FC<RiskChartProps> = ({ data }) => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg mt-8">
            <h3 className="text-xl font-bold text-gray-100 mb-6">資產風險分佈 (Risk Distribution)</h3>

            {/* Percentage Bar */}
            <div className="flex w-full h-12 rounded-xl overflow-hidden mb-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`h-full ${item.color} flex items-center justify-center text-xs font-bold text-white transition-all duration-500 hover:opacity-90`}
                        style={{ width: `${(item.value / total) * 100}%` }}
                        title={`${item.label}: $${item.value.toLocaleString()}`}
                    >
                        {Math.round((item.value / total) * 100)}%
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className={`w-3 h-3 rounded-full mr-2 ${item.color}`}></span>
                        <span className="text-sm text-gray-300">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiskChart;
