import styles from "./styles/BottomSection.module.css";
import logo from "../../Assets/png/logo_bottom.png";
import { useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import yelp from "../../Assets/png/Yelp_Logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import { mainSelector } from "@/store/selectors";
import TwoColumns from "../TwoColumns/TwoColumns";
import { TContentItem } from "@/types/main";
import { pages } from "@/global-constants/global-constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
     BRINGING YOUR PROJECT TO LIFE{" "}
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
              <FacebookIcon onClick={() => window.open("https://www.facebook.com/profile.php?id=100086621727375&mibextid=LQQJ4d")} />
          </div>
          <div style={{ marginTop: "10px" }}>
              <GoogleIcon onClick={() => window.open("https://goo.gl/maps/w2iw9NExMf2sHGwJA")} />
          </div>
          <div style={{ marginTop: "11px" }}>
            <InstagramIcon onClick={() => window.open("https://instagram.com/builder_tech_design?igshid=YmMyMTA2M2Y=")} />
          </div>
          <div style={{ marginTop: "8px" }}>
              <Image
                src={yelp}
                alt="builder tech design yelp"
                width={50}
                height={25}
                priority
                onClick={() => window.open("https://goo.gl/maps/w2iw9NExMf2sHGwJA")} />           
          </div>
        </div>
        <div>
        </div>
      </div>
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
    </section>
  );
};
