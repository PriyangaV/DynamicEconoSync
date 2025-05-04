import React from 'react';
import { ClockIcon, CheckCircleIcon, XCircleIcon, CreditCardIcon, FilterIcon, DownloadIcon } from 'lucide-react';
interface Transaction {
  id: number;
  type: 'purchase' | 'credit_earned' | 'credit_expired';
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  category: string;
}
export const TransactionHistory = () => {
  const mockTransactions: Transaction[] = [{
    id: 1,
    type: 'purchase',
    description: 'Weekly Food Package',
    amount: -50,
    date: '2023-06-15',
    status: 'completed',
    category: 'Food & Supplies'
  }, {
    id: 2,
    type: 'credit_earned',
    description: 'Job Completion: Medical Supply Distribution',
    amount: 120,
    date: '2023-06-14',
    status: 'completed',
    category: 'Jobs'
  }, {
    id: 3,
    type: 'purchase',
    description: 'Online Course Bundle',
    amount: -120,
    date: '2023-06-12',
    status: 'completed',
    category: 'Education'
  }, {
    id: 4,
    type: 'credit_expired',
    description: 'Unused Credits Expired',
    amount: -30,
    date: '2023-06-10',
    status: 'completed',
    category: 'System'
  }];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-600" />;
      case 'failed':
        return <XCircleIcon className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };
  const getAmountColor = (amount: number) => {
    return amount >= 0 ? 'text-green-600' : 'text-red-600';
  };
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <CreditCardIcon className="h-6 w-6 text-blue-600 mr-2" />
          Transaction History
        </h2>
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <FilterIcon className="h-5 w-5 mr-2" />
            Filter
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <DownloadIcon className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockTransactions.map(transaction => <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-gray-900">
                    {transaction.description}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100">
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`font-medium ${getAmountColor(transaction.amount)}`}>
                    {transaction.amount > 0 ? '+' : ''}
                    {transaction.amount} Credits
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(transaction.status)}
                    <span className="ml-2 text-sm text-gray-600">
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};