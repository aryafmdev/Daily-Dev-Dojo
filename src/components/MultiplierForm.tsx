"use client"; // Wajib untuk komponen interaktif

import { useState } from "react"; // Mengimpor useState untuk state lokal
import { createMultiplier } from "../lib/utils"; // Mengimpor fungsi dari utils

export default function MultiplierForm() {
  // State untuk menyimpan input dari user
  const [input, setInput] = useState<number>(0);

  // State untuk menyimpan hasil perkalian
  const [hasil, setHasil] = useState<number | null>(null);

  // Membuat fungsi pengali dengan faktor tetap (misalnya 5)
  const multiplierFn = createMultiplier(5);

  // Fungsi yang dijalankan saat tombol diklik
  const handleClick = () => {
    const result = multiplierFn(input); // Jalankan fungsi dengan input dari user
    setHasil(result); // Simpan hasil ke state
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {/* Input angka dari user */}
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))} // Update state saat user mengetik
        className="px-3 py-2 border rounded w-40 text-center"
        placeholder="Masukkan angka"
      />

      {/* Tombol untuk memproses input */}
      <button
        onClick={handleClick} // Jalankan handleClick saat tombol ditekan
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Kalikan dengan 5
      </button>

      {/* Menampilkan hasil jika sudah ada */}
      {hasil !== null && (
        <p className="text-xl font-semibold text-green-700">
          Hasil: {hasil}
        </p>
      )}
    </div>
  );
}
