import "./NewsList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import LiveVideo from "../../components/LiveVideo/LiveVideo";
import banner from '../../assets/images/banner.png'

function NewsList() {
  const [articleList, setArticleList] = useState(null);
  const featureArticle = {
    title:
      "DeMar DeRozan makes surprise cameo in Kendrick Lamar’s ‘Not Like Us’",
    preview:
      "One of the NBA’s most intriguing remaining free agents is living it up...",
    imageURL: "/kendrick_derozan.png",
  };

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
    <aside className="news">
      <div className="news__features">
        <img src={banner} className="news__banner"/>
        <LiveVideo />
      </div>
      <h3 className="header header--bold header--uppercase news__header">
        Top Insider Articles
      </h3>
      <ul className="news__article-list">
        <ArticlePreview article={featureArticle} />
        {articleList &&
          articleList.map((article) => {
            return <ArticlePreview article={article} key={article.id} />;
          })}
      </ul>
    </aside>
  );
}

export default NewsList;
