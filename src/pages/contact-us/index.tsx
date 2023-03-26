import Head from "next/head";
import styles from "./styles/ContactUs.module.css";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import { Footer } from "@/components/Footer/Footer";
//import { mediaStorageBucketUrl } from "@/global-constants/global-constants";
import { ContactForm } from "@/components/ContactForm";
import { mainSelector } from "@/store/selectors";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { smoothScroll } from "@/utils/SmoothScroll";
import GoogleLogo from ".../Assets/png/google_logo.png";
import Image from "next/image";


export default function ContactUs() {
  const { screenWidth } = useSelector(mainSelector).MainReducer;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Contact Us | Builder Tech Design</title>
        <meta
          name="description"
          content="Everything You Need to Know About our Builder Tech Design Company's Services "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <div className={styles.ContactMainContainer}>
          {screenWidth < 800 && <ContactForm className="contact--form" />}
          <img
            src="/map_contact.png"
            alt="Tech Design Company in Houston"
/>
          {screenWidth > 800 && <ContactForm className="contact--form" />}
        </div>
      </main>
      <BottomSection />
      <Footer />
    </>
  );
}

