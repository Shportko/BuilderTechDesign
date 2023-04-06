import Head from "next/head";
import styles from "@/styles/Home.module.css";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useSelector } from "react-redux";
import { mainSelector } from "@/store/selectors";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Image from "next/image";
import MapHome from "../Assets/png/map_home.png";
import GoogleLogo from "../Assets/png/google_logo.png";
import FacebookLogo from "../Assets/png/facebook_logo.png";
import YelpLogo from "../Assets/png/Yelp_Logo.png";
import { StarsRate } from "@/components/StartsRate/StartsRate";
import { services as servicesMock } from "@/MockData/services";
import { TContentItem } from "@/types/main";
import { InferGetStaticPropsType } from "next";
import { projects as projectsMock } from "@/MockData/portfolio";
import { customerReviews as customerReviewsMock } from "@/MockData/reviews";
import { blogItems as blogItemsMock } from "@/MockData/blog";
import { ContactForm } from "@/components/ContactForm";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import { Footer } from "@/components/Footer/Footer";
import Link from "next/link";
import { useRouter } from "next/router";




function Home({
  servicesData,
  servicesPageContent,
}: // projectsData,
  InferGetStaticPropsType<typeof getStaticProps>) {
  const { screenWidth } = useSelector(mainSelector).MainReducer;
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home | Builder Tech Design</title>
        <meta
          name="description"
          content="Builder Tech Design – Bringing your project to life!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{ margin: "0", padding: "0" }}>
          {/* hero section */}
          <section className={styles.herosectionbanner}>
            <h2>Our Promise To You</h2>
            <div className={styles.herosectionmotto}>
              To serve you by having qualified services and practices that you can trust!
            </div>
            <div className={styles.topbuttonscontainer}>
              <div className={styles.contactusbutton}>
                <Link as={`/contact-us`} href="/contact-us">
                  <CustomButton
                    style={{ padding: "10px 20px" }}
                    type="white-filled"
                  >
                    Contact Us
                  </CustomButton>
                </Link>
              </div>
              <div className={styles.ourservicesbutton}>
                <Link as={`/services`} href="/services">
                  <CustomButton
                    style={{ padding: "10px 20px" }}
                    type="white-stroke"
                  >
                    Our Services
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className={styles.midcontainer}>
              <ImageCarousel services={servicesData} />
            </div>
          </section>
          {/* review summary section */}
          <section className={styles.ReviewSummarySection}>
              <div className={styles.ReviewSummarySectionCard} onClick={() => window.open("https://goo.gl/maps/w2iw9NExMf2sHGwJA")}>
                <div className={styles.ReviewSummarySectionCardImageBox}>
                  <Image
                    src={GoogleLogo}
                    alt="google logo"
                    width={80}
                    height={25}
                    priority />
                </div>
                <div className={styles.ReviewSummarySectionCardImageBox}>
                  <StarsRate
                    readonly={true}
                    size={"small"}
                    rate={5}
                    style={{ fontSize: "0.7em" }}
                  />
                </div>
                <div className={styles.ReviewSummarySectionCardRate}>5/5</div>
                <div className={styles.ReviewSummarySectionCardText}>
                  Read Reviews
                </div>
              </div>
              <div className={styles.ReviewSummarySectionCard} onClick={() => window.open("https://goo.gl/maps/w2iw9NExMf2sHGwJA")}>
                <div className={styles.ReviewSummarySectionCardImageBox}>
                  <Image
                    src={YelpLogo}
                    alt="yelp logo"
                    width={75}
                    height={25}
                    priority
                  />
                </div>
                <div className={styles.ReviewSummarySectionCardImageBox}>
                  <StarsRate
                    readonly={true}
                    size={"small"}
                    rate={5}
                    style={{ fontSize: "0.7em" }}
                  />
                </div>
                <div className={styles.ReviewSummarySectionCardRate}>5/5</div>
                <div className={styles.ReviewSummarySectionCardText}>
                  Read Reviews
                </div>
              </div>
              <div className={styles.ReviewSummarySectionCard} onClick={() => window.open("https://goo.gl/maps/w2iw9NExMf2sHGwJA")}>
                <div className={styles.ReviewSummarySectionCardImageBox}>
                  <Image
                    src={FacebookLogo}
                    alt="facebook logo"
                    width={80}
                    height={17}
                    priority
                  />
                </div>
                <div className={styles.ReviewSummarySectionCardImageBox}>
                  <StarsRate
                    readonly={true}
                    size={"small"}
                    rate={5}
                    style={{ fontSize: "0.7em" }}
                  />
                </div>
                <div className={styles.ReviewSummarySectionCardRate}>5/5</div>
                <div className={styles.ReviewSummarySectionCardText}>
                  Read Reviews
                </div>
              </div>
          </section>
          {/* welcome section */}
          <section className={styles.WelcomeSection}>
            <div className={styles.WelcomeSectionLeft}>
              <div className={styles.WelcomeSectionTitleBox}>
                <h2>Welcome to </h2>
                <h2>Builder Tech Design</h2>
                <div className={styles.WelcomeSectionDivider}></div>
              </div>
              <h3 className={styles.h2text}>Our team</h3>
              <span>
              With over four years of experience in the Interior Design industry, we are more than capable of bringing your ideas to life. The skilled team at Builder Tech Design is specialized in providing cost effective designs for all types of houses, villas, resorts and commercial properties. Our goal is to provide you with a valuable return on investment (RoI) as well as satisfied clients.{" "}
              </span>
            </div>
            <div className={styles.WelcomeSectionRight}>
            <h3 className={styles.h2text}>We offer</h3>
              <span>
              Builder Tech Design is a professional firm providing custom design services to residential builders, community planners and commercial developers. We offer drafting, planning and landscape design services to help you create the perfect space for your clients with minimal cost investment.{" "}
              </span>
            </div>
          </section>
          {/* services section */}
          <section className={styles.ServicesSection}>
            <h2>Our services</h2>
            <div className={styles.WelcomeSectionDivider}></div>
            <div className={styles.ServicesSectionMotto}>
              <h3>Bringing your project to life</h3>
            </div>
            <div className={styles.ServicesSectionContainer}>
              {servicesData?.slice(0, 10).map((el: TContentItem, i: number) => {
                return (
                  <Link
                    as={`/services/${el.slug}`}
                    href="/services/[slug]"
                    key={i}
                  >
                    {screenWidth > 800 ? (
                      <div className={styles.ServicesSectionItem}>
                        {el?.images && el.images.length > 0 ? (
                          <img
                            src={el.images[0]?.src}
                            alt={el.images[0]?.alt}
                          />
                        ) : (
                          <img src={el?.image} alt={el?.alt} />
                        )}
                        <div className={styles.ServicesSectionItemBottom}>
                          {el?.shortTitle}
                        </div>
                      </div>
                    ) : (
                      <div style={{ margin: "10px 10px"}}>
                         <Link as={`/services/${el.slug}`} href="/services/[slug]" key={i}>
                            <div className={styles.BottomSectionMenuItemMobile}>            
                              {el.shortTitle}
                            </div>
                        </Link>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
            <div className={styles.ServicesSectionBottomButton}>
              <Link as={`/services`} href="/services">
                <CustomButton style={{ padding: "10px 20px" }} type="white-stroke" >
                    Read More
                 </CustomButton>
              </Link>
            </div>
            {servicesPageContent?.description &&
              servicesPageContent.description.length > 0 &&
              servicesPageContent.description?.map(
                (elem: string, ind: number) => {
                  return (
                    <div className={styles.HomePageTextItem} key={ind}>
                      {elem}
                    </div>
                  );
                }
              )}
          </section>
          {/* contact section */}
          <section className={styles.ContactSection}>
            <div className={styles.ContactSectionMapContainer}>
              <div className={styles.ContactSectionMapContainerForm}>
                <ContactForm />
              </div>
              <Image
                src={MapHome}
                alt="Tech Design Company in Houston"
              />
            </div>
          </section>
          <BottomSection />
          <Footer />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let services: TContentItem[] | null = null;
  let servicesPageContent: TContentItem | null = null;
  let projects: TContentItem[] | null = null;
  let portfolioPageContent: TContentItem | null = null;
  let blogItems: TContentItem[] | null = null;


  return {
    props: {
      servicesData: services || servicesMock,
      servicesPageContent,
      projectsData: projects || projectsMock,
      portfolioPageContent,
      blogData: blogItems || blogItemsMock,
    },
  };
}

export default Home;
