import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const [articleList, setArticleList] = useState(null);

  async function getArticles() {
    try {
      const res = await axios.get("http://localhost:8080/api/articles");
      setArticleList(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);


  return (
    <>
      <h1 className="header header--primary news__page-header">
        The Score Insider
      </h1>
      <h3 className="header header--bold news__article-header">Top Insider Articles</h3>
      <ul className="news__article-list">
        {articleList &&
          articleList.map((article) => {
            return (
              <li key={article.id} className="news__article-list-item">
                <ArticlePreview article={article} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default HomePage;
