import NewsList from "../NewList/NewsList";
import "./PageLayout.scss";

function PageLayout({ children }) {
  return (
    <main className="pg-layout">
      <div className="pg-layout__main">{children}</div>
      <div className="pg-layout__sidebar">
        <NewsList />
      </div>
    </main>
  );
}

export default PageLayout;
