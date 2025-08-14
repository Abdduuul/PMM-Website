document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mahasiswa-container');

    const mahasiswa = [
        {
            nama: "Budi Santoso",
            universitas: "Universitas Gadjah Mada",
            daerah: "Yogyakarta",
            foto: "h.JPG"
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
        card.className = 'card flex items-center p-4'; // Added flex and items-center
        card.innerHTML = `
            <div class="w-24 h-24 mr-4">
                <img src="${m.foto}" alt="Foto ${m.nama}" class="rounded-lg w-full h-full object-cover">
            </div>
            <div>
                <h2 class="text-xl font-bold text-gray-800">${m.nama}</h2>
                <p class="text-gray-600">${m.universitas}</p>
                <p class="text-gray-500 mt-2">${m.daerah}</p>
            </div>
        `;
        container.appendChild(card);
    });
});
