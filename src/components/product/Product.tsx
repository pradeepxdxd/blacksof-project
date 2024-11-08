import { Button, Col, Row } from "react-bootstrap";
import "./Product.css";
import proImage from "../../assets/pro-image.jpg";
import { NavLink } from "react-bootstrap";
import iconpng from "../../assets/icon_png.png";

export default function Product() {
  return (
    <div className="product-container">
      <div className="pro-container">
        <div className="pro-subcontainer">
          <h5 className="product-title">Product</h5>
          <h3 className="product-desc">
            <span style={{ fontWeight: "bold" }}>Cutting-edge hardware,</span>{" "}
            offerings, helping cities optimize resources and achieve smart
            development goals
          </h3>

          <div className="d-flex mt-3 flex-wrap">
            <Button
              className="bg-btn mt-2 mx-2"
              style={{
                width: "auto",
                borderRadius: "1px",
                border: "none",
                color: "black",
              }}
            >
              <span>Centralized Control & Monitoring System</span>
            </Button>
            <Button
              className="bg-btn mt-2 mx-2"
              style={{
                width: "auto",
                borderRadius: "1px",
                border: "none",
                color: "black",
              }}
            >
              <span>NEMA-Mounted VOLC 1160</span>
            </Button>
            <Button
              className="bg-btn mt-2 mx-2"
              style={{
                width: "auto",
                borderRadius: "1px",
                border: "none",
                color: "black",
              }}
            >
              <span>Retrofit Street Light Controller VOLC 2160</span>
            </Button>
            <Button
              className="bg-btn mt-2 mx-2"
              style={{
                width: "auto",
                borderRadius: "1px",
                border: "none",
                color: "black",
              }}
            >
              <span>Retrofit Street Light Controller VOLC 2180</span>
            </Button>
            <Button
              className="bg-btn mt-2 mx-2"
              style={{
                width: "auto",
                borderRadius: "1px",
                border: "none",
                color: "black",
                marginTop: "15px",
              }}
            >
              <span>Retrofit Street Light Controller VOLC 4180</span>
            </Button>
          </div>

          <div className="mt-4">
            <Row>
              <Col
                style={{ maxHeight: "70vh", padding: 0 }}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  src={proImage}
                  alt="proimage"
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col
                style={{ maxHeight: "70vh", padding: 0 }}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="product-def"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    height: "100%",
                    maxHeight: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "60%",
                      marginLeft: "40px",
                      marginTop: "7px",
                      marginBottom: "7px",
                    }}
                  >
                    <h6 style={{ fontWeight: "lighter" }}>Product 1/5</h6>
                    <h3 className="product-def-title">Centralized Control & Monitoring System</h3>
                    <p className="product-def-body">
                      Designed indigenously for street lighting projects, the
                      CCMS offers a complete feeder panal for a group of 30-50
                      street lights
                    </p>
                    <div className="d-flex">
                      <NavLink
                        href="#"
                        style={{ color: "blue", fontWeight: "normal" }}
                      >
                        Know More
                      </NavLink>
                      <span className="mx-2">
                        <img
                          src={iconpng}
                          alt="icon"
                          style={{ cursor: "pointer" }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
