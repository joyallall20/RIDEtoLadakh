import React from "react";
import { Link } from "react-router-dom";
import { Bike, Hotel } from "lucide-react";

const selectionOptions = [
  {
    title: "Book Your Hotel",
    path: "/hotels",
    icon: Hotel,
  },
];

const HompageSelectButton = () => {
  return (
    <div className="fixed bottom-10 left-0 sm:mb-70 lg:mb-0 w-full flex justify-center z-40 pointer-events-none">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl pointer-events-auto">
        {selectionOptions.map((option, index) => {
          const IconComponent = option.icon;

          return (
            <Link
              key={index}
              to={option.path}
              className={`
                flex items-center justify-center
                flex-1 p-2
                text-lg font-semibold text-white
                rounded-2xl shadow-lg
                backdrop-blur-xl bg-white/20 border border-white/40
                hover:bg-white/30 hover:scale-105
                transition-all duration-300 ease-in-out
                hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                cursor-pointer no-underline text-center
              `}
            >
              <IconComponent className="w-5 h-5 mr-2" />
              {option.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HompageSelectButton;
