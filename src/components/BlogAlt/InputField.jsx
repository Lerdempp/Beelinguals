import React, { useState } from "react";

const InputField = ({
  label,
  placeholder,
  value,
  setValue,
  error,
  isTextArea = false,
  inputStyle = {},
  showCharCount = false,
  maxCharCount = 200,
}) => {
  const [isFocused, setIsFocused] = useState(false); // Focus durumu için state

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
        alignSelf: "stretch",
        height: isTextArea ? "auto" : "64px",
      }}
    >
      {/* Label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1px",
          alignSelf: "stretch",
        }}
      >
        <span
          style={{
            color: "var(--text-strong-950, #141414)",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: "var(--primary-base, #335CFF)",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          *
        </span>
      </div>

      {/* Input Container */}
      <div
        className={`placeholder-input ${error ? "error" : ""} ${
          isFocused ? "focused" : ""
        }`} // Focus durumu için 'focused' sınıfı ekleniyor
        style={{
          position: "relative",
        }}
      >
        {/* Textarea Field */}
        {isTextArea ? (
          <>
            <textarea
              className="placeholder-input-field"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setIsFocused(true)} // Focus durumunu güncelle
              onBlur={() => setIsFocused(false)} // Focus dışına çıkıldığında durumu sıfırla
              placeholder={placeholder}
              style={{
                ...inputStyle,
                width: "100%",
                height: "120px",
                resize: "none",
              }}
            />
            {showCharCount && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  fontSize: "11px",
                  color: "#A3A3A3",
                }}
              >
                {value.length}/{maxCharCount}
              </div>
            )}
          </>
        ) : (
          // Input Field
          <input
            className="placeholder-input-field"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)} // Focus durumunu güncelle
            onBlur={() => setIsFocused(false)} // Focus dışına çıkıldığında durumu sıfırla
            placeholder={placeholder}
            style={{
              flex: 1,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
