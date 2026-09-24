---
layout: default
title: Pesan
---

## 🛒 Pesan Jus Buah via WhatsApp

<p>
  Isi formulir di bawah ini, lalu klik tombol “Kirim ke WhatsApp”.
  Kamu akan diarahkan ke chat WhatsApp dengan pesan yang sudah terformat.
</p>

<section class="section" style="margin-top: 25px;">
  <form id="form-pesan" onsubmit="kirimKeWhatsApp(event)">
    <div class="form-group">
      <label for="nama">Nama Lengkap</label>
      <input type="text" id="nama" name="nama" required placeholder="Contoh: Budi Santoso" />
    </div>

    <div class="form-group">
      <label for="alamat">Alamat Lengkap</label>
      <textarea id="alamat" name="alamat" rows="3" required placeholder="Jl. ..., No. ..., Kelurahan, Kecamatan, Kota"></textarea>
    </div>

    <div class="form-group">
      <label for="menu">Pilihan Menu</label>
      <select id="menu" name="menu" required>
        <option value="" disabled selected>Pilih jus</option>
        <option value="Jus Jeruk">Jus Jeruk</option>
        <option value="Jus Mangga">Jus Mangga</option>
        <option value="Jus Alpukat">Jus Alpukat</option>
        <option value="Mixed Berry">Mixed Berry</option>
        <option value="Jus Semangka">Jus Semangka</option>
        <option value="Jus Nanas">Jus Nanas</option>
      </select>
    </div>

    <div class="form-group">
      <label for="jumlah">Jumlah (gelas)</label>
      <input type="number" id="jumlah" name="jumlah" min="1" value="1" required />
    </div>

    <div class="form-group">
      <label for="catatan">Catatan Tambahan (opsional)</label>
      <textarea id="catatan" name="catatan" rows="2" placeholder="Contoh: kurang manis, tanpa es, dll."></textarea>
    </div>

    <button type="submit" class="btn btn-wa">Kirim ke WhatsApp</button>
  </form>

  <p style="margin-top: 15px; font-size: 0.9rem;">
    Nomor WhatsApp tujuan: <strong>0812-3456-7890</strong>
  </p>
</section>

<script>
  function kirimKeWhatsApp(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const menu = document.getElementById('menu').value;
    const jumlah = document.getElementById('jumlah').value;
    const catatan = document.getElementById('catatan').value.trim();

    const nomorWA = '6281234567890'; // ganti dengan nomor WA toko (format 62...)

    let pesan = `Halo, saya ingin pesan jus buah:%0A%0A`;
    pesan += `*Nama:* ${nama}%0A`;
    pesan += `*Alamat:* ${alamat}%0A`;
    pesan += `*Menu:* ${menu}%0A`;
    pesan += `*Jumlah:* ${jumlah} gelas%0A`;

    if (catatan) {
      pesan += `*Catatan:* ${catatan}%0A`;
    }

    pesan += `%0ATerima kasih!`;

    const url = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(url, '_blank');
  }
</script>
