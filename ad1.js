document.write(`

<script type="text/javascript">
//<![CDATA[
(function() {
    // 1. URL sumber daftar link .txt
    const linkSource = 'https://seribudollarperhari.github.io/banner/link.txt';

    // 2. Mengambil data dari text file
    fetch(linkSource)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(text => {
            // 3. Memisahkan teks berdasarkan baris baru (enter) dan membuang baris kosong
            const links = text.split(/\r?\n/).map(line => line.trim()).filter(line => line !== '');

            if (links.length > 0) {
                // 4. Memilih satu link secara acak dari array
                const randomUrl = links[Math.floor(Math.random() * links.length)];

                // 5. Memberikan delay 1 detik (1000 milidetik) sebelum redirect
                setTimeout(() => {
                    window.location.replace(randomUrl);
                }, 1000);
            } else {
                console.warn('File link.txt kosong atau format tidak sesuai.');
            }
        })
        .catch(error => {
            console.error('Gagal mengambil link pengalihan:', error);
        });
})();
//]]>
</script>

<script>
  atOptions = {
    'key' : 'a317173734fbcd8901b885b17a227f72',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
<\/script>
<script src="//spreadpreferencetelevision.com/a317173734fbcd8901b885b17a227f72/invoke.js"><\/script>
`);
