'use client';
import React from 'react';
import { Smooch_Sans } from "next/font/google";

const smooch_Sans = Smooch_Sans({
  subsets: ["latin"],
  weight: "700",
});


const AboutPage: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col h-screen items-center bg-gradient-to-br from-[#B2D3F0] to-[#59B6E0] pb-10">
      <h3
        className={
          smooch_Sans.className +
          " text-6xl text-center drop-shadow-lg pt-9 pb-6 text-white capitalize"
        }
      >
        About This Project
      </h3>

      <div className='bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left'>

        <p className="">This is the about page.</p>
      </div>
      </main>
    </div>
  );
};

export default AboutPage;
