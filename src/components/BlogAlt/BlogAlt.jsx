import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import Footer from "../Footer2";
import Comments from "../Comments/Comments.jsx";
import CommentSection from "./CommentSection.jsx";
import { blogData } from "../../data/blogData";

const SUBHEADINGS = [
  "Çevirmenlikte Başarıya Giden Yol: Sürekli Gelişim",
  "Daha Net Bir Yol: Yöneleceğiniz Alanı Belirleyin",
  "Yeni Dünyanın Yeni Teknolojileri: Çeviri Araçları ve Bilgisayar Destekli Çeviri",
  "Belki de En Önemlisi Deneyim Kazanmak: Nereden Başlamalıyım?",
  "Her Şey Hazır, Sıra İş Bulmakta",
  "Zaman Yönetimi",
  "Stresle Başa Çıkma",
  "Ekip Çalışması",
  "Yeni Başlayanlar İçin Korkutucu Olabilir, Ama...",
  "Freelance Ne Demek? Çeviri Sektöründe Yeri Nedir?",
  "Hangi Alanlarda Freelance Çeviri Yapılır?",
  "En Belirgin Avantajları: Esneklik ve Bağımsızlık",
  "Evden Çalışma İmkânı",
  "Zaman Yönetimi: Hem Özgürlük Hem Sorumluluk",
  "Süreklilik ve Güvence Eksikliği",
  "Cesaretin Varsa Gerisi Gelir!",
  "Makine Çevirisi Nerede İşe Yarar?",
  "Makine Çevirisinin Yetersiz Kaldığı Durumlar",
  "İnsan Çevirisi Neden Hâlâ Önemli?",
  "Makine Çevirisi Vs. İnsan Çevirisi: Hangisi Daha İyi?",
  "Pepsi'nin Mezardan Gelen Hatası",
  "🍗 KFC'nin Parmak Isırtan (!) Çeviri Hatası",
  'Colgate, Arjantin\'de "Kendini As" Mı Demek?',
  "Yerelleştirme ve Yabancılaştırma Nedir?",
  "Film İsimlerinde Kültürel Uyum Arayışı",
  "Her Tercih Bir Strateji: Merak Unsuru ve Hedef Kitle",
  "1. Çeviriyle ne zaman tanıştınız? Şimdiye kadar çevirinin hangi alanlarında deneyim kazandınız?",
  "2. Bu alanlarda edindiğiniz tecrübeler çeviriye olan bakış açınızı nasıl etkiledi?",
  "3. Sizin için unutulmaz ve hayatınızı değiştiren bir çeviri projesi oldu mu? Varsa detaylarını paylaşabilir misiniz?",
  "4. Geriye dönüp üniversite yıllarınıza bakacak olsanız 'iyi ki yapmışım' veya 'keşke yapmasaydım' dediğiniz şeyler var mı?",
  "5. Birden fazla sektörde çalışmış biri olarak, çeviri yapmak isteyen ama kariyerinde farklı alanlara da yönelen kişilere ne önerirsiniz?",
  "6. Türkiye'de çevirmenlik mesleğinin konumunu nasıl görüyorsunuz? Hangi alanlarda gelişime açık olduğunu düşünüyorsunuz?",
  "7. Sözlü çeviri deneyiminiz oldu mu? Olduysa bu deneyimin size katkısı ne oldu?",
  "8. Çevirmenlik dışında size ilham veren, sizi geliştiren hobileriniz ya da günlük rutinleriniz var mı?",
  "9. İleride çevirmenlik dışında kendinizi görmek istediğiniz başka bir alan var mı?",
  "10. Bundan 5 yıl öncesine gidebilme şansınız olsa, kendinize ne söylemek isterdiniz?",
  "1. Çeviriyle ne zaman tanıştınız? Şimdiye kadar çevirinin hangi alanlarında deneyim kazandınız?",
  "2. Sizin için unutulmaz ve hayatınızı değiştiren bir çeviri projesi oldu mu? Varsa detaylarını paylaşabilir misiniz?",
  "3. Çeviri sürecinde hangi araçları (CAT Tools, sözlükler, yazılımlar) kullanıyorsunuz?",
  "4. Geriye dönüp üniversite yıllarınıza bakacak olsanız 'iyi ki yapmışım' veya 'keşke yapmasaydım' dediğiniz şeyler var mı?",
  "5. Video oyunları çevirmenliği yapmak isteyenlere ne gibi tavsiyelerde bulunursunuz? Sizce nereden başlamak gerekir?",
  "6. Video oyunları çevirisinde en çok zorlandığınız veya sizi en çok zorlayan öğeler neler oluyor?",
  "7. Oyun firmalarıyla veya projelerle çalışırken bağlam (context) veriliyor mu? Bu süreç sizin için nasıl işliyor?",
  "8. Türkiye'de oyun lokalizasyonu sektörünü nasıl değerlendiriyorsunuz? Sizce gelişime açık alanlar neler?",
  "9. Çevirmenlik dışında sizi besleyen, ilham veren hobileriniz ve ilgi alanlarınız var mı?",
  "10. Bundan 5 yıl öncesine gidebilme şansınız olsa, kendinize ne söylemek isterdiniz?",
];

function renderLineWithLinks(line) {
  const linkRegex = /<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[1]}
        style={{
          color: "#2563EB",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {match[2]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < line.length) {
    parts.push(line.slice(lastIndex));
  }
  return parts.length > 0 ? parts : line;
}

function renderContentWithStyledSubheadings(content) {
  // Satır satır ayır
  const lines = content.split(/\n+/);
  let listBuffer = [];
  const elements = [];

  function normalize(str) {
    // Tırnak işaretlerini, ters eğik çizgileri ve boşlukları temizleyerek normalize et
    return str.replace(/[\s\'"\\\\]/g, "").toLowerCase();
  }

  function flushList() {
    if (listBuffer.length > 0) {
      elements.push(
        <ul style={{ margin: "16px 0 16px 24px" }}>
          {listBuffer.map((item, idx) => (
            <li
              key={idx}
              style={{
                fontSize: "18px",
                color: "#6B7280",
                marginBottom: 6,
                lineHeight: "28px",
              }}
            >
              {item.replace(/^\*\s?/, "")}
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  }

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("* ") || trimmed.startsWith("*")) {
      listBuffer.push(trimmed);
      return;
    } else {
      flushList();
    }
    // Normalize both for comparison
    const isSubheading = SUBHEADINGS.some(
      (sh) => normalize(sh) === normalize(trimmed)
    );
    if (isSubheading) {
      // Escape karakterlerini temizle
      const cleanedTrimmed = trimmed.replace(/\\\"/g, '"');
      elements.push(
        <span
          key={"sh-" + idx}
          style={{
            color: "#000",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0.28px",
            display: "block",
            margin: "32px 0 12px 0",
          }}
        >
          {cleanedTrimmed}
        </span>
      );
    } else if (trimmed === "") {
      elements.push(<br key={idx} />);
    } else {
      elements.push(
        <span
          key={idx}
          style={{
            color: "#6B7280",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "-0.22px",
            display: "block",
            marginBottom: 8,
          }}
        >
          {renderLineWithLinks(line)}
        </span>
      );
    }
  });
  flushList();
  return elements;
}

const BlogAlt = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // URL'den gelen id'ye göre blog verisini bul
  const blog = blogData.find((blog) => blog.id === parseInt(id)) || blogData[0];

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "1148px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        {/* Geri Butonu */}
        <div
          style={{
            width: "70px",
            height: "24px",
            borderRadius: "32px",
            background: `url(${back})`,
            boxSizing: "border-box",
            flexShrink: "0",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        ></div>

        {/* Okuma Süresi Bilgisi */}
        <div
          style={{
            borderRadius: "40px",
            border: "1px dashed #D7ECFF",
            background: "rgba(255, 255, 255, 0.40)",
            boxShadow:
              "0px -4px 12px 0px #FFF inset, 0px 4px 7.7px -2px rgba(170, 215, 255, 0.50)",
            padding: "8px 12px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              color: "#181818",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "-0.084px",
            }}
          >
            {blog.readTime}
          </span>
        </div>

        {/* Başlık */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "56px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "64px",
              letterSpacing: "-0.616px",
            }}
          >
            {blog.title}
          </span>
        </div>

        {/* Resim */}
        <img
          src={blog.cover}
          alt={blog.title}
          style={{
            display: "block",
            width: "100%",
            maxWidth: "1148px",
            height: "696px",
            borderRadius: "32px",
            border: "2px solid var(--gray-200, #E5E7EB)",
            boxSizing: "border-box",
            flexShrink: "0",
            marginBottom: 48,
          }}
        />

        {/* İçerik */}
        <div
          style={{
            width: "100%",
            textAlign: "justify",
          }}
        >
          <div
            style={{
              color: "#000",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              letterSpacing: "-0.108px",
            }}
          >
            {renderContentWithStyledSubheadings(blog.content)}
          </div>
        </div>
      </div>
      {/* Yorum Bölümü */}
      <div
        style={{
          width: "100%",
          maxWidth: "1148px",
          margin: "0 auto 48px auto",
        }}
      >
        <CommentSection />
        <div style={{ height: "10px" }}></div>
        <Comments />
      </div>
      <Footer />
    </>
  );
};

export default BlogAlt;
