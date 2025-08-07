document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mahasiswa-container');

    const mahasiswa = [
        {
            nama: "Budi Santoso",
            universitas: "Universitas Gadjah Mada",
            daerah: "Yogyakarta",
            foto: "https://via.placeholder.com/150"
        },
        {
            nama: "Ani Lestari",
            universitas: "Institut Teknologi Bandung",
            daerah: "Bandung",
            foto: "https://via.placeholder.com/150"
        },
        {
            nama: "Citra Dewi",
            universitas: "Universitas Indonesia",
            daerah: "Jakarta",
            foto: "https://via.placeholder.com/150"
        },
        {
            nama: "Dodi Firmansyah",
            universitas: "Universitas Airlangga",
            daerah: "Surabaya",
            foto: "https://via.placeholder.com/150"
        },
        {
            nama: "Eka Putri",
            universitas: "Universitas Hasanuddin",
            daerah: "Makassar",
            foto: "https://via.placeholder.com/150"
        },
        {
            nama: "Fajar Nugraha",
            universitas: "Universitas Diponegoro",
            daerah: "Semarang",
            foto: "https://via.placeholder.com/150"
        }
    ];

    mahasiswa.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card p-6';
        card.innerHTML = `
            <img src="${m.foto}" alt="Foto ${m.nama}" class="w-32 h-32 rounded-full mx-auto mb-4">
            <h2 class="text-xl font-bold text-gray-800 text-center">${m.nama}</h2>
            <p class="text-gray-600 text-center">${m.universitas}</p>
            <p class="text-gray-500 text-center mt-2">${m.daerah}</p>
        `;
        container.appendChild(card);
    });
});
