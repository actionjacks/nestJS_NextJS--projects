import Contact from "./Contact";

import {
  SearchIcon,
  DotsCircleHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

const contacts = [
  { src: "/src1", name: "name1" },
  { src: "/ssrc2", name: "name2" },
];

function Widget() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contact</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <DotsCircleHorizontalIcon className="h-6" />
          <SearchIcon className="h-6" />
        </div>
      </div>

      {contacts &&
        contacts.map((contact) => (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        ))}
    </div>
  );
}

export default Widget;
