import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import SocialLogo from "../SocialLogo/SocialLogo";
import OurServices from "../OurServices/OurServices";
import RecentPosts from "../RecentPosts/RecentPosts";
import SubscribeUs from "../SubscribeUs/SubscribeUs.js";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Container className={classes.bigCont}>
          <SocialLogo />
          <OurServices />
          <RecentPosts />
          <SubscribeUs />
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
