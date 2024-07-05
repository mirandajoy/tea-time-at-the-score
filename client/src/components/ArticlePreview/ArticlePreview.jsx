import "./ArticlePreview.scss";
import { Link } from "react-router-dom";

function ArticlePreview({article}) {
  return (
    <div className="preview">
        <h2 className="header header--secondary">{article.title}</h2>
    </div>
  );
}

export default ArticlePreview;
