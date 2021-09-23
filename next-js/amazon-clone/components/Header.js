import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center p-1 bg-black flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/logo.png"
            width={70}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400">
          <input type="text" placeholder="search" />
          <SearchIcon className="h-12 p-4" />
        </div>
      </div>
      {/*  */}
      <div></div>
    </header>
  );
}

export default Header;
