import { Card, Row, Col, Button } from "react-bootstrap";
import Style from "./mobcommodities.module.css";
import { GiClayBrick } from "react-icons/gi";
import Link from "next/link";
const MobCommodities = () => {
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
              <Button className={Style.btn}>SWITCH</Button>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
  return Design;
};

export default MobCommodities;
