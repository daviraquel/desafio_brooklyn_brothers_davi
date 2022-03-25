import { MobileHeader } from "../Headers/MobileHeader";
import { BannerSection } from "../BannerSection/BannerSection";
import { TextSection } from "../TextSection/TextSection";
import { IconSection } from "../IconsSection/IconsSection";

import { titles, content } from "../../utils/utils";
import { SliderSection } from "../SliderSection/SliderSection";

export const MainPage = () => {
  return (
    <>
      <MobileHeader />
      <BannerSection id="firstBanner" />
      <TextSection
        title={titles.philosophy}
        content={content.philosophy}
        id="philosophy"
      />
      <IconSection />
      <TextSection title={titles.tech} content={content.tech} id="tech" />
      <SliderSection title={titles.products} type="products" />
      <BannerSection id="secondBanner" />
      <SliderSection title={titles.upToDate} />
    </>
  );
};
