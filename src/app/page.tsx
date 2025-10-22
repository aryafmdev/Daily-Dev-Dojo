// import GreetingBanner from '../components/GreetingBanner'; // Import komponen sapaan
// import GreetingStyle from '../components/GreetingStyle'; // Import komponen gaya sapaan
import HelloMessage from '../components/HelloMessage'; // Import komponen "Hello Message"
import AngkaButton from '../components/AngkaButton'; // Import komponen "Angka Button"
import MultiplierForm from '../components/MultiplierForm'; // Import komponen "Multiplier Form"
import CreateCounter from '../components/CreateCounter'; // Import komponen "Create Counter Card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* <GreetingBanner /> Tampilkan sapaan di tengah halaman */}
      {/* <GreetingStyle /> Tampilkan gaya sapaan di tengah halaman */}
      <HelloMessage /> {/* Tampilkan kalimat di tengah halaman */}
      <AngkaButton /> {/* Tampilkan tombol angka di tengah halaman */}
      <MultiplierForm /> {/* Tampilkan form perkalian di tengah halaman */}
      <CreateCounter /> {/* Tampilkan card penghitung di tengah halaman */}
    </div>
  );
}
