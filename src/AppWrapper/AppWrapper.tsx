import Header from "@/Features/Header/Header";
import { DialogList } from "@/Features/Dialog/DialogList";
import ToastMessage from "@/Features/ToastMessage/ToastMessage";
import { getScreenWidth, getYoffset } from "@/store/main/actions";
import { NextComponentType, NextPageContext } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export type TAppWrapper = {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
};

export default function AppWrapper({ Component, pageProps }: TAppWrapper) {
  const dispatch = useDispatch();

  const updateWindowSize = () => {
    dispatch(getScreenWidth(window.innerWidth));
  };

  const updateYoffset = () => {
    dispatch(getYoffset(window.pageYOffset));
  };

  useEffect(() => {
    updateWindowSize();
    updateYoffset();
    window.addEventListener("resize", updateWindowSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.addEventListener("scroll", updateYoffset);
  }, []);

  useEffect(() => {
    // dispatch(getContentItems())
  }, []);

  return (
    <>
      <ToastMessage />
      <Header />
      <DialogList />

      <main className="py-14" id={"nico-pro-main-body"}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
