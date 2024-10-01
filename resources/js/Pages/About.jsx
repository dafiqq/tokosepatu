import Navbar from "@/Components/Navbar";

export default function About() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
                <div class="container mx-auto text-center">
                    <h1 class="text-5xl font-bold mb-6">About Us</h1>
                    <p class="text-lg mb-6">
                        Temukan apa yang anda inginkan disini.
                    </p>
                    <button class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
                        Pelajari Lebih Lanjut
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div class="container mx-auto py-16 px-6">
                <div class="flex flex-col lg:flex-row lg:space-x-10">
                    {/* About Image */}
                    <div class="lg:w-1/2 mb-8 lg:mb-0">
                        <img
                            src="https://source.unsplash.com/featured/?team"
                            alt="Tim Kami"
                            class="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* About Content */}
                    <div class="lg:w-1/2">
                        <h2 class="text-3xl font-semibold text-gray-800 mb-6">
                            Sejarah Kami
                        </h2>
                        <p class="text-gray-600 mb-4">
                            Kami berkomitmen untuk memberikan layanan terbaik pada costumer 
                            demi kualitas dan kepuasan terhadap seluruh konsumen.
                        </p>
                        <p class="text-gray-600 mb-4">
                            Sejak tahun 2005 kita berkembang dan terus mengembangkan cara marketing
                            untuk kepercayaan konsumen demi kemudahan bertransaksi.
                        </p>
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 mt-4">
                            Temui Tim
                        </button>
                    </div>
                </div>
            </div>

            {/* Google Maps and Address Section */}
            <div class="container mx-auto py-16 px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Google Maps */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.660833690202!2d111.99706169225729!3d-7.174830465451495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7786f827b9de3d%3A0x42b3a6989b9afd46!2sBadug%2C%20Sumuragung%2C%20Kec.%20Sumberejo%2C%20Kabupaten%20Bojonegoro%2C%20Jawa%20Timur%2062191!5e0!3m2!1sid!2sid!4v1727458766813!5m2!1sid!2sid"
                            width="100%"
                            height="400"
                            frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                            class="rounded-lg shadow-lg"
                        ></iframe>
                    </div>

                    {/* Address */}
                    <div class="flex flex-col justify-center">
                        <h3 class="text-3xl font-semibold text-gray-800 mb-4">
                            Our Office
                        </h3>
                        <p class="text-gray-600 mb-4">
                            <strong>Headquarters</strong>
                            <br />
                            Jalan Rambutan Rt 07 Rw 02 Sumuragung
                            <br />
                            Bojonegoro, Jawa Timur
                            <br />
                            Country
                        </p>
                        <p class="text-gray-600 mb-4">
                            <strong>Email:</strong> moroseneng@company.com
                            <br />
                            <strong>Phone:</strong> +62 851-6133-1158
                        </p>
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                            Dapatkan Lokasi
                        </button>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div class="bg-gray-100 py-16">
                <div class="container mx-auto text-center">
                    <h2 class="text-3xl font-semibold text-gray-800 mb-6">
                        Visi dan Misi Kami
                    </h2>
                    <p class="text-gray-600 mb-6">
                        Untuk berinovasi dan memberikan solusi yang membuat hidup lebih baik,
                        lebih mudah, dan efisien. Kami bertujuan untuk menciptakan yang abadi
                        dampak melalui dedikasi kami terhadap keunggulan.
                    </p>
                    <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                        {/* Card 1 */}
                        <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                            <img
                                class="w-full rounded-md mb-4"
                                src="https://source.unsplash.com/featured/?innovation"
                                alt="Innovasi"
                            />
                            <h3 class="text-xl font-semibold mb-2">
                                Innovasi
                            </h3>
                            <p class="text-gray-600">
                                We are constantly pushing the envelope with
                                creative solutions and innovative approaches to
                                solve problems.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                            <img
                                class="w-full rounded-md mb-4"
                                src="https://source.unsplash.com/featured/?collaboration"
                                alt="Kolaborasi"
                            />
                            <h3 class="text-xl font-semibold mb-2">
                                Kolaborasi
                            </h3>
                            <p class="text-gray-600">
                                Teamwork makes the dream work. We believe in the
                                power of collaboration to achieve great things.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                            <img
                                class="w-full rounded-md mb-4"
                                src="https://source.unsplash.com/featured/?growth"
                                alt="Perkembangan"
                            />
                            <h3 class="text-xl font-semibold mb-2">Perkembangan</h3>
                            <p class="text-gray-600">
                                Personal and professional growth is at the core
                                of our company values, helping our team members
                                thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer class="bg-gray-800 text-white py-8 text-center">
                <p>&copy; 2024 Moro Seneng. All rights reserved.</p>
            </footer>
        </div>
    );
}