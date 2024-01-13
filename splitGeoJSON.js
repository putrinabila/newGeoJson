// const fs = require("fs");

// // Baca file GeoJSON besar
// const geoJSONBesar = fs.readFileSync("besar.geojson", "utf8");

// // Parse konten GeoJSON
// const objGeoJSON = JSON.parse(geoJSONBesar);

// // Loop melalui setiap fitur dan buat file terpisah
// objGeoJSON.features.forEach((fitur, indeks) => {
//   // Buat objek GeoJSON baru untuk setiap fitur
//   const geoJSONSingleFeature = {
//     type: "FeatureCollection",
//     features: [fitur],
//   };

//   // Tulis fitur ke file baru
//   const namaFile = `fitur_new${indeks + 1}.geojson`;
//   const kontenFile = JSON.stringify(geoJSONSingleFeature, null, 2);
//   fs.writeFileSync(namaFile, kontenFile, "utf8");

//   console.log(`Berhasil membuat ${namaFile}`);
// });

// console.log("Pembagian selesai!");

// const fs = require("fs");

// // Baca file GeoJSON besar
// const geoJSONBesar = fs.readFileSync("besar.geojson", "utf8");

// // Parse konten GeoJSON
// const objGeoJSON = JSON.parse(geoJSONBesar);

// // Loop melalui setiap fitur dan buat file terpisah
// objGeoJSON.features.forEach((fitur, indeks) => {
//   // Modifikasi properti sesuai dengan kebutuhan
//   const modifiedProperties = {
//     id: indeks + 1,
//     kode: indeks + 1,
//     nama_daerah: fitur.properties.NAMOBJ,
//     jumlah_budaya: fitur.properties.jumlah_budaya || 1, // Ganti dengan nilai yang sesuai
//     REMARK: fitur.properties.REMARK
//   };

//   // Buat objek GeoJSON baru untuk setiap fitur
//   const geoJSONSingleFeature = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         geometry: fitur.geometry,
//         properties: modifiedProperties,
//         id:indeks + 1
//       },
//     ],
//   };

//   // Tulis fitur ke file baru
//   const namaFile = `fitur_new${indeks + 1}.geojson`;
//   const kontenFile = JSON.stringify(geoJSONSingleFeature, null, 2);
//   fs.writeFileSync(namaFile, kontenFile, "utf8");

//   console.log(`Berhasil membuat ${namaFile}`);
// });

// console.log("Pembagian selesai!");

// const fs = require("fs");

// // Baca file GeoJSON besar
// const geoJSONBesar = fs.readFileSync("besar.geojson", "utf8");

// // Parse konten GeoJSON
// const objGeoJSON = JSON.parse(geoJSONBesar);

// // Loop melalui setiap fitur dan buat file terpisah
// objGeoJSON.features.forEach((fitur, indeks) => {
//   // Modifikasi properti sesuai dengan kebutuhan
//   const modifiedProperties = {
//     id: indeks + 1,
//     kode: indeks + 1,
//     nama_daerah: fitur.properties.NAMOBJ,
//     jumlah_budaya: fitur.properties.jumlah_budaya || 1,
//     REMARK: fitur.properties.REMARK,
//   };

//   // Menambahkan properti id ke dalam objek properties
//   modifiedProperties.id = indeks + 1;

//   // Buat objek GeoJSON baru untuk setiap fitur
//   const geoJSONSingleFeature = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         geometry: fitur.geometry,
//         properties: modifiedProperties,
//       },
//     ],
//   };

//   // Tulis fitur ke file baru
//   const namaFile = `fitur_new${indeks + 1}.geojson`;
//   const kontenFile = JSON.stringify(geoJSONSingleFeature, null, 2);
//   fs.writeFileSync(namaFile, kontenFile, "utf8");

//   console.log(`Berhasil membuat ${namaFile}`);
// });

// console.log("Pembagian selesai!");

// const fs = require("fs");

// // Baca file GeoJSON besar
// const geoJSONBesar = fs.readFileSync("besar.geojson", "utf8");

// // Parse konten GeoJSON
// const objGeoJSON = JSON.parse(geoJSONBesar);

// // Loop melalui setiap fitur dan buat file terpisah
// objGeoJSON.features.forEach((fitur, indeks) => {
//   // Modifikasi properti sesuai dengan kebutuhan
//   const modifiedProperties = {
//     id: indeks + 1,
//     kode: indeks + 1,
//     nama_daerah: fitur.properties.NAMOBJ,
//     jumlah_budaya: fitur.properties.jumlah_budaya || 1,
//     REMARK: fitur.properties.REMARK,
//   };

//   // Menambahkan properti id ke dalam objek properties
//   modifiedProperties.id = indeks + 1;

//   // Buat objek GeoJSON baru untuk setiap fitur
//   const geoJSONSingleFeature = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         geometry: fitur.geometry,
//         properties: modifiedProperties,
//         id: indeks + 1,
//       },
//     ],
//   };

//   // Mendapatkan nilai nama_daerah untuk digunakan dalam pembuatan nama file
//   const namaDaerah = fitur.properties.NAMOBJ || "unknown";

//   // Tulis fitur ke file baru dengan nama sesuai nama_daerah
//   const namaFile = `${namaDaerah.replace(/\s+/g, "_")}_${indeks + 1}.geojson`;
//   const kontenFile = JSON.stringify(geoJSONSingleFeature, null, 2);
//   fs.writeFileSync(namaFile, kontenFile, "utf8");

//   console.log(`Berhasil membuat ${namaFile}`);
// });

// console.log("Pembagian selesai!");

const fs = require("fs");

// Baca file GeoJSON besar
const geoJSONBesar = fs.readFileSync("besar.geojson", "utf8");

// Parse konten GeoJSON
const objGeoJSON = JSON.parse(geoJSONBesar);

// Loop melalui setiap fitur dan buat file terpisah
objGeoJSON.features.forEach((fitur, indeks) => {
  // Modifikasi properti sesuai dengan kebutuhan
  const modifiedProperties = {
    id: indeks + 1,
    kode: indeks + 1,
    nama_daerah: fitur.properties.NAMOBJ,
    REMARK: fitur.properties.REMARK,
  };

  // Menambahkan properti id ke dalam objek properties
  modifiedProperties.id = indeks + 1;

  // Mendapatkan nilai nama_daerah untuk digunakan dalam pembuatan nama file
  let namaDaerah = fitur.properties.NAMOBJ || "unknown";

  // Ganti "TIRO/TRUSEB" menjadi "TIRO-TRUSEB"
  namaDaerah = namaDaerah.replace("TIRO/TRUSEB", "TIRO-TRUSEB");

  // Ganti spasi dengan garis bawah
  namaDaerah = namaDaerah.replace(/\s+/g, "_");

  // Buat objek GeoJSON baru untuk setiap fitur
  const geoJSONSingleFeature = {
    type: "FeatureCollection",
    features: [
      {
        id: indeks + 1,
        type: "Feature",
        geometry: fitur.geometry,
        properties: modifiedProperties,
      },
    ],
  };

  // Tulis fitur ke file baru dengan nama sesuai nama_daerah
  const namaFile = `${indeks + 1}_${namaDaerah}.geojson`;
  const kontenFile = JSON.stringify(geoJSONSingleFeature, null, 2);
  fs.writeFileSync(namaFile, kontenFile, "utf8");

  console.log(`Berhasil membuat ${namaFile}`);
});

console.log("Pembagian selesai!");
