import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artists from "./Components/All_Artists/Artists";
import ArtistDetails from "./Components/Artist_Details/ArtistDetails";
import Error from "./Components/NotFound_Page/Error";
import Home from "./Components/Landing_Page/Home";
import Nav from "./Components/Header/Nav";
function App() {
  return (
    <div className="App">
           
   <BrowserRouter> 
   <Nav/>     
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/artists" element={<Artists/>}/>
                        <Route path="/artists/:id" element={<ArtistDetails/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
             
            </BrowserRouter>
    </div>
  );
}

export default App;
