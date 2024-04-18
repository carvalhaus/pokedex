import { Link } from "react-router-dom";

import favorites_off from "/favorites-off.svg";
import favorites_on from "/favorites-on.svg";
import menu_off from "/menu-off.svg";
import menu_on from "/menu-on.svg";
import pokedex_off from "/pokedex-off.svg";
import pokedex_on from "/pokedex-on.svg";
import regions_off from "/regions-off.svg";
import regions_on from "/regions-on.svg";

function Nav({ url }) {
  console.log(url);

  let icons = {
    pokedex_icon: pokedex_on,
    regions_icon: regions_off,
    favorites_icon: favorites_off,
    menu_icon: menu_off,
  };

  switch (url.pathname) {
    case "/regions":
      icons.pokedex_icon = pokedex_off;
      icons.regions_icon = regions_on;
      break;
    case "/favorites":
      icons.pokedex_icon = pokedex_off;
      icons.favorites_icon = favorites_on;
      break;
    case "/menu":
      icons.pokedex_icon = pokedex_off;
      icons.menu_icon = menu_on;
      break;
    default:
      break;
  }

  return (
    <nav className="fixed bottom-0 h-20 flex align-middle justify-center w-full border-t-2 border-gray-300 gap-2 px-8 py-1">
      <Link to={"/"} className="content-center">
        <img alt="Pokedex icon" src={icons.pokedex_icon} className="h-full" />
      </Link>
      <Link to={"/regions"} className="content-center">
        <img alt="Location icon" src={icons.regions_icon} className="h-full" />
      </Link>
      <Link to={"/favorites"} className="content-center">
        <img
          alt="Favorite icon"
          src={icons.favorites_icon}
          className="h-full"
        />
      </Link>
      <Link to={"/menu"} className="content-center">
        <img alt="User menu icon" src={icons.menu_icon} className="h-full" />
      </Link>
    </nav>
  );
}

export default Nav;
