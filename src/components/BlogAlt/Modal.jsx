import React, { useState } from "react";
import Xbutton from "../../assets/icons/xbutton.svg";
import user from "../../assets/icons/user.svg";
import mail from "../../assets/icons/mail.svg";
import message from "../../assets/icons/message.svg";
import Rating from "./Rating";
import InputField from "./InputField";
import axios from "axios";
import "./Modal.css";

const Modal = ({ isOpen, onClose, addComment }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({}); // Hatalar için state
  const MAX_CHAR_COUNT = 200;

  // Email doğrulama regex
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    const newErrors = {};

    if (!nameValue.trim()) {
      newErrors.name = true; // Name field hatası
    }
    if (!emailValue.trim() || !isValidEmail(emailValue)) {
      newErrors.email = true; // Email field hatası
    }
    if (!subjectValue.trim()) {
      newErrors.subject = true; // Subject field hatası
    }
    if (!commentValue.trim()) {
      newErrors.comment = true; // Comment field hatası
    }

    setErrors(newErrors);

    // Eğer hata varsa, 1 saniye sonra hataları sıfırla
    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 1000);
    }

    // Eğer hata yoksa form geçerlidir
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // Hatalar varsa gönderimi durdur
    }
  
    const newComment = {
      name: nameValue.trim(),
      email: emailValue.trim(),
      subject: subjectValue.trim(),
      comment: commentValue.trim(),
      rating: rating,
    };
  
    console.log("Gönderilecek yorum verisi:", newComment);
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/comments", // Backend endpoint
        newComment
      );
      console.log("API yanıtı:", response.data);
      addComment(response.data); // Yeni yorumu local state'e ekle
      onClose(); // Modal'ı kapat
    } catch (error) {
      console.error("Yorum gönderilirken bir hata oluştu:", error.message);
      // Backend'den gelen hata yanıtını kontrol et
      if (error.response) {
        console.error("Backend Hata Detayı:", error.response.data);
      } else {
        console.error("Hata Detayı:", error.message);
      }
    }
  };
  

  if (!isOpen) return null;

  return (
    <div>
      {/* Background Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.24)",
          zIndex: 10,
        }}
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          left: "50%",
          transform: "translate(-50%, 0)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "368px",
          background: "#FFF",
          borderRadius: "16px",
          boxShadow:
            "0px 21px 6px 0px rgba(145, 145, 145, 0.00), 0px 14px 5px 0px rgba(145, 145, 145, 0.00)",
          zIndex: 20,
        }}
      >
        {/* Header */}
        <div
          style={{
            borderRadius: "16px 16px 0px 0px",
            display: "flex",
            padding: "20px 20px 24px 20px",
            alignItems: "flex-start",
            gap: "8px",
            alignSelf: "stretch",
            borderBottom: "1px dashed var(--stroke-soft-200, #E5E5E5)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
              flex: "1 0 0",
            }}
          >
            <span
              style={{
                alignSelf: "stretch",
                color: "#141414",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
              }}
            >
              Add Comment
            </span>
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--text-sub-600, #5C5C5C)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
              }}
            >
              Add comment for our blog.
            </span>
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              display: "flex",
              padding: "2px",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
              borderRadius: "6px",
              border: "1px solid var(--stroke-soft-200, #E5E5E5)",
              background: "#FFF",
              boxShadow: "0px 1px 2px 0px rgba(10, 13, 20, 0.03)",
              alignSelf: "stretch",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            <img src={Xbutton} alt="Close" style={{ width: "16px", height: "16px" }} />
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            display: "flex",
            padding: "20px",
            width: "328px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          {/* Name Input */}
          <InputField
            label="Enter Name"
            placeholder="Placeholder text..."
            value={nameValue}
            setValue={setNameValue}
            error={errors.name} // Hata durumu kontrolü
            icon={user}
          />

          {/* Email Input */}
          <InputField
            label="Email"
            placeholder="hello@juvostudio.com"
            value={emailValue}
            setValue={setEmailValue}
            error={errors.email} // Hata durumu kontrolü
            icon={mail}
          />

          {/* Rating */}
          <Rating rating={rating} setRating={setRating} />

          {/* Subject Input */}
          <InputField
            label="Subject"
            placeholder="Enter the subject..."
            value={subjectValue}
            setValue={setSubjectValue}
            error={errors.subject} // Hata durumu kontrolü
            icon={message}
          />

          {/* Comment Input */}
          <InputField
            label="Comment"
            placeholder="Enter your comment..."
            value={commentValue}
            setValue={(value) => {
              if (value.length <= MAX_CHAR_COUNT) setCommentValue(value);
            }}
            isTextArea={true}
            showCharCount={true}
            maxCharCount={MAX_CHAR_COUNT}
            error={errors.comment} // Hata durumu kontrolü
          />
        </div>

        {/* Submit Button */}
        <div
          style={{
            height: "40px",
            padding: "0px 20px 20px 20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              alignSelf: "stretch",
              borderRadius: "10px",
              background: "#141414",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            <span
              style={{
                color: "#FFF",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Submit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
