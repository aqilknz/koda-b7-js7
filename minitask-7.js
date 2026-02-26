const dataHasilUjian = (mapel) => {
    const {Matematika, BahasaIndonesia, BahasaInggris, IPA} = mapel;
    const total = Matematika + BahasaIndonesia + BahasaInggris + IPA
    const rataRata = total / 4;
    return {total, rataRata};
    
}

const nilai = {
    "Matematika": 82,
    "BahasaIndonesia": 93,
    "BahasaInggris": 85,
    "IPA": 91
}

const {total, rataRata} = dataHasilUjian(nilai);
console.log(`total nilai adalah ${total}`);
console.log(`rata-rata nilai adalah ${rataRata}`);
