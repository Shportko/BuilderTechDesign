import { uploadMainImageToStorage } from "@/API/contentItemAPI";
import CustomButton from "@/components/CustomButton/CustomButton";
import { CustomTextInput } from "@/components/CustomTextInput";
import { WithLabel } from "@/components/WithLabel";
import { addToast } from "@/store/toast/actions";
import { TContentItem } from "@/types/main";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/MainImageComponent.module.css";

export default function MainImageComponent({
  item,
  onSubmit,
}: {
  item: TContentItem;
  onSubmit: () => void;
}) {
  const dispatch = useDispatch();

  const src = item?.image;
  const [image, setImage] = useState<string | Blob>();
  const [createObjectURL, setCreateObjectURL] = useState("");
  const [imageAlt, setImageAlt] = useState<string>("");

  useEffect(() => {
    if (item?.alt) {
      setImageAlt(item.alt);
    }
  }, [item?.alt]);

  const uploadToClient = useCallback((event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  }, []);

  const uploadToServer = useCallback(() => {
    if (image && item?._id) {
      uploadMainImageToStorage(
        image,
        item._id,
        imageAlt,
        item?.imageKey || "test"
      )
        .then((res) => {
          dispatch(addToast({ message: "Uploaded", statusCode: "200" }));
          setImage("");
          onSubmit();
        })
        .catch((error) => {
          console.error(error);
          dispatch(
            addToast({
              message: "Error uploading main image. Try later",
              statusCode: "400",
            })
          );
        });
    }
  }, [image, item, imageAlt, onSubmit]);

  return (
    <div
      className={styles.MainImageComponent}
      id={`${item?.anchorId}-main-image`}
    >
      <div className={styles.MainImageComponentTop}>
        {src && src.length > 0 && (
          <div className={styles.MainImageComponentTopLeft}>
            <img src={src} alt={item?.alt} />
          </div>
        )}
        <div className={styles.MainImageComponentTopRight}>
          <WithLabel label="Replace Image">
            <CustomButton onClick={(e) => e.stopPropagation()}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                placeholder="Replace Image"
                onChange={uploadToClient}
              />
            </CustomButton>
          </WithLabel>
          {image && (
            <>
              <div className={styles.MainImageComponentTopRightImageImage}>
                <img src={createObjectURL} alt={""} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.MainImageComponentBottom}>
        <WithLabel label="Image Alt*" offsetFromRow>
          <CustomTextInput
            placeholder="Type image alt here"
            inputValue={imageAlt}
            onChange={(value) => setImageAlt(value)}
          />
        </WithLabel>
        <div style={{ margin: "48px 10px" }}>
          <CustomButton
            type="save"
            size="medium"
            onClick={uploadToServer}
            disabled={!image || !imageAlt}
          >
            Upload
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
