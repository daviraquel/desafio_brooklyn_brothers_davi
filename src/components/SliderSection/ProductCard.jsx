export const ProductCard = ({ contentText, buttonText, img, alt }) => {
  return (
    <div>
      <img src={img} alt={alt} />
      <p>{contentText}</p>
      <button>{buttonText}</button>
    </div>
  );
};
