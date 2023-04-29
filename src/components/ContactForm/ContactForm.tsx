import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { CustomTextInput } from "../CustomTextInput";
import styles from "./styles/ContactForm.module.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactUs from "@/pages/contact-us";



export type TContactForm = {
  style?: React.CSSProperties;
  className?: string;
};

export const ContactForm: React.FC<TContactForm> = ({ style, className }) => {
 
  return (
    
    <section className={styles.ContactForm}>
      <div>
      <div style={{ color: "rgb(0, 0, 0, 0.7)"}}><MenuBookIcon /> <ModeEditIcon /></div>
      <h2>How can we help?</h2>
      <div>Please fill out the form below and we will contact you shortly</div>
      <CustomTextInput
        placeholder="Name"
        style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
      />
      <CustomTextInput
        placeholder="Email"
        style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
      />
      <CustomTextInput
        placeholder="Phone"
        style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
      />
      <CustomTextInput
        placeholder="What can we help you with?"
        style={{ backgroundColor: "#EFF4F8", marginTop: "30px" }}
        multiline
        multilineModeProps={{ rows: 5 }}
      />
      <div>
        <CustomButton 
          style={{ padding: "10px 0", marginTop: "30px", width: "100%" }}
        >
          Send
        </CustomButton>
      </div>
      </div>
    </section>
  );
};
