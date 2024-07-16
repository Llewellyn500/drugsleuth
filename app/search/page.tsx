'use client';
import Form from '@/components/ProfessionalForm';
import React, { useState } from 'react';

export default function SearchPage() {
  const [isProfessional, setIsProfessional] = useState<string | null>(null);

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsProfessional(event.target.value);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center p-6 md:p-24 overflow-hidden bg-[url('/images/search.webp')] bg-cover bg-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-6xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to DrugSleuth</h1>
        <p className="mb-6 text-lg">
          Your trusted resource for medication identification and information. Our goal is to provide accurate and helpful information about prescribed drugs, whether you're a healthcare professional or a patient. To ensure we offer the most relevant assistance.
        </p>
        <h2 className="text-xl font-semibold mb-4">Are you a medical professional?</h2>
        <div className="flex justify-center space-x-8 text-xl font-semibold">
        <label className="flex items-center space-x-2">
        <input
          type="radio"
          id="professionalYes"
          name="professional"
          value="yes"
          onChange={handleSelection}
          checked={isProfessional === 'yes'}
          className="hidden"
        />
        <div className={`custom-radio ${isProfessional === 'yes' ? 'bg-[#4781a9]' : 'bg-white'}`}></div>
        <span>Yes</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          id="professionalNo"
          name="professional"
          value="no"
          onChange={handleSelection}
          checked={isProfessional === 'no'}
          className="hidden"
        />
        <div className={`custom-radio ${isProfessional === 'no' ? 'bg-[#4781a9]' : 'bg-white'}`}></div>
        <span>No</span>
      </label>
        </div>
        {/* <Form /> */}
      </div>
    </main>
  );
}

