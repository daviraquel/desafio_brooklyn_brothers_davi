import instaIcon from "../../img/icons/instaIcon.svg";
import ulabsLogo from "../../img/logos/ulabsLogo.png";
import "./Footer.css";

//import { footerLinks } from "../../utils/utils";

import { DesktopHeaderLink } from "../Header/DesktopHeaderLink";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <DesktopHeaderLink send="/contact us" text="contact us" />
        </li>
        <div className="spacer"></div>
        <li>
          <DesktopHeaderLink send="/faq" text="faq" />
        </li>
        <div className="spacer"></div>
        <li>
          <DesktopHeaderLink send="/site map" text="site map" />
        </li>
        <div className="spacer"></div>
        <li>
          <DesktopHeaderLink send="/privacy policy" text="privacy policy" />
        </li>
        <div className="spacer"></div>
        <li>
          <DesktopHeaderLink send="/cookies policy" text="cookies policy" />
        </li>
        <div className="spacer"></div>
        <li>
          <DesktopHeaderLink send="/legal notice" text="legal notice" />
        </li>
      </ul>
      <div>
        <img
          className="logo"
          id="footerLogo"
          src={ulabsLogo}
          alt="Intibiome: co-developed with gynaecologists"
        />
        <button>
          <img src={instaIcon} alt="Link to Instagram page" />
        </button>
      </div>
    </footer>
  );
};
