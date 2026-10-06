// File: banner.js

document.addEventListener("DOMContentLoaded", async function() {
    // 1. Cari semua elemen di HTML yang memiliki class 'random-amazon-banner'
    const bannerContainers = document.querySelectorAll('.random-amazon-banner');

    // Jika tidak ada container di halaman, hentikan script
    if (bannerContainers.length === 0) return;

    // 2. Konfigurasi URL
    const images = [
        "https://seribudollarperhari.github.io/amazon/1.png",
        "https://seribudollarperhari.github.io/amazon/2.png",
        "https://seribudollarperhari.github.io/amazon/3.png"
    ];
    const linkTxtUrl = "https://seribudollarperhari.github.io/banner/link.txt";

    // 3. Ambil data dari link.txt (dilakukan hanya 1x meskipun banner ada banyak)
    let links = [];
    try {
        const response = await fetch(linkTxtUrl);
        if (response.ok) {
            const textData = await response.text();
            // Pecah berdasarkan baris baru dan bersihkan spasi
            links = textData.split('\n')
                            .map(link => link.trim())
                            .filter(link => link.length > 0);
        } else {
            console.error("Gagal mengambil data dari link.txt");
        }
    } catch (error) {
        console.error("Terjadi kesalahan saat memuat link txt:", error);
    }

    // 4. Render (buat HTML) banner untuk setiap container yang ditemukan
    bannerContainers.forEach(container => {
        // Acak gambar untuk tiap-tiap penempatan banner
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        // Acak link tujuan (gunakan '#' jika gagal fetch)
        let randomLink = '#';
        if (links.length > 0) {
            randomLink = links[Math.floor(Math.random() * links.length)];
        }

        // Susun HTML dan masukkan ke dalam container
        container.innerHTML = `
            <a href="${randomLink}" target="_blank" rel="noopener noreferrer">
                <img src="${randomImage}" alt="Amazon Promo" style="max-width: 100%; height: auto; border: none; border-radius: 8px;">
            </a>
        `;
        
        // Sedikit styling bawaan agar posisinya ke tengah
        container.style.textAlign = "center";
        container.style.margin = "15px 0";
    });
});
