import cityReducer from "./cityReducer";
import hotelReducer from "./hotelReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from "./myShowsReducer";
import myTinerariesReducer from "./myTinerariesReducer";
import signInReducer from "./signInReducer";
import commentsReducer from "./commentsReducer";


const rootReducer = {
  city: cityReducer,
  hotel: hotelReducer,
  myCities: myCitiesReducer,
  myHotels: myHotelsReducer,
  myShows: myShowsReducer,
  myTineraries: myTinerariesReducer,
  signIn: signInReducer,
  comments: commentsReducer,
};

export default rootReducer;
