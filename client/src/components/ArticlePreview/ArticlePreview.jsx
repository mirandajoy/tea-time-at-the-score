import "./ArticlePreview.scss";
import { Link } from "react-router-dom";

function ArticlePreview({ article }) {
  return (
    <div className="preview">
      <img
        src={`http://localhost:8080${article.imageURL}`}
        className="preview__image"
      />
      <div className="preview__content">
        <h2 className="header header--secondary preview__title">
          {article.title}
        </h2>
        <p className="body body--light body--small">{article.preview}</p>
        <Link className="preview__link">Read More</Link>
      </div>
    </div>
  );
}

export default ArticlePreview;
