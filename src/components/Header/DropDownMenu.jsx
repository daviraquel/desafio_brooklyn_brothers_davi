import "./DropDownMenu.css";
import { dropDownLinks } from "../../utils/utils";

import { DesktopHeaderLink } from "./DesktopHeaderLink";

export const DropDownMenu = ({ handleMenu }) => {
  return (
    <ul id="dropDownMenu">
      {dropDownLinks.map((item) => (
        <li onClick={handleMenu}>
          <DesktopHeaderLink send={item.send} text={item.text} />
        </li>
      ))}
    </ul>
  );
};
