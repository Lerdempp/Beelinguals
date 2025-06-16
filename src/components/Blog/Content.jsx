import React from "react";
import BlogRow from "./BlogRow";
import { blogData } from "../../data/blogData";

const Content = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        justifyContent: "center",
        gap: "24px",
        alignSelf: "stretch",
        boxSizing: "border-box",
      }}
    >
      {blogData.map((blog) => (
        <BlogRow
          blogId={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.cover}
          readTime={blog.readTime}
        />
      ))}
    </div>
  );
};

export default Content;
