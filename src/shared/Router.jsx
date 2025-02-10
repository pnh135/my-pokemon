import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import Details from "../pages/Details";

const Router = () => {
  return (
    // 라우터에 따라 보이는 페이지가 달라지도록 설정
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
        <Route path="/Details/" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
