<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all(); // Mengambil semua produk dari database
        return inertia('Catalog', ['products' => $products]); // Kirim ke view
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,jpg',
        ]);
    
        // Simpan file gambar
        $path = $request->file('image')->store('images', 'public');
    
        // Simpan produk ke database
        Product::create([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'image' => $path,
        ]);
    
        return back()->with('message', 'Barang berhasil ditambahkan');
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
