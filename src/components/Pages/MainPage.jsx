import { Header } from "../Header/Header";
import { BannerSection } from "../BannerSection/BannerSection";
import { TextSection } from "../TextSection/TextSection";
import { IconSection } from "../IconsSection/IconsSection";

import { titles, content } from "../../utils/utils";
import { SliderSection } from "../SliderSection/SliderSection";
import { Footer } from "../Footer/Footer";

export const MainPage = () => {
  return (
    <>
      <Header />
      <BannerSection id="firstBanner" />
      <TextSection
        title={titles.philosophy}
        content={content.philosophy}
        id="philosophy"
      />
      <IconSection />
      <TextSection title={titles.tech} content={content.tech} id="tech" />
      <SliderSection title={titles.products} id="products" />
      <BannerSection id="secondBanner" />
      <SliderSection title={titles.upToDate} id="articles" />
      <Footer />
    </>
  );
};
