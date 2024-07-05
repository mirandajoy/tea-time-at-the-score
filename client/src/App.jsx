import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import StylesTemp from "./pages/StylesTemp/StylesTemp"; {/* REMOVE PRIOR TO DEPLOYMENT */}
import PageLayout from "./components/PageLayout/PageLayout";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:athleteId" element={<HomePage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/styles" element={<StylesTemp />} /> {/* REMOVE PRIOR TO DEPLOYMENT */}
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
