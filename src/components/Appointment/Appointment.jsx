import React from 'react';
import AppointmentSection from './AppointmentSection';
import CtaSection from './CtaSection';

function Appointment() {
  return (
    <div className="bg-light-gray overflow-x-hidden">
      <main>
        <AppointmentSection />
        <CtaSection />
      </main>
    </div>
  );
}

export default Appointment;
