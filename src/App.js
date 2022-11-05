import { Route, Routes } from "react-router-dom";
import Cities from "./pages/Cities";
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
        <Route path="/cities" element={<Cities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
