import { pages } from "@/global-constants/global-constants";
import { TContentItem, TPageLinkItem } from "@/types/main";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./styles/Header.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useSelector } from "react-redux";
import { mainSelector } from "@/store/selectors";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState, useCallback, useEffect, Component } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { useRouter } from "next/router";
import Image from "next/image";
import MainLogo from "../../Assets/png/main_logo.png";



export default function Header() {
  const router = useRouter();
  const { screenWidth } = useSelector(mainSelector).MainReducer;
  const [services, setServices] = useState<TContentItem[]>([]);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleClickMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const makePhoenCall = useCallback(() => {
    window.open("tel:9367662448");
  }, []);
  

  return (
    <header className={styles.header}>
      <div className={styles.mainlogoicon}>
        <Link href="/">
        <Image
                    src={MainLogo}
                    alt="Main_Builder_Tech_Design_Logo"
                    width={160}
                    height={45}
                    priority
                  />
        </Link>
      </div>
      {screenWidth > 800 ? (
        <>
          {router.pathname.includes("admin") ? (
            <div className={styles.headercontaineradmin}>
              <Link href={"/"}>
                <CustomButton type="orange-stroke">
                  Admin Mode. Press this button to go to website
                </CustomButton>
              </Link>
              <Link href={"/login"}>
                <div style={{ marginLeft: "20px" }}>
                  <CustomButton type="back" onClick={userLogout}>
                    Logout
                  </CustomButton>
                </div>
              </Link>
            </div>
          ) : (
            <div className={styles.headercontainer}>
              <nav className={styles.navbar}>
                {pages.map((el: TPageLinkItem, i: number) => {
                  return (
                    <Link
                      href={el.href}
                      key={i}
                      style={{ marginRight: "10px" }}
                    >
                      <Button
                        style={{
                          fontSize: "15px",
                          textTransform: "none",
                          color: "#0b0b75",
                        }}
                      >
                        <div>{el.title}</div>
                      </Button>
                    </Link>
                  );
                })}
              </nav>
              <div className={styles.PhoneButtonContainer}>
                <CustomButton className={styles.phonebutton}>
                  {"(936)-766-2448"}
                </CustomButton>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ margin: "0 20px 0 auto" }}
            onClick={(e) => handleClickMobileMenu(e)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={"mobile-menu"}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={() => setMobileMenuAnchorEl(null)}
            style={{ width: "300" }}
          >
            {pages.map((el: TPageLinkItem, i: number) => {
              const Icon = el.icon;
              return (
                <div key={i}>
                  <MenuItem
                    onClick={() => {
                      router.push(el.href);
                      setMobileMenuAnchorEl(null);
                    }}
                    style={{
                      width: "300px",
                      borderTop: i !== 0 ? "1px solid lightgrey" : "",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    <div className={styles.HeaderMobileMenuItemIcon}>
                      {/* <img
                        alt="nico pro construction menu icon"
                        src={el?.icon}
                      /> */}
                      <Icon
                        style={{
                          width: "20px",
                          marginTop: "4px",
                          marginRight: 5,
                        }}
                      />
                    </div>
                    <div>{el.title}</div>
                  </MenuItem>
                  {el.href === "/services" &&
                    services &&
                    services.length > 0 &&
                    services.map((el: TContentItem, i: number) => {
                      return (
                        <div
                          key={i}
                          className={styles.HeaderMobileMenuItemService}
                          style={{
                            borderTop: i !== 0 ? "1px solid lightgrey" : "",
                          }}
                          onClick={() => {
                            router.push(`/services/${el.slug}`);
                            setMobileMenuAnchorEl(null);
                          }}
                        >
                          {`- ${el.shortTitle}`}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </Menu>
          <CustomButton
            style={{ marginRight: "20px", padding: "7px 0px" }}
            onClick={makePhoenCall}
          >
            <PhoneIcon />
          </CustomButton>
        </>
      )}
    </header>
  );
}
