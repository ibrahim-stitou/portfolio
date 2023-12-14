import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ibrahimstitou?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://instagram.com/brahim__st?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>

        <p style={{ width: "100%", textAlign: "center" }}>
          Copyright 2023. All Rights Reserved &#169;
        </p>
      </Container>
    </footer>
  );
};
