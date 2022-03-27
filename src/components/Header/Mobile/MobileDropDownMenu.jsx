import "./MobileDropDownMenu.css";
import { mobileDropDownLinks } from "../../../utils/utils";

import { DesktopHeaderLink } from "../Desktop/DesktopHeaderLink";

export const MobileDropDownMenu = ({ handleMenu }) => {
  return (
    <ul id="dropDownMenu" data-testid="mobileDropDownMenu">
      {mobileDropDownLinks.map((item, index) => (
        <li key={index} onClick={handleMenu}>
          <DesktopHeaderLink send={item.send} text={item.text} />
        </li>
      ))}
    </ul>
  );
};
