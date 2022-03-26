import desktopHeaderLogo from "../../img/logos/desktopHeaderLogo.png";
import searchIcon from "../../img/icons/searchIcon.png";
import "./DesktopHeader.css";

import { headerLinks } from "../../utils/utils";

import { DesktopHeaderLink } from "./DesktopHeaderLink";

export const DesktopHeader = () => {
  return (
    <header id="desktopHeader">
      <div>
        <img
          className="logo"
          id="desktopHeaderLogo"
          src={desktopHeaderLogo}
          alt="Intibiome: co-developed with gynaecologists"
        />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      <ul>
        {headerLinks.map((item, index) => (
          <li key={index}>
            <DesktopHeaderLink
              send={item.send}
              text={item.text}
              icon={item.icon}
            />
          </li>
        ))}
      </ul>
    </header>
  );
};
