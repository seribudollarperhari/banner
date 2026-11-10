(async function() {
    // 1. Tangkap posisi tag <script> yang sedang berjalan (ad3.js)
    const currentScript = document.currentScript || (function() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    // 2. Buat elemen <div> baru sebagai wadah banner secara otomatis
    const bannerContainer = document.createElement('div');
    // Tambahkan sedikit style agar banner berada di tengah dan terlihat rapi
    bannerContainer.style.textAlign = 'center';
    bannerContainer.style.margin = '15px auto';
    bannerContainer.style.maxWidth = '100%';

    // Sisipkan wadah banner ini tepat setelah tag <script> di dalam HTML
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
    // Tentukan link default (fallback) jika seandainya fetch gagal
    let randomLink = '#'; 

    // 4. Ambil data link dari file txt (Fetch API)
    try {
        const response = await fetch(linkTxtUrl);
        if (response.ok) {
            const textData = await response.text();
            
            // Pecah teks menjadi array berdasarkan baris baru, hapus spasi awal/akhir, dan buang baris kosong
            const links = textData.split('\n')
                                  .map(link => link.trim())
                                  .filter(link => link.length > 0);
            
            // Jika array link tidak kosong, pilih salah satu secara acak
            if (links.length > 0) {
                randomLink = links[Math.floor(Math.random() * links.length)];
            }
        }
    } catch (error) {
        console.error("Gagal memuat daftar link banner:", error);
    }

    // 5. Masukkan HTML (gambar dan link) ke dalam wadah container yang sudah dibuat
    bannerContainer.innerHTML = `
        <a href="${randomLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
            <img src="${randomImage}" alt="Amazon Promo Banner" style="max-width: 100%; height: auto; border: none; border-radius: 8px;">
        </a>
    `;
})();
