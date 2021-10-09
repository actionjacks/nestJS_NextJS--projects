import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndtDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/assets/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex-grow pl-5 items-center md:bottom-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none
          text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="start ur search"
        />
        <SearchIcon className="hidden md:inline-flex cursor-pointer h-8 bg-red-400 text-white rounded-full p-2 md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            onChange={handleSelect}
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of quests
            </h2>
            <UsersIcon className="h-5" />
            <input
              onChange={(e) => setNoOfGuests(e.target.value)}
              value={noOfGuests}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
            />
          </div>
          <div className="flex">
            <button className="flex-grow">Cancel</button>
            <button className="flex-grow">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
