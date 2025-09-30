import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();
  
  // Generate calendar days
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };
  
  const handleDateClick = (day) => {
    if (day) {
      const clickedDate = new Date(currentYear, currentMonth, day);
      const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      
      // Only allow future dates
      if (clickedDate >= todayDate) {
        setSelectedDate(clickedDate);
      }
    }
  };
  
  const isDateSelected = (day) => {
    if (!day || !selectedDate) return false;
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentMonth && 
           selectedDate.getFullYear() === currentYear;
  };
  
  const isDateDisabled = (day) => {
    if (!day) return true;
    const date = new Date(currentYear, currentMonth, day);
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayDate;
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-calendar w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => navigateMonth('prev')}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} className="text-icon-gray" />
        </button>
        <h3 className="font-sf-pro font-medium text-brand-blue uppercase tracking-wider">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <button 
          onClick={() => navigateMonth('next')}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} className="text-icon-gray" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mb-4">
        {days.map(day => <div key={day} className="font-sf-pro text-xs text-icon-gray">{day}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {calendarDays.map((day, index) => (
          <button 
            key={index}
            onClick={() => handleDateClick(day)}
            disabled={isDateDisabled(day)}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-sf-pro
              ${!day ? 'invisible' : ''}
              ${isDateSelected(day) ? 'bg-[#1F95AF] text-white' : ''}
              ${isDateDisabled(day) ? 'text-gray-300 cursor-not-allowed' : 'text-brand-blue hover:bg-gray-100'}
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const TimePicker = ({ selectedTime, setSelectedTime }) => {
  const timeSlots = [
    '9:00 AM - 9:45 AM', '9:45 AM - 10:30 AM', '10:30 AM - 11:15 AM', '11:15 AM - 12:00 PM',
    '12:00 PM- 12:45 PM', '12:45 PM - 1:30 PM', '1:30 PM - 2:15 PM', '2:15 PM - 3:00 PM',
    '3:00 PM - 3:45 PM', '3:45 PM - 4:30 PM', '4:30 PM - 5:15 PM', '5:15 PM - 6:00 PM'
  ];
  const disabledSlot = '1:30 PM - 2:15 PM';

  return (
    <div className="grid grid-cols-2 gap-4">
      {timeSlots.map(time => {
        const isDisabled = time === disabledSlot;
        const isSelected = time === selectedTime;
        return (
          <button
            key={time}
            disabled={isDisabled}
            onClick={() => setSelectedTime(time)}
            className={`p-3 text-sm rounded-md border border-border-gray text-center transition-colors
              ${isDisabled ? 'bg-[#7E7E7E] text-text-gray cursor-not-allowed' : ''}
              ${isSelected ? 'bg-[#ED1C24] text-white border-brand-red' : ''}
              ${!isDisabled && !isSelected ? 'bg-white hover:bg-[#7E7E7E]' : ''}
            `}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

const BookingForm = ({ selectedDate, selectedTime }) => {
  const formatAppointmentDate = (date) => {
    if (!date) return '';
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };
  
  const appointmentString = selectedDate && selectedTime ? 
    `${formatAppointmentDate(selectedDate)} at ${selectedTime}` : 
    'No appointment selected';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-card w-full">
      <h3 className="text-2xl font-medium mb-6">Your Details</h3>
      <div className="space-y-5">
        <div className="bg-[#F4F4F4] border border-border-gray rounded-lg p-4">
          <p className="text-xs text-[#FF0000] leading-relaxed tracking-wide">
            <span className="text-[#FF0000]">Selected Appointment:</span><br/>
            {appointmentString}
          </p>
        </div>
        
        <div>
          <label className="text-base font-normal mb-2 block">First Name</label>
          <input type="text" placeholder="Enter your First Name" className="w-full p-3 placeholder:text-[#6F6F6F] border border-border-gray rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-red" />
        </div>
        
        <div>
          <label className="text-base font-normal mb-2 block">Last Name</label>
          <input type="text" placeholder="Enter your Last Name" className="w-full p-3 placeholder:text-[#6F6F6F] border border-border-gray rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-red" />
        </div>

        <div>
          <label className="text-base font-normal mb-2 block">Email</label>
          <input type="email" placeholder="Enter your Email" className="w-full p-3 placeholder:text-[#6F6F6F] border border-border-gray rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-red" />
        </div>
        
        <div>
          <label className="text-base font-normal mb-2 block">Phone No.</label>
          <input type="tel" placeholder="Enter your Phone Number" className="w-full p-3 placeholder:text-[#6F6F6F] border border-border-gray rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-red" />
        </div>
        
        <div>
          <label className="text-base font-normal mb-2 block">Remarks</label>
          <textarea placeholder="Enter your appointment details here." rows="4" className="w-full p-3 placeholder:text-[#6F6F6F] border border-border-gray rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-red"></textarea>
        </div>
        
        <button className="w-full bg-[#ED1C24] text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-colors">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

const AppointmentSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('9:45 AM - 10:30 AM');

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium text-[#ED1C24] mb-2">Book Your Appointment</h1>
        <p className="text-xl text-[#7A7A7A]">Choose your preferred date and time, then provide your details to confirm</p>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="bg-white p-6 rounded-2xl shadow-card">
          <h3 className="text-2xl font-medium mb-2">Choose a Date & Time</h3>
          <div className="grid md:grid-cols-2 items-start">
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <TimePicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
            <p className="text-sm text-[#7A7A7A] mb-8">Appointments can be booked for 45 minutes only.</p>
          </div>
        </div>
        
        {/* Right Column */}
        <BookingForm className='mx-10' selectedDate={selectedDate} selectedTime={selectedTime} />
      </div>
    </section>
  );
};

export default AppointmentSection;
