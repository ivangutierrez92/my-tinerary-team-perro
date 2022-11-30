import cityReducer from "./cityReducer";
import hotelReducer from "./hotelReducer";
import reactionsReducer from "./reactionsReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from "./myShowsReducer";
import myTinerariesReducer from "./myTinerariesReducer";
import signInReducer from "./signInReducer";

const rootReducer = {
  city: cityReducer,
  hotel: hotelReducer,
  myCities: myCitiesReducer,
  myHotels: myHotelsReducer,
  myShows: myShowsReducer,
  myTineraries: myTinerariesReducer,
  signIn: signInReducer,
  reactions: reactionsReducer,

};

export default rootReducer;
