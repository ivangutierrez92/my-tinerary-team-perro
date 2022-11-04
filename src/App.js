import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./styles/App.css";
import NotFound from "./pages/NotFound";
// import SignIn from "./pages/SignUp"
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Routes path="/sigin" element={<SignIn />}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
