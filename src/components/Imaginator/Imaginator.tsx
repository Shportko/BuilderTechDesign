import { useState, useMemo } from "react";
import styles from "./Imaginator.module.css";
import Image from "next/image";

export type TImaginator = {
  images?: { src: string; alt: string }[];
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
};

export default function Imaginator({
  images,
  size = "medium",
  style,
}: TImaginator): JSX.Element {
  const [hoverMap, setHoverMap] = useState<{ [key: number]: boolean }>();
  const hoverMapSketch = useMemo(() => {
    const dict: { [key: number]: boolean } = {};
    images?.forEach((_, i: number) => {
      dict[i] = false;
    });
    return dict;
  }, [images]);

  return (
    <div className={styles.ImaginatorMedium} style={style}>
      {images &&
        images.map((image: { src: string; alt: string }, i: number) => {
          const newHoverMap: { [key: number]: boolean } = {};
          Object.keys(hoverMapSketch).forEach((_, el: number) => {
            if (el === i) {
              newHoverMap[el] = true;
            } else {
              newHoverMap[el] = false;
            }
          });
          const nothingHovered = !hoverMap;
          let className = `${styles.ImaginatorMediumImage}`;
          if (!nothingHovered && hoverMap[i] === true) {
            className = `${styles.ImaginatorMediumImage} ${styles.ImaginatorMediumImageHovered}`;
          }
          if (!nothingHovered && hoverMap[i] === false) {
            className = `${styles.ImaginatorMediumImage} ${styles.ImaginatorMediumImageUnhovered}`;
          }
          const customStyle: React.CSSProperties = {};
          if (i === 0) {
            customStyle.borderTopLeftRadius = "7px";
          }
          if (i === images.length - 1) {
            customStyle.borderTopRightRadius = "7px";
          }
          return (
            <Image
              key={i}
              src={image.src}
              alt={image.alt}
              className={className}
              onMouseEnter={() => setHoverMap(newHoverMap)}
              onMouseLeave={() => setHoverMap(undefined)}
              style={customStyle}
            />
          );
        })}
    </div>
  );
}
