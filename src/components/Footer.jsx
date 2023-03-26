import React from "react";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import {
  Box,
  Column,
  Container,
  FooterLink,
  Heading,
  Row,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "-50px",
          fontSize: "5rem",
        }}
      ></h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">It Accessories</FooterLink>
            <FooterLink href="#">Desktop</FooterLink>
            <FooterLink href="#">Laptop</FooterLink>
            <FooterLink href="#">Mobile</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Dhaka</FooterLink>
            <FooterLink href="#">Rajshahi</FooterLink>
            <FooterLink href="#">Comilla</FooterLink>
            <FooterLink href="#">Narsingdi</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  <BsFacebook />
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  <FaInstagramSquare />
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  <BsTwitter />
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  <BsWhatsapp />
                  Whatsapp
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
