import Navbar from "@/Components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Keranjang({ keranjang, totalPrice }) {
    const [items, setItems] = useState(
        keranjang.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }))
    );

    const [totalHarga, setTotalHarga] = useState(totalPrice);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [alertMessage, setAlertMessage] = useState(null);

    const calculateTotalPrice = (updatedItems) => {
        return updatedItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    useEffect(() => {
        setTotalHarga(calculateTotalPrice(items));
    }, [items]);

    const handleRemove = async (id) => {
        try {
            await axios.post(`/keranjang/${id}`);
            const updatedItems = items.filter((item) => item.id !== id);
            setItems(updatedItems);
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const handleQuantityChange = (id, newQuantity) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        );
        setItems(updatedItems);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();

        if (selectedPaymentMethod) {
            // Simulate a payment process
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Random success or failure

                if (isSuccess) {
                    setAlertMessage("Pembayaran berhasil! Terima kasih telah berbelanja.");
                } else {
                    setAlertMessage("Pembayaran gagal. Silakan coba lagi.");
                }

                setIsModalOpen(false);
            }, 1000);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                    Keranjang Belanja
                </h1>

                <div className="bg-white shadow-md rounded-lg p-6">
                    {items.length === 0 ? (
                        <p className="text-center text-gray-500">
                            Keranjang Anda kosong.
                        </p>
                    ) : (
                        <div>
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b py-4"
                                >
                                    <img
                                        src={item.product.image}
                                        alt={item.nama_barang}
                                        className="w-24 h-24 rounded-lg"
                                    />
                                    <div className="flex-1 ml-4">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {item.nama_barang}
                                        </h2>
                                        <div className="flex items-center mt-2">
                                            <span className="text-gray-600 mr-4">
                                                Rp. {item.product.price.toLocaleString()}
                                            </span>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        parseInt(e.target.value) || 1
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

                            <div className="flex justify-between items-center mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    Total Harga:
                                </h2>
                                <span className="text-2xl font-bold text-gray-900">
                                    Rp. {totalHarga.toLocaleString()}
                                </span>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Lanjutkan ke Pembayaran
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Konfirmasi Pembayaran</h2>
                        <p>Total harga yang harus dibayar: <strong>Rp. {totalHarga.toLocaleString()}</strong></p>
                        
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">Pilih Metode Pembayaran:</h3>
                            <form onSubmit={handlePaymentSubmit}>
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

                                <div className="mt-6 flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${!selectedPaymentMethod ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={!selectedPaymentMethod}
                                    >
                                        Bayar Sekarang
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {alertMessage && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Status Pembayaran</h2>
                        <p className="text-lg mb-6">{alertMessage}</p>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            onClick={() => setAlertMessage(null)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
