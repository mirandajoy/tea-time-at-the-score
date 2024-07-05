import "./HomePage.scss";
import hero from '../../assets/images/hero.png';
import mainArticles from '../../assets/images/main-articles.png';
import stats from '../../assets/images/stats.png';

function HomePage() {
  return (
    <>
      <img src={stats} className="home__img"/>
      <img src={hero} className="home__img"/>
      <img src={mainArticles} className="home__img"/>
    </>
  );
}

export default HomePage;
