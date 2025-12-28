import React from 'react';

interface AssetCardProps {
    title: string;
    amount: number;
    percentage: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    riskLabel: string;
    colorClass: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ title, amount, percentage, riskLevel, riskLabel, colorClass }) => {
    const getRiskColor = (risk: string) => {
        switch (risk) {
            case 'High': return 'text-red-400 border-red-400';
            case 'Medium': return 'text-yellow-400 border-yellow-400';
            case 'Low': return 'text-green-400 border-green-400';
            default: return 'text-gray-400 border-gray-400';
        }
    };

    return (
        <div className={`p-6 rounded-2xl bg-gray-800 border-t-4 ${colorClass} shadow-lg hover:transform hover:scale-105 transition-all duration-300`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs border ${getRiskColor(riskLevel)} bg-opacity-10 bg-gray-700`}>
                    {riskLabel}
                </span>
            </div>

            <div className="mb-4">
                <span className="text-3xl font-extrabold text-white">
                    ${amount.toLocaleString()}
                </span>
                <span className="ml-2 text-sm text-gray-400">
                    ({percentage}%)
                </span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full ${colorClass.replace('border-', 'bg-')}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default AssetCard;
