'use client'; 
// ⛳️ Ini memberi tahu Next.js bahwa komponen ini dijalankan di sisi klien (browser), bukan di server.

import { useState } from 'react'; 
// 📦 Mengimpor hook useState dari React untuk menyimpan dan mengubah data (state) di komponen.

import { createCounter } from '../lib/utils'; 
// 🔧 Mengimpor fungsi createCounter dari folder lib. Ini adalah mesin penghitung yang kita buat sebelumnya.

const counter = createCounter(1); 
// 🧮 Membuat mesin penghitung yang mulai dari angka 1. Setiap kali dipanggil, akan naik 1 angka.

export default function CreateCounterCard() { 
  // 🧱 Komponen utama yang akan ditampilkan di halaman. Bisa dipakai berkali-kali untuk menampilkan proyek.

  const [clickCount, setClickCount] = useState<number>(0); 
  // 🔢 Membuat state bernama clickCount untuk menyimpan jumlah klik. Awalnya 0.

  const handleClick = () => {
    // 🖱 Fungsi yang dijalankan saat tombol diklik.

    const next = counter(); 
    // 🔁 Memanggil mesin penghitung untuk mendapatkan angka berikutnya.

    setClickCount(next); 
    // 🔄 Menyimpan angka baru ke dalam state agar bisa ditampilkan di layar.
  };

  return (
    <div className="p-8 text-center">
      {/* 📦 Kotak penghitung dengan padding. */}

      <h2 className="text-xl font-bold">Penghitung Keren</h2>
      {/* 🏷 Judul penghitung dengan ukuran besar dan tebal. */}

      <p className="text-sm text-gray-600">Jumlah klik: {clickCount}</p>
      {/* 🔢 Menampilkan jumlah klik yang sudah terjadi. */}

      <button
        onClick={handleClick}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Naikkan Angka
      </button>
      {/* 🖱 Tombol yang bisa diklik. Saat diklik, akan memanggil handleClick dan menaikkan angka. */}
    </div>
  );
}
