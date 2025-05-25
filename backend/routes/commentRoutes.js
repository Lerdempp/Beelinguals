const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');  // MongoDB modelini import et

// Yorum Ekleme API
router.post('/', async (req, res) => {
  const { name, email, subject, comment, rating } = req.body;

  try {
    const newComment = new Comment({
      name,
      email,
      subject,
      text: comment, // text alanını comment ile eşleştiriyoruz
      rating,
    });

    const savedComment = await newComment.save();  // MongoDB'ye kaydet
    res.status(200).json({ message: "Yorum başarıyla eklendi!", id: savedComment._id });
  } catch (error) {
    console.error('Yorum eklerken hata oluştu:', error);  // Hata mesajını detaylı yazdırıyoruz
    res.status(500).json({ message: "Yorum eklenirken hata oluştu." });
  }
});

// Yorumları Listeleme API
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();  // MongoDB'den yorumları getir
    res.status(200).json(comments);
  } catch (error) {
    console.error('Yorumlar alınırken hata oluştu:', error);  // Hata mesajını detaylı yazdırıyoruz
    res.status(500).json({ message: "Yorumlar alınırken hata oluştu." });
  }
});

module.exports = router;
