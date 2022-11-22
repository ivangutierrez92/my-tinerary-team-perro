import cityReducer from "./cityReducer";
import hotelReducer from "./hotelReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";
const rootReducer = {
  city: cityReducer,
  hotel: hotelReducer,
  myCities: myCitiesReducer,
  myHotels: myHotelsReducer,
};

export default rootReducer;
