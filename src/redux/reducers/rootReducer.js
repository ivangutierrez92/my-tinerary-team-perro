import cityReducer from "./cityReducer";
import hotelReducer from "./hotelReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from "./myShowsReducer";
import myTinerariesReducer from "./myTinerariesReducer";

const rootReducer = {
  city: cityReducer,
  hotel: hotelReducer,
  myCities: myCitiesReducer,
  myHotels: myHotelsReducer,
  myShows: myShowsReducer,
  myTineraries: myTinerariesReducer,
};

export default rootReducer;
