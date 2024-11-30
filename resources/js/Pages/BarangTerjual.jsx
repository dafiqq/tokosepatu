import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function BarangTerjual() {
    const barangTerjual = [
        {
            id: 1,
            nama: "Produk A",
            gambar: "https://via.placeholder.com/150",
            jumlahTerjual: 120,
        },
        {
            id: 2,
            nama: "Produk B",
            gambar: "https://via.placeholder.com/150",
            jumlahTerjual: 75,
        },
        {
            id: 3,
            nama: "Produk C",
            gambar: "https://via.placeholder.com/150",
            jumlahTerjual: 45,
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Barang Terjual" />

            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {barangTerjual.map((barang) => (
                <div
                    key={barang.id}
                    className="border rounded-md p-4 shadow-md"
                >
                    <img
                        src={barang.gambar}
                        alt={barang.nama}
                        className="w-full h-40 object-cover mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">
                        {barang.nama}
                    </h2>
                    <p className="text-gray-600">
                        Terjual: {barang.jumlahTerjual} pcs
                    </p>
                </div>
            ))}
        </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}