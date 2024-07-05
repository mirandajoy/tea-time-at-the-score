import "./NewsList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import LiveVideo from "../../components/LiveVideo/LiveVideo";

function NewsList() {
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
    <aside>
      <LiveVideo />
      <h3 className="header header--bold news__header">
        Top Insider Articles
      </h3>
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
    </aside>
  );
}

export default NewsList;
