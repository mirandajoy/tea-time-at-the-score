import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const [athleteList, setAthleteList] = useState(null);
  const [lifestyleNewsList, setLifestyleNewsList] = useState(null);
  const [upcomingEventsList, setUpcomingEventsList] = useState(null);
  const [liveEventsList, setLiveEventsList] = useState(null);

  const { athleteId } = useParams();

  async function getAthletes() {
    try {
      const res = await axios.get("http://localhost:8080/api/articles");
      setAthleteList(res.data.athletes);
    } catch (error) {
      console.error(error);
    }
  }

  async function getSingleAthlete(athleteId) {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/articles/${athleteId}`
      );
      setLifestyleNewsList(res.data.lifestyleNews);
      setUpcomingEventsList(res.data.upcomingEvents);
      setLiveEventsList(res.data.liveEvents);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAthletes();
    getSingleAthlete(athleteId || 1);
  }, [athleteId]);

  if (lifestyleNewsList === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="header header--primary news__page-header">The Score Insider</h1>
      <div className="news__filter-container">
        {athleteList &&
          athleteList.map((athlete) => {
            return (
              <Link
                to={`/${athlete.id}`}
                className="body body--light news__filter"
                key={athlete.id}
              >
                {athlete.name}
              </Link>
            );
          })}
      </div>
      <h3 className="header header--bold news__article-header">Lifestyle News</h3>
      <ul className="news__article-list">
        {lifestyleNewsList &&
          lifestyleNewsList.map((article) => {
            return (
              <li key={article.id}>
                <ArticlePreview article={article} />
              </li>
            );
          })}
      </ul>
      <h3 className="header header--bold news__article-header">Upcoming Events</h3>
      <ul className="news__article-list">
        {upcomingEventsList &&
          upcomingEventsList.map((article) => {
            return (
              <li key={article.id}>
                <ArticlePreview article={article} />
              </li>
            );
          })}
      </ul>
      <h3 className="header header--bold news__article-header">Live Events</h3>
      <ul className="news__article-list">
        {liveEventsList &&
          liveEventsList.map((article) => {
            return (
              <li key={article.id}>
                <ArticlePreview article={article} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default HomePage;
