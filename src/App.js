import { Route, Routes } from "react-router-dom";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./styles/App.css";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import City from "./pages/City";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/city/:city" element={<City />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
