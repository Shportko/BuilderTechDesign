import { TContentItem } from "@/types/main";
import { mediaStorageBucketUrl } from "@/global-constants/global-constants";

export const portfolioPageContent: TContentItem = {
    title: "Builder Tech Design in Texas",
    type: "portfolio-page-details",
    metaTitle:
      "Texas | Builder Tech Design", // change
    metaDescription:
      "Let us help you create the perfect vision for your home or business. We can work with you on all types of projects, including Exterior & Interior Design , Landscape Design, Commercial & Residential Design .",
    subItems: [
      {
        type: "subitem",
        description: [
  "glavnoe opisanie uslug togo 4to predostavlyaem"
        ],
      },
    ],
  };

export const projects: TContentItem[] = [ 
    {
    id: "11",
    type: "portfolio-item",
    slug: "portfolio-item1",
    title: "Project Drafting Service in Texas", // change
    shortTitle: "Portfolio", //change
    description: [
      `opisanie`,
    ],
    image: "./portfolio_main_pic/interer.png",
    alt: "Builder Tech Design in Texas",
    anchorId: "project-item1",
    metaTitle:
      "Texas| Builder Tech Design",
    metaDescription:
      "Let us help you create the perfect vision for your home or business. We can work with you on all types of projects, including Exterior & Interior Design , Landscape Design, Commercial & Residential Design .",
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
  {
    id: "12",
    type: "portfolio-item",
    slug: "portfolio-item2",
    title: "Exterior & Interior Design in Texas",
    shortTitle: "Exterior & Interior Design",
    description: [`Transform your kitchen with our Sacramento remodeling experts! From custom cabinetry to beautiful countertops, we'll make your dream kitchen a reality. Contact us for your renovation needs!`],
    image: "./portfolio_main_pic/project_house.png",
    alt: "XXXX",
    anchorId: "project-item2",
    metaTitle: "Kitchen renovation in Sacramento | Nico Pro Construction",
    metaDescription:
      "Transform your kitchen with our Sacramento remodeling experts! From custom cabinetry to beautiful countertops, we'll make your dream kitchen a reality. Contact us for your renovation needs!",
    subItems: [
      {
        type: "subitem",
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
    id: "13",
    type: "portfolio-item",
    slug: "portfolio-item3",
    title: "Landscape Design in Texas",
    shortTitle: "Landscape Design",
    description: [`We offer a wide range of installation and renovation services, including
        tile installation, plumbing, electrical, and more.`],
    image: "./portfolio_main_pic/project_house_big.png",
    alt: "bathroom remodel",
    anchorId: "project-item3",
    metaTitle: "Bathrooms service in the Sacramento | Nico Pro Constructio",
    metaDescription:
      "Looking for bathroom remodel ideas? Our Sacramento team can help! From small updates to complete renovations, we'll bring your dream bathroom to life. Contact us to start your project today!",
    subItems: [
      {
        type: "subitem",
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
        description:[
          "Looking for the best bathroom renovation company in the Sacramento area? Look no further than our local team of expert bathroom renovation contractors! We specialize in turning your outdated or dull bathroom into a modern oasis that you'll love coming home to.",
    ]},
      {
        type: "subitem",
        description:[
          "Our bathroom remodeling services are designed to make the process simple and stress-free for you. We'll work with you to come up with the perfect bathroom remodel ideas for your home, taking into account your style preferences and practical needs. And because we're a local company, we're always just a phone call away if you have any questions or concerns along the way.",
    ]},
    ],
  },
  {
    id: "14",
    type: "portfolio-item",
    slug: "portfolio-item4",
    title: "Commercial & Residential Design in Texas",
    shortTitle: "Commercial & Residential Design",
    description: [`We use a variety of materials, including tile, hardwood, laminate, and
        vinyl, to create unique and durable flooring solutions for any budget.`],
    image: "./portfolio_main_pic/interer2.png",
    alt: "",
    anchorId: "project-item4",
    metaTitle:
      "Floors renovation service in Sacramento | Nico Pro Construction",
    metaDescription:
      "Transform your home with our Sacramento floor design and renovation services! Our expert team will revamp your space and create the perfect look. Contact us for a free consultation today!",
    subItems: [
      {
        type: "subitem",
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
        description:[
          "Welcome to our Sacramento company, where we specialize in creating new and luxury floor designs for your home. Our expert team of designers will work with you to create a unique house floor design that meets your specific needs and style preferences.",]
      },
    ],
  },
  {
    id: "15",
    type: "portfolio-item",
    slug: "portfolio-item5",
    title: "Commercial & Residential Design in Texas",
    shortTitle: "Commercial & Residential Design",
    description: [`We use a variety of materials, including tile, hardwood, laminate, and
        vinyl, to create unique and durable flooring solutions for any budget.`],
    image: "./portfolio_main_pic/Jumbo.png",
    alt: "",
    anchorId: "project-item5",
    metaTitle:
      "Floors renovation service in Sacramento | Nico Pro Construction",
    metaDescription:
      "Transform your home with our Sacramento floor design and renovation services! Our expert team will revamp your space and create the perfect look. Contact us for a free consultation today!",
    subItems: [
      {
        type: "subitem",
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
        description:[
          "Welcome to our Sacramento company, where we specialize in creating new and luxury floor designs for your home. Our expert team of designers will work with you to create a unique house floor design that meets your specific needs and style preferences.",]
      },
    ],
  },
  {
    id: "16",
    type: "portfolio-item",
    slug: "portfolio-item6",
    title: "Commercial & Residential Design in Texas",
    shortTitle: "Commercial & Residential Design",
    description: [`We use a variety of materials, including tile, hardwood, laminate, and
        vinyl, to create unique and durable flooring solutions for any budget.`],
    image: "./portfolio_main_pic/landscape.png",
    alt: "",
    anchorId: "project-item6",
    metaTitle:
      "Floors renovation service in Sacramento | Nico Pro Construction",
    metaDescription:
      "Transform your home with our Sacramento floor design and renovation services! Our expert team will revamp your space and create the perfect look. Contact us for a free consultation today!",
    subItems: [
      {
        type: "subitem",
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
        description:[
          "Welcome to our Sacramento company, where we specialize in creating new and luxury floor designs for your home. Our expert team of designers will work with you to create a unique house floor design that meets your specific needs and style preferences.",]
      },
    ],
  },
];
