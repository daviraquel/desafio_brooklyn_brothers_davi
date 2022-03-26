import preserveIcon from "../img/icons/preserve.png";
import promoteIcon from "../img/icons/promote.png";
import protectIcon from "../img/icons/protect.png";

import wellness from "../img/products/wellness.png";
import active from "../img/products/active.png";
import agecare from "../img/products/agecare.png";

import sport from "../img/articles/sport.png";
import smile from "../img/articles/smile.png";
import droplet from "../img/articles/droplet.png";

export const headerLinks = [
  {
    id: "philosophyDropHover",
    send: "#philosophy",
    text: "about us",
    icon: true,
  },
  {
    id: "productsDropHover",
    send: "#products",
    text: "our products",
    icon: true,
  },
  {
    id: "articlesDropHover",
    send: "#articles",
    text: "intimate health",
    icon: true,
  },
  { id: "contactLink", send: "/contact", text: "contact us", icon: false },
];

export const mobileDropDownLinks = [
  { send: "#philosophy", text: "brand philosophy" },
  { send: "#tech", text: "product technology" },
  { send: "#products", text: "all products" },
  { send: "/wellness", text: "intibiome wellness" },
  { send: "/active", text: "intibiome active" },
  { send: "/agecare", text: "intibiome agecare" },
  { send: "#articles", text: "article1" },
  { send: "#articles", text: "article2" },
  { send: "#articles", text: "article3" },
  { send: "/contact", text: "contact us" },
];

export const desktopDropDownLinks = {
  about: [
    { send: "#philosophy", text: "brand philosophy" },
    { send: "#tech", text: "product technology" },
  ],
  products: [
    { send: "#products", text: "all products" },
    { send: "/wellness", text: "intibiome wellness" },
    { send: "/active", text: "intibiome active" },
    { send: "/active", text: "intibiome agecare" },
  ],
  intimate: [
    { send: "#article", text: "article 1" },
    { send: "#article", text: "article 2" },
    { send: "#article", text: "article 3" },
    { send: "/faq", text: "faq" },
  ],
};

export const footerLinks = [
  { send: "/contact", text: "contact us" },
  { send: "/faq", text: "faq" },
  { send: "/map", text: "site map" },
  { send: "/privacy", text: "privacy policy" },
  { send: "/coockies", text: "cookies policy" },
  { send: "/legal", text: "legal notice" },
];

export const titles = {
  philosophy: "we’re here to help",
  tech: "whatever your age. whatever your lifestyle. whatever your interests.",
  products: "our products",
  upToDate: "keep up to date with our discoveries",
};

export const content = {
  philosophy:
    "When it comes to caring for our most intimate areas, we’ve lost our connection. \n Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most. \n We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.",
  tech: "Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health. \n As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.",
  lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  article1: "our products",
};

export const icons = [
  {
    img: promoteIcon,
    alt: "promote",
  },
  {
    img: preserveIcon,
    alt: "preserve",
  },
  {
    img: protectIcon,
    alt: "protect",
  },
];

export const products = [
  {
    contentText: "intibiome wellness daily intimate wash",
    buttonText: "wellness",
    buttonColor: "#389CD6",
    img: wellness,
    alt: "wellness product blue pack",
  },
  {
    contentText: "intibiome active extra protection intimate wash",
    buttonText: "active",
    buttonColor: "#309D5F",
    img: active,
    alt: "active product green pack",
  },
  {
    contentText: "intibiome agecare dryness relief intimate wash",
    buttonText: "agecare",
    buttonColor: "#EE6381",
    img: agecare,
    alt: "agecare product red pack",
  },
];

export const articles = [
  {
    contentText: content.lorem,
    img: sport,
    alt: "person with a wide smile wearing sports clothes in a sunny day",
  },
  {
    contentText: content.lorem,
    img: smile,
    alt: "silver-haired person smiling in the winter",
  },
  {
    contentText: content.lorem,
    img: droplet,
    alt: "blue droplets on a white background",
  },
];
