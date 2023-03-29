import { TContentItem } from "@/types/main";
import { mediaStorageBucketUrl } from "@/global-constants/global-constants";

export const blogPageContent: TContentItem = {  type: "service-page-details",
metaTitle:
  "Repair and home maintenance in Texas | Builder Tech Design", // change
metaDescription:
  "Trust our Sacramento construction company for all your building needs. We specialize in site preparation, project management, and maintenance services to ensure your project is a success. Contact us today!", // change
subItems: [
  {
    type: "subitem",
    description: [
      "glavnoe opisanie uslug togo 4to predostavlyaem"
    ],
  },
],
};

export const blogItems: TContentItem[] = [ 
    {
    id: "50",
    type: "blog-item",
    slug: "blog-item1",
    title: "Project Drafting Service in Texas",
    shortTitle: "Project Drafting",
    description: [
      `opisanie`,
    ],
    image: "/f.png",
    alt: "Project Drafting Service in Texas",
    anchorId: "project-drafting",
    metaTitle:
      "Best Dry Rot Repair near me in Sacramento | Builder Tech Design",
    metaDescription:
      "Say goodbye to dry rot problems with our expert dry rot repairs! Find top-notch dry rot repair near you in Sacramento. Contact us today to learn more!",
    subItems: [
      {
        type: "subitem",
        images: [
          {
            src: "/f.png",
            alt: "ccc",
          },
          {
            src: "/f.png",
            alt: "cc",
          },
          {
            src: "/f.png",
            alt: "ccc",
          },
        ],
      },
      {
        type: "subitem",
        description: [
          "Looking for reliable dry rot repair contractors near you in Sacramento? Look no further than our trusted company. We are a team of experienced and skilled professionals who specialize in fixing dry rot in homes, roofs, and other structures.",
          "Dry rot can quickly become a major problem for homeowners, leading to structural damage and expensive repairs. Our dry rot repair services are designed to help you address the issue quickly and effectively, restoring the integrity of your home or property.",
          "As one of the leading dry rot companies in the Sacramento area, we pride ourselves on delivering high-quality workmanship and exceptional customer service. Our team will work closely with you to assess the extent of the damage, recommend the best course of action, and provide you with a clear, detailed estimate of the cost and timeline for the repair.",
          "At our company, we understand that dry rot repair can be a major investment. That's why we offer competitive pricing and flexible financing options to help you get the repairs you need without breaking the bank.",
          "So if you're looking for dry rot repair near you, look no further than our team of skilled and experienced professionals. Contact us today to schedule your consultation and get your home or property back to its original condition.",
        ],
      },
    ],
  },
];
