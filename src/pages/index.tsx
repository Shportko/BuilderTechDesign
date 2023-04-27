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
          content="Builder Tech Design – Draftsman and 3D Rendering Firm - Bringing your project to life!"
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
              <div className={styles.ReviewSummarySectionCard} onClick={() => window.open("https://www.yelp.com/biz/builder-tech-design-magnolia?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)")}>
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
              <div className={styles.ReviewSummarySectionCard} onClick={() => window.open("https://www.facebook.com/BuilderTechDesignTX")}>
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
              <span className={styles.spantextmaindescription}>
                  <p className={styles.spantextmaindescription}>At Builder Tech Design, we have experience in bringing your project to life. Our team of experts is dedicated to providing the best service possible to ensure that your project is a success. We understand that every project is unique, and we work closely with our clients to create designs that meet their needs and exceed their expectations.</p>

                  <p>Based in Texas, we have extensive experience in the local design industry. We know the ins and outs of the area and have built relationships with local contractors to ensure that your project is completed on time and within budget. From residential to commercial projects, we have the expertise to bring your vision to life.</p>

                  <p>Our team takes a collaborative approach to design. We work closely with our clients to understand their needs and vision. We then use our expertise to create a design that is both functional and visually appealing. We use the latest design software and technology to ensure that our designs are accurate and comprehensive.</p>

                  <p>At Builder Tech Design, we pride ourselves on our commitment to quality and customer satisfaction. We understand that your project is important to you, and we are dedicated to making sure that it is a success. Trust us to bring your project to life.</p>             
               </span>
            </div>
            <div className={styles.WelcomeSectionRight}>
            <h3 className={styles.h2text}>We offer</h3>
              <span className={styles.spantextmaindescription}>
                  <p>At our drafting and 3D rendering firm, we are dedicated to bringing your project to life. We specialize in creating detailed drawings and 3D renderings that give you a clear picture of your project before construction even begins.</p>

                  <p>Our team of expert draftsmen uses the latest technology and software to create accurate and detailed drawings. We work closely with our clients to ensure that every detail is captured and that the final product is comprehensive and easy to understand.</p>

                  <p>We also offer a 3D rendering service that allows you to see your project in a realistic and detailed way. Our team uses advanced software to create realistic 3D models that give you a clear picture of what your project will look like once it`&apos;`s complete. This service is especially helpful for clients who need to make design decisions or want to see how different materials and finishes will look in their space.</p>

                  <p>Whether it`&apos;`s a commercial or residential project, our drafting and 3D rendering services can help bring your vision to life. We understand that every project is unique, and we work closely with our clients to ensure that every detail is captured and that the final product meets their needs and exceeds their expectations.</p>

                  <p>At our firm, we are committed to providing the best service possible. We understand that your project is important to you, and we are dedicated to making sure that it is a success. Trust us to bring your project to life with our expert drafting and 3D rendering services.</p>           
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
                    {screenWidth > 1300 ? (
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
