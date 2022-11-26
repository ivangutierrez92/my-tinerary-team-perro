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
import MyEditHotels from "./pages/MyEditHotels";
import MyShows from "./pages/MyShows";
import MyEditShows from "./pages/MyEditShows";
import MyTineraries from "./pages/MyTineraries";
import EditMyTinerary from "./pages/EditMyTinerary";
import UpdateProfile from "./pages/UpdateProfile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import signInActions from "./redux/actions/signInActions";
import ProtectedRoute from "./components/ProtectedRoute";
import NewItinerary from "./pages/NewItinerary";
function App() {
  let user = useSelector(store => store.signIn);
  let dispatch = useDispatch();
  let { resendData } = signInActions;
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch(resendData(token.token.user));
    }
  }, []);
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute isAllowed={!user.logged} redirect="/" />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/city/:city" element={<City />} />
        <Route path="/hotel/:id" element={<Hotel />} />

        <Route element={<ProtectedRoute isAllowed={user.role === "admin"} redirect="/signin" />}>
          <Route path="/mycities" element={<MyCities />} />
          <Route path="/mycities/:city" element={<EditMyCity />} />
          <Route path="/newcity" element={<NewCity />} />
          <Route path="/newhotel" element={<NewHotel />} />
          <Route path="/myHotels" element={<MyHotels />} />
          <Route path="/myHotels/:hotel" element={<MyEditHotels />} />
        </Route>

        <Route
          element={<ProtectedRoute isAllowed={user.role === "user" || user.role === "admin"} redirect="/signin" />}
        >
          <Route path="/profile" element={<UpdateProfile />}/>
          <Route path="/mytineraries" element={<MyTineraries />} />
          <Route path="/mytineraries/new" element={<NewItinerary />}/>
          <Route path="/mytineraries/:itinerary" element={<EditMyTinerary />} />
          <Route path="/myShows" element={<MyShows />} />
          <Route path="/myShows/:show" element={<MyEditShows />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
