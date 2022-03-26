import "./MobileHeader.css";
import mobileHeaderLogo from "../../img/logos/mobileHeaderLogo.png";
import menuIcon from "../../img/icons/menuIcon.png";
import searchIcon from "../../img/icons/searchIcon.png";
import { DropDownMenu } from "./DropDownMenu";
import { useState } from "react";

export const MobileHeader = () => {
  const [menuOn, setMenuOn] = useState(false);

  const handleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <header id="mobileHeader">
      <button onClick={handleMenu}>
        <img src={menuIcon} alt="drop-down menu" />
      </button>
      <img
        className="logo"
        src={mobileHeaderLogo}
        alt="Intibiome: co-developed with gynaecologists"
      />
      <button>
        <img src={searchIcon} alt="search" />
      </button>
      {menuOn ? <DropDownMenu handleMenu={handleMenu} /> : null}
    </header>
  );
};
