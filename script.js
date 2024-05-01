function cekNomor() {
    var nama = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    var nomorPendaftaran = document.getElementById("nomor_pendaftaran").value;
    var hasil = document.getElementById("hasil");
    var body = document.body;
    var buttons = document.getElementById("buttons");

    // Daftar data pendaftaran yang sudah tercatat
    var dataDiterima = [
		{nama: 'Arddhanari Keyzza Wardhani', kelas: 'X.11', nomor: '003-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Andika Rifky Pramana', kelas: 'X.3', nomor: '004-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Aulia Anindita Nur Azizah', kelas: 'X.9', nomor: '005-SCDA-2024', jabatan: 'Dewan Kehormatan', link: 'link-manajer.html'},
		{nama: 'Andien Candraningtyas', kelas: 'X.1', nomor: '006-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Artha Maura Nur Azizah', kelas: 'X.3', nomor: '007-SCDA-2024', jabatan: 'Dewan Penegas', link: 'link-manajer.html'},
		{nama: 'Agnes Ekklesia Simarmata', kelas: 'X.2', nomor: '008-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Alikah Mazaya Fahira', kelas: 'X.1', nomor: '009-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Abimanyu Eksi Putranto', kelas: 'X.2', nomor: '010-SCDA-2024', jabatan: 'Publikasi dan Dokumentasi', link: 'link-manajer.html'},
		{nama: 'Ananda Pitra Maulana', kelas: 'X.1', nomor: '011-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Bagus Aji Pamungkas', kelas: 'X.3', nomor: '014-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Bharata Wijaya Susetyo', kelas: 'X.7', nomor: '015-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Dhani Putra Lesmana', kelas: 'X.4', nomor: '018-SCDA-2024', jabatan: 'Dewan Penegas', link: 'link-manajer.html'},
		{nama: 'Divena Putri Setiawan', kelas: 'X.5', nomor: '020-SCDA-2024', jabatan: 'Kerani', link: 'link-manajer.html'},
		{nama: 'Denias Revy Widodo', kelas: 'X.2', nomor: '021-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Daniel Tegar Abisatya', kelas: 'X.2', nomor: '022-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Denisa Oksaputri Ramadhani', kelas: 'X.9', nomor: '023-SCDA-2024', jabatan: 'Kewirausahaan Pramuka', link: 'link-manajer.html'},
		{nama: 'Eivel Ferica Ayu Angganis', kelas: 'X.10', nomor: '026-SCDA-2024', jabatan: 'Juru Uang', link: 'link-manajer.html'},
		{nama: 'Eflin Tasia Kusuma', kelas: 'X.9', nomor: '027-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Fira Arida Aqmarina', kelas: 'X.2', nomor: '029-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Ganar Raka Adiputra', kelas: 'X.2', nomor: '030-SCDA-2024', jabatan: 'Pradana Arjuna', link: 'link-manajer.html'},
		{nama: 'Geovany Daniel Kuswanto', kelas: 'X.2', nomor: '031-SCDA-2024', jabatan: 'Dewan Penegas', link: 'link-manajer.html'},
		{nama: 'Galank Ramadhani', kelas: 'X.1', nomor: '032-SCDA-2024', jabatan: 'Juru Uang', link: 'link-manajer.html'},
		{nama: 'Hanna Nur Afifah', kelas: 'X.9', nomor: '033-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Jacklyn Akwila Chrisanti', kelas: 'X.8', nomor: '034-SCDA-2024', jabatan: 'Dewan Penegas', link: 'link-manajer.html'},
		{nama: 'Jihan Fara Febriana', kelas: 'X.9', nomor: '035-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Khurina Siti Zahra Widodo', kelas: 'X.1', nomor: '038-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Karin Calizta', kelas: 'X.12', nomor: '039-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Lilia Kumala Dewi', kelas: 'X.10', nomor: '041-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Latifa Aulya Azzahra', kelas: 'X.5', nomor: '042-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Mefa Faradisa', kelas: 'X.10', nomor: '044-SCDA-2024', jabatan: 'Pradana Srikandi', link: 'link-manajer.html'},
		{nama: 'Meisya Clara Putri Adzani', kelas: 'X.12', nomor: '045-SCDA-2024', jabatan: 'Dewan Adat', link: 'link-manajer.html'},
		{nama: 'Mustofa Reza Pahlefi', kelas: 'X.2', nomor: '046-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Margareta Fenny Anugraheni', kelas: 'X.2', nomor: '047-SCDA-2024', jabatan: 'Kewirausahaan Pramuka', link: 'link-manajer.html'},
		{nama: 'Muchamad Muzakkudin Setyawan', kelas: 'X.5', nomor: '048-SCDA-2024', jabatan: 'Dewan Adat', link: 'link-manajer.html'},
		{nama: 'Nida Salsabila Aufa Kholiliya', kelas: 'X.12', nomor: '050-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Panji Satria Wiguna', kelas: 'X.10', nomor: '051-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Penta Ananda Putri', kelas: 'X.2', nomor: '052-SCDA-2024', jabatan: 'Publikasi dan Dokumentasi', link: 'link-manajer.html'},
		{nama: 'Stevanie Destiana Ika Putri', kelas: 'X.10', nomor: '056-SCDA-2024', jabatan: 'Publikasi dan Dokumentasi', link: 'link-manajer.html'},
		{nama: 'Suci Safitri', kelas: 'X.11', nomor: '057-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Shiva Laura Safitri', kelas: 'X.6', nomor: '058-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Syah Dinar Yaqua Agustian', kelas: 'X.5', nomor: '059-SCDA-2024', jabatan: 'Dewan Kehormatan', link: 'link-manajer.html'},
		{nama: 'Sebastian Wasis Ika Praja', kelas: 'X.2', nomor: '060-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Tenia Umayah', kelas: 'X.6', nomor: '062-SCDA-2024', jabatan: 'Teknik Kepramukaan', link: 'link-manajer.html'},
		{nama: 'Tiyanita', kelas: 'X.9', nomor: '063-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Widya Meliani Prasetia Dewi', kelas: 'X.5', nomor: '064-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Widya Anugraita', kelas: 'X.4', nomor: '065-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Yunus Putra Dwi Ariyanto', kelas: 'X.10', nomor: '066-SCDA-2024', jabatan: 'Kerani', link: 'link-manajer.html'},
		{nama: 'Yuana Artalia Senja Putri', kelas: 'X.10', nomor: '067-SCDA-2024', jabatan: 'Penelitian dan Pengembangan', link: 'link-manajer.html'},
		{nama: 'Yohanes Noellan Purnomo', kelas: 'X.2', nomor: '068-SCDA-2024', jabatan: 'Giat Operasional', link: 'link-manajer.html'},
		{nama: 'Zaskia Nurul Aini', kelas: 'X.5', nomor: '069-SCDA-2024', jabatan: 'Kewirausahaan Pramuka', link: 'link-manajer.html'},
        // Tambahkan data pendaftaran diterima lainnya di sini jika diperlukan
    ];

    var dataDitolak = [
		{nama: 'Aprilia Anjani', kelas: 'X.2', nomor: '001-SCDA-2024'},
		{nama: 'Adinda Rizky Virginea', kelas: 'X.3', nomor: '002-SCDA-2024'},
		{nama: 'Bella Ashar Nevintia Rahayu', kelas: 'X.11', nomor: '012-SCDA-2024'},
		{nama: 'Bima Arya Gusti Prabu', kelas: 'X.8', nomor: '013-SCDA-2024'},
		{nama: 'Cinta Nury Nugraheni', kelas: 'X.10', nomor: '016-SCDA-2024'},
		{nama: 'Cahaya Naisila Putri', kelas: 'X.2', nomor: '017-SCDA-2024'},
		{nama: 'Durah Rana Mufidah', kelas: 'X.6', nomor: '019-SCDA-2024'},
		{nama: 'Elok Pramesti Putri', kelas: 'X.3', nomor: '024-SCDA-2024'},
		{nama: 'Ersa Titi Amelia', kelas: 'X.6', nomor: '025-SCDA-2024'},
		{nama: 'Fagita Selviyanti', kelas: 'X.8', nomor: '028-SCDA-2024'},
		{nama: 'Keysia Ayu Evelina', kelas: 'X.10', nomor: '036-SCDA-2024'},
		{nama: 'Karin Silvina', kelas: 'X.11', nomor: '037-SCDA-2024'},
		{nama: 'Lulu Madina Fauzi', kelas: 'X.5', nomor: '040-SCDA-2024'},
		{nama: 'Muhammad Alganeris Samiaji', kelas: 'X.10', nomor: '043-SCDA-2024'},
		{nama: 'Nabila Suci Lestari', kelas: 'X.7', nomor: '049-SCDA-2024'},
		{nama: 'Rara Arindha Kafidhotul Makrifah', kelas: 'X.4', nomor: '053-SCDA-2024'},
		{nama: 'Restu Handayani', kelas: 'X.2', nomor: '054-SCDA-2024'},
		{nama: 'Rafa Arlita Nurani', kelas: 'X.12', nomor: '055-SCDA-2024'},
		{nama: 'Sandrina Kesha Alisandra', kelas: 'X.1', nomor: '061-SCDA-2024'},
        // Tambahkan data pendaftaran yang sudah ditolak lainnya di sini jika diperlukan
    ];

    var dataDitemukanDiterima = dataDiterima.find(function(data) {
        return data.nama === nama && data.kelas === kelas && data.nomor === nomorPendaftaran;
    });

    var dataDitemukanDitolak = dataDitolak.find(function(data) {
        return data.nama === nama && data.kelas === kelas && data.nomor === nomorPendaftaran;
    });

    if (dataDitemukanDiterima) {
        tampilkanHasilDiterima(nama, kelas, dataDitemukanDiterima, hasil, body, buttons);
    } else if (dataDitemukanDitolak) {
        tampilkanHasilDitolak(nama, kelas, hasil, body, buttons);
    } else {
        tampilkanHasilInvalid(nama, kelas, hasil, body, buttons);
    }
}

function tampilkanHasilDiterima(nama, kelas, data, hasil, body, buttons) {
    hasil.innerHTML = "<h1>SELAMAT! ANDA DINYATAKAN LULUS SCDA 2024</h1>" + 
                      "<p>Nomor Pendaftaran : " + data.nomor + "</p>" +
                      "<h2>" + nama + "</h2>" +
                      "<p>Asal Kelas : " + kelas + "</p>" +
                      "<h3>" + data.jabatan + "</h3>";
    hasil.classList.remove('rejected', 'invalid');
    hasil.classList.add('accepted');
    body.classList.remove('rejected', 'invalid');
    body.classList.add('accepted');
    body.style.backgroundColor = '#5cb85c'; // Mengubah warna latar belakang menjadi hijau
    
    // Membersihkan hasil sebelumnya
    buttons.innerHTML = '';
}

function tampilkanHasilDitolak(nama, kelas, hasil, body, buttons) {
    hasil.innerHTML = "<h1>ANDA DINYATAKAN TIDAK LULUS SCDA 2024</h1>" +
                      "<p>Nomor Pendaftaran : -</p>" +
                      "<h2>" + nama + "</h2>" +
                      "<p>Asal Kelas : " + kelas + "</p>" +
                      "<h3>Mohon tetap semangat dan terus berusaha di lain waktu.</h3>";
    hasil.classList.remove('accepted', 'invalid');
    hasil.classList.add('rejected');
    body.classList.remove('accepted', 'invalid');
    body.classList.add('rejected');
    body.style.backgroundColor = '#d9534f'; // Mengubah warna latar belakang menjadi merah
    buttons.innerHTML = ''; // Membersihkan tombol jika hasil ditolak
}

// Menambahkan tombol dengan link sesuai jabatan
    var link = document.createElement('a');
    link.href = data.link;
    link.textContent = 'Link Grup';
    buttons.innerHTML = ''; // Membersihkan tombol sebelumnya
    buttons.appendChild(link);

function tampilkanHasilInvalid(nama, kelas, hasil, body, buttons) {
    hasil.innerHTML = "<h1>DATA TIDAK DITEMUKAN</h1>" +
                      "<p>Nomor Pendaftaran : -</p>" +
                      "<h2>" + nama + "</h2>" +
                      "<p>Asal Kelas : " + kelas + "</p>" +
                      "<h3>Silakan isi data dengan benar</h3>";
    hasil.classList.remove('accepted', 'rejected');
    hasil.classList.add('invalid');
    body.classList.remove('accepted', 'rejected');
    body.classList.add('invalid');
    body.style.backgroundColor = '#999'; // Mengubah warna latar belakang menjadi abu-abu untuk hasil yang invalid
    buttons.innerHTML = ''; // Membersihkan tombol jika data tidak valid
}