import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./styles/App.css";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn"
import Hotel from "./pages/Hotel";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
