import React from 'react';
import { CreditCard, Train, ShoppingBag, Utensils, ExternalLink, Ticket, MapPin, Building, Plane, Info } from 'lucide-react';
import { TimelineItem } from './TimelineItem';
import { TransportBox } from './TransportBox';

export const Option2: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
       {/* Checklist Option 2 */}
       <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-t-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
          <CreditCard className="text-green-500 mr-3" /> สิ่งที่ต้องเตรียม & งบประมาณ (Option 2)
        </h2>

        {/* Budget Summary Box */}
        <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-green-800 mb-2 border-b border-green-200 pb-1">💰 สรุปงบประมาณที่ควรเตรียม (ต่อคน)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-green-900">
            <div>
              <span className="font-semibold block flex items-center"><Train className="w-3 h-3 mr-1"/> ค่าเดินทาง:</span>
              <span className="text-xl font-bold">~25,000 เยน</span> <span className="text-gray-500 text-xs">(~6,000 ฿)</span>
              <p className="text-xs mt-1 text-gray-600">*JR ไป Takayama + Shinkansen + Subway</p>
            </div>
            <div>
              <span className="font-semibold block flex items-center"><Utensils className="w-3 h-3 mr-1"/> ค่ากิน:</span>
              <span className="text-xl font-bold">~35,000 เยน</span> <span className="text-gray-500 text-xs">(~8,400 ฿)</span>
              <p className="text-xs mt-1 text-gray-600">*Hida Beef / Sushi / Tokyo Beef</p>
            </div>
            <div>
              <span className="font-semibold block flex items-center"><ShoppingBag className="w-3 h-3 mr-1"/> ช้อปปิ้ง/อื่นๆ:</span>
              <span className="text-xl font-bold">~15,000+ เยน</span> <span className="text-gray-500 text-xs">(~3,600+ ฿)</span>
              <p className="text-xs mt-1 text-gray-600">*Donki, ABC Mart</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://www.klook.com/th/activity/15411-central-japan-international-airport-nagoya/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition border border-blue-100 group">
                <div className="flex items-start">
                    <Train className="text-blue-600 mt-1 mr-3 w-5 h-5" />
                    <div>
                        <div className="font-bold text-blue-800 group-hover:underline flex items-center">ตั๋ว μ-SKY (Centrair ➜ Nagoya) <ExternalLink className="w-3 h-3 ml-1"/></div>
                        <div className="text-sm text-gray-600">รถไฟเข้าเมืองเร็วสุด</div>
                    </div>
                </div>
            </a>
            <div className="block p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                    <Ticket className="text-gray-600 mt-1 mr-3 w-5 h-5" />
                    <div>
                        <div className="font-bold text-gray-800">Tokyo Subway Ticket (48 Hours)</div>
                        <div className="text-sm text-gray-600">แนะนำซื้อที่ Klook/สนามบิน</div>
                        <div className="text-xs text-red-500 mt-1">⚠️ <b>ใช้ได้:</b> Tokyo Metro & Toei Subway (Day 4 เย็น - Day 5)</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-4 p-3 bg-red-50 rounded border border-red-200 text-sm text-red-700 flex items-start">
          <Info className="w-4 h-4 mt-0.5 mr-2 shrink-0" />
          <div>
            <span className="font-bold">แนะนำงบ IC Card:</span> แผนนี้เน้นจ่ายรายเที่ยว เตรียมเงินสด/บัตร IC Card ไว้ประมาณ <b>15,000 เยน</b>
          </div>
        </div>
      </div>

       {/* Day 1 */}
       <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 1</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Centrair ➜ Takayama</h3>
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="10:28 - 14:19" title="Move to Takayama" colorClass="border-blue-400">
                <TransportBox type="train">
                    1️⃣ <b>Meitetsu μ-SKY:</b> สนามบิน ➔ Meitetsu Nagoya (1,230 เยน)<br/>
                    2️⃣ <b>JR Limited Express Hida:</b> Nagoya ➔ Takayama (~6,000 เยน)
                </TransportBox>
            </TimelineItem>

            <TimelineItem time="เย็น" title="Dinner: Hida Beef 🥩" colorClass="border-red-600" icon={<Utensils/>}>
                <p className="text-sm text-gray-600 mt-2">เช็คอินแล้วไปจัดเนื้อฮิดะย่าง:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 ml-2 mt-1">
                    <li><a href="https://maps.google.com/?q=Maruaki+Hida+Takayama" target="_blank" className="text-red-600 font-medium underline">Maruaki</a> (ยอดฮิต เมนูหลากหลาย)</li>
                    <li><a href="https://maps.google.com/?q=Ajikura+Tengoku" target="_blank" className="text-red-600 font-medium underline">Ajikura Tengoku</a> (ใกล้สถานี)</li>
                </ul>
            </TimelineItem>
        </div>
      </div>

      {/* Day 2 */}
      <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 2</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Takayama Morning ➜ Nagoya</h3>
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="เช้า" title="Morning Market & Old Town" colorClass="border-orange-500">
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                    <li><a href="https://maps.google.com/?q=Miyagawa+Morning+Market" target="_blank" className="font-medium underline">📍 Miyagawa Morning Market</a></li>
                    <li><a href="https://maps.google.com/?q=Sanmachi+Suji" target="_blank" className="font-medium underline">📍 Sanmachi Suji</a></li>
                </ul>
            </TimelineItem>

            <TimelineItem time="14:00 - 16:34" title="Move to Nagoya" colorClass="border-blue-400">
                 <TransportBox type="train">
                    <b>🚆 กลับ Nagoya:</b> นั่ง <b>JR Hida Exp.</b> กลับมาลง Nagoya (~6,000 เยน)
                </TransportBox>
            </TimelineItem>

             <TimelineItem time="เย็น" title="Nagoya Night" colorClass="border-purple-500">
                 <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                     <li><a href="https://maps.google.com/?q=Osu+Shopping+Street" target="_blank" className="font-medium underline">📍 Osu Shopping Street</a></li>
                     <li><a href="https://maps.google.com/?q=Oasis+21" target="_blank" className="font-medium underline">📍 Oasis 21</a></li>
                     <li><b>Dinner:</b> Miso Katsu หรือ Unagi</li>
                 </ul>
            </TimelineItem>
        </div>
      </div>

      {/* Day 3 */}
      <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 3</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Nagoya ➜ Tokyo (Fastest)</h3>
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="08:00" title="Yanagibashi Central Market" colorClass="border-cyan-500">
                <p className="text-sm text-gray-600">ทานมื้อเช้า ซูชิสด/ซีฟู้ด ที่ <a href="https://maps.google.com/?q=Yanagibashi+Central+Market" target="_blank" className="text-cyan-600 font-bold underline">📍 ตลาดปลา Yanagibashi</a></p>
            </TimelineItem>

            <TimelineItem time="10:00 - 11:40" title="Move to Tokyo (Shinkansen)" colorClass="border-blue-600" icon={<Train/>}>
                 <TransportBox type="train">
                    <b>🚄 Shinkansen Nozomi:</b> จาก JR Nagoya ➔ Tokyo Station<br/>
                    <b>💰 ราคา:</b> ~11,300 เยน<br/>
                    <b>⏱ เวลา:</b> 1 ชม. 40 นาที
                </TransportBox>
            </TimelineItem>

             <TimelineItem time="บ่าย/เย็น" title="Tokyo Shopping" colorClass="border-purple-500" icon={<ShoppingBag/>}>
                <p className="text-sm text-gray-600 mt-2">เช็คอิน (Ueno/Asakusa/Shinjuku) แล้วลุย:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                    <li>🛒 <a href="https://maps.google.com/?q=Don+Quijote" target="_blank" className="font-medium underline">Donki</a></li>
                    <li>👟 <a href="https://maps.google.com/?q=ABC-MART" target="_blank" className="font-medium underline">ABC Mart</a></li>
                </ul>
            </TimelineItem>
        </div>
      </div>

      {/* Day 4 */}
      <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 4</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Kawagoe Day Trip</h3>
        </div>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
             <TimelineItem time="10:30 - 15:30" title="Kawagoe (Little Edo) 🍡" colorClass="border-blue-400">
                 <TransportBox type="train">
                    <b>ขาไป:</b> Shinjuku ➔ Kawagoe (JR Saikyo Line)<br/>
                    <b>💰 ราคา:</b> ~500-700 เยน (ใช้ Tokyo Subway ไม่ได้)
                </TransportBox>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                    <li><a href="https://maps.google.com/?q=Kurazukuri+Street" target="_blank" className="font-medium underline">📍 Kurazukuri Street</a></li>
                    <li><a href="https://maps.google.com/?q=Kashiya+Yokocho" target="_blank" className="font-medium underline">📍 Kashiya Yokocho</a></li>
                </ul>
            </TimelineItem>

             <TimelineItem time="ค่ำ" title="Tokyo Beef Dinner 🥩" colorClass="border-red-700">
                 <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                    <li><b>ประหยัด:</b> <a href="https://maps.google.com/?q=Gyukatsu+Motomura" target="_blank" className="text-orange-600 font-bold underline">Gyukatsu Motomura</a></li>
                    <li><b>ปานกลาง:</b> <a href="https://maps.google.com/?q=Yakiniku+Like" target="_blank" className="text-blue-600 font-bold underline">Yakiniku Like</a></li>
                    <li><b>หรู:</b> <a href="https://maps.google.com/?q=Jojoen" target="_blank" className="text-purple-600 font-bold underline">Jojoen</a></li>
                </ul>
            </TimelineItem>
        </div>
      </div>

      {/* Day 5 */}
      <div>
        <div className="flex items-center mb-4 sticky top-0 bg-gray-100/95 backdrop-blur py-2 z-20">
          <div className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow-md">Day 5</div>
          <h3 className="ml-4 text-xl font-bold text-gray-800">Tokyo Chill & Return</h3>
        </div>

         <div className="relative border-l-2 border-gray-300 ml-4 md:ml-6 pl-6 space-y-6 pb-2">
            <TimelineItem time="เช้า/บ่าย" title="Tokyo Food & Shopping" colorClass="border-green-400">
                <div className="mt-3 space-y-4 text-sm text-gray-700">
                    <div>
                        <span className="font-bold text-blue-800">🐟 ตลาดปลา Tsukiji:</span> <a href="https://maps.google.com/?q=Tsukiji+Outer+Market" target="_blank" className="underline">Outer Market</a>
                    </div>
                    <div>
                        <span className="font-bold text-red-800">🥩 เนื้อเทพราคาประหยัด:</span> Jiromaru Shinjuku, Roast Beef Ono
                    </div>
                </div>
            </TimelineItem>

             <TimelineItem time="Flight" title="วิธีเดินทางไปสนามบิน" colorClass="border-gray-500" icon={<Plane/>}>
                <TransportBox type="info" title="Detailed Guide">
                    <div className="mb-2">
                        <strong className="text-blue-800">🛫 ไป Narita (NRT):</strong> Keisei Skyliner (เร็วสุด) หรือ Narita Express
                    </div>
                    <div>
                        <strong className="text-red-800">🛫 ไป Haneda (HND):</strong> Tokyo Monorail หรือ Keikyu Line
                    </div>
                </TransportBox>
                 <p className="text-xs text-gray-500 mt-2">⚠️ <b>Tip:</b> ควรถึงสนามบินก่อนเวลาเครื่องออกอย่างน้อย 3 ชั่วโมง</p>
            </TimelineItem>
         </div>
      </div>

    </div>
  );
};