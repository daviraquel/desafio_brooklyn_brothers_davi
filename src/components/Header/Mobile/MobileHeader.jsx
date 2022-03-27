import { useState } from "react";

import "./MobileHeader.css";
import mobileHeaderLogo from "../../../img/logos/mobileHeaderLogo.png";
import menuIcon from "../../../img/icons/menuIcon.png";
import cancelIcon from "../../../img/icons/cancelIcon.png";
import searchIcon from "../../../img/icons/searchIcon.png";

import { MobileDropDownMenu } from "./MobileDropDownMenu";

export const MobileHeader = () => {
  const [menuOn, setMenuOn] = useState(false);

  const handleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <header id="mobileHeader">
      <button data-testid="mobileDropDownButton" onClick={handleMenu}>
        <img src={menuOn ? cancelIcon : menuIcon} alt="drop-down menu" />
      </button>
      <img
        className="logo"
        src={mobileHeaderLogo}
        alt="Intibiome: co-developed with gynaecologists"
      />
      <button>
        <img src={searchIcon} alt="search" />
      </button>
      {menuOn ? <MobileDropDownMenu handleMenu={handleMenu} /> : null}
    </header>
  );
};
