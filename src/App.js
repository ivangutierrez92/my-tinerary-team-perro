import { Route, Routes } from "react-router-dom";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
    </>
  );
}

export default App;
