import { mediaStorageBucketUrl } from "@/global-constants/global-constants";
import { TContentItem } from "@/types/main";
import FacebookLogo from "../Assets/png/facebook_logo.png";

export const servicesPageContent: TContentItem = {
  title: "Bringing your project to life",
  type: "service-page-details",
  metaTitle:
    "Bringing your project to life with Buildet Tech Design in Texas | Builder Tech Design",
  metaDescription:
    "At Builder Tech Design, we're committed to helping you create the home of your dreams. Our draftsperson services, interior design services, and exterior design services can help you create a stunning project from start to finish. Contact Builder Tech Design today!",
  subItems: [
    {
      type: "subitem",
      description: [
        "At Builder Tech Design, we're committed to helping you create the home of your dreams. Our draftsperson services, interior design services, and exterior design services can help you create a stunning project from start to finish. Contact Builder Tech Design today!"
      ],
    },
  ],
};

export const services: TContentItem[] = [
  {
    id: "0",
    type: "service-item",
    slug: "project-drafting",
    title: "Project Drafting Service in Texas",
    shortTitle: "Project Drafting",
    description: [
      `Builder Tech Design is your best choice for any type of design need. We're here to help you every step of the way. Builder Tech Design is a full service design firm in Texas. We help clients(small businesses, large corporations, as well as real estate firms) achieve their business goals and create memorable experiences for their customers`,
    ],
    image: "./menu_pic/serv_draft_design.png",
    alt: "Project Drafting Service in Texas",
    anchorId: "service-project-drafting",
    metaTitle:
      "Best Project Drafting Service near me in Texas | Builder Tech Design",
    metaDescription:
      `Builder Tech Design is your best choice for any type of design need. We're here to help you every step of the way. Builder Tech Design is a full service design firm in Texas. We help clients(small businesses, large corporations, as well as real estate firms) achieve their business goals and create memorable experiences for their customers`,    subItems: [
      {
        type: "subitem",
        imageKey: "0",
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
          "The term plan for building a house has two of the most common meanings." ,
           "On the one hand, this is part of the overall business plan, which discusses the main financial and organizational aspects of the nearest buildings.",
           "Secondly, a plan for building a house as part of the design documentation developed before the start of any construction.",
           "The composition of the plan includes a mandatory stage of preparation for the upcoming object.",
          "Floor plans are an important part of the house construction plan.",
          "They are developed at the first stage of design, which is explained by the importance of the information generated with their help.",
          "To correctly draw up a house plan, professional skills of an architect and designer, knowledge of existing norms and rules, as well as a clear understanding of the needs of the customer of the object are required.",
          "The combination of these factors will make it possible to obtain a high-quality project at the end, guaranteeing the owner comfortable housing with minimal costs for its construction."
        ],
      },
    ],
  },
  {
    id: "1",
    type: "service-item",
    slug: "exterior-interior-design",
    title: "Exterior & Interior Design in Texas",
    shortTitle: "Exterior & Interior Design",
    description: [`Building a new custom home enables you to design everything according to your preferences. However, besides the appearance and comfort, you also need to pay attention to loads, codes and regulations, and safety measures. The house will need electricity, water and sewage systems, HVAC, and air conditioning among other things.`],
    image: "./menu_pic/serv_int_ext.png",
    alt: "Exterior & Interior Design in Texas",
    anchorId: "service-exterior-interior-design",
    metaTitle: "Exterior & Interior Design in Texas | Builder Tech Design",
    metaDescription:
      "Transform your kitchen with our Sacramento remodeling experts! From custom cabinetry to beautiful countertops, we'll make your dream kitchen a reality. Contact us for your renovation needs!",
    subItems: [
      {
        type: "subitem",
        imageKey: "1",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico services/service-kitchens-1.jpeg`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-kitchens-2.jpeg`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-kitchens-3.jpeg`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        description: [
          "Looking for the best kitchen renovation company near you in Sacramento? Look no further than our expert team. We are dedicated to providing top-notch kitchen remodeling services to transform your outdated kitchen into a modern and stylish space that meets your needs and budget.",
        ]
      },
      {
        type: "subitem",
        description: [
          "Our team of skilled kitchen remodel contractors offers a range of services to upgrade your kitchen, from simple makeovers to full-scale renovations. We take the time to listen to your needs and preferences, and we work closely with you to design a kitchen that fits your lifestyle and taste.",
        ]
      },
    ],
  },
  {
    id: "2",
    type: "service-item",
    slug: "landscape-design",
    title: "Landscape Design in Texas",
    shortTitle: "Landscape Design",
    description: [`Building a new custom home enables you to design everything according to your preferences. However, besides the appearance and comfort, you also need to pay attention to loads, codes and regulations, and safety measures. The house will need electricity, water and sewage systems, HVAC, and air conditioning among other things.`],
    image: "./menu_pic/ser_lan_des.png",
    alt: "Landscape Design in Texas",
    anchorId: "service-landscape-design",
    metaTitle: "Landscape Design in Texas | Builder Tech Design",
    metaDescription:
      "Looking for bathroom remodel ideas? Our Sacramento team can help! From small updates to complete renovations, we'll bring your dream bathroom to life. Contact us to start your project today!",
    subItems: [
      {
        type: "subitem",
        imageKey: "2",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico services/service-bathrooms-1.webp`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-bathrooms-2.jpeg`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-bathrooms-3.jpeg`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        description: [
          "Looking for the best bathroom renovation company in the Sacramento area? Look no further than our local team of expert bathroom renovation contractors! We specialize in turning your outdated or dull bathroom into a modern oasis that you'll love coming home to.",
        ]
      },
      {
        type: "subitem",
        description: [
          "Our bathroom remodeling services are designed to make the process simple and stress-free for you. We'll work with you to come up with the perfect bathroom remodel ideas for your home, taking into account your style preferences and practical needs. And because we're a local company, we're always just a phone call away if you have any questions or concerns along the way.",
        ]
      },
    ],
  },
  {
    id: "3",
    type: "service-item",
    slug: "commercial-residential-design",
    title: "Commercial & Residential Design in Texas",
    shortTitle: "Commercial & Residential Design",
    description: [`Building a new custom home enables you to design everything according to your preferences. However, besides the appearance and comfort, you also need to pay attention to loads, codes and regulations, and safety measures. The house will need electricity, water and sewage systems, HVAC, and air conditioning among other things..`],
    image: "./menu_pic/serv_com_res.png",
    alt: "Commercial & Residential Design in Texas",
    anchorId: "service-commercial-residential-design",
    metaTitle:
      "Commercial & Residential Design in Texas | Builder Tech Design",
    metaDescription:
      "Transform your home with our Sacramento floor design and renovation services! Our expert team will revamp your space and create the perfect look. Contact us for a free consultation today!",
    subItems: [
      {
        type: "subitem",
        imageKey: "3",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico services/service-floors-1.jpeg`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-floors-2.jpeg`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-floors-3.jpeg`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        description:
          "Welcome to our Sacramento company, where we specialize in creating new and luxury floor designs for your home. Our expert team of designers will work with you to create a unique house floor design that meets your specific needs and style preferences.",
      },
    ],
  },
];
