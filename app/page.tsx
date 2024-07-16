'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 overflow-hidden bg-[url('/images/bg.webp')] bg-cover bg-center">
      <button 
        className="flex items-center bg-[#6db5dc] border-8 text-white font-bold py-6 px-12 md:py-8 md:px-20 lg:py-8 lg:px-20 rounded-full hover:bg-[#4781a9] transition duration-300 text-xl md:text-3xl lg:text-3xl"
        onClick={() => router.push('/search')}
      >
        Click to Start Your Search
      </button>
    </main>
  );
}
