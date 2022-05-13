import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Mainpage from "./pages/Mainpage/Mainpage";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/konaklama" element={<List/>} />
        <Route path="/" element={<Mainpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
