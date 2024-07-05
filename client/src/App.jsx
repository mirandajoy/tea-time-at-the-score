import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LiveVideo from "./components/LiveVideo/LiveVideo";
import HomePage from "./pages/HomePage/HomePage";
import StylesTemp from "./pages/StylesTemp/StylesTemp"; {/* REMOVE PRIOR TO DEPLOYMENT */}
import PageLayout from "./components/PageLayout/PageLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <LiveVideo />
        <PageLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:athleteId" element={<HomePage />} />
            <Route path="/styles" element={<StylesTemp />} /> {/* REMOVE PRIOR TO DEPLOYMENT */}
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
