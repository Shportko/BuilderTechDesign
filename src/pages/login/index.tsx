import { userLogin } from "@/API/contentItemAPI";
import CustomButton from "@/components/CustomButton/CustomButton";
import { CustomTextInput } from "@/components/CustomTextInput";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/Login.module.css";

export type TLogin = {
  className?: string;
  style?: React.CSSProperties;
};

export type TUnderLabelProps =
  | {
      id?: string;
      label: string | undefined;
      type: "success" | "error" | "warning" | "default";
      additionalNode?: React.ReactNode;
    }
  | undefined;

export default function Login({ className, style }: TLogin) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [underMessages, setUnderMessages] = useState<any>({
    email: undefined,
    password: undefined,
  });

  const handleSubmit = () => {
    let emailUnderMessage: TUnderLabelProps = undefined;
    let passwordUnderMessage: TUnderLabelProps = undefined;

    const errorMessage: TUnderLabelProps = {
      label: "Required",
      type: "error",
    };

    if (!email) {
      emailUnderMessage = errorMessage;
    } else {
      emailUnderMessage = undefined;
    }

    if (!password) {
      passwordUnderMessage = errorMessage;
    } else {
      passwordUnderMessage = undefined;
    }

    const errorsArray = [emailUnderMessage, passwordUnderMessage];

    if (
      !errorsArray?.some((item: TUnderLabelProps) => item?.type === "error")
    ) {
      userLogin({ email, password })
        .then(() => {
          const nextUrl = router.query.next as string;
          router.push(nextUrl || "/admin");
        })
        .catch((error) => console.error("auth fails from API method", error));
    }

    setUnderMessages((prevState: any) => ({
      ...prevState,
      email: emailUnderMessage,
      password: passwordUnderMessage,
    }));
  };

  return (
    <div className={clsx(styles.Login, className)} style={style}>
      <div className={styles.LoginContainer}>
        <div className={styles.LoginContainerForm}>
          <CustomTextInput
            placeholder="test@test.com"
            labelProps={{ label: "Email*" }}
            underLabelProps={underMessages?.email}
            onChange={setEmail}
          />
          <CustomTextInput
            offsetFromRow
            labelProps={{ label: "Password*" }}
            underLabelProps={underMessages?.password}
            onChange={setPassword}
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "Password" : "**********"}
            endAdornment={
              <div
                style={{
                  fontSize: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </div>
            }
          />
          {/* <div
            className={styles.LoginContainerFormElement}
            style={{ fontSize: "13px", display: "flex" }}
          >
            <div className={styles.LoginContainerFormLabel}>
              <label>Forgot password? &nbsp;</label>
            </div>
            <div
              className={styles.LoginContainerFormLabel}
              style={{ color: "red", cursor: "pointer" }}
              // onClick={() => history.push(forgotPasswordHref)}
            >
              Press here
            </div>
          </div>
          <div
            className={styles.LoginContainerFormElement}
            style={{ fontSize: "13px", display: "flex" }}
          >
            <div className={styles.LoginContainerFormLabel}>
              <label>Don't have account? &nbsp;</label>
            </div>
            <div
              className={styles.LoginContainerFormLabel}
              style={{ color: "red", cursor: "pointer" }}
              // onClick={() => history.push(signupHref)}
            >
              Create new
            </div>
          </div> */}
        </div>
        <div className={styles.LoginContainerButtonSubmit}>
          <CustomButton
            title={"LOGIN"}
            type="blue-filled"
            onClick={handleSubmit}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            disabled={!email || !password}
          />
        </div>
        {/* <GoogleLogin
            clientId="164366545543-2cl1qkev2e1capcckdbefkrmtthr6uhm.apps.googleusercontent.com"
            render={(renderProps) => (
              <div className="login--container--button-google">
                <GoogleButton onClick={renderProps.onClick} />
              </div>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
        {/* <div className="login--container--button-google">
            <GoogleButton
              onClick={() => {
                dispatch(userLoginWithGoogle({ history }));
              }}
            />
          </div> */}
      </div>
    </div>
  );
}
