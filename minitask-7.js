const dataHasilUjian = (mapel) => {
    const {Matematika, BahasaIndonesia, BahasaInggris, IPA} = mapel;
    const total = Matematika + BahasaIndonesia + BahasaInggris + IPA
    const rataRata = total / 4;
    return {total, rataRata};
    
}
const nilai = {
    "Matematika": 80,
    "BahasaIndonesia": 90,
    "BahasaInggris": 85,
    "IPA": 95
}

const {total, rataRata} = dataHasilUjian(nilai);
console.log("total nilai adalah ",total);
console.log("rata-rata nilai adalah ",rataRata);
