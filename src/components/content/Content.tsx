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
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className="col-left mt-5"
            style={{
              borderRight: "1px solid rgb(203, 203, 203)",
              borderBottom: "1px solid rgb(203, 203, 203)",
            }}
          >
            <Card
              rule={{ width: 160 }}
              content="Saves on power consumption & related costs."
            />
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className="col-right mt-5"
            style={{ borderBottom: "1px solid rgb(203, 203, 203)" }}
          >
            <Card rule={{ width: 160 }} content="Lowers downtimes." />
          </Col>
        </Row>
        <Row>
          <Col
            className="mt-5"
            xs={12}
            sm={3}
            style={{
              borderBottom: "1px solid rgb(203, 203, 203)",
              borderRight: "1px solid rgb(203, 203, 203)",
            }}
          >
            <Card rule={{ width: 160 }} content="Detects power thefts." />
          </Col>
          <Col
            className="mt-5"
            xs={12}
            sm={9}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid rgb(203, 203, 203)",
            }}
          >
            <Card
              rule={{ width: 160 }}
              content="Ensures smart monitoring and control of the street light infrastructure."
            />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={8}
            style={{
              borderBottom: "1px solid rgb(203, 203, 203)",
              borderRight: "1px solid rgb(203, 203, 203)",
            }}
            className="mt-5"
          >
            <Card
              rule={{ width: 260 }}
              content="Ensures reat-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc."
            />
          </Col>
          <Col
            xs={12}
            sm={4}
            style={{
              borderBottom: "1px solid rgb(203, 203, 203)",
            }}
            className="mt-5"
          >
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
