import styles from "./styles/MultiImagesComponent.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import { TContentItem, TImageItem } from "@/types/main";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  deleteImageFromStorage,
  updateImageAltOnServer,
  uploadItemImageToStorage,
} from "@/API/contentItemAPI";
import CustomButton from "@/components/CustomButton/CustomButton";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import { smoothScroll } from "@/utils/SmoothScroll";
import { CustomTextInput } from "@/components/CustomTextInput";
import { WithLabel } from "@/components/WithLabel";
import { useSelector } from "react-redux";
import { mainSelector } from "@/store/selectors";
import { useDispatch } from "react-redux";
import { addToast } from "@/store/toast/actions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LayoutControls from "../LayoutControls/LayoutControls";

export type TImagesOnClient = {
  image: string | Blob;
  imageObjectUrl: string;
  id: string;
  alt: string;
  orderNO: number;
};

export type TMultiImagesComponentState = {
  imagesOnClient: TImagesOnClient[];
  imagesUploadInProgress: boolean;
};

export default function MultiImagesComponent({
  item,
  onSubmit,
  onDelete,
  setStyle,
  styleData,
  showStylingControls = true,
}: {
  item: TContentItem;
  onSubmit: () => void;
  onDelete?: () => void;
  setStyle?: (style: string) => void;
  styleData?: string;
  showStylingControls?: boolean;
}) {
  const router = useRouter();
  const { Yoffset } = useSelector(mainSelector).MainReducer;
  const dispatch = useDispatch();

  const [state, setState] = useState<TMultiImagesComponentState>({
    imagesOnClient: [],
    imagesUploadInProgress: false,
  });
  const [expanded, setExpanded] = useState<boolean>(false);

  const uploadImagesToClient = (event: any) => {
    if (event.target?.files && event.target.files.length > 0) {
      const imagesOnClient: TImagesOnClient[] = [];
      for (let i = 0; i < event.target.files.length; i++) {
        const image: TImagesOnClient = {
          id: v4(),
          image: event.target.files[i],
          imageObjectUrl: URL.createObjectURL(event.target.files[i]),
          alt: "",
          orderNO: i,
        };
        imagesOnClient.push(image);
      }
      setState((prevState: TMultiImagesComponentState) => ({
        ...prevState,
        imagesOnClient,
      }));
    }
  };

  const clearImagesFromPreview = useCallback(() => {
    setState((prevState: TMultiImagesComponentState) => ({
      ...prevState,
      imagesOnClient: [],
    }));
  }, []);

  const deleteImageFromImagesOnClient = useCallback(
    (id: string) => {
      const imagesOnClient: TImagesOnClient[] = state.imagesOnClient.filter(
        (el: TImagesOnClient) => el.id !== id
      );
      setState((prevState: TMultiImagesComponentState) => ({
        ...prevState,
        imagesOnClient,
      }));
    },
    [state.imagesOnClient]
  );

  const uploadImagesToServer = useCallback(() => {
    const promises: any = [];
    if (state.imagesOnClient && state.imagesOnClient.length > 0) {
      for (let i = 0; i < state.imagesOnClient.length; i++) {
        promises.push(
          uploadItemImageToStorage(
            state.imagesOnClient[i].image,
            item._id || "",
            state.imagesOnClient[i].alt,
            state.imagesOnClient[i].orderNO
          )
        );
      }
    }
    return Promise.all(promises);
  }, [state.imagesOnClient, item]);

  const handleUploadImages = useCallback(() => {
    setState((prevState: TMultiImagesComponentState) => ({
      ...prevState,
      imagesUploadInProgress: true,
    }));

    uploadImagesToServer()
      .then((result) => {
        if (result && result.length > 0) {
          dispatch(addToast({ message: "Images uploaded", statusCode: "200" }));
          onSubmit();
          setState((prevState: TMultiImagesComponentState) => ({
            ...prevState,
            imagesOnClient: [],
            imagesUploadInProgress: false,
          }));
        } else {
          setState((prevState: TMultiImagesComponentState) => ({
            ...prevState,
            imagesUploadInProgress: false,
          }));
        }
      })
      .catch((error) => {
        setState((prevState: TMultiImagesComponentState) => ({
          ...prevState,
          imagesUploadInProgress: false,
        }));
        dispatch(
          addToast({ message: "Error uploading images", statusCode: "400" })
        );
        console.error(error);
      });
  }, [state.imagesOnClient, router, onSubmit]);

  const deleteImageOnServer = useCallback(
    (image: TImageItem) => {
      image._id &&
        image.imageKey &&
        deleteImageFromStorage({
          imageId: image._id,
          imageKey: image.imageKey,
        })
          .then((result) => {
            if (result.status === 200 || result.status === 201) {
              onSubmit();
              dispatch(addToast({ message: "Deleted", statusCode: "400" }));
            }
          })
          .catch((error) => {
            console.error(error);
            dispatch(
              addToast({
                message: "Error deleting image. Try later",
                statusCode: "400",
              })
            );
          });
    },
    [item, onSubmit]
  );

  const updateImageAlt = useCallback((image: TImageItem) => {
    if (image?._id) {
      updateImageAltOnServer({ imageAlt: image.alt, imageId: image._id })
        .then((result) => {
          if (result.status === 200 || result.status === 201) {
            dispatch(
              addToast({ message: "Image Alt Updated", statusCode: "200" })
            );
            router.replace(router.asPath).then(() => {
              setTimeout(() => {
                smoothScroll(Yoffset);
              }, 10);
            });
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(
            addToast({
              message: "Error updating image alt. Try later",
              statusCode: "400",
            })
          );
        });
    }
  }, []);

  const sortedImages = useMemo(() => {
    if (!item?.images || item.images.length === 0) return [];

    const result = item.images.sort((a: TImageItem, b: TImageItem) => {
      if (a?.orderNo && b?.orderNo) {
        return a.orderNo - b.orderNo;
      }
      return 1;
    });

    return result;
  }, [item?.images]);

  const allImagesOnClientHaveAlt = useMemo(() => {
    const result = state.imagesOnClient?.every(
      (el: TImagesOnClient) => el.alt && el.alt !== ""
    );
    return result;
  }, [state.imagesOnClient]);

  return (
    <div
      className={styles.MultiImagesComponent}
      id={`${item?.anchorId}-multi-images`}
    >
      <WithLabel
        label="Images"
        leftTopNode={
          showStylingControls && (
            <LayoutControls
              onChangeStyle={setStyle}
              styleData={styleData}
              showTextAlignmentData={false}
            />
          )
        }
        rightTopNode={
          <div style={{ display: "flex" }}>
            <div>
              <EditIcon
                className={styles.MultiImagesComponentEditIconButton}
                onClick={() => {
                  setExpanded(true);
                }}
              />
            </div>
            <div>
              <DeleteIcon
                className={styles.MultiImagesComponentDeleteIconButton}
                onClick={onDelete && onDelete}
              />
            </div>
          </div>
        }
      >
        {expanded ? (
          <>
            <div className={styles.MultiImagesComponentTopControls}>
              <div>
                <CustomButton onClick={(e) => e.stopPropagation()}>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    placeholder="Choose"
                    onChange={uploadImagesToClient}
                    multiple
                  />
                </CustomButton>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <CustomButton
                  type="main-stroke"
                  size="large"
                  style={{ height: "37px" }}
                  onClick={() => {
                    setExpanded(false);
                  }}
                >
                  Wrap
                </CustomButton>
              </div>
              <div style={{ margin: "0 0 0 auto" }}>
                <CustomButton
                  onClick={handleUploadImages}
                  type="save"
                  disabled={
                    !state.imagesOnClient?.length ||
                    state.imagesOnClient.length === 0 ||
                    !allImagesOnClientHaveAlt ||
                    state.imagesUploadInProgress
                  }
                >
                  Upload Images To Storage
                </CustomButton>
              </div>
            </div>

            <div className={styles.MultiImagesComponentPreviewContainerTop}>
              <h5
                style={{
                  marginTop: "30px",
                  padding: "5px",
                  backgroundColor: "white",
                  width: "fit-content",
                  margin: "0",
                }}
              >
                Images Preview
              </h5>
              {state?.imagesOnClient && state.imagesOnClient.length > 0 && (
                <div style={{ marginLeft: "20px" }}>
                  <CustomButton
                    size="small"
                    type="delete-stroke"
                    onClick={clearImagesFromPreview}
                    disabled={state.imagesUploadInProgress}
                  >
                    Clear All
                  </CustomButton>
                </div>
              )}
            </div>
            {state.imagesUploadInProgress && (
              <div style={{ margin: "30px" }} id={`loaded-images-${item._id}`}>
                Loading Images
                <LinearProgress color="primary" />
              </div>
            )}
            <div className={styles.MultiImagesComponentPreviewContainer}>
              {state.imagesOnClient && state.imagesOnClient.length > 0 ? (
                <>
                  {state.imagesOnClient?.map(
                    (el: TImagesOnClient, i: number) => {
                      return (
                        <div
                          className={
                            styles.MultiImagesComponentPreviewImageContainer
                          }
                          key={i}
                        >
                          <div
                            className={styles.MultiImagesComponentPreviewImage}
                          >
                            <div
                              className={
                                styles.MultiImagesComponentImageNumberLabel
                              }
                            >
                              {i + 1}
                            </div>
                            <img src={el.imageObjectUrl} />
                          </div>
                          <div style={{ width: "100%" }}>
                            <WithLabel label={`Image ${i + 1} alt (required*)`}>
                              <CustomTextInput
                                placeholder="Image alt"
                                defaultValue={el.alt}
                                inputValue={el.alt}
                                onChange={(value: string) => {
                                  el = {
                                    ...el,
                                    alt: value,
                                  };
                                  const filteredEelements =
                                    state.imagesOnClient.filter(
                                      (item: TImagesOnClient) =>
                                        item.id !== el.id
                                    );
                                  setState(
                                    (
                                      prevState: TMultiImagesComponentState
                                    ) => ({
                                      ...prevState,
                                      imagesOnClient: [
                                        ...filteredEelements,
                                        el,
                                      ].sort(
                                        (
                                          a: TImagesOnClient,
                                          b: TImagesOnClient
                                        ) => a.orderNO - b.orderNO
                                      ),
                                    })
                                  );
                                }}
                              />
                            </WithLabel>
                            <div style={{ margin: "10px 10px" }}>
                              <CustomButton
                                type="delete-stroke"
                                size="small"
                                onClick={() => {
                                  deleteImageFromImagesOnClient(el.id);
                                }}
                              >
                                Delete
                              </CustomButton>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "0.8em",
                    paddingBottom: "20px",
                  }}
                >
                  No images selected
                </div>
              )}
            </div>
            {state.imagesUploadInProgress && (
              <div style={{ margin: "30px" }} id={`loaded-images-${item._id}`}>
                Loading Images
                <LinearProgress color="primary" />
              </div>
            )}
            <h5
              style={{
                marginTop: "30px",
                padding: "5px",
                backgroundColor: "white",
              }}
            >
              Loaded Images
            </h5>
            <div className={styles.MultiImagesComponentLoadedContainer}>
              {sortedImages && sortedImages.length > 0 ? (
                <>
                  {sortedImages.map((el: TImageItem, i: number) => {
                    return (
                      <ImageComponentWithTextFieldAndControls
                        key={i}
                        el={el}
                        i={i}
                        deleteImageOnServer={deleteImageOnServer}
                        updateImageAlt={updateImageAlt}
                      />
                    );
                  })}
                </>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "0.8em",
                    paddingBottom: "20px",
                  }}
                >
                  No images uploaded on storage for this Content Subitem
                </div>
              )}
            </div>
          </>
        ) : (
          <div className={styles.MultiImagesComponentNoExpandedContainer}>
            <div
              className={styles.MultiImagesComponentNoExpandedContainerInternal}
            >
              {sortedImages && sortedImages.length > 0 && (
                <>
                  {sortedImages.map((el: TImageItem, i: number) => {
                    return (
                      <div
                        key={i}
                        className={
                          styles.MultiImagesComponentNoExpandedContainerInternalItem
                        }
                      >
                        <img src={el.src} alt={el.alt} />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
      </WithLabel>
    </div>
  );
}

type TImageComponentWithTextFieldAndControls = {
  el: TImageItem;
  i: number;
  deleteImageOnServer: (image: TImageItem) => void;
  updateImageAlt: (image: TImageItem) => void;
};

function ImageComponentWithTextFieldAndControls({
  el,
  i,
  deleteImageOnServer,
  updateImageAlt,
}: TImageComponentWithTextFieldAndControls) {
  const [state, setState] = useState<TImageItem>(el);
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  useEffect(() => {
    if (el.alt !== state.alt) {
      setIsFormDirty(true);
    } else {
      setIsFormDirty(false);
    }
  }, [el.alt, state.alt]);

  return (
    <div className={styles.MultiImagesComponentPreviewImageContainer} draggable>
      <div className={styles.MultiImagesComponentPreviewImage}>
        <div className={styles.MultiImagesComponentImageNumberLabel}>
          {i + 1}
        </div>
        <img src={state.src} alt={state.alt} />
      </div>
      <div style={{ width: "100%" }}>
        <WithLabel label={`Image ${i + 1} alt (required*)`}>
          <CustomTextInput
            placeholder="Image alt"
            defaultValue={state.alt}
            onChange={(value) =>
              setState((prevState: TImageItem) => ({
                ...prevState,
                alt: value,
              }))
            }
          />
        </WithLabel>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px 10px" }}>
            <CustomButton
              type="delete-stroke"
              size="small"
              onClick={() => {
                deleteImageOnServer(el);
              }}
            >
              Delete
            </CustomButton>
          </div>
          <div style={{ margin: "10px 10px" }}>
            <CustomButton
              type="main-stroke"
              size="small"
              onClick={() => {
                updateImageAlt(state);
              }}
              disabled={!isFormDirty || state.alt === ""}
            >
              Update ALT
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
