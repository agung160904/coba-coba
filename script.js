// Ambil elemen
const pindahBtn = document.getElementById('pindahBtn');
const halaman1 = document.getElementById('halaman1');
const halaman2 = document.getElementById('halaman2');
const musik = document.getElementById('musik');

// Fungsi untuk pindah halaman
pindahBtn.addEventListener('click', () => {
    // Tambahkan kelas animasi
    halaman1.classList.add('hidden');
    halaman2.classList.remove('hidden');
    halaman2.style.visibility = "visible";
    
    // Putar musik
    musik.play();
});