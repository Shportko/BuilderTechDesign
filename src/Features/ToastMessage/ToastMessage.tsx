import { removeToast } from "@/store/toast/actions";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainSelector } from "../../store/selectors";
import styles from "./styles/ToastMessage.module.css";

const ToastMessage: React.FC = () => {
  const dispatch = useDispatch();
  const { toast } = useSelector(mainSelector).ToastReducer;

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        dispatch(removeToast());
      }, 3000);
    }
  }, [toast, dispatch]);

  return (
    <div className={styles.ToastMessage}>
      {toast && (
        <div
          className={clsx(styles.ToastMessageItem, {
            [styles.ToastMessageItemSuccess]: parseInt(toast?.statusCode) < 300,
            [styles.ToastMessageItemError]: parseInt(toast?.statusCode) > 300,
          })}
        >
          {toast?.message}
        </div>
      )}
    </div>
  );
};

export default ToastMessage;
