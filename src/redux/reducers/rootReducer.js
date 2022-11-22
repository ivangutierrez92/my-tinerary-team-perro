import cityReducer from "./cityReducer";
import hotelReducer from "./hotelReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";import myTinerariesReducer from "./myTinerariesReducer";

const rootReducer = {
  city: cityReducer,
  hotel: hotelReducer,
  myCities: myCitiesReducer,
  myHotels: myHotelsReducer,
  myTineraries: myTinerariesReducer,
};

export default rootReducer;
