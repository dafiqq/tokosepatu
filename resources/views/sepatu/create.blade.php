@extends('layouts.app')

@section('content')
    <h1>{{ isset($sepatu) ? 'Edit Sepatu' : 'Tambah Sepatu' }}</h1>

    <form action="{{ isset($sepatu) ? route('sepatu.update', $sepatu->id) : route('sepatu.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        @if(isset($sepatu))
            @method('PUT')
        @endif
        <label>Nama Sepatu:</label>
        <input type="text" name="name" value="{{ $sepatu->name ?? '' }}" required>
        
        <label>Harga:</label>
        <input type="number" name="price" value="{{ $sepatu->price ?? '' }}" required>
        
        <label>Deskripsi:</label>
        <textarea name="description">{{ $sepatu->description ?? '' }}</textarea>
        
        <label>Gambar:</label>
        <input type="file" name="image">
        
        <button type="submit">{{ isset($sepatu) ? 'Update' : 'Tambah' }}</button>
    </form>
@endsection
