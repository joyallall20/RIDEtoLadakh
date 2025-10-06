import React, { createContext, useState } from "react";

export const DateSelectorContext = createContext();

// Context Provider
export const DateSelectorProvider = ({ children }) => {
 const [dateForm, setDateForm] = useState({
  startDate: "",
  endDate: "",
  rooms: 1,   
  guests: 1   
});


  return (
    <DateSelectorContext.Provider value={{ dateForm, setDateForm }}>
      {children}
    </DateSelectorContext.Provider>
  );
};
