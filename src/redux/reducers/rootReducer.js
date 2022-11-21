import cityReducer from "./cityReducer";
import hotelReducer from "./hotelReducer";
import myCitiesReducer from "./myCitiesReducer";
import myTinerariesReducer from "./myTinerariesReducer";

const rootReducer = {
  city: cityReducer,
  hotel: hotelReducer,
  myCities: myCitiesReducer,
  myTineraries: myTinerariesReducer,
};

export default rootReducer;
