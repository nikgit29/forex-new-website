import { Card, Row, Col, Button } from "react-bootstrap";
import Style from "./commodities.module.css";
import { GiClayBrick } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
const commodities = () => {
  const [show, setShow] = useState("none");
  const Design = (
    <>
      <Card className={Style.card}>
        <Card.Body>
          <Card.Subtitle className={Style.subtitle}>COMMODITIES</Card.Subtitle>
          <Row style={{ padding: "20px 30px 30px 40px" }}>
            <Col>
              <GiClayBrick
                className={Style.gold}
                style={{
                  fontSize: "45px",
                  transform: "rotate(13deg)",
                  color: "#fbd84b",
                  cursor: "pointer",
                }}
              />
              <span style={{ color: "#fbd84b", cursor: "pointer" }}>
                {" "}
                GOLD{" "}
              </span>
            </Col>
            <Col>
              <GiClayBrick
                style={{
                  fontSize: "45px",
                  transform: "rotate(13deg)",
                  color: "#d0d0d0",
                  cursor: "pointer",
                }}
              />
              <span style={{ color: "#d0d0d0", cursor: "pointer" }}>
                SILVER
              </span>
            </Col>
          </Row>
          <Link href="/gold-commodity">
            <div className="d-flex justify-content-center">
              <Button
                className={Style.btn}
                onClick={() => {
                  setShow("block");
                }}
              >
                {show == "none" ? (
                  "SWITCH"
                ) : (
                  <i
                    class="fa fa-spinner fa-spin"
                    style={{ display: `${show}`, fontSize: "24px" }}
                  ></i>
                )}
              </Button>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
  return Design;
};

export default commodities;
