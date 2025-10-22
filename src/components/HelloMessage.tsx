// components/HelloMessage.tsx

import { createHelloWord, createHaloDunia } from "../lib/utils" // Import fungsi dari utils


export default function HelloMessage() {
  const helloFn = createHelloWord(); // Panggil fungsi utama
  const message = helloFn(); // Jalankan fungsi hasil return
  const haloFn = createHaloDunia(); // Panggil fungsi utama
  const haloMessage = haloFn(); // Jalankan fungsi hasil return

  return (
    <div className="text-2xl font-bold text-blue-600 text-center mt-10">
      {message} {/* Tampilkan hasilnya */}
      <div className="text-lg font-bold text-green-600 text-center mt-5">
        {haloMessage} {/* Tampilkan hasilnya */}
      </div>
    </div>
  );
}
