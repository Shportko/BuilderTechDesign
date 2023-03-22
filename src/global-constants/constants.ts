import { TDropdownItem } from "@/types/main";

export type TContentItemType =
  | "service-item"
  | "service-page-details"
  | "portfolio-item"
  | "portfolio-page-details"
  | "blog-page-details"
  | "blog-item"
  | "subitem";

export type TContentItemItemType =
  | "service-item"
  | "portfolio-item"
  | "blog-item";

export enum ContentItemTypesEnum {
  SERVICE_ITEM = "service-item",
  SERVICE_PAGE_DETAILS = "service-page-details",
  PORTFOLIO_ITEM = "portfolio-item",
  PORTFOLIO_PAGE_DETAILS = "portfolio-page-details",
  BLOG_ITEM = "blog-item",
  BLOG_PAGE_DETAILS = "blog-page-details",
}

export type TPagesTypes = "services" | "portfolio" | "blog" | "reviews";

export enum PagesTypesEnum {
  services = "services",
  portfolio = "portfolio",
  blog = "blog",
  reviews = "reviews",
}

export type TContentSubitemSubtype =
  | "title"
  | "description"
  | "images"
  | "list"
  | "action";

export const PagesToPagesDetailsMap: { [key: string]: TContentItemType } = {
  [PagesTypesEnum.services]: ContentItemTypesEnum.SERVICE_PAGE_DETAILS,
  [PagesTypesEnum.portfolio]: ContentItemTypesEnum.PORTFOLIO_PAGE_DETAILS,
  [PagesTypesEnum.blog]: ContentItemTypesEnum.BLOG_PAGE_DETAILS,
};

export const PagesToContentItemsMap: { [key: string]: TContentItemType } = {
  [PagesTypesEnum.services]: ContentItemTypesEnum.SERVICE_ITEM,
  [PagesTypesEnum.portfolio]: ContentItemTypesEnum.PORTFOLIO_ITEM,
  [PagesTypesEnum.blog]: ContentItemTypesEnum.BLOG_ITEM,
};

export const ContentItemTypesForDD: TDropdownItem[] = [
  {
    value: ContentItemTypesEnum.BLOG_ITEM,
    title: "Blog Item",
  },
  {
    value: ContentItemTypesEnum.PORTFOLIO_ITEM,
    title: "Portfolio Item",
  },
  {
    value: ContentItemTypesEnum.SERVICE_ITEM,
    title: "Service Item",
  },
  {
    value: ContentItemTypesEnum.BLOG_PAGE_DETAILS,
    title: "Blog Page Details",
  },
  {
    value: ContentItemTypesEnum.PORTFOLIO_PAGE_DETAILS,
    title: "Portfolio Page Details",
  },
  {
    value: ContentItemTypesEnum.SERVICE_PAGE_DETAILS,
    title: "Service Page Details",
  },
];

export const ContentItemTypesForDDCreateNew: TDropdownItem[] = [
  {
    value: ContentItemTypesEnum.BLOG_ITEM,
    title: "Blog Item",
  },
  {
    value: ContentItemTypesEnum.PORTFOLIO_ITEM,
    title: "Portfolio Item",
  },
  {
    value: ContentItemTypesEnum.SERVICE_ITEM,
    title: "Service Item",
  },
];

// export const ContentItemTypesForDD: TDropdownItem[] = [
//   {
//     value: ContentItemTypesEnum.BLOG_ITEM,
//     title: "Blog Item",
//   },
//   {
//     value: ContentItemTypesEnum.BLOG_PAGE_DETAILS,
//     title: "Blog Page Details",
//   },
//   {
//     value: ContentItemTypesEnum.PORTFOLIO_ITEM,
//     title: "Portfolio Item",
//   },
//   {
//     value: ContentItemTypesEnum.PORTFOLIO_PAGE_DETAILS,
//     title: "Portfolio Page Details",
//   },
//   {
//     value: ContentItemTypesEnum.SERVICE_ITEM,
//     title: "Service Item",
//   },
//   {
//     value: ContentItemTypesEnum.SERVICE_PAGE_DETAILS,
//     title: "Services Page Details",
//   },
// ];

export const PagesForDD: TDropdownItem[] = [
  {
    value: "services",
    title: "Services",
  },
  {
    value: "portfolio",
    title: "Portfolio",
  },
  {
    value: "blog",
    title: "Blog",
  },
];

export default "test";
