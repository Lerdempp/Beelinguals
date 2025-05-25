import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comment: '',
    rating: 5
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const result = await onSubmit(formData);
      
      if (result.success) {
        setStatus({ loading: false, error: null, success: true });
        // Form'u temizle
        setFormData({
          name: '',
          email: '',
          subject: '',
          comment: '',
          rating: 5
        });
        // 3 saniye sonra başarı mesajını kaldır
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 3000);
      } else {
        throw new Error(result.message || 'Yorum eklenirken bir hata oluştu');
      }
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message,
        success: false
      });
      // 3 saniye sonra hata mesajını kaldır
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: null }));
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Adınız"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-posta adresiniz"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Konu"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Yorumunuz"
          required
        />
      </div>
      <div className="form-group">
        <label>
          Değerlendirme:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="1">1 Yıldız</option>
            <option value="2">2 Yıldız</option>
            <option value="3">3 Yıldız</option>
            <option value="4">4 Yıldız</option>
            <option value="5">5 Yıldız</option>
          </select>
        </label>
      </div>

      <button 
        type="submit" 
        disabled={status.loading}
        className={status.loading ? 'loading' : ''}
      >
        {status.loading ? 'Gönderiliyor...' : 'Yorum Ekle'}
      </button>

      {status.error && (
        <div className="error-message">
          Hata: {status.error}
        </div>
      )}

      {status.success && (
        <div className="success-message">
          Yorumunuz başarıyla eklendi!
        </div>
      )}
    </form>
  );
};

export default CommentForm; 