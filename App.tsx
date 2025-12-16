import React, { useState } from 'react';
import { RouteOption } from './types';
import { Option1 } from './components/Option1';
import { Option2 } from './components/Option2';

export default function App() {
  const [activeTab, setActiveTab] = useState<RouteOption>('option1');

  return (
    <div className="min-h-screen pb-12 font-sans bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-japan-blue text-white overflow-hidden pb-4 shadow-xl">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        
        <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight drop-shadow-md">🇯🇵 Japan Trip Planner</h1>
            <p className="text-lg md:text-xl font-light text-blue-100 transition-all duration-300">
                {activeTab === 'option1' ? 'Nagoya ➔ Takayama ➔ Osaka (เน้นใช้ Pass)' : 'Takayama ➔ Nagoya ➔ Tokyo (เน้นกิน/ช้อป)'}
            </p>
        </div>

        {/* Tabs Navigation */}
        <div className="relative max-w-4xl mx-auto px-4 mt-6 flex flex-col md:flex-row gap-2">
            <button 
              onClick={() => setActiveTab('option1')}
              className={`flex-1 py-3 px-4 rounded-t-lg text-center cursor-pointer flex flex-col items-center justify-center transition-all duration-300 ${
                activeTab === 'option1' 
                  ? 'bg-gray-100 text-blue-900 font-semibold border-b-4 border-japan-red translate-y-[-2px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
                <div className="text-xs uppercase tracking-wider opacity-80 mb-1">Option 1: Nagoya Route</div>
                <div className="text-lg font-bold mb-2">Nagoya ➔ Takayama ➔ Osaka</div>
                <div className="flex flex-wrap justify-center gap-1.5 opacity-90">
                    {['🌆 แสงสีโอซาก้า', '🏯 ปราสาท', '🥩 เนื้อฮิดะ', '❄️ สกี & หิมะ'].map((tag) => (
                      <span key={tag} className="border border-current px-2 py-0.5 rounded-full text-[10px] whitespace-nowrap">{tag}</span>
                    ))}
                </div>
            </button>
            <button 
               onClick={() => setActiveTab('option2')}
               className={`flex-1 py-3 px-4 rounded-t-lg text-center cursor-pointer flex flex-col items-center justify-center transition-all duration-300 ${
                activeTab === 'option2' 
                  ? 'bg-gray-100 text-green-900 font-semibold border-b-4 border-green-500 translate-y-[-2px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
                <div className="text-left md:text-center">
                    <div className="text-xs uppercase tracking-wider opacity-80 mb-1 text-center">Option 2: Nagoya-Tokyo Route</div>
                    <div className="text-lg font-bold mb-2 text-center">Takayama ➔ Nagoya ➔ Tokyo</div>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5 opacity-90">
                    {['🥩 เนื้อฮิดะ', '🐟 ตลาดปลา', '🏙️ แสงสีโตเกียว', '🛍️ Shopping'].map((tag) => (
                       <span key={tag} className="border border-current px-2 py-0.5 rounded-full text-[10px] whitespace-nowrap">{tag}</span>
                    ))}
                </div>
            </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        {activeTab === 'option1' ? <Option1 /> : <Option2 />}
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-400 text-sm">
        <p>Enjoy your trip to Japan! 🇯🇵</p>
      </div>
    </div>
  );
}