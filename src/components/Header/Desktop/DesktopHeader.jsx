import desktopHeaderLogo from "../../../img/logos/desktopHeaderLogo.png";
import searchIcon from "../../../img/icons/searchIcon.png";
import "./DesktopHeader.css";

import { headerLinks, desktopDropDownLinks } from "../../../utils/utils";

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
      <ul id="mainLinks">
        {headerLinks.map((item, index) => (
          <li id={item.id} key={index}>
            <DesktopHeaderLink
              send={item.send}
              text={item.text}
              icon={item.icon}
            />
          </li>
        ))}

        <ul id="aboutDropDown" className="desktopDropdown">
          {desktopDropDownLinks.about.map((item, index) => (
            <li key={index}>
              <DesktopHeaderLink send={item.send} text={item.text} />
            </li>
          ))}
        </ul>
        <ul id="productsDropDown" className="desktopDropdown">
          {desktopDropDownLinks.products.map((item, index) => (
            <li key={index}>
              <DesktopHeaderLink send={item.send} text={item.text} />
            </li>
          ))}
        </ul>
        <ul id="intimateDropDown" className="desktopDropdown">
          {desktopDropDownLinks.intimate.map((item, index) => (
            <li key={index}>
              <DesktopHeaderLink send={item.send} text={item.text} />
            </li>
          ))}
        </ul>
      </ul>
    </header>
  );
};
