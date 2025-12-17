import React, { useState } from 'react';
import { MapPin, Snowflake, ExternalLink, Info, Train, CreditCard, ShoppingBag, Utensils, Castle, Ticket, Plane } from 'lucide-react';
import { TimelineItem } from './TimelineItem';
import { TransportBox } from './TransportBox';

export const Option1: React.FC = () => {
  const [showSkiPlan, setShowSkiPlan] = useState(false);

  // Helper to generate "App-Friendly" Google Maps links
  // Using maps.google.com/?q= triggers the native app more reliably on iOS than the API format
  const getMapLink = (query: string) => {
    return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Checklist Option 1 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-t-4 border-pink-500">
        <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
          <CreditCard className="text-pink-500 mr-3" /> สิ่งที่ต้องเตรียม & งบประมาณ (Option 1)
        </h2>

        {/* Budget Summary Box */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-yellow-800 mb-2 border-b border-yellow-200 pb-1">💰 สรุปงบประมาณที่ควรเตรียม (ต่อคน)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-yellow-900">
            <div>
              <span className="font-semibold block flex items-center"><Train className="w-3 h-3 mr-1"/> ค่าเดินทาง:</span>
              <span className="text-xl font-bold">~24,000 เยน</span> <span className="text-gray-500 text-xs">(~5,800 ฿)</span>
              <p className="text-xs mt-1 text-gray-600">*Pass 15k + รถไฟสนามบิน + ส่วนต่าง ICOCA</p>
            </div>
            <div>
              <span className="font-semibold block flex items-center"><Utensils className="w-3 h-3 mr-1"/> ค่ากิน:</span>
              <span className="text-xl font-bold">~30,000 เยน</span> <span className="text-gray-500 text-xs">(~7,200 ฿)</span>
              <p className="text-xs mt-1 text-gray-600">*เฉลี่ยวันละ 6,000 (รวมมื้อเนื้อย่าง)</p>
            </div>
            <div>
              <span className="font-semibold block flex items-center"><Snowflake className="w-3 h-3 mr-1"/> กิจกรรม/อื่นๆ:</span>
              <span className="text-xl font-bold">~15,000 เยน</span> <span className="text-gray-500 text-xs">(~3,600 ฿)</span>
              <p className="text-xs mt-1 text-gray-600">*ค่าเช่าชุดสกี (~5k), ค่าเข้า, ของฝาก</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://www.klook.com/activity/2969-5-day-jr-takayama-hokuriku-area-tourist-pass-jr-pass/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition border border-blue-100 group">
            <div className="flex items-start">
              <Ticket className="text-blue-600 mt-1 mr-3 w-5 h-5" />
              <div>
                <div className="font-bold text-blue-800 group-hover:underline flex items-center">Takayama-Hokuriku Pass <ExternalLink className="w-3 h-3 ml-1"/></div>
                <div className="text-sm text-gray-600">สำคัญมาก! ใช้เดินทางข้ามเมือง</div>
              </div>
            </div>
          </a>
          <a href="https://www.klook.com/th/activity/15411-central-japan-international-airport-nagoya/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition border border-blue-100 group">
            <div className="flex items-start">
              <Train className="text-blue-600 mt-1 mr-3 w-5 h-5" />
              <div>
                <div className="font-bold text-blue-800 group-hover:underline flex items-center">ตั๋วเข้าเมือง Nagoya (μ-SKY) <ExternalLink className="w-3 h-3 ml-1"/></div>
                <div className="text-sm text-gray-600">จองล่วงหน้า สะดวกกว่า</div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="mt-4 p-3 bg-red-50 rounded border border-red-200 text-sm text-red-700 flex items-start">
          <Info className="w-4 h-4 mt-0.5 mr-2 shrink-0" />
          <div>
            <span className="font-bold">แนะนำงบ ICOCA:</span> ควรเติมเงินในบัตร ICOCA ไว้ประมาณ <b>5,000 - 6,000 เยน</b> เพื่อให้ครอบคลุมค่ารถส่วนต่าง (Nagoya Subway, Kobe/Uji, Airport)
          </div>
        </div>
      </div>

      {/* Day 1 */}
      <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 1</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Nagoya Arrival & City Vibes</h3>
        </div>
        
        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
          <TimelineItem 
            time="08:00 - 10:00" 
            title="ถึงสนามบิน & เข้าเมือง" 
            colorClass="border-blue-500"
            icon={<Plane />}
          >
            <TransportBox title="วิธีเดินทาง" type="train">
              เดินตามป้าย "Trains" ไปสถานี Meitetsu Airport Station<br/>
              <b>ตั๋ว:</b> นำ QR Code จาก Klook ไปแลกที่เคาน์เตอร์ หรือกดซื้อที่ตู้ (1,230 เยน)<br/>
              <b>ปลายทาง:</b> ลงสถานี <a href={getMapLink("Meitetsu Nagoya Station")} target="_blank" className="text-blue-600 underline hover:text-blue-800">Meitetsu Nagoya</a>
            </TransportBox>
          </TimelineItem>

          <TimelineItem 
            time="10:30 - 13:00" 
            title="Nagoya Castle & Lunch" 
            colorClass="border-orange-400"
            icon={<Castle />}
          >
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>เที่ยวชม <a href={getMapLink("Nagoya Castle")} target="_blank" className="text-red-600 font-medium hover:underline">📍 Nagoya Castle</a> และพระราชวัง Honmaru Goten</li>
                <li>ทานมื้อเที่ยงที่ 🍣 <b><a href={getMapLink("Yanagibashi Central Market")} target="_blank" className="text-red-600 font-medium hover:underline">📍 ตลาดปลา Yanagibashi</a></b> (มีร้านซูชิสดๆ เยอะมาก)</li>
            </ul>
          </TimelineItem>

          <TimelineItem 
            time="13:30 - 18:30" 
            title="Osu Shopping & Street Food" 
            colorClass="border-red-500"
            icon={<ShoppingBag />}
          >
            <p className="text-gray-600 text-sm mt-2">ย่านการค้าที่มีของกิน Street Food เยอะมาก บรรยากาศคึกคักคล้าย Gion/Asakusa</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                <li>ไหว้พระวัด <a href={getMapLink("Osu Kannon")} target="_blank" className="text-red-600 font-medium hover:underline">📍 Osu Kannon</a></li>
                <li>เดินช้อปปิ้งที่ <a href={getMapLink("Osu Shopping Street")} target="_blank" className="text-red-600 font-medium hover:underline">📍 Osu Shopping Street</a></li>
                <li>แวะถ่ายรูป <a href={getMapLink("Oasis 21")} target="_blank" className="text-red-600 font-medium hover:underline">📍 Oasis 21</a> (ยานอวกาศน้ำ) ช่วงค่ำ</li>
            </ul>
          </TimelineItem>
        </div>
      </div>

      {/* Day 2 */}
      <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 2</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Takayama Winter Magic</h3>
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="08:30 - 11:00" title="Move to Takayama" colorClass="border-blue-400">
                <TransportBox type="train">
                    <b>ขึ้นรถที่:</b> สถานี <a href={getMapLink("Nagoya Station")} target="_blank" className="text-blue-600 underline">📍 JR Nagoya</a><br/>
                    <b>ตั๋ว:</b> ใช้ <b>Takayama-Hokuriku Pass</b> (ฟรี) จองที่นั่งก่อนขึ้น<br/>
                    <b>รถไฟ:</b> ขบวน <b>Hida Limited Express</b> (วิวสวยมาก!)
                </TransportBox>
            </TimelineItem>

            <div className="relative z-10 mb-6">
                <button 
                    onClick={() => setShowSkiPlan(!showSkiPlan)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-600 transition flex items-center justify-center font-bold"
                >
                    <Snowflake className="mr-2" /> ⛷️ Option เสริม: ไปเล่นสกี (Mont Deus) - คลิกเพื่อดูแผน
                </button>
                
                {showSkiPlan && (
                    <div className="bg-white mt-2 rounded-lg border-2 border-cyan-200 overflow-hidden animate-fadeIn">
                        <div className="p-5 space-y-4">
                            <div className="flex">
                                <span className="w-16 font-bold text-gray-500 text-sm">11:00</span>
                                <div className="flex-1 ml-2 text-sm text-gray-700">ถึง Takayama ฝากกระเป๋าที่โรงแรม</div>
                            </div>
                            <div className="flex">
                                <span className="w-16 font-bold text-gray-500 text-sm">12:30</span>
                                <div className="flex-1 ml-2 text-sm text-gray-700">🚌 ขึ้น <b>Ski Shuttle Bus</b> ที่ <a href={getMapLink("Takayama Nohi Bus Center")} target="_blank" className="text-blue-600 underline">📍 Nohi Bus Center</a></div>
                            </div>
                            <div className="flex">
                                <span className="w-16 font-bold text-gray-500 text-sm">13:00</span>
                                <div className="flex-1 ml-2 text-sm text-gray-700">🎿 <b>Ski Time!</b> เล่นสกี/หิมะ ที่ <a href={getMapLink("Mont Deus Hida Kuraiyama Snow Park")} target="_blank" className="text-blue-600 underline">📍 Mont Deus</a></div>
                            </div>
                            <div className="flex">
                                <span className="w-16 font-bold text-gray-500 text-sm">16:30</span>
                                <div className="flex-1 ml-2 text-sm text-gray-700">🚌 นั่งบัสกลับเข้าเมือง</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <TimelineItem time="18:30" title="Dinner: Hida Beef" colorClass="border-red-600" icon={<Utensils />}>
                <p className="text-sm text-gray-600">มื้อเย็นต้องจัด! เนื้อฮิดะย่างเตาถ่านที่ร้านดัง <a href={getMapLink("Ajikura Tengoku")} target="_blank" className="text-red-600 font-bold underline">📍 Ajikura Tengoku</a> หรือ <a href={getMapLink("Maruaki Hida Takayama")} target="_blank" className="text-red-600 font-bold underline">📍 Maruaki</a></p>
            </TimelineItem>
        </div>
      </div>

       {/* Day 3 */}
       <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 3</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Old Town & Move to Osaka</h3>
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="08:45 - 11:00" title="Takayama Old Town" colorClass="border-pink-400">
                <p className="text-sm text-gray-700 mb-2">เดินเล่นย่านเมืองเก่า <span className="text-pink-600 font-bold">📍 Sanmachi Suji</span></p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>เดินตลาดเช้า <a href={getMapLink("Miyagawa Morning Market")} target="_blank" className="underline">📍 Miyagawa Morning Market</a></li>
                    <li>กินซูชิเนื้อฮิดะบนแครกเกอร์</li>
                    <li>แวะ <a href={getMapLink("Takayama Jinya")} target="_blank" className="underline">📍 Takayama Jinya</a></li>
                </ul>
            </TimelineItem>

            <TimelineItem time="12:00" title="Move to Osaka" colorClass="border-blue-800" icon={<Train/>}>
                <TransportBox type="train">
                    <b>1️⃣ Takayama ➔ Toyama:</b> นั่ง <b>Hida Wide View Express</b> (ใช้ Pass) ลงสถานี Toyama<br/><br/>
                    <b>2️⃣ Toyama ➔ Tsuruga:</b> เปลี่ยนไปนั่ง <b>Hokuriku Shinkansen</b><br/><br/>
                    <b>3️⃣ Tsuruga ➔ Osaka:</b> เปลี่ยนไปนั่ง <b>Thunderbird Express</b><br/>
                    <span className="text-xs text-gray-500">*จุดสังเกต: ที่สถานี Tsuruga ให้เดินตามป้าย "Transfer to JR Lines (Thunderbird)"</span><br/><br/>
                    <b>⏱ รวมเวลา:</b> ประมาณ 4.5 ชม. (ถึง Osaka ~16:30)
                </TransportBox>
            </TimelineItem>

            <TimelineItem time="18:00" title="แนะนำ: Shinsekai (Osaka)" colorClass="border-yellow-500">
                 <p className="text-sm text-gray-600">เดินย่าน <a href={getMapLink("Shinsekai Osaka")} target="_blank" className="text-yellow-700 font-bold underline">📍 Shinsekai</a> กินของทอด Kushikatsu ดูหอคอย Tsutenkaku</p>
            </TimelineItem>
        </div>
      </div>

       {/* Day 4 */}
       <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 4</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Kobe & Uji Day Trip</h3>
        </div>

        <div className="bg-gray-100 p-3 mb-4 rounded border-l-4 border-gray-500 text-sm ml-4 md:ml-6">
            <CreditCard className="w-4 h-4 inline mr-2"/><b>Tip:</b> วันนี้ Pass จะไม่ครอบคลุมบางช่วง แนะนำให้ใช้บัตร <b>ICOCA</b> แตะจ่าย
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="08:00 - 12:30" title="Kobe Sightseeing" colorClass="border-blue-600">
                 <TransportBox type="train">
                    <b>ขาไป:</b> นั่ง JR Special Rapid จาก Osaka ไปลง <b>Sannomiya</b> (~25 นาที) (410 เยน)
                </TransportBox>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                    <li>ถ่ายรูป <span className="font-bold">📍 Kobe Port Tower</span> และ <span className="font-bold">📍 Meriken Park</span></li>
                    <li>เดินเล่นย่านฝรั่ง <span className="font-bold">📍 Kitano Ijinkan</span></li>
                    <li><b>Lunch:</b> เนื้อโกเบ <a href={getMapLink("Steakland Kobe")} target="_blank" className="text-blue-600 font-bold underline">(Steakland)</a> หรือ ราเมง <a href={getMapLink("Honke Daiichi Asahi Sannomiya")} target="_blank" className="text-blue-600 font-bold underline">(Daiichi Asahi)</a></li>
                </ul>
            </TimelineItem>

            <div className="p-4 bg-gray-50 border-b border-gray-200 rounded-lg mb-6">
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-bold mr-2">12:30 - 14:00</span>
                <h4 className="font-bold text-md text-gray-700 inline">🚌 เดินทางข้ามเมือง: Kobe ➔ Uji</h4>
                <TransportBox type="train">
                    <b>Step 1:</b> นั่ง <b>JR Special Rapid</b> จาก Sannomiya (Kobe) ไปลง <b>Kyoto Station</b> (~52 นาที)<br/>
                    <b>Step 2:</b> เปลี่ยนไปสาย <b>JR Nara Line</b> (ชานชาลา 8-10) นั่งไปลง <b>Uji Station</b> (~20 นาที)
                </TransportBox>
            </div>

            <TimelineItem time="14:00 - 17:00" title="Uji Matcha Town" colorClass="border-green-600">
                <p className="text-sm text-gray-700 mt-2">เดินถนนชาเขียว <a href={getMapLink("Byodoin Omotesando")} target="_blank" className="text-green-700 underline">📍 Omotesando</a> เข้าวัด <a href={getMapLink("Byodoin Temple")} target="_blank" className="text-green-700 underline">📍 Byodoin</a></p>
                <div className="bg-green-50 p-3 rounded border border-green-200 mt-2 text-sm text-gray-700">
                    🍵 <b>ร้านแนะนำ:</b> <a href={getMapLink("Nakamura Tokichi Main Store")} target="_blank" className="underline font-bold text-green-800">Nakamura Tokichi</a>, <a href={getMapLink("Masuda Chaho")} target="_blank" className="underline font-bold text-green-800">Masuda Chaho</a> (ซอฟท์ครีมชาเขียว), <a href={getMapLink("Starbucks Coffee Kyoto Uji Byodoin Omotesando")} target="_blank" className="underline font-bold text-green-800">Starbucks Uji</a>
                </div>
            </TimelineItem>
        </div>
      </div>

       {/* Day 5 */}
       <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 5</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Osaka Shopping & Return</h3>
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="เช้า" title="Kuromon Market & Shopping" colorClass="border-gray-500">
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                    <li>หาของกินที่ <a href={getMapLink("Kuromon Ichiba Market")} target="_blank" className="font-medium underline">📍 Kuromon Market</a></li>
                    <li>ช้อปปิ้ง <a href={getMapLink("Dotonbori")} target="_blank" className="font-medium underline">📍 Dotonbori</a></li>
                </ul>
                <div className="mt-4">
                     <TransportBox type="info" title="ไปสนามบิน KIX">
                        <b>นั่ง Nankai Rapi:t</b> จาก Namba หรือ <b>JR Haruka</b> จาก Tennoji<br/>
                        <b>💳 คืนบัตร ICOCA:</b> คืนบัตร ICOCA ที่สถานี JR Osaka ก่อนมาสนามบิน
                    </TransportBox>
                </div>
            </TimelineItem>
        </div>
      </div>
    </div>
  );
};