export const ArticleCard = ({ contentText, img, alt }) => {
  return (
    <div>
      <img src={img} alt={alt} />
      <p>{contentText}</p>
    </div>
  );
};
