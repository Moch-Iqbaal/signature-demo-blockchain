# Signature Demo

**_Repository sederhana untuk demo pembuatan dan verifikasi tanda tangan digital_**

---

## Tentang (Apa kodingan ini?)

Ini adalah contoh kode JavaScript yang menunjukkan cara membuat dan memverifikasi tanda tangan digital untuk sebuah objek data (contoh: metadata ijazah). Skrip utama adalah `sign-verify.js` yang:

- menghasilkan pasangan kunci (key pair) secara lokal menggunakan kurva `secp256k1`,
- membuat hash dari data JSON,
- menandatangani data tersebut dengan *private key*, dan
- memverifikasi tanda tangan menggunakan *public key*.

File lain dalam repo (misalnya `publicKey.pem`, `signature.txt`, `doc.txt`) adalah contoh artefak yang sering muncul pada alur penandatanganan/validasi.

---

## Tujuan

Tujuan repo ini adalah:

- Menjelaskan konsep dasar tanda tangan digital secara praktis.
- Memberi contoh kode yang mudah dijalankan untuk percobaan lokal.
- Menunjukkan praktik keamanan dasar (mis. jangan commit *private key* ke Git).

---

## Cara Menjalankan (Petunjuk cepat)

**Prasyarat:**

- `Node.js` (versi modern, direkomendasikan v14 atau lebih baru)

**Langkah:**

1. Buka terminal di folder proyek (mis. `c:\learn-web3\sign-demo`).
2. (Opsional) Install dependensi jika diperlukan:

```bash
npm install
```

3. Jalankan skrip demo:

```bash
node sign-verify.js
```

Skrip akan menampilkan di console:

- isi data (`IJAZAH`),
- hash dari data (`HASH`),
- tanda tangan dalam bentuk Base64 (`SIGNATURE`), dan
- status verifikasi (`Signature Valid? true` atau `false`).

Catatan: pada implementasi saat ini, pasangan kunci (private/public) dibuat saat runtime secara otomatis. Jika Anda ingin menggunakan kunci Anda sendiri, modifikasi skrip untuk membaca `privateKey.pem`/`publicKey.pem` dari file.

---

## Keamanan & Praktik Terbaik

- **Jangan** commit private key ke repository publik. Tambahkan nama file kunci privat Anda (mis. `privateKey.pem`) ke file `.gitignore`.
- Jika private key sudah pernah ter-commit, anggap ter-ekspose: buat pasangan kunci baru (rotate/revoke) dan hapus file sensitif dari riwayat Git (gunakan `git filter-repo` atau BFG jika perlu).
- Untuk penggunaan CI/CD atau penyimpanan rahasia, gunakan layanan seperti *GitHub Secrets*, *AWS Secrets Manager*, atau *Azure Key Vault*.

Contoh perintah untuk menghapus file dari index Git tanpa menghapus file lokal:

```bash
git rm --cached privateKey.pem
git commit -m "Remove private key from repository"
git push
```

---

## Struktur Berkas Singkat

- `sign-verify.js` : skrip utama demo.
- `publicKey.pem` : contoh public key (boleh di-commit hanya jika memang publik dan aman).
- `signature.txt` : contoh output tanda tangan.
- `doc.txt` : data contoh yang mungkin ditandatangani.

---

## Catatan Penutup (Kata Pemanis)

*Teknologi tanda tangan digital ini adalah salah satu fondasi penting yang membuat aplikasi terdistribusi dan sistem berbasis blockchain dapat dipercaya — karena di dunia blockchain, kepercayaan dibangun dari kriptografi, bukan asumsi.*

**Selamat bereksperimen!**
