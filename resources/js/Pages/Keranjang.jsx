import Navbar from "@/Components/navbar";
import { useState } from "react";

export default function Keranjang({ keranjang: initialKeranjang, totalHarga: initialTotalHarga }) {
    // Mengatur state untuk keranjang belanja
    const [keranjang, setKeranjang] = useState(initialKeranjang);
    const [totalHarga, setTotalHarga] = useState(initialTotalHarga);

    // State untuk mengontrol tampilan modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State untuk menyimpan metode pembayaran yang dipilih
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    // Fungsi untuk menghitung total harga
    const calculateTotalPrice = () => {
        return keranjang.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Fungsi untuk menghapus barang
    const handleRemove = (id) => {
        const updatedItems = keranjang.filter((item) => item.id !== id);
        setKeranjang(updatedItems);
        setTotalHarga(calculateTotalPrice());
    };

    // Fungsi untuk mengubah jumlah barang
    const handleQuantityChange = (id, newQuantity) => {
        const updatedItems = keranjang.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setKeranjang(updatedItems);
        setTotalHarga(calculateTotalPrice());
    };

    return (
        <div>
            <Navbar />

            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                    Keranjang Belanja
                </h1>

                <div className="bg-white shadow-md rounded-lg p-6">
                    {keranjang.length === 0 ? (
                        <p className="text-center text-gray-500">
                            Keranjang Anda kosong.
                        </p>
                    ) : (
                        <div>
                            {/* List Items */}
                            {keranjang.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b py-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.nama_barang}
                                        className="w-24 h-24 rounded-lg"
                                    />
                                    <div className="flex-1 ml-4">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {item.nama_barang}
                                        </h2>
                                        <div className="flex items-center mt-2">
                                            <span className="text-gray-600 mr-4">
                                                Rp. {item.price.toLocaleString()}
                                            </span>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        Math.max(1, parseInt(e.target.value))
                                                    )
                                                }
                                                className="w-16 text-center border rounded-lg py-1 px-2 text-gray-800"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-red-500 hover:text-red-700 font-bold"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            ))}

                            {/* Total Harga */}
                            <div className="flex justify-between items-center mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    Total Harga:
                                </h2>
                                <span className="text-2xl font-bold text-gray-900">
                                    Rp. {totalHarga.toLocaleString()}
                                </span>
                            </div>

                            {/* Tombol Checkout */}
                            <div className="mt-6 flex justify-end">
                                <button
                                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                                    onClick={() => setIsModalOpen(true)} // Buka modal saat ditekan
                                >
                                    Lanjutkan ke Pembayaran
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Konfirmasi Pembayaran</h2>
                        <p>Total harga yang harus dibayar: <strong>Rp. {totalHarga.toLocaleString()}</strong></p>
                        
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">Pilih Metode Pembayaran:</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="paymentMethod" className="block mb-2 text-sm font-medium text-gray-700">
                                        Metode Pembayaran
                                    </label>
                                    <select
                                        id="paymentMethod"
                                        value={selectedPaymentMethod}
                                        onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    >
                                        <option value="" disabled>
                                            Pilih metode pembayaran
                                        </option>
                                        <option value="Transfer Bank">Transfer Bank</option>
                                        <option value="Kartu Kredit">Kartu Kredit</option>
                                        <option value="E-Wallet">E-Wallet (GoPay, OVO, dll.)</option>
                                    </select>
                                </div>

                                {/* Tombol Submit */}
                                <div className="mt-6 flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                        onClick={() => setIsModalOpen(false)} // Tutup modal
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${!selectedPaymentMethod ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={!selectedPaymentMethod} // Disabled jika metode belum dipilih
                                    >
                                        Bayar Sekarang
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
