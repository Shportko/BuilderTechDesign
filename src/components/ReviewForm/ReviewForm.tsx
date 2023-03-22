import { createReview } from "@/API/reviewAPI";
import { addToast } from "@/store/toast/actions";
import { TCustomerReviewItem } from "@/types/main";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { CustomTextInput } from "../CustomTextInput";
import { StarsRate } from "../StartsRate/StartsRate";
import { WithLabel } from "../WithLabel";

import styles from "./styles/ReviewForm.module.css";

const avatars = [
  "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc69RDFfMriqDCCmLHcpIvM9HoUlMJM8TzrenLiisKRXrVTJxBd8YNWSpC9h1fCSNxzPg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fjjYfJWcu4XyiNgEz08cpAqme93TePmnKXCscwJRNnMNyr4kS26iI16FctxRhW3J1Fo&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThs7zx0VIzI5bDV_HDCdmCvPvdq0PMZnOe7_Ixg2nLgi12o2PNaDOEEBJnKG500E9BfM&usqp=CAU",
  "https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3lOAn5GobaZcDFsWA_QjWOLuO1UXt9tP6B8GTPUZ4f2bsfg9yfKWnJ-Lw_sX0Hh0KB4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibMaCPHG06smpqc65Y_mL5vn1y-8AvT3rvs1knOZ87Ut0FQF8a8y-QT1Irrm8zPZODQM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSce9X87FwDBB2jHJu2hW4wPvmLefcX4PTo_saCTr7qT2GCPGodpkJHyXV-QFxLgue60&usqp=CAU",
];

export type TReviewForm = {
  style?: React.CSSProperties;
  className?: string;
};

type TReviewFormState = {
  rate?: number | undefined;
  name?: string;
  email?: string;
  title: string;
  text: string;
  isAvatarChecked: boolean;
  isSocialMediaChecked: boolean;
  checkedImageId: string;
  yelpLink: string;
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
};

const initialState = {
  rate: undefined,
  name: "",
  email: "",
  title: "",
  text: "",
  isAvatarChecked: false,
  isSocialMediaChecked: false,
  checkedImageId: "",
  yelpLink: "",
  facebookLink: "",
  instagramLink: "",
  linkedinLink: "",
};

export default function ReviewForm({ style, className }: TReviewForm) {
  const dispatch = useDispatch();

  const [state, setState] = useState<TReviewFormState>(initialState);

  const handleSubmit = useCallback(() => {
    const data: TCustomerReviewItem = {
      name: state.name,
      rate: state.rate || 5,
      title: state.title,
      text: state.text,
      email: state.email,
      photoUrl: state.checkedImageId,
      yelpLink: state.yelpLink,
      facebookLink: state.facebookLink,
      linkedinLink: state.linkedinLink,
      instagramLink: state.instagramLink,
    };
    createReview(data)
      .then((result) => {
        setState(initialState);
        dispatch(
          addToast({
            message: "Your review has been sent. Thank you!",
            statusCode: "200",
          })
        );
      })
      .catch((error) => {
        dispatch(
          addToast({
            message: "Something went wrong, please try later",
            statusCode: "400",
          })
        );
      });
  }, [state]);

  return (
    <section
      className={clsx(styles.ReviewForm, className)}
      style={style}
      id="review-form"
    >
      <h2>Leave your review</h2>
      <h4>Your feedback is important for us!</h4>
      <WithLabel label="Rate us">
        <StarsRate
          size="large"
          readonly={false}
          onChangeValue={(v) =>
            setState((prevState: TReviewFormState) => ({
              ...prevState,
              rate: v,
            }))
          }
        />
      </WithLabel>
      <WithLabel label="Name" offsetFromRow>
        <CustomTextInput
          placeholder="Name"
          style={{ backgroundColor: "#EFF4F8" }}
          inputValue={state.name}
          onChange={(v: string) => {
            setState((prevState: TReviewFormState) => ({
              ...prevState,
              name: v,
            }));
          }}
        />
      </WithLabel>
      <CustomTextInput
        placeholder="Email"
        style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
        inputValue={state.email}
        onChange={(v: string) => {
          setState((prevState: TReviewFormState) => ({
            ...prevState,
            email: v,
          }));
        }}
      />
      <CustomTextInput
        placeholder="Review title (optional)"
        style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
        inputValue={state.title}
        onChange={(v: string) => {
          setState((prevState: TReviewFormState) => ({
            ...prevState,
            title: v,
          }));
        }}
      />
      <CustomTextInput
        placeholder="Review text (required)"
        style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
        multiline
        multilineModeProps={{ rows: 5 }}
        inputValue={state.text}
        onChange={(v: string) => {
          setState((prevState: TReviewFormState) => ({
            ...prevState,
            text: v,
          }));
        }}
      />
      <div>
        <h4 style={{ margin: "20px auto 10px 0", textAlign: "left" }}>
          Advanced options
        </h4>
        <div style={{ display: "flex" }}>
          <div>
            <CustomButton
              style={{
                borderRadius: "2px",
                marginRight: "5px",
                padding: "3px 7px",
              }}
              type={state.isAvatarChecked ? "blue-filled" : "main-stroke"}
              size="small"
              onClick={() => {
                setState((prevState: TReviewFormState) => ({
                  ...prevState,
                  isAvatarChecked: !state.isAvatarChecked,
                }));
              }}
            >
              Avatar
            </CustomButton>
          </div>
          <div>
            <CustomButton
              style={{ borderRadius: "2px", padding: "3px 7px" }}
              size="small"
              onClick={() => {
                setState((prevState: TReviewFormState) => ({
                  ...prevState,
                  isSocialMediaChecked: !state.isSocialMediaChecked,
                }));
              }}
              type={state.isSocialMediaChecked ? "blue-filled" : "main-stroke"}
            >
              Social Media
            </CustomButton>
          </div>
        </div>
      </div>
      {state.isAvatarChecked && (
        <div>
          <h4 style={{ margin: "40px auto 10px 0", textAlign: "left" }}>
            Choose your avatar
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {avatars.map((el: string, i: number) => {
              const isImageSelected = state.checkedImageId === el;
              return (
                <div
                  key={i}
                  className={styles.AvatarPic}
                  onClick={() => {
                    setState((prevState: TReviewFormState) => ({
                      ...prevState,
                      checkedImageId: el,
                    }));
                  }}
                >
                  <img
                    alt="nico pro construction customer review avatar"
                    src={el}
                    style={
                      isImageSelected ? { border: "4px solid orange" } : {}
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {state.isSocialMediaChecked && (
        <div>
          <h4 style={{ margin: "40px auto 10px 0", textAlign: "left" }}>
            {`Fill out any link you'd like to be included`}
          </h4>
          <CustomTextInput
            placeholder="Yelp account link (optional)"
            style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
            inputValue={state.yelpLink}
            onChange={(v: string) => {
              setState((prevState: TReviewFormState) => ({
                ...prevState,
                yelpLink: v,
              }));
            }}
          />
          <CustomTextInput
            placeholder="Facebook account link (optional)"
            style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
            inputValue={state.facebookLink}
            onChange={(v: string) => {
              setState((prevState: TReviewFormState) => ({
                ...prevState,
                facebookLink: v,
              }));
            }}
          />
          <CustomTextInput
            placeholder="Instagram account link (optional)"
            style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
            inputValue={state.instagramLink}
            onChange={(v: string) => {
              setState((prevState: TReviewFormState) => ({
                ...prevState,
                instagramLink: v,
              }));
            }}
          />
          <CustomTextInput
            placeholder="Linkedin account link (optional)"
            style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
            inputValue={state.linkedinLink}
            onChange={(v: string) => {
              setState((prevState: TReviewFormState) => ({
                ...prevState,
                linkedinLink: v,
              }));
            }}
          />
        </div>
      )}
      <div style={{ width: "100%" }}>
        <CustomButton
          style={{ padding: "10px 0", marginTop: "30px", width: "100%" }}
          onClick={handleSubmit}
          disabled={!state.text}
        >
          Send
        </CustomButton>
      </div>
    </section>
  );
}
