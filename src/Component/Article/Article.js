import React from "react";
import "./Article.css";

const Article = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Article;
