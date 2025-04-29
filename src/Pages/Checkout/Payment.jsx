import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RotatingDotsLoader = () => {
  return (
    <div 
      className="relative w-16 h-16 animate-spin" 
      style={{ animationDuration: '2s' }} // Slower rotation: 2 seconds per spin
    >
      {/* Dot 1 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Dot 2 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "14.64%", left: "85.36%", transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Dot 3 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "50%", left: "100%", transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Dot 4 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "85.36%", left: "85.36%", transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Dot 5 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "100%", left: "50%", transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Dot 6 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "85.36%", left: "14.64%", transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Dot 7 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "50%", left: "0%", transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Dot 8 */}
      <div
        className="absolute w-3 h-3 bg-blue-600 rounded-full"
        style={{ top: "14.64%", left: "14.64%", transform: "translate(-50%, -50%)" }}
      ></div>
    </div>
  );
};

const ProcessingComponent = () => (
  <div className="text-center flex flex-col justify-center items-center">
    <h2 className="text-xl font-semibold mb-4">Processing your payment...</h2>
    <RotatingDotsLoader />
  </div>
);

const SuccessComponent = () => (
  <div className="text-center">
    <h2 className="text-xl font-semibold mb-4">Payment Processed Successfully!</h2>
    <p className="text-gray-600">Redirecting shortly...</p>
  </div>
);

const PaymentProcessingPage = () => {
  const [showProcessing, setShowProcessing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowProcessing(false);
    }, 8000);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (!showProcessing) {
      const timer2 = setTimeout(() => {
        navigate('/courses');
      }, 5000);
      return () => clearTimeout(timer2);
    }
  }, [showProcessing, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {showProcessing ? <ProcessingComponent /> : <SuccessComponent />}
    </div>
  );
};

export default PaymentProcessingPage;
