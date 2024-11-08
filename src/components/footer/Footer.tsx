import "./Footer.css"; // Custom CSS file for styling
import logo from "../../assets/smart lights_logo.svg";
import { Col, Row } from "react-bootstrap";

export default function SmartLights() {
  return (
    <div className="smart-lights-container">
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div style={{ marginLeft: "160px", marginTop: "8rem" }}>
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
            className="d-flex justify-center-start"
            style={{ width: "100%", marginTop: "8.3rem" }}
          >
            <h6 style={{ marginRight: "45px", cursor: "pointer" }}>Product</h6>
            <h6 className="mx-5" style={{ cursor: "pointer" }}>
              Software Service
            </h6>
            <h6 className="mx-5" style={{ cursor: "pointer" }}>
              Follow Us
            </h6>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: "230px" }}>
        <hr
          style={{
            width: "50%",
            marginLeft: "150px",
            height: "3px",
            backgroundColor: "white",
            color: "white",
            border: "none",
          }}
        />
        <div className="d-flex" style={{marginLeft:'150px', color:'#dedede'}}>
          <h6 className="mx-3">Privacy Policy</h6>{ '|'}
          <h6 className="mx-3">Terms & Conditions</h6>{ '|'}
          <h6 className="mx-3">Cookie Policy</h6>{ '|'}
        </div>
      </div>
    </div>
  );
}
