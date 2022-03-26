import "./IconSection.css";

import { icons } from "../../utils/utils";

export const IconSection = () => {
  return (
    <section id="iconSection">
      {icons.map((item, index) => (
        <img
          key={item.alt}
          className="icon"
          src={item.img}
          alt={item.alt}
          id={item.alt}
        />
      ))}
    </section>
  );
};
