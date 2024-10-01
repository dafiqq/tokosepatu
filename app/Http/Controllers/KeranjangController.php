<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class keranjangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil data keranjang dari sesi
        $keranjang = Session::get('keranjang', []);
        $totalHarga = 0;

        foreach ($keranjang as $item) {
            $totalHarga += $item['price'] * $item['quantity'];
        }

        return Inertia::render('Keranjang', [
            'keranjang' => $keranjang,
            'totalHarga' => $totalHarga
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data produk yang diterima
        $validated = $request->validate([
            'id' => 'required|integer',
            'name' => 'required|string',
            'price' => 'required|integer',
            'image' => 'required|string',
            'quantity' => 'required|integer|min:1',
        ]);

        // Ambil keranjang dari sesi
        $keranjang = Session::get('keranjang', []);

        // Cek apakah produk sudah ada di keranjang
        $productIndex = array_search($validated['id'], array_column($keranjang, 'id'));

        if ($productIndex !== false) {
            // Jika produk sudah ada, tambahkan quantity
            $keranjang[$productIndex]['quantity'] += $validated['quantity'];
        } else {
            // Jika produk belum ada, tambahkan produk ke keranjang
            $keranjang[] = $validated;
        }

        // Simpan kembali keranjang ke sesi
        Session::put('keranjang', $keranjang);

        return response()->json(['message' => 'Produk ditambahkan ke keranjang!'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
