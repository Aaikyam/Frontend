import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Demo from "./Pages/Demo";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
