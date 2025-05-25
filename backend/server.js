const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Geçici yorum veritabanı (array olarak tanımlandı)
let comments = [
  {
    _id: '1',
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Subject',
    comment: 'Test Comment',
    rating: 5,
    createdAt: new Date().toISOString()
  }
];

// Yorumları getir
app.get('/api/comments', (req, res) => {
  try {
    res.json(comments);
  } catch (error) {
    console.error('Yorumları getirme hatası:', error);
    res.status(500).json({ message: 'Yorumlar alınırken hata oluştu' });
  }
});

// Yeni yorum ekle
app.post('/api/comments', (req, res) => {
  try {
    console.log('Gelen veri:', req.body);

    const { name, email, subject, comment, rating } = req.body;

    // Gerekli alanların kontrolü
    if (!name || !email || !subject || !comment || !rating) {
      console.log('Eksik alanlar:', { name, email, subject, comment, rating });
      return res.status(400).json({ 
        message: 'Lütfen tüm alanları doldurun.',
        missingFields: {
          name: !name,
          email: !email,
          subject: !subject,
          comment: !comment,
          rating: !rating
        }
      });
    }

    // Yeni yorum objesi
    const newComment = {
      _id: Date.now().toString(),
      name,
      email,
      subject,
      comment,
      rating: Number(rating),
      createdAt: new Date().toISOString()
    };

    // Yorumu array'in başına ekle
    comments.unshift(newComment);

    // Başarılı yanıt
    res.status(201).json({
      message: 'Yorum başarıyla eklendi!',
      comment: newComment
    });
  } catch (error) {
    console.error('Yorum ekleme hatası:', error);
    res.status(500).json({ 
      message: 'Yorum eklenirken bir hata oluştu.',
      error: error.message 
    });
  }
});

// Sunucuyu başlat
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
