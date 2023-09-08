const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// function untuk merubah format number jadi rupiah
const formatRupiah = (angka) => {
  const reverse = angka.toString().split("").reverse().join("");
  const ribuan = reverse.match(/\d{1,3}/g);
  const formatted = ribuan.join(".").split("").reverse().join("");
  return `Rp ${formatted}`;
};

getInfoPenjualan = (dataPenjualan) => {
  let totalKeuntungan = 0;
  let totalModalAwal = 0;
  let totalModalKeuntungan = 0;
  let persentaseKeuntungan = 0;
  dataPenjualan.map((value) => {
    // total keuntungan
    totalKeuntungan = totalKeuntungan + value.totalTerjual * value.hargaJual;

    // total modal awal
    totalModalAwal = totalModalAwal + (value.sisaStok + value.totalTerjual) * value.hargaBeli;

    // menghitung berapa persen keuntungan (keuntungan Total keseluruhan dengan Total modal buku habis terjual)
    // u = tk - tm, u/tm * 100%
    totalModalKeuntungan = totalModalKeuntungan + value.totalTerjual * value.hargaBeli;
    persentaseKeuntungan = totalKeuntungan - totalModalKeuntungan;
    persentaseKeuntungan = (persentaseKeuntungan / totalModalKeuntungan) * 100;
  });

  // produk buku terlaris dan penulis terlaris
  arr = dataPenjualan.sort((a, b) => b.totalTerjual - a.totalTerjual);

  return {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModalAwal: formatRupiah(totalModalAwal),
    totalModalKeuntungan: formatRupiah(totalModalKeuntungan),
    persentaseKeuntungan: `${persentaseKeuntungan.toFixed()}%`,
    produkBukuTerlaris: arr[0].namaProduk,
    penulisTerlaris: arr[0].penulis,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
