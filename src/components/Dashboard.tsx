import React from 'react';
import AssetCard from './AssetCard';
import RiskChart from './RiskChart';

const Dashboard = () => {
    // Mock Data
    const assets = [
        {
            id: 1,
            title: '儲蓄 (Savings)',
            amount: 150000,
            percentage: 50,
            riskLevel: 'Low',
            riskLabel: '低風險',
            colorClass: 'border-blue-500',
            chartColor: 'bg-blue-500'
        },
        {
            id: 2,
            title: '債券 (Bonds)',
            amount: 90000,
            percentage: 30,
            riskLevel: 'Medium',
            riskLabel: '中風險',
            colorClass: 'border-emerald-500',
            chartColor: 'bg-emerald-500'
        },
        {
            id: 3,
            title: '加密貨幣 (Crypto)',
            amount: 60000,
            percentage: 20,
            riskLevel: 'High',
            riskLabel: '高風險',
            colorClass: 'border-purple-500',
            chartColor: 'bg-purple-500'
        }
    ] as const;

    const totalWealth = assets.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <header className="mb-12 text-center">
                <h1 className="text-6xl md:text-7xl font-extrabold text-blue-700 drop-shadow-xl mb-4 transform hover:-translate-y-1 transition-transform duration-300">
                    財務管理儀表板
                </h1>
                <p className="text-gray-400 text-2xl font-medium">
                    總資產: <span className="text-white font-bold ml-2 text-3xl drop-shadow-md">${totalWealth.toLocaleString()}</span>
                </p>
            </header>

            {/* Asset Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {assets.map((asset) => (
                    <AssetCard
                        key={asset.id}
                        title={asset.title}
                        amount={asset.amount}
                        percentage={Math.round((asset.amount / totalWealth) * 100)}
                        riskLevel={asset.riskLevel}
                        riskLabel={asset.riskLabel}
                        colorClass={asset.colorClass}
                    />
                ))}
            </div>

            {/* Charts Section */}
            <RiskChart
                data={assets.map(a => ({
                    label: a.title,
                    value: a.amount,
                    color: a.chartColor
                }))}
            />

            {/* Footer */}
            <footer className="mt-12 text-center text-gray-500 text-sm">
                Created by Horace Chen, 2025.12.29
            </footer>
        </div>
    );
};

export default Dashboard;
