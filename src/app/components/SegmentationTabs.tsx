import { useState } from 'react';

const tabs = ['Individual', 'Business', 'Investor'] as const;

export function SegmentationTabs() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Individual');

  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 text-sm transition-all relative ${
                activeTab === tab
                  ? 'font-bold'
                  : 'text-gray-500 hover:text-gray-800 font-medium'
              }`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: activeTab === tab ? '#E8590A' : undefined,
              }}
            >
              {tab}
              {activeTab === tab && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
                  style={{ background: '#E8590A' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
