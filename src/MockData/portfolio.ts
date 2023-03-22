import { mediaStorageBucketUrl } from "@/global-constants/global-constants";
import { TContentItem } from "@/types/main";

export const portfolioPageContent: TContentItem = {
  title: "Our projects",
  type: "portfolio-page-details",
  metaTitle:
    "Repair and home maintenance in Sacramento | Nico Pro Construction",
  metaDescription:
    "Trust our Sacramento construction company for all your building needs. We specialize in site preparation, project management, and maintenance services to ensure your project is a success. Contact us today!",
  subItems: [
    {
      type: "subitem",
      subtitle:
        "Looking to renovate your home? Our Sacramento building construction company is here to help! With years of experience in the industry, we provide expert project management services to ensure your renovation is completed to the highest standards.",
    },
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

export const projects: TContentItem[] = [
  {
    title: "Drcdfffy rot repair",
    type: "portfolio-item",
    slug: "project-dry-rot-repair",
    id: "qwe-123",
    anchorId: "qwe-123-dry-rot-repair",
    subtitle: `Dry rot can be dangerous and is often undetected until it's too late. \n 
    We want to show you why our dry rot repair service is the perfect solution for a \n 
    safe and lasting repair.`,
    tags: [
      "Damaged Siding Replacement",
      "Damaged Plywood Replacement",
      "Damaged Fascia/Trim Replacement",
      "",
    ],
    image: `${mediaStorageBucketUrl}/nico projects/dry rot repair/damage_1.png`,
    alt: "this beautiful home had dry rot damage everywhere",
    description: [
      `With noticeable residue from water leaks and termites, this beautiful home had dry rot damage everywhere. Full sections of roof sheathing, rafters, and fascial were removed during demolition. The lower half of siding on both sides of the garage were also removed. After removal of all damaged materials, we inspected the frame for dry rot damage. Thankfully the damage was only surface level, so we patched up the walls with HomeWrap in preparation for the new materials.`,
    ],
    images: [
      {
        src: `${mediaStorageBucketUrl}/nico projects/dry-rot-icon-1.png`,
        alt: "",
      },
      {
        src: `${mediaStorageBucketUrl}/nico projects/dry-rot-icon-2.png`,
        alt: "",
      },
      {
        src: `${mediaStorageBucketUrl}/nico projects/dry-rot-icon-3.png`,
        alt: "",
      },
    ],
    subItems: [
      {
        type: "subitem",
        title: "Dry Rot Damage",
        anchorId: "qwe-123-dry-rot-damage",
        description: [
          `With noticeable residue from water leaks and termites, this beautiful \n 
        home had dry rot damage everywhere. Full sections of roof sheathing, rafters, and fascia \n
         were removed during demolition. The lower half of siding on both sides of the garage \n 
         were also removed. After removal of all damaged materials, we inspected the frame for \n 
         dry rot damage. Thankfully the damage was only surface level, so we patched up the walls \n 
         with HomeWrap in preparation for the new materials.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/damage_1.png`,
            alt: "this beautiful home had dry rot damage everywhere",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/damage_2.png`,
            alt: "full sections of roof sheathing, rafters, and fascia were removed during demolition",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/damage_3.png`,
            alt: "The lower half of siding on both sides of the garage were also removed",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/damage_4.png`,
            alt: "we patched up the walls with HomeWrap in preparation for the new materials",
          },
        ],
      },
      {
        type: "subitem",
        title: "New Material Installation",
        showScrollToTopButton: true,
        anchorId: "qwe-123-new-material-installation",
        description: [
          `After a HomeWrap and FortiFlash install, we began installing siding. \n
        Since this particular siding was discontinued, we had to cut strips from sheets of siding \n
        into a matching width, insert joint flashing, and nail the siding. For the wall around the \n
        meters, since there were pieces of old siding that we didn't remove, we installed the new \n
        siding pieces from top to bottom. This is the opposite of how you would typically install \n
        siding. On the other side we installed the siding in the typical fashion. The removed roof \n
        sheathings, rafters, and fascia were replaced with new materials. After install, we \n
        caulked the entirety of our installation and unprimed wood pieces were then primered to \n
        prepare for paint.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/new_material_1.png`,
            alt: "this beautiful home had dry rot damage everywhere",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/new_material_2.png`,
            alt: "full sections of roof sheathing, rafters, and fascia were removed during demolition",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/new_material_3.png`,
            alt: "The lower half of siding on both sides of the garage were also removed",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/dry rot repair/new_material_4.png`,
            alt: "we patched up the walls with HomeWrap in preparation for the new materials",
          },
        ],
      },
    ],
  },
  {
    title: "Home remodel",
    type: "portfolio-item",
    slug: "project-home-remodel",
    id: "hr-123",
    anchorId: "hr-123-home-remodel",
    subtitle: `Want to increase the value of your home? We show you how a few simple \n
     renovations can add serious value to your property.`,
    tags: [
      "Living Room Addition",
      "New Wall + Fence",
      "3 New Bedrooms",
      "Exterior Redesign",
    ],
    image: `${mediaStorageBucketUrl}/nico projects/home-remodel-icon-1.png`,
    alt: "",
    images: [
      {
        src: `${mediaStorageBucketUrl}/nico projects/home-remodel-icon-1.png`,
        alt: "",
      },
      {
        src: `${mediaStorageBucketUrl}/nico projects/home-remodel-icon-2.png`,
        alt: "",
      },
      {
        src: `${mediaStorageBucketUrl}/nico projects/home-remodel-icon-3.png`,
        alt: "",
      },
    ],
    description: [
      `When first purchasing a home, our first course of action is \n
        demolition. Old floors, trims, cabinets, everything is torn out to make room for\n
         new materials. We also look at the structural integrity of the home to see\n
          which walls we can demolish. In this home, one of our goals was to open up\n
           the kitchen. In order to do that, we needed to expand the living room.`,
    ],
    subItems: [
      {
        type: "subitem",
        title: "Project breakdown",
        anchorId: "hr-123-project-breakdown",
        breakdownPoints: [
          "Demolition",
          "First Addition",
          "Wall and Fence Rebuild",
          "Second Addition: The Foundation",
          "Exterior Walls",
          "Roof Truss Construction",
          "Sheetrock & Siding",
          "Interior Finish",
          "Exterior Finish",
        ],
      },
      {
        type: "subitem",
        title: "Demolition",
        showScrollToTopButton: true,
        anchorId: "hr-123-demolition",
        description: [
          `When first purchasing a home, our first course of action is \n
        demolition. Old floors, trims, cabinets, everything is torn out to make room for\n
         new materials. We also look at the structural integrity of the home to see\n
          which walls we can demolish. In this home, one of our goals was to open up\n
           the kitchen. In order to do that, we needed to expand the living room.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/demolition_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/demolition_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/demolition_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/demolition_4.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/demolition_5.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "First Addition",
        showScrollToTopButton: true,
        anchorId: "hr-123-first-addition",
        description: [
          `To expand the kitchen, we needed to expand the living room. \n
        To do this, we needed to build an extension. We began with a demolition of the \n
        old wall and foundation. With that done, we prepared for and poured a new \n
        foundation.After inspection, we were free to build the frame for the walls, \n
        wrap them in plywood, and install the windows. After another inspection, \n
        we finally completed the extension with installing stucco and repainting \n
        the entirety of the exterior. With the extension finished, our aim shifted to \n
        rebuilding an eye-sore, the fence.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_4.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_5.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_6.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_7.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_8.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/first_addition_9.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "Wall and Fence Rebuild",
        showScrollToTopButton: true,
        anchorId: "hr-123-wall-and-fence-rebuild",
        description: [
          `Our challenge here was to incorporate the fence \n
        into the gradual slope of the street. As such, we constructed a wall \n
        to serve as a level foundation for the fence. First, we poured the \n
        foundation for the steel frame the fence would be built on. Then, we \n
        laid the concrete blocks through and around the frame, curving beautifully \n
        with the existing crosswalk. After pouring concrete into the blocks, we \n
        capped it off to complete the wall. Then, we welded the frame and bolted \n
        the new fence on.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/wall_fence_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/wall_fence_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/wall_fence_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/wall_fence_4.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/wall_fence_5.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/wall_fence_6.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "Second Addition: The Foundation",
        showScrollToTopButton: true,
        anchorId: "hr-123-second-addition-the-foundation",
        description: [
          `Afterwards, our focus shifted to the front of the home. \n
        With a vision for multiple room additions, we began excavating, digging \n
        trenches, and laying the frame for the foundation. After running the \n
        plumbing through the trenches, we covered the area with gravel and \n
        began preparation for concrete pouring. With the frame support bolts \n
        measured and secured, we poured the concrete foundation.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/foundation_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/foundation_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/foundation_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/foundation_4.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/foundation_5.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/foundation_6.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "Exterior Walls",
        showScrollToTopButton: true,
        anchorId: "hr-123-exterior-walls",
        description: [
          `After the concrete foundation cured, we removed \n
        the stucco from the existing walls to make way for framing. \n
        We do this in order to tie the new walls to the existing walls. \n
        We construct the walls one-by-one, starting at one end of the \n
        extension and wrapping around to the other side. Based on the plans, \n
        the structure is laid out, nailed together, and then lifted and \n
        placed onto the designated bolts. Then, the wall is bolted down \n
        and tied together with the existing frame. We repeat this process \n
        for all walls, adding support beams to stabilize and level the \n
        walls as we go. With the exterior walls done, we begin constructing \n
        the interior walls, and at the same time wrap the exterior walls with \n
        plywood.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_walls_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_walls_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_walls_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_walls_4.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "Roof Truss Construction",
        showScrollToTopButton: true,
        anchorId: "hr-123-roof-truss-construction",
        description: [
          `Because pre-built trusses were backordered, \n
        we opted to construct our own trusses. After doing so, we constructed \n
        and installed the ceiling joists, and wrapped the roof in plywood. \n
        Then, we built a ridge extension for the front door, and secured \n
        it to the existing roof. With the roof done, we simultaneously began \n
        working on the interior and exterior. On the interior: electrical lines, \n
        lighting, plumbing, ventilation, and insulation were all installed \n
        simultaneously. On the exterior; home wrap, flashing, and windows \n
        were installed. With all these completed, the extension was ready \n
        for sheet rock and siding installation.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/roof_truss_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/roof_truss_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/roof_truss_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/roof_truss_4.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/roof_truss_5.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/roof_truss_6.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "Sheetrock & Siding",
        showScrollToTopButton: true,
        anchorId: "hr-123-sheetrock-siding",
        description: [
          `While the interior was being wrapped in sheetrock, \n
        the exterior was being wrapped in siding. Half Hardy board, half \n
        composite siding, the exterior was then finished off with trims and \n
        caulking to get it primed for paint. Simultaneously, the interior sheet \n
        rock was finished and began preparation for the texture.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/sheetrock_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/sheetrock_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/sheetrock_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/sheetrock_4.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "Interior Finish",
        showScrollToTopButton: true,
        anchorId: "hr-123-interior-finish",
        description: [
          `After texture, laminate flooring is installed. \n
        Then, doors, trims, and baseboards are installed. In the bathrooms, 
        tile is placed. In the walk in closet, shelves are built. Then, everything 
        is caulked and painted. After paint, lighting, mirrors, and 
        cabinets are installed.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/interior_finish_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/interior_finish_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/interior_finish_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/interior_finish_4.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/interior_finish_5.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/interior_finish_6.png`,
            alt: "",
          },
        ],
      },
      {
        type: "subitem",
        title: "Exterior Finish",
        showScrollToTopButton: true,
        anchorId: "hr-123-exterior-finish",
        description: [
          `With the siding installed, the home is caulked, 
        primed, and painted. Then, the driveway is paved with stamped concrete, 
        and afterwards walkways are stamped around the home. In the backyard, 
        a patio is bring it all together.`,
        ],
      },
      {
        type: "subitem",
        images: [
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_finish_1.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_finish_2.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_finish_3.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_finish_4.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_finish_5.png`,
            alt: "",
          },
          {
            src: `${mediaStorageBucketUrl}/nico projects/home addition/exterior_finish_6.png`,
            alt: "",
          },
        ],
      },
    ],
  },
];
