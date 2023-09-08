getAngkaTerbesarKedua = (personName) => {
  // buat cek apakah ini struktur data array?
  if (Array.isArray(personName)) {
    arr = personName.sort((a, b) => b - a);
    // mengambil index ke-1, karena tertinggi yang ke-2 hehehe
    return arr[1];
  } else if (personName === undefined) {
    pesanEror2 = "Bro ini belom di isi parameternya";
    return pesanEror2;
  } else if (!Array.isArray(personName)) {
    pesanEror = "Bro ini bukan array";
    return pesanEror;
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));

console.log(getAngkaTerbesarKedua());
