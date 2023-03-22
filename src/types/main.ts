import { TContentSubitemSubtype } from "@/global-constants/constants";

export type TPageLinkItem = {
  title: string;
  href: string;
  id: string;
  icon?: any;
};

export type TImageItem = {
  id?: number;
  _id?: string;
  parentId?: string;
  src: string;
  alt: string;
  title?: string;
  imageKey?: string;
  orderNo?: number;
  isIcon?: boolean;
};

export type TCustomerReviewItem = {
  _id?: string;
  name?: string;
  yelpLink?: string;
  facebookLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  title?: string;
  text?: string;
  photoUrl?: string;
  rate?: number;
  created_at?: string;
  is_approved?: boolean;
  email?: string;
};

export type TContentItemType =
  | "service-item"
  | "service-page-details"
  | "portfolio-item"
  | "portfolio-page-details"
  | "blog-page-details"
  | "blog-item"
  | "subitem";

export type TContentItemStatus =
  | "draft"
  | "out-for-review"
  | "reviewed"
  | "out-for-approval"
  | "approved"
  | "out-for-publish"
  | "published";

export type TContentItem = {
  id?: string;
  _id?: string;
  parentItemId?: string;
  type?: TContentItemType;
  subtype?: TContentSubitemSubtype;
  anchorId?: string;
  orderNo?: number;
  slug?: string;
  title?: string;
  shortTitle?: string;
  subtitle?: string;
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
  image?: string;
  imageKey?: string;
  alt?: string;
  description?: string[];
  images?: TImageItem[];
  breakdownPoints?: string[];
  showScrollToTopButton?: boolean;
  authorName?: string;
  authorEmail?: string;
  style?: string;
  subItems?: TContentItem[];
  status?: TContentItemStatus;
  published_at?: string;
  last_published_at?: string;
  created_at?: string;
  updated_at?: string;
};

export type TDropdownItem = {
  value: string;
  title: string;
};
