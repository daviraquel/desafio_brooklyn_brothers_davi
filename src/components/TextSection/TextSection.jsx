import "./TextSection.css";

export const TextSection = ({ title, content, id }) => {
  return (
    <section className="textSection" id={id}>
      <h3 className="h3">{title}</h3>
      <p className="p">{content}</p>
    </section>
  );
};
