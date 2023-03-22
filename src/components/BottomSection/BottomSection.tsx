import styles from "./styles/BottomSection.module.css";
import logo from "../../Assets/png/logo_bottom.png";
import { useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import yelp from "../../Assets/png/Yelp_Logo.png";
import instagram from "../../Assets/png/instagram_logo.png";
import { mainSelector } from "@/store/selectors";
import TwoColumns from "../TwoColumns/TwoColumns";
import { TContentItem } from "@/types/main";
import { pages } from "@/global-constants/global-constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPublishedContentItems } from "@/API/contentItemAPI";

const cities = [""
];

const HeroSection: React.FC = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="Builder Tech Design Company"
        width={180}
        height={50}
        priority
      />
      <div className={styles.BottomSectionHeroText}>
       Korotko o uslugi kompanii.{" "}
      </div>
    </div>
  );
};

const NavigationSection: React.FC = () => {
  return (
    <div className={styles.BottomSectionNavigation}>
      {pages.map((el: { title: string; href: string }, i: number) => {
        return (
          <Link as={el.href} href={el.href} key={i}>
            <div className={styles.BottomSectionMenuItem}>{el.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

const ServicesSection: React.FC<{ style?: React.CSSProperties }> = ({
  style,
}) => {
  const [services, setServices] = useState<TContentItem[]>([]);

  useEffect(() => {
    getPublishedContentItems("service-item").then((result) => {
      if (result) {
        const data = result?.data?.contentItems;
        if (data && data.length > 0) {
          setServices(data);
        }
      }
    });
  }, []);

  return (
    <div className={styles.BottomSectionServicesContainer} style={style}>
      {services.map((el: TContentItem, i: number) => {
        return (
          <Link as={`/services/${el.slug}`} href="/services/[slug]" key={i}>
            <div className={styles.BottomSectionMenuItem}>{el.shortTitle}</div>
          </Link>
        );
      })}
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div>
      <h3 style={{ marginTop: "0" }}>Contact Us</h3>
      <div
        style={{ marginTop: "20px", fontSize: "0.8em", cursor: "pointer" }}
        onClick={() => window.open("tel:9367662448")}
      >
        (936)-766-2448
      </div>
      <Link color="inherit" href="">
        <div style={{ marginTop: "20px", fontSize: "0.8em" }}>
          buildertechdesign@gmail.com
        </div>
      </Link>
      <div style={{ marginTop: "20px", fontSize: "0.8em" }}>
          Our office : Magnolia
        </div>

      <h3 style={{ marginTop: "30px" }}>Visit Us</h3>
      <div>
        <div className={styles.BottomSectionSocialMediaContainer}>
          <div style={{ marginTop: "10px" }}>
            <Link
              color="inherit"
              href="https://www.facebook.com/profile.php?id=100086621727375&mibextid=LQQJ4d"
            >
              <FacebookIcon />
            </Link>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Link color="inherit" href="https://goo.gl/maps/w2iw9NExMf2sHGwJA">
              <GoogleIcon />
            </Link>
          </div>
          <div style={{ marginTop: "11px" }}>
            <Link
              color="inherit"
              href="https://www.facebook.com/profile.php?id=100086621727375&mibextid=LQQJ4d"
            >
              <Image
       src={instagram}
        alt="Builder Tech Design instagram"
        width={22}
        height={22}
        priority
      />
            </Link>
          </div>
          <div style={{ marginTop: "8px" }}>
            <Link
              color="inherit"
              href="https://www.yelp.com/not_recommended_reviews/nico-pro-construction-citrus-heights"
            >
              <Image
                src={yelp}
                alt="builder tech design yelp"
                width={50}
                height={25}
                priority
              />
            </Link>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

const ServingCities: React.FC = () => {
  return (
    <div className={styles.ServingCities}>
      <div className={styles.ServingCitiesElement}></div>
      {cities.map((el: string, i: number) => {
        return (
          <div className={styles.ServingCitiesElement} key={i}>
            {el}
          </div>
        );
      })}
    </div>
  );
};

export const BottomSection: React.FC = () => {
  const { screenWidth } = useSelector(mainSelector).MainReducer;
  return (
    <section className={styles.BottomSection}>
      {screenWidth > 800 ? (
        <TwoColumns
          left={
            <TwoColumns left={<HeroSection />} right={<NavigationSection />} />
          }
          right={
            <TwoColumns left={<ServicesSection />} right={<ContactSection />} />
          }
        />
      ) : (
        <div>
          <HeroSection />
          <NavigationSection />
          <ServicesSection style={{ margin: "10px 0 30px 0" }} />
          <ContactSection />
        </div>
      )}
      <ServingCities />
    </section>
  );
};
