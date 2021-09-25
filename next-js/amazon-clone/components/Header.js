import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../src/slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  //get from redux
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center p-1 bg-black flex-grow py-2">
        <div
          onClick={() => router.push("/")}
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          <Image
            src="/logo.png"
            width={70}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
            placeholder="search"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/*  */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* LOGIN */}
          <div
            onClick={!session ? signIn : signOut}
            className="link text-white"
          >
            <p>{session ? `Hello ${session.user.name}` : "Sign in "}</p>
            <p className="font-extrabold md:text-sm"> Account & Lists</p>
          </div>
          <div className="link">
            <p>returns</p>
            <p className="font-extrabold md:text-sm"> orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items?.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex space-x-3 p-2 pl-6 items-center bg-gray-800 text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-block">Electronic</p>
        <p className="link hidden lg:inline-block">food</p>
        <p className="link hidden lg:inline-block">Prime</p>
        <p className="link hidden lg:inline-block">Health</p>
        <p className="link hidden lg:inline-block">Shopper</p>
      </div>
    </header>
  );
}

export default Header;
