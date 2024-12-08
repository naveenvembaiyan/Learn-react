import React from 'react';

export default function SafetyCard() {
  return (
    <div className='h-screen bg-gray-100'>
      <div className='bg-teal-500 rounded-xl p-6 w-72 h-96 flex justify-center items-center'>
        <div className='relative w-full h-full bg-white rounded-xl shadow-lg'>
          <div className='absolute inset-4 grid grid-cols-6 gap-1'>
            {Array.from({ length: 33 }).map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center text-sm font-bold ${
                  index < 22
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-black'
                } rounded-md`}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
