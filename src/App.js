import { Route, Routes } from "react-router-dom";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./styles/App.css";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import City from "./pages/City";
import Hotel from "./pages/Hotel";
import NewCity from "./pages/NewCity";
import Hotels from "./pages/Hotels";
import NewHotel from "./pages/NewHotel";
import Layout from "./layouts/Layout";
import MyCities from "./pages/MyCities";
import EditMyCity from "./pages/EditMyCity";
import MyHotels from "./pages/MyHotels";
import MyEditHotels from "./pages/MyEditHotels"

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/mycities" element={<MyCities />} />
        <Route path="/mycities/:city" element={<EditMyCity />} />
        <Route path="/city/:city" element={<City />} />
        <Route path="/newcity" element={<NewCity />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/newhotel" element={<NewHotel />} />
        <Route path="/myHotels" element={<MyHotels />} />
        <Route path="/myHotels/:hotel" element={<MyEditHotels />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
// http://localhost:3000/hotel/ho1
