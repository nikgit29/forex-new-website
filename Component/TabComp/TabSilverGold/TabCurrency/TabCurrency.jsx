import { Card, Row, Col, Button } from "react-bootstrap";
import Style from "./tabcurrency.module.css";
import { FcCurrencyExchange } from "react-icons/fc";
import {
  BsCurrencyDollar,
  BsCurrencyEuro,
  BsCurrencyPound,
  BsCurrencyYen,
} from "react-icons/bs";
import Link from "next/link";
import { BiRupee } from "react-icons/bi";
const MobCurrency = () => {
  const Design = (
    <>
      <Card className={Style.card}>
        <Card.Body>
          <Card.Subtitle className={Style.subtitle}>CURRENCY</Card.Subtitle>
          <Row className="p-3">
            <Col>
              <div className="d-flex justify-content-center">
                <div style={{ fontSize: "50px", marginTop: "-20px" }}>
                  <FcCurrencyExchange />
                </div>
              </div>

              <div
                className="d-flex justify-content-center"
                style={{ color: "#989494", cursor: "pointer" }}
              >
                <div>
                  <BsCurrencyDollar style={{ marginRight: "5px" }} />
                  <BsCurrencyEuro style={{ marginRight: "5px" }} />
                  <BsCurrencyPound style={{ marginRight: "5px" }} />
                  <BsCurrencyYen style={{ marginRight: "5px" }} />
                  <BiRupee />
                </div>
              </div>
            </Col>
          </Row>
          <Link href="/">
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

export default MobCurrency;
