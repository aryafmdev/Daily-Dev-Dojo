// 'use client'; // Komponen ini harus dijalankan di sisi client karena pakai useState

// import { useState } from 'react'; // Hook untuk menyimpan dan mengubah data
// import { createHelloWorld } from '../lib/utils'; // Import fungsi sapaan

// export default function GreetingBanner() {
//   const [name, setName] = useState('Budi'); // State untuk menyimpan nama user
//   const sayHello = createHelloWorld(name); // Buat sapaan berdasarkan nama dan waktu

//   return (
//     <div className="text-center mt-10">
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)} // Update nama saat user mengetik
//         placeholder="Masukkan nama kamu"
//         className="px-4 py-2 border rounded-md mb-4"
//       />
//       <h1 className="text-3xl font-bold text-blue-600">{sayHello()}</h1>
//     </div>
//   );
// }
