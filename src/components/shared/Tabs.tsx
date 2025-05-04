import React from 'react';
export const Tabs = ({
  tabs,
  activeTab,
  onChange
}) => {
  return <div className="border-b border-gray-200 mb-6">
      <nav className="flex -mb-px">
        {tabs.map(tab => <button key={tab.id} className={`py-4 px-6 font-medium text-sm ${activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => onChange(tab.id)}>
            {tab.label}
          </button>)}
      </nav>
    </div>;
};