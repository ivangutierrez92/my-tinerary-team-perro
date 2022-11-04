import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./styles/App.css";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
