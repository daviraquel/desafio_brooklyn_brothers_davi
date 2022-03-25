import "./IconSection.css";

import { icons } from "../../utils/utils";

export const IconSection = () => {
  return (
    <section id="iconSection">
      {icons.map((item) => (
        <img className="icon" src={item.img} alt={item.alt} id={item.alt} />
      ))}
    </section>
  );
};
