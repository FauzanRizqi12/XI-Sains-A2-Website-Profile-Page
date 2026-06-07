const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "img");

fs.readdir(directoryPath, function (err, files) {
  if (err) return console.log("Gagal baca folder: " + err);

  files.forEach(function (file) {
    if (file.endsWith(".png") || file.endsWith(".jpg")) {
      sharp(path.join(directoryPath, file))
        .resize(500)
        .toFile(path.join(directoryPath, "compressed_" + file))
        .then(() => console.log("Berhasil: " + file))
        .catch((err) => console.log("Gagal: " + file, err));
    }
  });
});
