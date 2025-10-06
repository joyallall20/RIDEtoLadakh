import React, { useContext } from "react";
import { DateSelectorContext } from "../../Context/DateSelector";
import { NavLink } from "react-router-dom";
import { Users, BedDouble, Calendar } from "lucide-react";

const DateSelector = () => {
  const { dateForm, setDateForm } = useContext(DateSelectorContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDateForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-6 py-4">

        <NavLink
          to="/"
          className="text-3xl border-2 border-black font-extrabold text-gray-900 tracking-wide font-[Playfair_Display]"
        >
          RIDEtoLADAKH
        </NavLink>

       
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
          
          
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <Calendar size={16} /> Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={dateForm.startDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <Calendar size={16} /> End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={dateForm.endDate}
              onChange={handleChange}
              min={dateForm.startDate || new Date().toISOString().split("T")[0]}
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Rooms */}
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <BedDouble size={16} /> Rooms
            </label>
            <select
              name="rooms"
              value={dateForm.rooms}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5].map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <Users size={16} /> Guests
            </label>
            <select
              name="guests"
              value={dateForm.guests}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((guest) => (
                <option key={guest} value={guest}>
                  {guest}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DateSelector;
