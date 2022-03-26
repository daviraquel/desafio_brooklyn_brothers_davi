import arrow from "../../../img/icons/arrow.png";

export const DesktopHeaderLink = ({ send, text, icon }) => {
  return icon === true ? (
    <a href={send} role="tab">
      {text}
      <img src={arrow} alt="down arrow" />
    </a>
  ) : (
    <a href={send}>{text}</a>
  );
};
