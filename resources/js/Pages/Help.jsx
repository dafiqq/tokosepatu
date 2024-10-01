import Navbar from "@/Components/Navbar";
import { Popover } from "flowbite-react"; // Pastikan Flowbite terpasang

export default function Help() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div class="bg-gradient-to-r from-green-500 to-teal-600 text-white py-20">
                <div class="container mx-auto text-center">
                    <h1 class="text-5xl font-bold mb-6">Bantuan</h1>
                    <p class="text-lg mb-6">
                        Butuh bantuan? Temukan jawaban atas pertanyaan Anda atau
                        hubungi tim kami.
                    </p>
                    <button class="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100">
                        Hubungi Kami
                    </button>
                </div>
            </div>

            {/* FAQ Section */}
            <div class="container mx-auto py-16 px-6">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-semibold text-gray-800">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p class="text-gray-600 mt-4">
                        Di sini Anda akan menemukan jawaban untuk pertanyaan
                        yang paling umum.
                    </p>
                </div>

                <div class="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
                    {/* Card 1 */}
                    <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                        <h3 class="text-xl font-semibold mb-2">
                            Bagaimana cara membuat akun?
                        </h3>
                        <p class="text-gray-600">
                            Anda dapat membuat akun dengan mengklik tombol
                            "Daftar" di sudut kanan atas, lalu mengisi informasi
                            yang diperlukan.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                        <h3 class="text-xl font-semibold mb-2">
                            Bagaimana cara menghubungi layanan pelanggan?
                        </h3>
                        <p class="text-gray-600">
                            Anda dapat menghubungi kami melalui email di
                            support@domain.com atau menggunakan formulir kontak
                            di halaman "Hubungi Kami".
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                        <h3 class="text-xl font-semibold mb-2">
                            Menemukan Bug?
                        </h3>
                        <p class="text-gray-600">
                            Hubungi Kami Melalui Kontak Dibawah. Silakan
                            Lampirkan Bug kepada kami untuk informasi lebih
                            lanjut.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div class="bg-gray-100 py-16">
                <div class="container mx-auto text-center">
                    <h2 class="text-3xl font-semibold text-gray-800 mb-6">
                        Masih Butuh Bantuan?
                    </h2>
                    <p class="text-gray-600 mb-6">
                        Jika Anda tidak menemukan jawaban untuk pertanyaan Anda,
                        jangan ragu untuk menghubungi tim kami.
                    </p>

                    {/* Popover Button */}
                    <Popover
                        placement="bottom" // Menentukan arah popover muncul
                        content={
                            <div class="p-4 bg-white rounded-lg shadow-lg text-left">
                                <p class="font-semibold text-gray-800 mb-2">
                                    Hubungi Kami
                                </p>
                                <ul>
                                    <li>
                                        <a
                                            href="https://wa.me/nomor_whatsapp"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="text-green-500 hover:underline"
                                        >
                                            WhatsApp
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://instagram.com/nama_instagram"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="text-pink-500 hover:underline flex gap-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-instagram"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    x="2"
                                                    y="2"
                                                    rx="5"
                                                    ry="5"
                                                />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line
                                                    x1="17.5"
                                                    x2="17.51"
                                                    y1="6.5"
                                                    y2="6.5"
                                                />
                                            </svg>
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        }
                    >
                        <button class="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
                            Kontak Kami
                        </button>
                    </Popover>
                </div>
            </div>

            {/* Footer */}
            <footer class="bg-gray-800 text-white py-8 text-center">
                <p>&copy; 2024 Moro Seneng. All rights reserved.</p>
            </footer>
        </div>
    );
}