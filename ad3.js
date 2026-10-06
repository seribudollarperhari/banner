(async function() {
    // 1. Dapatkan posisi tag <script> yang sedang memuat file ad3.js ini
    const currentScript = document.currentScript;

    // 2. Buat elemen <div> baru sebagai wadah banner secara otomatis
    const bannerContainer = document.createElement('div');
    bannerContainer.style.textAlign = 'center';
    bannerContainer.style.margin = '15px 0';
    
    // Sisipkan wadah banner ini tepat setelah tag <script> di HTML
    currentScript.parentNode.insertBefore(bannerContainer, currentScript.nextSibling);

    // 3. Konfigurasi URL Gambar dan Link
    const images = [
        "https://seribudollarperhari.github.io/amazon/1.png",
        "https://seribudollarperhari.github.io/amazon/2.png",
        "https://seribudollarperhari.github.io/amazon/3.png"
    ];
    const linkTxtUrl = "https://seribudollarperhari.github.io/banner/link.txt";

    // Acak gambar secara langsung
    const randomImage = images[Math.floor(Math.random() * images.length)];
    let randomLink = '#'; // Link default jika terjadi error (bisa Anda ganti)

    // 4. Ambil data link.txt
    try {
        const response = await fetch(linkTxtUrl);
        if (response.ok) {
            const textData = await response.text();
            
            // Pecah teks menjadi array per baris dan hapus spasi/baris kosong
            const links = textData.split('\n')
                                  .map(link => link.trim())
                                  .filter(link => link.length > 0);
            
            // Jika ada link, pilih secara acak
            if (links.length > 0) {
                randomLink = links[Math.floor(Math.random() * links.length)];
            }
        }
    } catch (error) {
        console.error("Gagal memuat daftar link dari link.txt:", error);
    }

    // 5. Masukkan gambar dan link ke dalam wadah banner yang sudah dibuat
    bannerContainer.innerHTML = `
        <a href="${randomLink}" target="_blank" rel="noopener noreferrer">
            <img src="${randomImage}" alt="Promo Banner" style="max-width: 100%; height: auto; border: none; border-radius: 8px;">
        </a>
    `;
})();
