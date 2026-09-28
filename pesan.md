---
title: Pesan Jus
description: Pesan Jus Buah Segar melalui WhatsApp.
---

<header class="page-header">
  <p class="eyebrow">Pesan dengan mudah</p>
  <h1>🛒 Pesan Jus via WhatsApp</h1>
  <p class="page-intro">
    Isi data pesanan berikut. Setelah menekan tombol, WhatsApp akan terbuka
    dengan detail pesanan yang sudah disiapkan.
  </p>
</header>

<section class="section">
  <form id="form-pesan" class="order-form">
    <div class="form-group">
      <label for="nama">Nama lengkap</label>
      <input
        id="nama"
        name="nama"
        type="text"
        placeholder="Contoh: Budi Santoso"
        required
      >
    </div>

    <div class="form-group">
      <label for="alamat">Alamat lengkap</label>
      <textarea
        id="alamat"
        name="alamat"
        placeholder="Jl. ..., nomor, kelurahan, kecamatan, kota"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="menu">Pilihan menu</label>
      <select id="menu" name="menu" required>
        <option value="" selected disabled>Pilih menu jus</option>
        <option value="Jus Jeruk">Jus Jeruk — Rp15.000</option>
        <option value="Jus Mangga">Jus Mangga — Rp18.000</option>
        <option value="Jus Alpukat">Jus Alpukat — Rp20.000</option>
        <option value="Mixed Berry">Mixed Berry — Rp22.000</option>
        <option value="Jus Semangka">Jus Semangka — Rp15.000</option>
        <option value="Jus Nanas">Jus Nanas — Rp16.000</option>
      </select>
    </div>

    <div class="form-group">
      <label for="ukuran">Ukuran</label>
      <select id="ukuran" name="ukuran" required>
        <option value="Regular 350 ml">Regular 350 ml</option>
        <option value="Jumbo 500 ml (+Rp5.000)">Jumbo 500 ml (+Rp5.000)</option>
      </select>
    </div>

    <div class="form-group">
      <label for="jumlah">Jumlah gelas</label>
      <input
        id="jumlah"
        name="jumlah"
        type="number"
        min="1"
        max="100"
        value="1"
        required
      >
    </div>

    <div class="form-group">
      <label for="catatan">Catatan tambahan</label>
      <textarea
        id="catatan"
        name="catatan"
        placeholder="Contoh: tanpa es, es sedikit, atau detail lainnya"
      ></textarea>
    </div>

    <button class="btn btn-primary" type="submit">
      Lanjut ke WhatsApp
    </button>

    <p class="form-help">
      Nomor tujuan: 0812-3456-7890. Detail harga, ongkir, ketersediaan menu,
      dan promo akan dikonfirmasi oleh toko.
    </p>
  </form>
</section>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-pesan");

    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const alamat = document.getElementById("alamat").value.trim();
      const menu = document.getElementById("menu").value;
      const ukuran = document.getElementById("ukuran").value;
      const jumlah = document.getElementById("jumlah").value;
      const catatan = document.getElementById("catatan").value.trim();

      const nomorWhatsApp = "6281234567890";

      const lines = [
        "Halo Jus Buah Segar, saya ingin pesan:",
        "",
        `Nama: ${nama}`,
        `Alamat: ${alamat}`,
        `Menu: ${menu}`,
        `Ukuran: ${ukuran}`,
        `Jumlah: ${jumlah} gelas`
      ];

      if (catatan) {
        lines.push(`Catatan: ${catatan}`);
      }

      lines.push("");
      lines.push("Mohon konfirmasi ketersediaan, total harga, dan ongkir. Terima kasih.");

      const pesan = encodeURIComponent(lines.join("\n"));
      const url = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;

      window.open(url, "_blank", "noopener");
    });
  });
</script>
