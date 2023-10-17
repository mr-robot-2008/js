// Import modul 'readline' untuk interaksi dengan pengguna melalui CLI
const readline = require('readline');

// Buat interface untuk membaca masukan dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function konversiKeFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function konversiKeCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Minta pengguna memasukkan suhu dalam Celsius atau Fahrenheit
rl.question('Masukkan suhu (misalnya, 25C atau 77F): ', (input) => {
  // Pisahkan nilai dari satuan (C atau F)
  const suhu = parseFloat(input);
  const satuan = input.slice(-1).toUpperCase(); // Ambil karakter terakhir dan ubah ke huruf besar

  if (satuan === 'C') {
    const suhuFahrenheit = konversiKeFahrenheit(suhu);
    console.log(`${suhu}C adalah ${suhuFahrenheit}F`);
  } else if (satuan === 'F') {
    const suhuCelsius = konversiKeCelsius(suhu);
    console.log(`${suhu}F adalah ${suhuCelsius}C`);
  } else {
    console.log('Format masukan tidak valid. Gunakan format seperti 25C atau 77F.');
  }

  // Tutup interface setelah selesai
  rl.close();
});
