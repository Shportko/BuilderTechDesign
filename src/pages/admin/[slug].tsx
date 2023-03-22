import {
  createContentItem,
  getContentItemAPI,
  publishContentItem,
  updateContentItem,
} from "@/API/contentItemAPI";
import CustomButton from "@/components/CustomButton/CustomButton";
import { CustomTextInput } from "@/components/CustomTextInput";
import TwoColumns from "@/components/TwoColumns/TwoColumns";
import { WithTitle } from "@/components/WithTitle";
import { TContentItem } from "@/types/main";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ContentSubitem from "../../components/ContentSubitem/ContentSubitem";
import {
  ContentItemTypesEnum,
  TContentSubitemSubtype,
} from "../../global-constants/constants";
import styles from "./styles/AdminPageEditor.module.css";
import { v4 } from "uuid";
import MultiImagesComponent from "../../components/MultiImagesComponent/MultiImagesComponent";
import React from "react";
import { checkFormValidation } from "@/utils/FormValidator";
import ContentItemDescriptionBlock from "@/components/ContentItemDescriptionBlock/ContentItemDescriptionBlock";
import { useDispatch } from "react-redux";
import pagePreviewDialog from "@/components/dialogs/PagePreviewDialog/PagePreviewDialogAction";
import { addToast } from "@/store/toast/actions";
import HintField from "@/components/HintField/HintField";
import SpeedDialMenu from "@/components/SpeedDialMenu/SpeedDialMenu";
import Page from "@/components/Page/Page";

export type TAdminPageEditorState = {
  page: TContentItem;
  pageFieldsRequired: { [key: string]: boolean | string };
  pageFieldsErrors: { [key: string]: boolean | string | undefined };
  isFormDirty: boolean;
};

export default function AdminPageEditor() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("nico-pro-access-token");
    const asPath = router.asPath;
    if (!accessToken) {
      router.push(`/login?next=${asPath}`);
    }
  }, []);

  const dispatch = useDispatch();
  const saveTimer: any = useRef(null);
  const [item, setItem] = useState<TContentItem>();

  const isPageDetails = useMemo(() => {
    return (
      item?.type === ContentItemTypesEnum.BLOG_PAGE_DETAILS ||
      item?.type === ContentItemTypesEnum.SERVICE_PAGE_DETAILS ||
      item?.type === ContentItemTypesEnum.PORTFOLIO_PAGE_DETAILS
    );
  }, [item]);

  const [state, setState] = useState<TAdminPageEditorState>({
    page: { type: "subitem", status: "draft" },
    pageFieldsRequired: {
      slug: "Slug is required",
      anchor: false,
      shortTitle: false, //isPageDetails ? false : "Short Title is required",
      title: "Title is required",
      subtitle: false,
      metaTitle: "Meta Title is required",
      metaDescription: "Meta Description is required",
      description: "Description is required",
    },
    pageFieldsErrors: {
      slug: undefined,
      anchor: undefined,
      shortTitle: undefined,
      title: undefined,
      subtitle: undefined,
      metaTitle: undefined,
      metaDescription: undefined,
      description: undefined,
    },
    isFormDirty: false,
  });

  const [tag, setTag] = useState<string>("");

  const getContentItemDetails = useCallback(() => {
    const slug = router.query.slug;
    slug &&
      getContentItemAPI(slug)
        .then((result) => {
          const item = result.data?.contentItem;
          if (item) {
            setState((prevState: TAdminPageEditorState) => ({
              ...prevState,
              page: item,
            }));
            setItem(item);
          }
        })
        .catch((error) => console.error(error));
  }, [router?.query]);

  useEffect(() => {
    getContentItemDetails();
  }, []);

  useEffect(() => {
    if (JSON.stringify(item) !== JSON.stringify(state.page)) {
      setState((prevState: TAdminPageEditorState) => ({
        ...prevState,
        isFormDirty: true,
      }));
    } else {
      setState((prevState: TAdminPageEditorState) => ({
        ...prevState,
        isFormDirty: false,
      }));
    }
  }, [JSON.stringify(item), JSON.stringify(state.page)]);

  useEffect(() => {
    if (!state.isFormDirty) return;
    if (state?.page) {
      saveTimer?.current && clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        handleSaveBasicDetails();
      }, 2000);
    }
    return () => saveTimer?.current && clearTimeout(saveTimer.current);
  }, [state?.page, saveTimer.current, state.isFormDirty]);

  const handleSaveBasicDetails = useCallback(() => {
    const { errors, isAnyError } = checkFormValidation({
      page: state.page,
      pageFieldsRequired: state.pageFieldsRequired,
    });
    if (isAnyError) {
      setState((prevState: TAdminPageEditorState) => ({
        ...prevState,
        pageFieldsErrors: errors,
      }));
    } else {
      updateContentItem(state.page)
        .then(() => {
          getContentItemDetails();
          dispatch(addToast({ message: "Saved", statusCode: "200" }));
        })
        .catch((error) => {
          console.error("Update Content Item error", error);
          dispatch(
            addToast({
              message: "Error updating content item. Try later",
              statusCode: "500",
            })
          );
        });
      setState((prevState: TAdminPageEditorState) => ({
        ...prevState,
        pageFieldsErrors: {},
      }));
    }
  }, [state.page, state.pageFieldsRequired, getContentItemDetails]);

  // const handleCancel = useCallback(() => {
  //   item &&
  //     setState((prevState: TAdminPageEditorState) => ({
  //       ...prevState,
  //       page: item,
  //       pageFieldsErrors: {},
  //     }));
  // }, [item]);

  const handleCreateSubitem = useCallback(
    (subtype: TContentSubitemSubtype) => {
      item &&
        createContentItem({
          type: "subitem",
          status: "draft",
          slug: v4(),
          parentItemId: item._id,
          subtype,
          anchorId: v4(),
          style: JSON.stringify({
            width: "100%",
          }),
        })
          .then(() => {
            getContentItemDetails();
            dispatch(addToast({ message: "Created", statusCode: "200" }));
          })
          .catch((error) => {
            console.error("Create Content Item error", error);
            dispatch(
              addToast({
                message: "Error creating content item. Try later",
                statusCode: "500",
              })
            );
          });
    },
    [item, getContentItemDetails]
  );

  const setDescriptionData = (data: string[]) => {
    setState((prevState: TAdminPageEditorState) => ({
      ...prevState,
      page: {
        ...state.page,
        description: data,
      },
    }));
  };

  const handlePublishContentItem = useCallback(() => {
    if (state.page?._id) {
      publishContentItem(state.page._id)
        .then(() => {
          getContentItemDetails();
          dispatch(addToast({ message: "Published!", statusCode: "200" }));
        })
        .catch((error) => {
          console.error("Publish content item error", error);
          dispatch(
            addToast({
              message: "Error publishing content item. Try later",
              statusCode: "500",
            })
          );
        });
    }
  }, [state.page, getContentItemDetails]);

  const handleSaveNewTag = useCallback(() => {
    if (state.page._id) {
      let newTags = [tag];
      if (state.page.tags) {
        newTags = [...newTags, ...state.page.tags];
      }
      updateContentItem({ tags: newTags, _id: state.page._id })
        .then(() => {
          getContentItemDetails();
          setTag("");
          dispatch(addToast({ message: "Tag added", statusCode: "200" }));
        })
        .catch((error) => {
          console.error("Update Content Item tags error", error);
          dispatch(
            addToast({
              message: "Error updating content item tags. Try later",
              statusCode: "500",
            })
          );
        });
    }
  }, [tag, state.page]);

  const handleDeleteTag = useCallback(
    (tag: string) => {
      if (state.page._id && state.page.tags) {
        const newTags = state.page.tags.filter((el) => el !== tag);

        updateContentItem({ tags: newTags, _id: state.page._id })
          .then(() => {
            getContentItemDetails();
            setTag("");
            dispatch(addToast({ message: "Tag deleted", statusCode: "400" }));
          })
          .catch((error) => {
            console.error("Update Content Item: Delete tags error", error);
            dispatch(
              addToast({
                message:
                  "Error updating content item: deleting tags. Try later",
                statusCode: "500",
              })
            );
          });
      }
    },
    [state.page]
  );

  const pageToGoBack = useMemo(() => {
    switch (state.page.type) {
      case "service-item":
      case "service-page-details":
        return "services";
      case "portfolio-item":
      case "portfolio-page-details":
        return "portfolio";
      case "blog-item":
      case "blog-page-details":
        return "blog";
      default:
        return "services";
    }
  }, [state.page.type]);

  return (
    <>
      <Head>
        <title>Admin Page Editor | Nico Pro Construction</title>
        <meta
          name="description"
          content="Everything You Need to Know About our Construction Company's Services "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page className={styles.Main} style={{ marginBottom: "200px" }}>
        {router.isFallback ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={styles.TopControlsContainer}>
              <Link
                href={{
                  pathname: "/admin",
                  query: `page=${pageToGoBack}`,
                }}
              >
                <div
                  className={styles.TopControlBack}
                  onClick={(e) => e.stopPropagation()}
                >
                  {"< Back to Admin Page"}
                </div>
              </Link>
              <div className={styles.TopControlsContainerRight}>
                <div>
                  <CustomButton
                    disabled={state.isFormDirty}
                    type="purple-filled"
                    onClick={() =>
                      dispatch(pagePreviewDialog({ item: state.page }))
                    }
                  >
                    Page Preview
                  </CustomButton>
                </div>
                <div style={{ margin: "0 0 0 20px" }}>
                  <CustomButton
                    disabled={
                      state.isFormDirty || state.page.status === "published"
                    }
                    type="save"
                    onClick={handlePublishContentItem}
                  >
                    Publish changes
                  </CustomButton>
                </div>
              </div>
            </div>
            {/* Editor */}
            <div className={styles.MainContainer}>
              <WithTitle title="Basic Details" noPadding>
                <div style={{ padding: "20px" }}>
                  <TwoColumns
                    left={
                      <TwoColumns
                        left={
                          <CustomTextInput
                            labelProps={{ label: "Content Item Type*" }}
                            disabled
                            offsetFromRow
                            inputValue={state.page?.type}
                          />
                        }
                        right={
                          <CustomTextInput
                            labelProps={{ label: "Content Item Status*" }}
                            disabled
                            offsetFromRow
                            inputValue={state.page?.status}
                          />
                        }
                      />
                    }
                    right={
                      <CustomTextInput
                        offsetFromRow
                        labelProps={{ label: "Slug*" }}
                        placeholder="Enter phrase separated by hyphen (my-test-slug)"
                        inputValue={state.page?.slug}
                        disabled={isPageDetails}
                        onChange={(v) =>
                          setState((prevState: TAdminPageEditorState) => ({
                            ...prevState,
                            page: {
                              ...state.page,
                              slug: v,
                            },
                          }))
                        }
                        error={state.pageFieldsErrors["slug"]}
                      />
                    }
                  />
                  {!isPageDetails && (
                    <TwoColumns
                      left={
                        <CustomTextInput
                          offsetFromRow
                          labelProps={{ label: "Anchor" }}
                          placeholder="Type your text here"
                          inputValue={state.page?.anchorId}
                          onChange={(v) =>
                            setState((prevState: TAdminPageEditorState) => ({
                              ...prevState,
                              page: {
                                ...state.page,
                                anchorId: v,
                              },
                            }))
                          }
                          error={state.pageFieldsErrors["anchor"]}
                        />
                      }
                      right={
                        <CustomTextInput
                          offsetFromRow
                          labelProps={{ label: "Short Title*" }}
                          placeholder="Type your text here"
                          inputValue={state.page?.shortTitle}
                          onChange={(v) =>
                            setState((prevState: TAdminPageEditorState) => ({
                              ...prevState,
                              page: {
                                ...state.page,
                                shortTitle: v,
                              },
                            }))
                          }
                          error={state.pageFieldsErrors["shortTitle"]}
                        />
                      }
                    />
                  )}
                  <CustomTextInput
                    offsetFromRow
                    labelProps={{ label: "Title*" }}
                    placeholder="Type your text here"
                    inputValue={state.page?.title}
                    onChange={(v) =>
                      setState((prevState: TAdminPageEditorState) => ({
                        ...prevState,
                        page: {
                          ...state.page,
                          title: v,
                        },
                      }))
                    }
                    error={state.pageFieldsErrors["title"]}
                  />
                  <CustomTextInput
                    offsetFromRow
                    labelProps={{ label: "Meta Title*" }}
                    placeholder="Type your text here"
                    inputValue={state.page?.metaTitle}
                    onChange={(v) =>
                      setState((prevState: TAdminPageEditorState) => ({
                        ...prevState,
                        page: {
                          ...state.page,
                          metaTitle: v,
                        },
                      }))
                    }
                    error={state.pageFieldsErrors["metaTitle"]}
                  />
                  <CustomTextInput
                    offsetFromRow
                    labelProps={{ label: "Meta Description*" }}
                    placeholder="Type your text here"
                    inputValue={state.page?.metaDescription}
                    multiline
                    multilineModeProps={{ rows: 4 }}
                    onChange={(v) =>
                      setState((prevState: TAdminPageEditorState) => ({
                        ...prevState,
                        page: {
                          ...state.page,
                          metaDescription: v,
                        },
                      }))
                    }
                    error={state.pageFieldsErrors["metaDescription"]}
                  />

                  <ContentItemDescriptionBlock
                    data={state.page.description || [""]}
                    setData={setDescriptionData}
                    error={state.pageFieldsErrors["description"]}
                    allowOneParagraphOnly={true}
                    showTopControls={false}
                    showLayoutControls={false}
                    underLabelNode={
                      <HintField type="success">
                        {
                          "This description in used near all icons in Home, Services, Portfolio and Blog pages"
                        }
                      </HintField>
                    }
                  />
                  {!isPageDetails && (
                    <>
                      <WithTitle
                        noPadding
                        title="Tags"
                        className={styles.AdminPageEditorMainImageAndTags}
                      >
                        <TwoColumns
                          left={
                            <div
                              className={styles.AdminPageEditorTagsContainer}
                            >
                              <HintField type="success">
                                {
                                  "Tags are used in Home page section: Latest Projects: Project Card"
                                }
                              </HintField>
                              <div style={{ display: "flex" }}>
                                <CustomTextInput
                                  placeholder="Type the tag and press Save"
                                  onChange={(v) => setTag(v)}
                                  inputValue={tag}
                                />
                                <div
                                  style={{
                                    marginLeft: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    height: "38px",
                                  }}
                                >
                                  <div>
                                    <CustomButton
                                      size="medium"
                                      onClick={handleSaveNewTag}
                                      disabled={tag === ""}
                                    >
                                      Save
                                    </CustomButton>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  styles.AdminPageEditorTagsContainerTags
                                }
                              >
                                {state.page?.tags?.map(
                                  (tag: string, i: number) => {
                                    return (
                                      <div key={i}>
                                        {tag !== "" && (
                                          <div
                                            className={
                                              styles.AdminPageEditorTagsContainerTagsTag
                                            }
                                          >
                                            <div
                                              className={
                                                styles.AdminPageEditorTagsContainerTagsTagText
                                              }
                                            >
                                              {tag}
                                            </div>
                                            <div
                                              className={
                                                styles.AdminPageEditorTagsContainerTagsTagCloseButton
                                              }
                                              onClick={() =>
                                                handleDeleteTag(tag)
                                              }
                                            >
                                              x
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          }
                        />
                      </WithTitle>
                      {/* <div
                    style={{
                      borderBottom: "1px solid grey",
                      color: "transparent",
                      margin: "30px 0",
                    }}
                  >
                    -
                  </div> */}
                    </>
                  )}
                  <WithTitle
                    noPadding
                    title="Icon Images"
                    className={styles.ContentSubitemImages}
                  >
                    <div style={{ padding: "20px" }}>
                      <HintField type="success">
                        {
                          "Miminum 1 icon image. If more are loaded: 1st is used as Icon as default"
                        }
                      </HintField>
                      <HintField type="warning">
                        {
                          "For portfolio content item: only 3 images should be loaded (no less, no more)"
                        }
                      </HintField>
                      <MultiImagesComponent
                        item={item || {}}
                        onSubmit={getContentItemDetails}
                        showStylingControls={false}
                      />
                    </div>
                  </WithTitle>
                </div>
              </WithTitle>

              <div id="subitems-container">
                <WithTitle
                  noPadding
                  title="Content"
                  style={{ position: "relative", paddingBottom: "20px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      margin: "0px 0 0 0",
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <div style={{ margin: "0 0 0 auto" }}>
                      <SpeedDialMenu
                        onSelect={(sybtype: TContentSubitemSubtype) =>
                          handleCreateSubitem(sybtype)
                        }
                      />
                    </div>
                  </div>
                  {state.page?.subItems && state.page.subItems.length > 0 ? (
                    <>
                      {state.page.subItems.map(
                        (subitem: TContentItem, i: number) => {
                          return (
                            <div style={{ padding: "0 20px" }} key={i}>
                              <ContentSubitem
                                subitem={subitem}
                                getContentItemDetails={getContentItemDetails}
                              />
                            </div>
                          );
                        }
                      )}
                    </>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "10px",
                      }}
                    >
                      <HintField>
                        {`Press "+" button to add a new content item`}
                      </HintField>
                    </div>
                  )}
                </WithTitle>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "0 10px 0 auto" }}>
                  <CustomButton
                    disabled={state.isFormDirty}
                    type="purple-filled"
                    onClick={() =>
                      dispatch(pagePreviewDialog({ item: state.page }))
                    }
                  >
                    Page Preview
                  </CustomButton>
                </div>
              </div>
            </div>
          </>
        )}
      </Page>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  let result = null;
  let item = null;
  try {
    result = await getContentItemAPI(slug);
    item = result?.data?.contentItem;
    return {
      props: {
        item,
      },
    };
  } catch (err) {
    console.error("NicoPro error getStaticProps - admin page [slug]", slug);
    return {
      props: {},
    };
  }
}
