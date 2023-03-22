import { mediaStorageBucketUrl } from "@/global-constants/global-constants";
import { TContentItem } from "@/types/main";

export const servicesPageContent: TContentItem = {
  title: "To 4em mi zanimaemsya",
  type: "service-page-details",
  metaTitle: "To 4em mi zanimaemsya dlya poiska google|zagolovok | Builder Tech Desigm",
  metaDescription: "To 4em mi zanimaemsya dlya poiska google podrobnoe opisanie",
  subItems: [
    {
      type: "subitem",
      description: [
        "Our team specializes in a range of renovation services, from site preparation to design, maintenance, and repair. Whether you're looking for a complete home renovation or a simple update, we've got you covered.",
        "Our team is committed to delivering exceptional customer service and quality workmanship. We work closely with our clients to ensure that every aspect of the project is completed to their satisfaction, from the initial planning stages to the final touches.",
        "We understand that undertaking a renovation project can be daunting, but with our team on your side, the process will be stress-free and enjoyable. We handle every aspect of the project, so you don't have to worry about a thing.",
        "In addition to renovation services, we also offer maintenance and repair services to keep your home in top shape. From small repairs to ongoing maintenance, we're here to help.",
        "So, what are you waiting for? Renovate your home now with the help of our expert team. Contact us today to learn more about our services and to schedule a consultation.",
      ],
    },
  ],
};

export const services: TContentItem[] = [
  {
    id: "0",
    type: "service-item",
    slug: "dry-rot-repairs-service",
    title: "Dry Rot Repair service in Sacramento",
    shortTitle: "Dry Rot Repair",
    description: [
      `Say goodbye to dry rot problems with our expert dry rot repairs! Find top-notch dry rot repair near you in Sacramento. Contact us today to learn more!`,
    ],
    image: `${mediaStorageBucketUrl}/icons/small-icon-service-dry-rot.webp`,
    alt: "",
    anchorId: "service-dry-rot-repairs",
    metaTitle:
      "Best Dry Rot Repair near me in Sacramento | Nico Pro Construction",
    metaDescription:
      "Say goodbye to dry rot problems with our expert dry rot repairs! Find top-notch dry rot repair near you in Sacramento. Contact us today to learn more!",
    subItems: [
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico services/service-dry-rot-repair-1.jpeg`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-dry-rot-repair-2.jpeg`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico services/service-dry-rot-repair-3.webp`,
            alt: "",
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
//   {
//     id: "1",
//     type: "service-item",
//     slug: "kitchens-construction-service",
//     title: "Kitchen renovation in Sacramento",
//     shortTitle: "Kitchens",
//     description: `Transform your kitchen with our Sacramento remodeling experts! From custom cabinetry to beautiful countertops, we'll make your dream kitchen a reality. Contact us for your renovation needs!`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-kitchens.webp`,
//     alt: "",
//     anchorId: "service-kitchens",
//     metaTitle: "Kitchen renovation in Sacramento | Nico Pro Construction",
//     metaDescription:
//       "Transform your kitchen with our Sacramento remodeling experts! From custom cabinetry to beautiful countertops, we'll make your dream kitchen a reality. Contact us for your renovation needs!",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-kitchens-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-kitchens-2.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-kitchens-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Looking for the best kitchen renovation company near you in Sacramento? Look no further than our expert team. We are dedicated to providing top-notch kitchen remodeling services to transform your outdated kitchen into a modern and stylish space that meets your needs and budget.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our team of skilled kitchen remodel contractors offers a range of services to upgrade your kitchen, from simple makeovers to full-scale renovations. We take the time to listen to your needs and preferences, and we work closely with you to design a kitchen that fits your lifestyle and taste.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Whether you're looking for a modern kitchen remodel or a budget kitchen renovation, we have the expertise and experience to help you achieve your goals. Our team can handle everything from installing new cabinets and countertops to replacing old appliances and fixtures.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that a kitchen remodel can be a big investment, which is why we work hard to provide the best possible value for our clients. Our competitive pricing and flexible financing options make it easy for you to get the kitchen of your dreams without breaking the bank.",
//       },
//       {
//         type: "subitem",
//         description:
//           "At our company, we are committed to delivering exceptional customer service and quality workmanship. We take pride in every project we undertake, and we always go the extra mile to ensure our clients are happy with the final result.",
//       },
//       {
//         type: "subitem",
//         description:
//           "So if you're looking for a kitchen remodel near you in Sacramento, trust our team to deliver the best possible outcome. Contact us today to schedule your consultation and take the first step toward a beautiful, modern kitchen.",
//       },
//     ],
//   },
//   {
//     id: "2",
//     type: "service-item",
//     slug: "bathrooms-construction-service",
//     title: "Bathrooms service in the Sacramento",
//     shortTitle: "Bathrooms",
//     description: `We offer a wide range of installation and renovation services, including
//         tile installation, plumbing, electrical, and more.`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-bathrooms.webp`,
//     alt: "bathroom remodel",
//     anchorId: "service-bathrooms",
//     metaTitle: "Bathrooms service in the Sacramento | Nico Pro Constructio",
//     metaDescription:
//       "Looking for bathroom remodel ideas? Our Sacramento team can help! From small updates to complete renovations, we'll bring your dream bathroom to life. Contact us to start your project today!",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-bathrooms-1.webp`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-bathrooms-2.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-bathrooms-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Looking for the best bathroom renovation company in the Sacramento area? Look no further than our local team of expert bathroom renovation contractors! We specialize in turning your outdated or dull bathroom into a modern oasis that you'll love coming home to.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our bathroom remodeling services are designed to make the process simple and stress-free for you. We'll work with you to come up with the perfect bathroom remodel ideas for your home, taking into account your style preferences and practical needs. And because we're a local company, we're always just a phone call away if you have any questions or concerns along the way.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our bathroom remodels are made with only the best materials and attention to detail, ensuring that your new bathroom will stand the test of time. Whether you're looking for a full bathroom renovation or just a few simple updates, we'll help you achieve the look and functionality you're dreaming of.",
//       },
//       {
//         type: "subitem",
//         description:
//           "So if you're ready to transform your bathroom into a space you'll love, contact us today to learn more about our bathroom remodeling services. Our team of local experts is here to help you every step of the way, from initial consultation to final installation. Trust us to bring your bathroom remodel ideas to life and create a modern bathroom that's both functional and beautiful.",
//       },
//     ],
//   },
//   {
//     id: "3",
//     type: "service-item",
//     slug: "flooring-construction-service",
//     title: "Floors renovation service in Sacramento",
//     shortTitle: "Floors",
//     description: `We use a variety of materials, including tile, hardwood, laminate, and
//         vinyl, to create unique and durable flooring solutions for any budget.`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-floors.webp`,
//     alt: "",
//     anchorId: "service-floors",
//     metaTitle:
//       "Floors renovation service in Sacramento | Nico Pro Construction",
//     metaDescription:
//       "Transform your home with our Sacramento floor design and renovation services! Our expert team will revamp your space and create the perfect look. Contact us for a free consultation today!",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-floors-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-floors-2.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-floors-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Welcome to our Sacramento company, where we specialize in creating new and luxury floor designs for your home. Our expert team of designers will work with you to create a unique house floor design that meets your specific needs and style preferences.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that your home is your sanctuary, and the right flooring can set the tone for your space. That's why we offer a variety of flooring renovation services to help you achieve the look you're after. From hardwood and tile to carpet and vinyl, we have the experience and expertise to make your vision a reality.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our home floor plans are carefully crafted with your lifestyle in mind. We take into account your needs for function, durability, and aesthetic appeal, to create a custom floor design that fits your unique needs. Our team will work closely with you throughout the entire process, from initial consultation to final installation, to ensure that you're completely satisfied with the results.",
//       },
//       {
//         type: "subitem",
//         description:
//           "At our company, we believe that luxury shouldn't come at a premium. That's why we offer our flooring renovation services at affordable prices, without sacrificing quality or style. We take pride in delivering exceptional workmanship and attention to detail, using only the best materials and techniques to create stunning, long-lasting results.",
//       },
//       {
//         type: "subitem",
//         description:
//           "If you're ready to transform your home with a new and luxurious floor design, contact us today to learn more about our flooring renovation services. Our team of experts is here to help you every step of the way, from planning and design to installation and maintenance. Trust us to bring your house floor design dreams to life and create a space that's both beautiful and functional.",
//       },
//     ],
//   },
//   {
//     id: "4",
//     type: "service-item",
//     slug: "painting-construction-service",
//     title: "Painting service in Sacramento",
//     shortTitle: "Painting",
//     description: `We use the highest quality materials and techniques to ensure a
//         professional and lasting finish.`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-painting.webp`,
//     alt: "",
//     anchorId: "service-painting",
//     metaTitle: "Painting service in Sacramento | Nico Pro Construction",
//     metaDescription:
//       "Transform your space with our professional painting services! Our Sacramento team is dedicated to delivering quality and precision with every wall we paint. Contact us for your project today!",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-painting-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-painting-2.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-painting-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Welcome to our Sacramento painting company, where we specialize in creating the best indoor and outdoor painting services. Our expert team of painters will work with you to create a new and beautiful look for your home.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that painting is a simple yet powerful way to transform the look and feel of your home. That's why we offer a variety of painting services, from wall painting to creating custom paintings for living rooms and bedrooms. Whether you're looking to add a pop of color to a single wall or completely transform the entire room, we have the experience and expertise to make your vision a reality.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our painters are committed to providing exceptional service and attention to detail. We take the time to understand your needs and style preferences, and we use only the best materials and techniques to ensure that your painting project is completed to the highest standards. From start to finish, we're here to make sure that you're completely satisfied with the results.",
//       },
//       {
//         type: "subitem",
//         description:
//           "In addition to indoor painting services, we also offer outdoor painting services to help give your home's exterior a fresh and vibrant new look. Whether you're looking to paint your house, deck, or fence, we have the skills and expertise to deliver beautiful and long-lasting results.",
//       },
//       {
//         type: "subitem",
//         description:
//           "If you're looking for a simple painting solution to transform the look of your home, look no further than our Sacramento painting company. Contact us today to learn more about our services and how we can help you achieve the look and feel you're after. Our team of experts is here to help you every step of the way, from planning and design to final touch-ups and maintenance.",
//       },
//     ],
//   },
//   {
//     id: "5",
//     type: "service-item",
//     slug: "siding-conatruction-service",
//     title: "Siding contractors in Sacramento",
//     shortTitle: "Siding",
//     description: `Depending on the extent of the damage, we could either repair the existing
//         siding or replace it with a new one.`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-siding.webp`,
//     alt: "",
//     anchorId: "service-siding",
//     metaTitle: "Siding contractors in Sacramento | Nico Pro Construction",
//     metaDescription:
//       "Looking for reliable siding contractors near you? Look no further than our Sacramento siding company! Our expert team is dedicated to quality workmanship and exceptional customer service. Contact us today! ",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-siding-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-siding-2.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-siding-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Looking for reliable and experienced siding contractors near you in Sacramento? Look no further than our siding company, where we specialize in delivering high-quality residential siding solutions.",
//       },
//       {
//         type: "subitem",
//         description:
//           "At our company, we understand that your house is more than just a building - it's your home. That's why we take great care in selecting the right siding materials and designing the perfect solution to meet your specific needs and budget.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our siding contractors are trained and experienced to provide top-notch installation services, using only the highest-quality materials and techniques to ensure that your siding is durable and long-lasting. We offer a variety of siding options to fit any style and budget, including vinyl, wood, and fiber cement.",
//       },
//       {
//         type: "subitem",
//         description:
//           "In addition to our installation services, we also provide siding repair and maintenance services. Our team of experts is trained to identify and fix any issues with your siding, saving you time and money in the long run.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that the cost of siding can be a concern for many homeowners, which is why we offer competitive pricing and financing options to make your residential siding project affordable and stress-free.",
//       },
//       {
//         type: "subitem",
//         description:
//           "As one of the leading siding companies near you in Sacramento, we're committed to delivering the best possible service and results for our customers. Contact us today to learn more about our siding services and how we can help you transform the look and feel of your home. Our team of expert siding contractors is ready to guide you through every step of the process, from consultation to installation and beyond.",
//       },
//     ],
//   },
//   {
//     id: "6",
//     type: "service-item",
//     slug: "windows-construction-service",
//     title: "Home window replacement in Sacramento",
//     shortTitle: "Windows",
//     description: `Upgrade your home with our Sacramento window replacement services! Our modern house windows will improve energy efficiency and enhance curb appeal. Contact us for a free estimate today!`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-windows.webp`,
//     alt: "",
//     anchorId: "service-windows",
//     metaTitle: "Home window replacement in Sacramento | Nico Pro Construction",
//     metaDescription:
//       "Upgrade your home with our Sacramento window replacement services! Our modern house windows will improve energy efficiency and enhance curb appeal. Contact us for a free estimate today!",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-windows-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-windows-2.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-windows-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Looking for the best and most affordable home window replacement services in Sacramento? Look no further than our window installation company. Our expert team of window installers is dedicated to providing top-notch service and delivering beautiful and energy-efficient window solutions for your home.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that your house is your sanctuary, and that's why we're committed to providing the best possible house window replacement near you. Our experienced window installers use only the highest-quality materials and techniques to ensure that your new windows are installed correctly and to your complete satisfaction.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Whether you're looking for a cheap and cost-effective window replacement or a beautiful and high-end solution, our team of experts will work with you to find the best possible option to fit your needs and budget. We offer a variety of window styles, including double-hung, casement, slider, and more, so you can find the perfect look and functionality to meet your needs.",
//       },
//       {
//         type: "subitem",
//         description:
//           "At our window installation company, we pride ourselves on providing the best home window installation services in Sacramento. Our team of professionals is dedicated to helping you find the right solution to meet your needs, and we're always available to answer any questions or concerns you may have.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Don't settle for mediocre window replacement services - choose the best home window replacement near you in Sacramento. Contact us today to schedule a consultation with one of our expert installers and start enjoying the benefits of beautiful and energy-efficient windows in your home.",
//       },
//     ],
//   },
//   {
//     id: "7",
//     type: "service-item",
//     slug: "patios-construction-service",
//     title: "Patios service in Sacramento",
//     shortTitle: "Patios",
//     description: `We can use a variety of materials such as concrete, pavers, stone, and
//         brick to create a patio that is perfect for your outdoor living needs.`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-patios.webp`,
//     alt: "",
//     anchorId: "service-patios",
//     metaTitle: "Patios service in Sacramento I Nico Pro Construction",
//     metaDescription:
//       "Create your dream outdoor space with our Sacramento patio builders! From design to installation, we'll bring your vision to life. Contact us to start your project today!",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-patios-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-patios-2.webp`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-patios-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Looking for a professional and experienced patio builder in Sacramento to transform your backyard into an oasis of relaxation and entertainment? Look no further than our patio construction company.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our team of expert patio designers and installers is dedicated to creating the best patio designs that meet your unique style and budget. From initial consultation to final installation, we work with you to bring your vision to life and ensure that your new backyard patio is both functional and beautiful.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Our patio installation services are second to none, and we use only the highest-quality materials and techniques to ensure that your patio is built to last. Whether you're looking for a small and intimate patio or a large and expansive outdoor living space, we have the skills and expertise to make it happen.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that you have many options when it comes to patio companies near you in Sacramento, which is why we go above and beyond to provide exceptional service and quality workmanship. Our goal is to exceed your expectations and provide you with a backyard patio that you and your family can enjoy for years to come.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Whether you're looking to relax, entertain, or simply enjoy the great outdoors, our patio designs are the perfect solution to make your backyard the envy of the neighborhood. Contact us today to schedule a consultation with one of our expert patio designers and start transforming your backyard into the perfect outdoor living space.",
//       },
//     ],
//   },
//   {
//     id: "8",
//     type: "service-item",
//     slug: "doors-construction-service",
//     title: "Doors service in Sacramento",
//     shortTitle: "Doors",
//     description: ` Need a new door? Look no further than our Sacramento  company! Our expert team specializes in installation and replacement. Find the perfect fit for your home today. Contact us now! `,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-doors.webp`,
//     alt: "",
//     anchorId: "service-doors",
//     metaTitle: "Doors service in Sacramento I Nico Pro Construction",
//     metaDescription:
//       " Need a new door? Look no further than our Sacramento  company! Our expert team specializes in installation and replacement. Find the perfect fit for your home today. Contact us now! ",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-doors-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-doors-2.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-doors-3.jpeg`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Looking for professional and reliable door installation and replacement services in Sacramento? Look no further than our door installation company. Whether you're looking to install a new door or replace an existing one, our team of experts is here to help.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that changing your doors is a big decision, which is why we go above and beyond to ensure that your door installation experience is stress-free and seamless. Our team of skilled technicians uses the latest tools and techniques to install your new doors quickly and efficiently, so you can start enjoying your new look as soon as possible.",
//       },
//       {
//         type: "subitem",
//         description:
//           "At our door installation company, we offer a wide range of high-quality doors that are designed to meet the unique needs of our customers. From front entry doors to interior doors, we have the perfect door to suit your style and budget. Our selection includes a variety of materials, such as wood, steel, fiberglass, and more.",
//       },
//       {
//         type: "subitem",
//         description:
//           "We understand that you have many options when it comes to door installation companies near you in Sacramento, which is why we strive to provide the highest level of customer service and workmanship. Our team is dedicated to ensuring that your new door installation exceeds your expectations, and we're always available to answer any questions or concerns you may have.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Don't settle for a subpar door installation or replacement experience. Choose our door installation company for the best service and highest-quality products in Sacramento. Contact us today to schedule a consultation with one of our expert technicians and start enjoying the benefits of a beautiful and functional new door.",
//       },
//     ],
//   },
//   {
//     id: "9",
//     type: "service-item",
//     slug: "decks-construction-service",
//     title: "Decks service in Sacramento",
//     shortTitle: "Decks",
//     description:
//       "Looking to enhance your outdoor living space in Sacramento with a new deck? Whether you're interested in building a new deck, restoring an existing one, or simply updating your deck's design, our deck construction and restoration company can help.",
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-decks.webp`,
//     alt: "",
//     anchorId: "service-decks",
//     metaTitle: "Deck Builders in Sacramento | Nico Pro Construction",
//     metaDescription:
//       "Looking to build a new deck or upgrade your existing one? Our deck installation services in Sacramento have got you covered! Let us help you create the outdoor space of your dreams.",
//     subItems: [
//       {
//         type: "subitem",
//         images: [
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-decks-1.jpeg`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-decks-2.webp`,
//             alt: "",
//           },
//           {
//             src: `${mediaStorageBucketUrl}/nico services/service-decks-3.webp`,
//             alt: "",
//           },
//         ],
//       },
//       {
//         type: "subitem",
//         description:
//           "Our team of experienced and skilled professionals is dedicated to providing the best deck installation and restoration services in Sacramento. We use only the highest-quality materials and techniques to ensure that your new deck is both beautiful and functional, and we work closely with you to design a deck that meets your specific needs and style preferences.",
//       },
//       {
//         type: "subitem",
//         description:
//           "If you already have a deck that's seen better days, our deck restoration services can bring it back to life. We can restore your deck to its original beauty and ensure that it's safe and functional for years to come. Our team has the skills and expertise to repair and replace damaged boards, railings, and other components, and we can even add new features like lighting and seating to enhance your deck's functionality.",
//       },
//       {
//         type: "subitem",
//         description:
//           "At our deck construction and restoration company, we understand that the cost to build a deck can be a concern for many homeowners. That's why we work with you to provide cost-effective solutions that fit your budget without compromising on quality or aesthetics. We'll provide you with a transparent and accurate estimate so you can make an informed decision about your deck installation or restoration project.",
//       },
//       {
//         type: "subitem",
//         description:
//           "Don't settle for a subpar deck construction or restoration experience. Choose our deck construction and restoration company for the best service and highest-quality products in Sacramento. Contact us today to schedule a consultation with one of our expert technicians and start enjoying the benefits of a beautiful and functional deck that meets your needs and budget.",
//       },
//     ],
//   },
//   {
//     id: "10",
//     type: "service-item",
//     slug: "home-additions-service",
//     title: "Home Additions",
//     shortTitle: "Home Additions",
//     description: `Want to expand your home? Build extra rooms? Raise the ceiling? \n
//         We can work with your vision!  We can extend your home with new \n
//         rooms, taller ceilings, bigger bathrooms.`,
//     image: `${mediaStorageBucketUrl}/icons/small-icon-service-home-additions.webp`,
//     alt: "",
//     anchorId: "service-home-additions",
//     metaTitle: "",
//     metaDescription: "",
//   },
// ];
