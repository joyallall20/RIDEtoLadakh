import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchHotel, setSearchHotel] = useState("");
  const [searchBikes, setSearchBikes] = useState('');
  const [filterBikes, setFilterBikes]= useState({
      pickuplocation : 'Pick UP Location',
      city:"choose city",
      Enginesize: "",
      Status: "",
      Pricerange: ""
  })
  const [filterHotel, setFilterHotel]= useState({
    location: "",
    rating: "",
    amenities: [],
    pricePerNight: "",
    
  });

  return (
    <SearchContext.Provider value={{ filterHotel, setFilterHotel, searchHotel, setSearchHotel, searchBikes, setSearchBikes, filterBikes, setFilterBikes }}>
      {children}
    </SearchContext.Provider>
  );
};
