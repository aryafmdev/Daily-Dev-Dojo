import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// // Fungsi untuk menentukan sapaan berdasarkan jam saat ini
// export const getTimeGreeting = (): string => {
//   const hour = new Date().getHours(); // Ambil jam sekarang (0–23)

//   if (hour >= 5 && hour < 12) return 'Selamat pagi';
//   if (hour >= 12 && hour < 15) return 'Selamat siang';
//   if (hour >= 15 && hour < 18) return 'Selamat sore';
//   return 'Selamat malam'; // Untuk jam 18 ke atas dan sebelum jam 5
// };

// // Fungsi utama yang menggabungkan sapaan waktu dan nama
// export const createHelloWorld = (name: string): (() => string) => {
//   const timeGreeting = getTimeGreeting(); // Ambil sapaan waktu
//   return () => `${timeGreeting},"${name}". Selamat datang di portfolio saya!`;
// };

// // Fungsi ini menerima gaya sapaan dan mengembalikan fungsi lain yang menerima nama
// export const createGreetingTemplate = (style: 'formal' | 'casual' | 'friendly') => {
//   // Fungsi yang dikembalikan akan menerima nama dan menghasilkan sapaan sesuai gaya
//   return (name: string) => {
//     switch (style) {
//       case 'formal':
//         // Jika gaya formal, hasilkan sapaan yang sopan dan profesional
//         return `Salam hormat, ${name}. Terima kasih telah mengunjungi portfolio saya.`;
//       case 'casual':
//         // Jika gaya santai, hasilkan sapaan yang ringan dan akrab
//         return `Hai ${name}, senang kamu mampir ke sini!`;
//       case 'friendly':
//         // Jika gaya ramah, hasilkan sapaan yang hangat dan mengundang
//         return `Halo ${name}! Yuk, lihat karya-karya saya di bawah ini.`;
//       default:
//         // Jika gaya tidak dikenali, gunakan sapaan umum
//         return `Halo ${name}, selamat datang!`;
//     }
//   };
// };

// baris ini khusus untuk latihan soal nomor 1 leetcode
export function createHelloWord(...args: unknown[]): () => string {
  return function (...args: unknown[]): string {
    return '" Hello World / Halo Dunia! "';
  };
}

export function createHaloDunia(...args: unknown[]): () => string {
  return function (...args: unknown[]): string {
    return 'Halo Dunia!!!';
  };
}

// Mengekspor fungsi createAngka agar bisa digunakan di file lain
export function createAngka(...args: unknown[]): () => number {
  // Mengembalikan fungsi baru yang juga menerima argumen (meskipun tidak digunakan)
  return function (...args: unknown[]): number {
    // Fungsi ini selalu mengembalikan angka 2025
    return 990000000;
  };
}

// Fungsi ini menerima angka pengali dari luar
export function createMultiplier(factor: number): (input: number) => number {
  // Mengembalikan fungsi baru yang menerima angka dari user
  return function (input: number): number {
    // Mengalikan angka dari user dengan faktor yang diberikan
    return input * factor;
  };
}
