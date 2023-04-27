import { mainSelector } from "@/store/selectors";
import { TContentItem, TImageItem } from "@/types/main";
import { useSelector } from "react-redux";
import { Breakdown } from "../Breakdown";
import { StandardCarousel } from "../StandardCarousel";
import styles from "./styles/CustomPage.module.css";
import Image from "next/image";

export default function CustomPage({
  item,
  manualScreenSize,
}: {
  item: TContentItem;
  manualScreenSize?: number;
}) {
  const { screenWidth: screen } = useSelector(mainSelector).MainReducer;
  const screenWidth = manualScreenSize || screen;

  let mobileStyle: React.CSSProperties = {};
  if (manualScreenSize) {
    mobileStyle = {
      width: `${manualScreenSize}px`,
      margin: "auto",
      border: "1px solid lightgrey",
      padding: "20px",
      borderRadius: "5px",
      marginTop: "20px",
    };
  }

  const itemStyle = item?.style
    ? (JSON.parse(item.style) as React.CSSProperties)
    : {};

  return (
    <div
      className={styles.CustomPage}
      id={item?.anchorId}
      style={{
        ...itemStyle,
        ...mobileStyle,
      }}
    >
     <h1>{item?.title}</h1>
      {item?.subtitle && (
        <div className={styles.CustomPageDescription}>{item?.subtitle}</div>
      )}

      {item?.description &&
        typeof item.description !== "string" &&
        item.description?.length > 0 && (
          <div>
          </div>
        )}
      <div
        // style={{ display: "flex", flexWrap: "wrap", columnGap: "0px" }}
        className={styles.CustomPageSubitemsWrapper}
      >
        {item?.subItems?.map((el: TContentItem, i: number) => {
          const style = el?.style
            ? (JSON.parse(el.style) as React.CSSProperties)
            : {};
          const shouldBeCarousel =
            style?.width === "25%" ||
            style?.width === "33.33%" ||
            style?.width === "50%";

          const narrowItem =
            style?.width === "25%" ||
            style?.width === "33.33%" ||
            style?.width === "50%" ||
            style?.width === "66.66%";

          const styleFromProps = el?.style && JSON.parse(el.style);
          const styleDescr = {
            ...styleFromProps,
            padding: narrowItem && screenWidth > 1300 ? "0 20px" : "0px",
            width:
              narrowItem && screenWidth > 1300 ? styleFromProps?.width : "100%",
          };

          const pageSubitemItem = () => {
            switch (el?.subtype) {
              case "title":
                return (
                  <h2 style={el?.style && JSON.parse(el.style)} key={i}>
                    {el.title}
                  </h2>
                );
              case "description":
                return (
                  <>
                    {el?.description &&
                      typeof el.description !== "string" &&
                      el.description?.length > 0 && (
                        <div key={i} style={styleDescr}>
                          {el.description?.map((item: string, i: number) => {
                            return (
                              <p
                                className={styles.CustomPageTextItem}
                                key={i}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            );
                          })}
                        </div>
                      )}
                  </>
                );
              case "images":
                return (
                  <div key={i} className={styles.CustomPageImagesContainer}>
                    {screenWidth > 1300 && !shouldBeCarousel ? (
                      <div
                        className={styles.CustomPageImagesContainerInt}
                        style={el?.style && JSON.parse(el.style)}
                        key={i}
                      >
                        {el.images?.map((image: TImageItem, imgI: number) => {
                          return (
                            <div
                              key={imgI}
                              className={styles.CustomPageImage}
                              style={{
                                marginLeft: imgI === 0 ? "0" : "20px",
                              }}
                            >
                              <Image src={image.src} alt={image.alt} width={550} height={350}/>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <StandardCarousel
                        style={{ margin: "auto" }}
                        images={el.images}
                        key={i}
                      />
                    )}

                    {/* {el?.showScrollToTopButton && <div>To Top</div>} */}
                  </div>
                );
              case "list":
                return (
                  <div style={el?.style && JSON.parse(el.style)} key={i}>
                    <Breakdown
                      points={el.breakdownPoints}
                      //   id={topAnchorId}
                    />
                  </div>
                );
              case "action":
                return <></>;
            }
          };
          return <>{pageSubitemItem()}</>;
        })}
      </div>
    </div>
  );
}
