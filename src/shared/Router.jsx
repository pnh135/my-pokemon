import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import Details from "../pages/Details";

const Router = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Dex" element={<Dex/>} />
                <Route path="/Details" element={<Details/>}/>
            </Routes>
            
        </BrowserRouter>
     );
}
 
export default Router;