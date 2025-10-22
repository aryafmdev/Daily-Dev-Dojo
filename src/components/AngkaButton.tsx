"use client"; // Wajib ditulis agar komponen ini bisa menggunakan interaktivitas (seperti useState)

import { useState } from "react"; // Mengimpor hook useState dari React
import { createAngka } from "../lib/utils"; // Mengimpor fungsi createAngka dari folder utils

// Komponen utama yang akan ditampilkan di halaman
export default function AngkaButton() {
  // Membuat state untuk menyimpan hasil angka, awalnya null tidak tampil apa-apa
  const [hasil, setHasil] = useState<number | null>(null);

  // Fungsi yang dijalankan saat tombol diklik
  const handleClick = () => {
    if (hasil === null) {
      // Jika hasil belum ada, panggil fungsi dan tampilkan angka
      const angkaFn = createAngka(); // Memanggil fungsi utama, hasilnya adalah fungsi lain
      const nilai = angkaFn();       // Menjalankan fungsi hasil return untuk mendapatkan angka
      setHasil(nilai);               // Menyimpan hasil angka ke dalam state
    } else {
      // jika hasil sudah ada, klik kedua akan menghilangkan angka
      setHasil(null); // Menghapus angka dari state, kembalikan ke null
    }
  };

  // Tampilan UI komponen
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Tombol yang akan memicu handleClick saat diklik */}
      <button
        onClick={handleClick} // Menjalankan handleClick saat tombol ditekan
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4 cursor-pointer"
      >
        {hasil === null ? "Tampilkan Angka" : "Sembunyikan Angka"} {/* Label tombol berubah */}
      </button>

      {/* Menampilkan hasil jika sudah ada (tidak null) */}
      {hasil !== null && (
        <p className="text-xl font-semibold text-green-700">
          Hasil: {hasil}
        </p>
      )}
    </div>
  );
}
