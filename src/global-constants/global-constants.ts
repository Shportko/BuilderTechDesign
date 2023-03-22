import { TPageLinkItem } from "@/types/main";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export const mediaStorageBucketUrl =
  "https://nicoproconstruction-media-storage.s3.us-east-2.amazonaws.com";

const ec2Url = "https://nicoproconstruction-backend.com/api";
const localhost = "http://localhost:8080/api";

export const backendUrl = ec2Url;

export const homeHref = "/";
export const servicesHref = "/services";
export const portfolioHref = "/portfolio";
export const blogHref = "/blog";
export const contactUsHref = "/contact-us";

export const pages: TPageLinkItem[] = [
  {
    title: "Home",
    href: homeHref,
    id: "home-page",
    icon: HomeIcon,
  },
  {
    title: "Services",
    href: servicesHref,
    id: "services-page",
    icon: DesignServicesIcon,
  },
  {
    title: "Portfolio",
    href: portfolioHref,
    id: "portfolio-page",
    icon: WorkIcon,
  },
  {
    title: "Blog",
    href: blogHref,
    id: "blog-page",
    icon: RssFeedIcon,
  },
  {
    title: "Contact Us",
    href: contactUsHref,
    id: "contact-us-page",
    icon: ContactPageIcon,
  },
];
