const crypto = require("crypto");

const ijazah = JSON.stringify({
  nama: "Lucifer",
  nim: " ",
  nik: " ",  // opsional
  tempat_lahir: " ",
  tanggal_lahir: " ",
  perguruan_tinggi: " ",
  program_studi: " ",
  jenjang: " ",
  fakultas: " ",
  tahun_masuk: " ",
  tahun_lulus: " ",
  ipk: "3. ",
  sks:  " ",
  predikat_kelulusan: " ",
  nomor_ijazah: " ",
  tanggal_terbit: " ",
  penandatangan: {
    rektor: " ",
    dekan: " "
  },
  hash_dokumen_pdf: "0xabc123...",   
  versi: "1.0"
});


// Generate Keypair
const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
  namedCurve: "secp256k1"
});

// Convert keys
const privatePem = privateKey.export({ type: "pkcs8", format: "pem" });
const publicPem = publicKey.export({ type: "spki", format: "pem" });

// Hash data
const hash = crypto.createHash("sha256").update(ijazah).digest("hex");

// Sign
const signature = crypto.sign("sha256", Buffer.from(ijazah), privateKey).toString("base64");

// Verify
const isValid = crypto.verify(
  "sha256",
  Buffer.from(ijazah),
  publicKey,
  Buffer.from(signature, "base64")
);

console.log("IJAZAH:", ijazah);
console.log("HASH:", hash);
console.log("SIGNATURE:", signature);
console.log("Signature Valid?", isValid);
