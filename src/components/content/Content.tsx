import { Col, Row } from "react-bootstrap";
import "./Content.css";
import Card from "./components/card/Card";

export default function Content() {
  return (
    <div className="d-flex justify-content-center align-item-center">
      <div className="content-subcontainer">
        <div className="d-flex justify-content-center align-item-center">
          <div className="content-box">
            <h3 className="text-center">
              The platform assists city managers on multiple fronts
            </h3>
          </div>
        </div>
        <Row>
          <Col className="col-left">
            <Card
              rule={{ width: 160 }}
              content="Saves on power consumption & related costs."
            />
          </Col>
          <Col className="col-right">
            <Card rule={{ width: 160 }} content="Lowers downtimes." />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={3}>
            <Card rule={{ width: 160 }} content="Detects power thefts." />
          </Col>
          <Col
            xs={9}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              rule={{ width: 160 }}
              content="Ensures smart monitoring and control of the street light infrastructure."
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={8}>
            <Card
              rule={{ width: 260 }}
              content="Ensures reat-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc."
            />
          </Col>
          <Col xs={4}>
            <Card
              rule={{ width: 160 }}
              content="Ensure security in the neighborhood."
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
