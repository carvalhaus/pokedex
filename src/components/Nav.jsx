import { Link } from "react-router-dom";

import favorites_off from "/favorites-off.svg";
import favorites_on from "/favorites-on.svg";
import menu_off from "/menu-off.svg";
import menu_on from "/menu-on.svg";
import pokedex_off from "/pokedex-off.svg";
import pokedex_on from "/pokedex-on.svg";
import regions_off from "/regions-off.svg";
import regions_on from "/regions-on.svg";

function Nav() {
  return (
    <nav className="fixed bottom-0 h-20 flex align-middle justify-center w-full border-t-2 border-gray-200 gap-2 px-8 py-1">
      <Link className="content-center">
        <img src={pokedex_on} className="h-full" />
      </Link>
      <Link className="content-center">
        <img src={regions_off} className="h-full" />
      </Link>
      <Link className="content-center">
        <img src={favorites_off} className="h-full" />
      </Link>
      <Link className="content-center">
        <img src={menu_off} className="h-full" />
      </Link>
    </nav>
  );
}

export default Nav;
