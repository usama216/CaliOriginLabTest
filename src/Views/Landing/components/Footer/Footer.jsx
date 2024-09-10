import {
  Box,
  Button,
  Divider,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBox from "../../../../components/FlexBox/FlexBox";
import Image from "../../../../components/Image/Image";

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "#17364c",
  color: "white",
  padding: "2rem 5%",
}));

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const isHidden =
    currentPath === "/order-confirm" ||
    currentPath === "/login" ||
    currentPath === "/sign-up" ||
    currentPath === "/email-confirmation-otp";

  if (isHidden) {
    return null;
  }

  const textFieldStyle = {
    "& .MuiInputBase-root": {
      border: "none",
      "&:hover": {
        borderColor: "white",
      },
      "&.Mui-focused": {
        boxShadow: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },

    borderRadius: "45px",
    backgroundColor: "white",
  };

  const pages = [
    { label: "Home", route: "/" },
    { label: "Find Products", route: "/find-products" },
    { label: "Deck", route: "/deck" },
    { label: "Rims", route: "/rims" },
    { label: "Trailer", route: "/trailer" },
    { label: "Moped Car", route: "/moped-car" },
    { label: "Outlet", route: "/outlet" },
  ];

  const services = [
    { label: "Contact Us", route: "/contact" },
    { label: "Questions & Answers", route: "/faq" },
    { label: "Blog", route: "/blog" },
    { label: "Terms of Purchases", route: "/terms" },
    { label: "Assembly Workshops", route: "/workshops" },
    { label: "EU Labeling of tires", route: "/labeling" },
  ];

  return (
    <StyledFooter>
      <FlexBox
        sx={{
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "3rem", fontWeight: 600 }}>
          Subscribe to NewsLetter
        </Typography>

        <Typography sx={{ fontSize: "1rem" }}>
          Join our newsletter to stay in the know about Moody Moon’s new
          products, special offers and CBD education!
        </Typography>
        <br />
        <br />
        <Box
          sx={{ display: "flex", alignItems: "center", width: "70%" }}
          gap={2}
        >
          <TextField
            size="small"
            sx={textFieldStyle}
            fullWidth
            placeholder="Input your email address here"
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f0ab3b",
              "&:hover": {
                backgroundColor: "#f0ab3b",
              },
              textTransform: "none",
              width: "15%",
              borderRadius: "35px",
            }}
          >
            View All{" "}
          </Button>
        </Box>
      </FlexBox>
      <br />
      <Divider sx={{ backgroundColor: "white" }} />
      <br />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.9rem", color: "white" }}>
          Copyright © 2024 Cali Origins. All Rights Reserved.
        </Typography>

        <Box
          sx={{ dispaly: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Image
            src="/footercard1.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image
            src="/footercard2.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image
            src="/footercard3.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image src="/footercard4.svg" width="13%" />
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
