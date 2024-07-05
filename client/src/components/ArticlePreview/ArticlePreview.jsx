import "./ArticlePreview.scss";
import { Link } from "react-router-dom";
import chat from "../../assets/icons/chat.svg";
import thumbs_up from "../../assets/icons/thumbs_up.svg";

function ArticlePreview({ article }) {
  return (
    <li className="preview">
      <div className="preview__image-container">
        <div className="preview__league-tag">NBA</div>
        <img
          src={`http://localhost:8080${article.imageURL}`}
          className="preview__image"
        />
      </div>
      <div className="preview__content">
        <h2 className="header header--secondary preview__title">
          {article.title}
        </h2>
        <p className="body body--light body--small">{article.preview}</p>
      </div>
      <div className="preview__action-container">
        <div className="preview__icon-wrapper">
          <div className="preview__icon-container">
            <img className="preview__icon" src={chat} />
            <span className="body body--micro">
              {article.comments} comments{" "}
            </span>
          </div>
          <div className="preview__icon-container">
            <img className="preview__icon" src={thumbs_up} />
            <span className="body body--micro">{article.likes} Likes</span>
          </div>
        </div>
        <Link to="/article" className="preview__link">
          Read More
        </Link>
      </div>
    </li>
  );
}

export default ArticlePreview;
