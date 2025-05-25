import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CommentCard from "./CommentCard";

const Comments = () => {
  const scrollRef = useRef(null);
  const [comments, setComments] = useState([]); // Yorumları tutmak için state

  // Backend'den yorumları çekmek için useEffect
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/comments");
        console.log(response.data); // Burada gelen veriyi console'a yazdırıyoruz
        setComments(response.data);
      } catch (error) {
        console.error("Yorumlar alınırken bir hata oluştu:", error.message);
      }
    };
    

    fetchComments();
  }, []); // Sayfa yüklendiğinde çalışır

  // Mouse hareketi ile yatay scroll
  const handleMouseDown = (e) => {
    scrollRef.current.isDragging = true;
    scrollRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeftStart = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!scrollRef.current.isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - scrollRef.current.startX;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    scrollRef.current.isDragging = false;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{
        position: "absolute",
        marginTop: "50px",
        display: "flex",
        width: "1200px",
        height: "230px",
        alignItems: "center",
        gap: "24px", // İki kart arasındaki boşluk
        overflowX: "scroll",
        overflowY: "hidden",
        cursor: "grab",
        boxSizing: "border-box",
        padding: "0px", // Padding sıfırlandı
        scrollbarWidth: "none",
      }}
    >
      {/* Tarayıcı Scrollbar'ını Gizle */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Dinamik Yorum Kartları */}
      {comments.map((comment) => (
        <CommentCard
          key={comment._id} // Her karta benzersiz bir key
          name={comment.name}
          email={comment.email}
          subject={comment.subject}
          comment={comment.comment}
          rating={comment.rating}
        />
      ))}
    </div>
  );
};

export default Comments;
