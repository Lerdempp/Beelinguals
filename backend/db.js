// db.js
const sqlite3 = require('sqlite3').verbose();

// Veritabanı bağlantısını kuruyoruz
const db = new sqlite3.Database('./your-database-path.db', (err) => {
  if (err) {
    console.error('Veritabanı bağlantısı hatası:', err.message);
  } else {
    console.log('Veritabanına başarıyla bağlanıldı.');
  }
});

// comments tablosunun olup olmadığını kontrol etme
const checkTable = () => {
  const sql = "PRAGMA table_info(comments);";
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Tablo sorgulama hatası:', err.message);
      return;
    }
    if (rows.length > 0) {
      console.log("comments tablosu mevcut:", rows);
    } else {
      console.log("comments tablosu mevcut değil.");
      createTable(); // Eğer tablo yoksa, yeni tabloyu oluştur
    }
  });
};

// comments tablosu oluşturulması
const createTable = () => {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      comment TEXT NOT NULL,
      rating INTEGER NOT NULL
    );
  `;

  db.run(createTableSQL, (err) => {
    if (err) {
      console.error("Tablo oluşturulurken hata:", err.message);
    } else {
      console.log("comments tablosu başarıyla oluşturuldu.");
    }
  });
};

// Veritabanı bağlantısını kapatma
const closeDb = () => {
  db.close((err) => {
    if (err) {
      console.error('Veritabanı kapatılırken hata:', err.message);
    } else {
      console.log('Veritabanı bağlantısı kapatıldı.');
    }
  });
};

module.exports = { checkTable, closeDb };
