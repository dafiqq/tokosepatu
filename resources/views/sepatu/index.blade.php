@extends('layouts.app')

@section('content')
    <h1>Daftar Sepatu</h1>
    <a href="{{ route('sepatu.create') }}">Tambah Sepatu</a>
    <table>
        <thead>
            <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Deskripsi</th>
                <th>Gambar</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($sepatu as $item)
                <tr>
                    <td>{{ $item->name }}</td>
                    <td>{{ $item->price }}</td>
                    <td>{{ $item->description }}</td>
                    <td><img src="{{ asset('storage/' . $item->image) }}" width="100"></td>
                    <td>
                        <a href="{{ route('sepatu.edit', $item->id) }}">Edit</a>
                        <form action="{{ route('sepatu.destroy', $item->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Hapus</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
