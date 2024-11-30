<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Keranjang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class KeranjangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $keranjang = Keranjang::with('product')->where('user_id',Auth::id())->get();
        $totalPrice = $keranjang->sum(function ($item) {
        return $item->product->harga * $item->jumlah;
    });
        return Inertia::render('Keranjang',[
            'keranjang' => $keranjang,
            'totalPrice' => $totalPrice
        ]);       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'id' => 'required|exists:products,id',
            'jumlah' => 'required|integer|min:1',
        ]);

        // Mendapatkan user yang sedang login
        $userId = Auth::id();

        // Mencari keranjang berdasarkan user dan barang
        $keranjang = Keranjang::where('user_id', $userId)
            ->where('product_id', $request->id)
            ->first();

        // Jika keranjang sudah ada, perbarui jumlahnya
        if ($keranjang) {
            $keranjang->jumlah += $request->jumlah;
            $keranjang->total_harga = $keranjang->jumlah * $keranjang->product->harga;
            $keranjang->save();
        } else {
            // Jika keranjang baru, buat entri baru
            Keranjang::create([
                'user_id' => $userId,
                'product_id' => $request->id,
                'jumlah' => $request->jumlah,
                // 'total_harga' => $request->qty * $request->barang->harga,
            ]);
        }

        return redirect()->back()->with([
            'message' => 'Barang berhasil ditambahkan ke keranjang!',
        ]);
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
        $keranjang = Keranjang::where('id', $id)->where('user_id', Auth::id())->first();

    // Jika item keranjang ditemukan, hapus item tersebut
    if ($keranjang) {
        $keranjang->delete();
        return redirect()->back()->with('message', 'Item berhasil dihapus dari keranjang.');
    }

    // Jika item keranjang tidak ditemukan
    return redirect()->back()->with('error', 'Item tidak ditemukan di keranjang.');
    }
}
