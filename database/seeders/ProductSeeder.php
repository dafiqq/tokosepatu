<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [   'id' => "1",
                'name' => "Adidas Shoes",
                'price' => 599000,
                'image' => "/adidas.jpeg",
            ],
            [
                'id' => "2",
                'name' => "Nike Air",
                'price' => 699000,
                'image' => "/nike.jpeg",
            ],
            [
                'id' => "3",
                'name' => "Puma Classic",
                'price' => 499000,
                'image' => "/puma.jpeg",
            ],
            [
                'id' => "4",
                'name' => "Adidas Samba",
                'price' => 1500000,
                'image' => "/samba.jpeg",
            ],
            [
                'id' => "5",
                'name' => "Nike Airjordan",
                'price' => 499000,
                'image' => "/airjordan.jpeg",
            ],
            [
                'id' => "6",
                'name' => "Adidas Yeezy",
                'price' => 499000,
                'image' => "/yeezy.jpeg",
            ],
            [
                'id' => "7",
                'name' => "Converse",
                'price' => 499000,
                'image' => "/converse.jpeg",
            ],
            [
                'id' => "8",
                'name' => "New Balance",
                'price' => 499000,
                'image' => "/newbalance.jpeg",
            ],
        ];

        // Masukkan data produk ke dalam tabel products
        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
