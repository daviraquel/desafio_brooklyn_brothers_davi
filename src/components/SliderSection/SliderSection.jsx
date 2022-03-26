import "./SliderSection.css";
import { products, articles } from "../../utils/utils";

import { ArticleCard } from "./ArticleCard";
import { ProductCard } from "./ProductCard";

export const SliderSection = ({ title, id }) => {
  return (
    <section id={id} className="sliderSection">
      <h3>{title}</h3>
      <div className="sliderContainer">
        {id === "products"
          ? products.map((item, index) => (
              <ProductCard
                key={index}
                className="sliderItem"
                contentText={item.contentText}
                buttonText={item.buttonText}
                buttonColor={item.buttonColor}
                img={item.img}
                alt={item.alt}
              />
            ))
          : articles.map((item, index) => (
              <ArticleCard
                key={index}
                className="sliderItem"
                contentText={item.contentText}
                img={item.img}
                alt={item.alt}
              />
            ))}
      </div>
      {id === "products" ? null : <button id="buttonMore">see more</button>}
    </section>
  );
};
