import "./TextSection.css";

export const TextSection = ({ title, content, id }) => {
  const lines = content.split("\n");

  return (
    <section className="textSection" id={id}>
      <h3 className="h3">{title}</h3>
      {lines.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </section>
  );
};
