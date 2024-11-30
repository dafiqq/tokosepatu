import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TambahBarang({ barangList }) {
    const { data, setData, post, reset, errors } = useForm({
        nama_barang: "",
        harga: "",
        gambar: null,
    });

    const handleFileChange = (e) => {
        setData("gambar", e.target.files[0]); // Store the selected image file
    };

    const handleTambahBarang = (e) => {
        e.preventDefault();
        post(route("TambahBarang.store"), {
            onSuccess: () => reset(),
            forceFormData: true, // Send data as FormData (includes file)
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Barang
                </h2>
            }
        >
            <Head title="Tambah Barang" />

            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Form Tambah Barang</h3>
                <form
                    onSubmit={handleTambahBarang}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <div>
                        <label className="block mb-2">Nama Barang:</label>
                        <input
                            type="text"
                            value={data.nama_barang}
                            onChange={(e) =>
                                setData("nama_barang", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Masukkan nama barang"
                        />
                        {errors.nama_barang && (
                            <div className="text-red-600">
                                {errors.nama_barang}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2">Harga Barang:</label>
                        <input
                            type="number"
                            value={data.harga}
                            onChange={(e) =>
                                setData("harga", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Masukkan harga barang"
                        />
                        {errors.price && (
                            <div className="text-red-600">
                                {errors.harga}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2">Upload Gambar (.jpg):</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".jpg"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.image && (
                            <div className="text-red-600">
                                {errors.gambar}
                            </div>
                        )}
                    </div>
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Tambah Barang
                        </button>
                    </div>
                </form>
            </div>

            {/* Display the list of existing products */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Daftar Barang</h3>
                <ul className="list-disc pl-5">
                    {barangList.map((barang) => (
                        <li key={barang.id} className="mb-2">
                            <strong>{barang.name}</strong> - Rp {barang.price.toLocaleString()}
                            {barang.image && (
                                <div>
                                    <img
                                        src={`${barang.image}`} // Access image via public/storage
                                        alt={barang.name}
                                        className="w-20 h-20 object-cover mt-2"
                                    />
                                </div>
                            )}
                        </li>
                    ))}

                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
