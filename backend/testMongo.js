const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yorumSistemi', {
  serverSelectionTimeoutMS: 5000, // Timeout süresi
})
  .then(() => {
    console.log('MongoDB bağlantısı başarılı!');
    mongoose.connection.close(); // Bağlantıyı kapat
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });
