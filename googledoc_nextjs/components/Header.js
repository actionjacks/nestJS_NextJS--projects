import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession, signOut } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="blue"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3x1" />
      </Button>
      <Icon name="description" size="3x1" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2x1">Docs</h1>

      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="seatch" size="3x1" color="gray" />
        <input
          type="text"
          placeholder="search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3x1" color="gray" />
      </Button>

      <img
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        // onClick={signOut}
        // src={session?.user.image}
        src="https://wpcdn.pl/kardiolo-forum/monthly_2018_06/J_member_7361.png"
        alt=""
      />
    </header>
  );
}

export default Header;
