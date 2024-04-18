import { Link } from "react-router-dom";

import favorites_off from "/favorites-off.svg";
import favorites_on from "/favorites-on.svg";
import menu_off from "/menu-off.svg";
import menu_on from "/menu-on.svg";
import pokedex_off from "/pokedex-off.svg";
import pokedex_on from "/pokedex-on.svg";
import regions_off from "/regions-off.svg";
import regions_on from "/regions-on.svg";
import { useEffect, useState } from "react";

function Nav({ url }) {
  const [animate, setAnimate] = useState(false);
  const [icons, setIcons] = useState({
    pokedex_icon: pokedex_on,
    regions_icon: regions_off,
    favorites_icon: favorites_off,
    menu_icon: menu_off,
  });

  useEffect(() => {
    handleUptadeIcons(url);

    const timeoutId = setTimeout(() => {
      setAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [url]);

  const handleUptadeIcons = (params) => {
    const updatedIcons = { ...icons };

    switch (params.pathname) {
      case "/regions":
        updatedIcons.pokedex_icon = pokedex_off;
        updatedIcons.regions_icon = regions_on;
        updatedIcons.favorites_icon = favorites_off;
        updatedIcons.menu_icon = menu_off;
        break;
      case "/favorites":
        updatedIcons.pokedex_icon = pokedex_off;
        updatedIcons.regions_icon = regions_off;
        updatedIcons.favorites_icon = favorites_on;
        updatedIcons.menu_icon = menu_off;
        break;
      case "/menu":
        updatedIcons.pokedex_icon = pokedex_off;
        updatedIcons.regions_icon = regions_off;
        updatedIcons.favorites_icon = favorites_off;
        updatedIcons.menu_icon = menu_on;
        break;
      default:
        updatedIcons.pokedex_icon = pokedex_on;
        updatedIcons.regions_icon = regions_off;
        updatedIcons.favorites_icon = favorites_off;
        updatedIcons.menu_icon = menu_off;
        break;
    }

    setIcons(updatedIcons);
    setAnimate(true);
  };

  return (
    <nav className="fixed bottom-0 h-20 flex align-middle justify-center w-full border-t-2 border-gray-300 gap-2 px-8 py-1">
      <Link to={"/"} className="content-center">
        <img
          alt="Pokedex icon"
          src={icons.pokedex_icon}
          className={`h-full ${animate ? "animate-fadeInUp_animantion" : ""}`}
        />
      </Link>
      <Link to={"/regions"} className="content-center">
        <img
          alt="Location icon"
          src={icons.regions_icon}
          className={`h-full ${animate ? "animate-fadeInUp_animantion" : ""}`}
        />
      </Link>
      <Link to={"/favorites"} className="content-center">
        <img
          alt="Favorite icon"
          src={icons.favorites_icon}
          className={`h-full ${animate ? "animate-fadeInUp_animantion" : ""}`}
        />
      </Link>
      <Link to={"/menu"} className="content-center">
        <img
          alt="User menu icon"
          src={icons.menu_icon}
          className={`h-full ${animate ? "animate-fadeInUp_animantion" : ""}`}
        />
      </Link>
    </nav>
  );
}

export default Nav;
