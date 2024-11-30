import { useState } from 'react';
import axios from 'axios';
import Navbar from "@/Components/Navbar";

export default function Catalog({ products }) {
    // State untuk melacak status loading setiap produk
    const [loading, setLoading] = useState({});

    // Fungsi untuk memformat harga ke format Rupiah
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    // Fungsi untuk menambahkan produk ke keranjang
    const addToCart = async (product) => {
        try {
            // Set loading true hanya untuk produk ini (berdasarkan product.id)
            setLoading((prevLoading) => ({
                ...prevLoading,
                [product.id]: true
            }));

            // Mengirim permintaan ke backend
            const response = await axios.post('/keranjang/store', {
                id: product.id, // Sesuaikan dengan backend yang membutuhkan 'id'
                jumlah: 1, // Jumlah default produk yang ditambahkan
            });

            console.log(response)

            alert(response.data.message); // Tampilkan pesan sukses

        } catch (error) {
            console.error("Error adding to cart", error);
        } finally {
            // Set loading false hanya untuk produk ini (berdasarkan product.id)
            setLoading((prevLoading) => ({
                ...prevLoading,
                [product.id]: false
            }));
        }
    };

    return (
        <div className="ml-12">
            <Navbar />
            {/* Daftar Produk */}
            <div className="flex flex-wrap justify-center gap-6 mt-24">
                {products.map((product) => (
                    <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg w-auto h-300" src={product.image} alt={product.name} />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{formatPrice(product.price)}</span>
                                <button
                                    onClick={() => addToCart(product)}
                                    disabled={loading[product.id]} // Disable hanya untuk produk yang sedang di-click
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    {loading[product.id] ? 'Adding...' : 'Add to cart'} {/* Hanya produk yang sedang di-click yang berubah */}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
