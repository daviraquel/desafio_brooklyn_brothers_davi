export const ArticleCard = ({ className, contentText, img, alt }) => {
  return (
    <div className={className}>
      <img src={img} alt={alt} />
      <p>{contentText}</p>
    </div>
  );
};
