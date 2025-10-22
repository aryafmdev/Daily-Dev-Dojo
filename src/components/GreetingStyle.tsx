// 'use client'; // Menandakan bahwa komponen ini dijalankan di sisi client (karena pakai useState)

// import { useState } from 'react'; // Mengimpor hook useState untuk membuat data yang bisa berubah
// import { createGreetingTemplate } from '../lib/utils'; // Mengimpor fungsi sapaan dari utils

// export default function GreetingStyle() {
//   // Membuat komponen React bernama GreetingStyle

//   const [name, setName] = useState('Arya'); 
//   // State untuk menyimpan nama user, default-nya "Arya"

//   const [style, setStyle] = useState<'formal' | 'casual' | 'friendly'>('friendly'); 
//   // State untuk menyimpan gaya sapaan yang dipilih user, default-nya "friendly"

//   const greet = createGreetingTemplate(style); 
//   // Memanggil fungsi utama dengan gaya yang dipilih, hasilnya adalah fungsi sapaan

//   const message = greet(name); 
//   // Memanggil fungsi sapaan dengan nama user, hasilnya adalah string sapaan lengkap

//   return (
//     <div className="text-center mt-10 text-yellow-700">
//       {/* Container utama dengan teks di tengah dan margin atas */}

//       <input
//         type="text" // Input bertipe teks
//         value={name} // Nilai input mengikuti state "name"
//         onChange={(e) => setName(e.target.value)} 
//         // Saat user mengetik, ubah nilai "name" sesuai input
//         placeholder="Masukkan nama kamu" // Teks petunjuk di dalam input
//         className="px-4 py-2 border rounded-md mb-4" 
//         // Styling Tailwind: padding, border, sudut membulat, dan jarak bawah
//       />

//       <select
//         value={style} // Nilai dropdown mengikuti state "style"
//         onChange={(e) => setStyle(e.target.value as 'formal' | 'casual' | 'friendly')} 
//         // Saat user memilih gaya, ubah state "style" sesuai pilihan
//         className="px-4 py-2 border rounded-md mb-4"
//         // Styling Tailwind untuk dropdown
//       >
//         <option value="formal">Formal</option>
//         <option value="casual">Santai</option>
//         <option value="friendly">Ramah</option>
//       </select>

//       <h2 className="text-xl font-semibold text-green-700">
//         {message} 
//         {/* Tampilkan hasil sapaan yang sudah dibuat berdasarkan nama dan gaya */}
//       </h2>
//     </div>
//   );
// }
