import { Col, Row } from "react-bootstrap";
import "./Ecosystem.css";
import Card from "./components/card/Card";
import streetLightControler from "../../assets/street_light_controler.png";
import gatewaypng from "../../assets/gateway_png.png";
import cloudBaseManagementPng from "../../assets/cloud_based management.png";
import evaluationPng from "../../assets/evaluation_png.png";
import usersPng from "../../assets/users_png.png";

export default function Ecosystem() {
  return (
    <div className="eco-container">
      <div className="eco-subcontainer">
        <h5 className="eco-title">Ecosystem</h5>
        <h3 className="eco-desc">
          How does a smart street light ecosystem work?
        </h3>
        <div className="mt-5">
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <Card
                images={[streetLightControler, streetLightControler]}
                title="Street Light Controller"
                description="Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp."
                rules={{
                  doubleBorder: true,
                }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                images={[gatewaypng]}
                title="Gateway"
                description="Employed for interfacing between a Controller and the Lighting Management Software."
                rules={{
                  doubleBorder: false,
                }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Card
                images={[cloudBaseManagementPng]}
                title="Cloud-based Management System"
                description="Collects information from multiple gateways."
                rules={{
                  doubleBorder: false,
                }}
              />
            </Col>
          </Row>
          <div
            style={{ marginTop: "6rem", marginBottom: "7rem" }}
            className="d-flex justify-content-center align-item-center"
          >
            <Row
              style={{
                width: "50%",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  images={[usersPng]}
                  rules={{ doubleBorder: false }}
                  title="Users"
                  description="Data from the cloud is used to monitor and control street lights by the System Managers."
                />
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  images={[evaluationPng]}
                  rules={{ doubleBorder: false }}
                  title="Evaluation"
                  description="Gathered insights are used to evaluate the performance of the lighting systems."
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
