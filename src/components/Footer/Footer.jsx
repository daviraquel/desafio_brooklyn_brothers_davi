import instaIcon from "../../img/icons/instaIcon.svg";
import ulabsLogo from "../../img/logos/ulabsLogo.png";
import "./Footer.css";

import { footerLinks } from "../../utils/utils";

export const Footer = () => {
  return (
    <footer>
      <ul>
        {footerLinks.map((item, index) => (
          <li key={index}>
            <a href={item.send}>{item.text}</a>
          </li>
        ))}
      </ul>
      <div>
        <a
          href="https://www.instagram.com/intibiome/"
          target="_blank"
          rel="noreferrer"
          id="instaLink"
        >
          <img src={instaIcon} alt="Link to Instagram page" />
        </a>
        <img
          className="logo"
          id="footerLogo"
          src={ulabsLogo}
          alt="Intibiome: co-developed with gynaecologists"
        />
      </div>
    </footer>
  );
};
