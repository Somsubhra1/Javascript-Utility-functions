const crypto = require("crypto");

String.prototype.getBytes = function () {
  var bytes = [];
  for (var i = 0; i < this.length; ++i) {
    bytes.push(this.charCodeAt(i));
  }
  return bytes;
};

function decryptURL(encURL) {
  const des = crypto.createDecipheriv(
    "des-ecb",
    Buffer.from("38346591".getBytes()),
    ""
  );

  const enc_url = Buffer.from(encURL, "base64");
  let dec_url = des.update(enc_url, "base64", "utf-8");
  dec_url = dec_url.replace("_96", "_320.mp4");

  return dec_url;
}

const musicURL = decryptURL(
  "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyt9FOynzequ5IvriekLOmemhlOrNuXjaBrWeCHqaPoit2JaIm/ylxaRw7tS9a8Gtq"
);

console.log(musicURL);