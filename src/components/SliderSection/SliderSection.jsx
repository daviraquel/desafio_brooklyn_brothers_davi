import { products, articles } from "../../utils/utils";

import { ArticleCard } from "./ArticleCard";
import { ProductCard } from "./ProductCard";

export const SliderSection = ({ title, type }) => {
  return (
    <section>
      <h3>{title}</h3>
      {type === "products"
        ? products.map((item) => (
            <ProductCard
              contentText={item.contentText}
              buttonText={item.buttonText}
              img={item.img}
              alt={item.alt}
            />
          ))
        : articles.map((item) => (
            <ArticleCard
              contentText={item.contentText}
              img={item.img}
              alt={item.alt}
            />
          ))}
    </section>
  );
};
