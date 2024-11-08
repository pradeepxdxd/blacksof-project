import { Button } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container" style={{ position: "static" }}>
      <div
        className="content-container"
      >
        <h6 className="text-head">Smart Lighting Solutions</h6>
        <h4 className="text-subhead">
          Bringing A New Perspective to Street Lights And The Cities Of
          Tomorrow.
        </h4>
        <Button style={{borderRadius:'1px'}}>Login</Button>
      </div>
    </div>
  );
}
