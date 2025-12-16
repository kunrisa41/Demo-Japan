# คำแนะนำการนำเว็บไซต์ขึ้นออนไลน์ (Hosting Guide)

คุณมี Domain name อยู่แล้ว สามารถนำโค้ดนี้ไปขึ้นเว็บไซต์ฟรีได้ง่ายๆ แนะนำ 2 ผู้ให้บริการที่ดีที่สุดสำหรับ React App คือ **Vercel** หรือ **Netlify** ครับ

### 1. ทางเลือกที่ดีที่สุด: Vercel (แนะนำ)
เนื่องจากคุณใช้ React (Next.js/Vite) Vercel จะทำงานได้ลื่นไหลและตั้งค่าง่ายที่สุดครับ

**ขั้นตอน:**
1. นำโค้ดทั้งหมดนี้ไปใส่ใน **GitHub** (สร้าง Repository ใหม่)
2. สมัครสมาชิก [Vercel.com](https://vercel.com) (Login ด้วย GitHub)
3. กด **"Add New Project"** และเลือก Repository ที่คุณเพิ่งสร้าง
4. กด **Deploy** (รอประมาณ 1-2 นาที เว็บจะออนไลน์)

**การเชื่อมต่อ Domain Name (ที่คุณซื้อไว้):**
1. ไปที่ Dashboard ของโปรเจกต์ใน Vercel
2. ไปที่เมนู **Settings** > **Domains**
3. พิมพ์ชื่อโดเมนของคุณ (เช่น `myjapantrip.com`) แล้วกด Add
4. Vercel จะให้ค่า **Nameservers** หรือ **A Record** มา
5. ให้คุณ Log in เข้าไปที่เว็บที่คุณซื้อโดเมน (เช่น Godaddy, Namecheap) และแก้ค่า DNS ให้ตรงกับที่ Vercel บอก
6. รอ DNS อัปเดต (อาจใช้เวลา 15 นาที - 24 ชม.) เว็บไซต์คุณจะใช้งานได้พร้อม **HTTPS ฟรี** ทันที

---

### 2. ทางเลือกสำรอง: Netlify
คล้ายกับ Vercel ใช้งานง่ายพอกัน

**ขั้นตอน:**
1. นำโค้ดขึ้น GitHub
2. สมัคร [Netlify.com](https://www.netlify.com)
3. กด **"Add new site"** > **"Import an existing project"**
4. เลือก GitHub Repository ของคุณแล้วกด Deploy

**การเชื่อมต่อ Domain Name:**
1. ไปที่ **Site settings** > **Domain management**
2. กด **Add a domain**
3. ทำตามขั้นตอนเพื่อแก้ DNS Record ที่ผู้ให้บริการโดเมนของคุณ

### ข้อดีของทั้ง 2 เจ้า:
*   ✅ **ฟรี** (สำหรับ Personal use)
*   ✅ **SSL (HTTPS) ฟรี** (เว็บปลอดภัย มีรูปกุญแจเขียว)
*   ✅ **อัปเดตง่าย** (แค่แก้โค้ดใน GitHub เว็บก็เปลี่ยนตามอัตโนมัติ)
*   ✅ **เร็ว** (มี CDN ทั่วโลก)
