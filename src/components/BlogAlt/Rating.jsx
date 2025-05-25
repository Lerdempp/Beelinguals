import React, { useState } from "react";
import star from "../../assets/icons/fav.svg"; // Varsayılan yıldız simgesi
import star2 from "../../assets/icons/fav2.svg"; // Hover ve aktif durumdaki yıldız simgesi
import "./Rating.css"; // CSS dosyasını ekledik

const Rating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0); // Hover durumunu tutar

  return (
    <div className="rating-wrapper">
      {/* Label */}
      <div className="rating-label">
        Rating<span style={{ color: "var(--primary-base, #335CFF)" }}>*</span>
      </div>

      {/* Stars */}
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((starValue) => (
          <div
            key={starValue}
            className={`star-container ${
              starValue <= (hover || rating) ? "active" : ""
            }`}
            onClick={() => setRating(starValue)} // Tıklama ile rating güncellenir
            onMouseEnter={() => setHover(starValue)} // Hover sırasında yıldız aktif olur
            onMouseLeave={() => setHover(0)} // Hover çıkıldığında sıfırlanır
          >
            <img
              src={starValue <= (hover || rating) ? star2 : star} // Aktif ve hover durumunda fav2.svg kullanılır
              alt="Star Icon"
              className="star-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
