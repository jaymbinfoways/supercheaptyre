import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const createAppointmentAndOrder = async () => {
      try {
        setIsLoading(true);
        
        // Get appointment data from localStorage
        const appointmentData = JSON.parse(localStorage.getItem('appointmentData') || '{}');
        // Get cart items from the preserved storage
        const cartItems = JSON.parse(localStorage.getItem('cartItemsForOrder') || '[]');
        
        if (!appointmentData || !appointmentData.date || !appointmentData.time) {
          throw new Error('Appointment data not found');
        }
        
        // Get time slot data
        const timeSlotId = localStorage.getItem('timeSlotId');
        const selectedSlotId = localStorage.getItem('selectedSlotId');
        
        if (!timeSlotId || !selectedSlotId) {
          throw new Error('Time slot data not found');
        }
        
        // Create appointment
        const appointmentPayload = {
          firstname: appointmentData.firstName,
          lastname: appointmentData.lastName,
          phone: appointmentData.phone,
          email: appointmentData.email,
          date: appointmentData.date,
          slotId: selectedSlotId,
          timeSlotId: timeSlotId,
          notes: appointmentData.remarks,
          status: "confirmed"
        };
        
        const appointmentResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/appointment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(appointmentPayload)
        });
        
        if (!appointmentResponse.ok) {
          const errorData = await appointmentResponse.json();
          throw new Error(errorData.message || 'Failed to create appointment');
        }
        
        const appointmentResult = await appointmentResponse.json();
        console.log('Appointment created:', appointmentResult);
        
        // Create order
        const orderPayload = {
          items: cartItems.map(item => ({
            id: item._id || item.id,
            quantity: item.quantity,
            price: item.price
          })),
          subtotal: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          appointment: {
            date: appointmentData.date,
            slotId: selectedSlotId,
            timeSlotId: timeSlotId
          },
          customer: {
            name: `${appointmentData.firstName} ${appointmentData.lastName}`,
            phone: appointmentData.phone,
            email: appointmentData.email
          },
          payment: {
            method: "stripe",
            status: "completed",
            amount: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          }
        };
        
        const orderResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(orderPayload)
        });
        
        if (!orderResponse.ok) {
          const errorData = await orderResponse.json();
          throw new Error(errorData.message || 'Failed to create order');
        }
        
        const orderResult = await orderResponse.json();
        console.log('Order created:', orderResult);
        
        // Clear cart items and appointment data from localStorage after successful order creation
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartItemsForOrder');
        localStorage.removeItem('appointmentData');
        localStorage.removeItem('timeSlotId');
        localStorage.removeItem('selectedSlotId');
        
        // Show success message
        toast.success('Payment successful! Your appointment and order have been confirmed.');
      } catch (error) {
        console.error('Error creating appointment/order:', error);
        toast.error(error.message || 'Failed to create appointment and order. Please contact support.');
      } finally {
        setIsLoading(false);
      }
    };
    
    // Only create appointment and order if we haven't already
    if (!localStorage.getItem('appointmentCreated')) {
      createAppointmentAndOrder();
      localStorage.setItem('appointmentCreated', 'true');
    } else {
      // Show success message
      toast.success('Payment successful! Your appointment has been booked.');
    }
  }, [location]);

  const handleGoHome = () => {
    // Clean up localStorage
    localStorage.removeItem('appointmentCreated');
    localStorage.removeItem('cartItemsForOrder');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Payment Successful!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your appointment has been confirmed and payment has been processed.
            </p>
          </div>

          <div className="mt-8">
            <div className="bg-green-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Appointment Confirmed
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>
                      Thank you for your payment. Your appointment details have been sent to your email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {isLoading && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Creating your appointment and order...</p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoHome}
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ED1C24] hover:bg-[#c8141d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ED1C24] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Processing...' : 'Go to Home'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;