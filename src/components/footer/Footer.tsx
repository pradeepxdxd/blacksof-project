import "./Footer.css"; // Custom CSS file for styling
import logo from "../../assets/smart lights_logo.svg";
import { Col, Row } from "react-bootstrap";

export default function SmartLights() {
  return (
    <div className="smart-lights-container">
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className="logo-header">
            <img
              src={logo}
              alt="Smart Lights Logo"
              width="130"
              height="30"
              className="me-2"
            />
          </div>
        </Col>
        <Col className="header" xs={6} sm={6} md={6} lg={6} xl={6}>
          <div
            className="d-flex justify-content-start header-link"
            style={{ width: "100%", marginTop: "8.3rem" }}
          >
            <h6 style={{ marginRight: "30px", cursor: "pointer" }}>Product</h6>
            <h6 className="mx-3" style={{ cursor: "pointer" }}>
              Software Service
            </h6>
            <h6 className="mx-3" style={{ cursor: "pointer" }}>
              Follow Us
            </h6>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: "230px" }}>
        <hr className="divider"
        />
        <div
          className="d-flex footer-link"
        >
          <h6 className="mx-3">Privacy Policy</h6>
          &#124;
          <h6 className="mx-3">Terms & Conditions</h6>
          &#124;
          <h6 className="mx-3">Cookie Policy</h6>
        </div>
      </div>
    </div>
  );
}
