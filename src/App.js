import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Demo from "./Pages/Demo";
import MusicSection from "./components/MusicSection";

function App() {
  return (
    <>
       <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;
