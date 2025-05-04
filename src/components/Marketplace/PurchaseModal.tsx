import React, { useState } from 'react';
import { XIcon, ShieldIcon, CreditCardIcon, CheckIcon } from 'lucide-react';
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  tier: number;
  credits: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}
interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}
export const PurchaseModal = ({
  isOpen,
  onClose,
  product
}: PurchaseModalProps) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handlePurchase = () => {
    setIsPurchasing(true);
    // Simulate purchase process
    setTimeout(() => {
      setIsPurchasing(false);
      setIsSuccess(true);
      // Reset and close modal after showing success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Confirm Purchase</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        {!isSuccess ? <>
            <div className="mb-6">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="font-medium text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <span className="text-gray-600">Price:</span>
                <span className="text-xl font-bold text-blue-600">
                  {product.credits} Credits
                </span>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <ShieldIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="font-medium">Purchase Protection</h4>
                  <p className="text-sm text-gray-600">
                    Your purchase is protected by our satisfaction guarantee
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCardIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="font-medium">Credit Balance</h4>
                  <p className="text-sm text-gray-600">
                    You have sufficient credits for this purchase
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={handlePurchase} disabled={isPurchasing} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                {isPurchasing ? <span>Processing...</span> : <span>Confirm Purchase</span>}
              </button>
            </div>
          </> : <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Purchase Successful!</h3>
            <p className="text-gray-600">
              Thank you for your purchase. Your credits have been deducted.
            </p>
          </div>}
      </div>
    </div>;
};