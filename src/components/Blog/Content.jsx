import React from "react";
import BlogRow from "./BlogRow";
import oglan from "../../assets/images/oglan.svg";
import oo from "../../assets/images/oo.svg";

const Content = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        alignSelf: "stretch",
        width: "956px",
        height: "auto",
        boxSizing: "border-box",
      }}
    >
      {/* İlk Satır */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          alignSelf: "stretch",
          boxSizing: "border-box",
        }}
      >
        <BlogRow
          blogId={1}
          title="Çevirmenlik Nedir Ne Değildir"
          description="Çevirmenliğin temel tanımı ve kapsamı."
          image={oglan}
          readTime="10 minutes read"
        />
        <BlogRow
          blogId={2}
          title="Kariyerinizin Her Adımında Sizi Artıya Geçirecek Beceriler"
          description="Çevirmenlikte öne çıkmanızı sağlayacak beceriler."
          image={oo}
          readTime="8 minutes read"
        />
        <BlogRow
          blogId={3}
          title="Freelance Çalışmanın Avantajları ve Zorlukları"
          description="Serbest çevirmenliğin artıları ve eksileri."
          image={oglan}
          readTime="7 minutes read"
        />
      </div>
      {/* İkinci Satır */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          alignSelf: "stretch",
        }}
      >
        <BlogRow
          blogId={4}
          title="Makine Çevirisi Vs. İnsan Çevirisi Hangisi Daha İyi"
          description="Makine ve insan çevirisinin karşılaştırılması."
          image={oo}
          readTime="9 minutes read"
        />
        <BlogRow
          blogId={5}
          title="Reklam Sloganlarında Kültürel Çatışmalar Küçük Hatalar, Büyük Sonuçlar"
          description="Reklam çevirilerinde kültürel farklılıkların etkisi."
          image={oglan}
          readTime="8 minutes read"
        />
        <BlogRow
          blogId={6}
          title="Çeviride Yerelleştirme ve Yabancılaştırma Film İsimleri Çevirisi Üzerine Bir Bakış"
          description="Film isimlerinde yerelleştirme ve yabancılaştırma örnekleri."
          image={oo}
          readTime="10 minutes read"
        />
      </div>
    </div>
  );
};

export default Content;
