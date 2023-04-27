import styles from "./styles/BottomSection.module.css";
import logo from "../../Assets/png/logo_bottom.png";
import { useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import yelp from "../../Assets/png/Yelp_Logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BusinessIcon from '@mui/icons-material/Business';
import { mainSelector } from "@/store/selectors";
import TwoColumns from "../TwoColumns/TwoColumns";
import { pages } from "@/global-constants/global-constants";
import Image from "next/image";
import Link from "next/link";



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
        BRINGING YOUR PROJECT TO LIFE
        Draftsman and 3D Rendering Firm{" "} </div>
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


const ContactSection: React.FC = () => {
  return (
    <div>
      <h3>Contact Us</h3>
      <div
        style={{ marginTop: "10px", fontSize: "1.0em", cursor: "pointer" }}
        onClick={() => window.open("tel:9367662448")}
      >
        <PhoneIphoneIcon /> (936)-766-2448
      </div>
      <Link color="inherit" href="">
        <div style={{ marginTop: "10px", fontSize: "0.9em" }}>
          <ForwardToInboxIcon /> buildertechdesign@gmail.com
        </div>
      </Link>
      <div style={{ marginTop: "10px", fontSize: "0.8em" }}>
       <BusinessIcon /> Our office : 33219 Forest West St. Magnolia TX 77354
      </div>
    </div>
  );
};

const VisitSection: React.FC = () => {
  return (
    <div>
      <h3>Visit Us</h3>
      <div>
        <div className={styles.BottomSectionSocialMediaContainer}>
          <div style={{ marginTop: "10px" }}>
            <FacebookIcon onClick={() => window.open("https://www.facebook.com/BuilderTechDesignTX")} />
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
              onClick={() => window.open("https://www.yelp.com/biz/builder-tech-design-magnolia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BottomSection: React.FC = () => {
  const { screenWidth } = useSelector(mainSelector).MainReducer;
  return (
    <section className={styles.BottomSection}>
      {screenWidth > 1300 ? (
        <TwoColumns
          left={
            <TwoColumns left={<HeroSection />} right={<NavigationSection />
            } />
          }
          right={
            <TwoColumns left={< ContactSection/>} right={<  VisitSection/>} />
          }
        />
      ) : (
        <div>
          <HeroSection />
          <ContactSection />
          <VisitSection/>
        </div>
      )}
    </section>
  );
};

