import Link from "next/link";
import styles from "./styles/Footer.module.css";

function Copyright() {
  return (
    <div>
      {"Copyright © "}
      <Link color="inherit" href="https://buildertechdesign.com">
        www.buildertechdesign.com | Builder Tech Design
      </Link>{" "}
      {new Date().getFullYear()}
      {""}
    </div>
  );
}

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <Copyright />
    </footer>
  );
};
