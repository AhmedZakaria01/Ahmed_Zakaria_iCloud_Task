import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Pillar from "./Components/Pillar/pillar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/pillar" element={<Pillar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
