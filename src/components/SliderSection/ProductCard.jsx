export const ProductCard = ({
  className,
  contentText,
  buttonText,
  buttonColor,
  img,
  alt,
}) => {
  return (
    <div className={className}>
      <img src={img} alt={alt} />
      <p className="p-large">{contentText}</p>
      <button style={{ backgroundColor: buttonColor }}>{buttonText}</button>
    </div>
  );
};
