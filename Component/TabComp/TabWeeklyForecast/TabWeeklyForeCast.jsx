import { Card, Row, Col, Button } from "react-bootstrap";
import Style from "./tabweekly.module.css";
import { BiCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import OPEN_MOB_SIGNUP_MODAL from "../../Redux/Action/MobAction/openmobsignupmodal.action";
const MobWeeklyForecast = () => {
  const dispatch = useDispatch();
  const Design = (
    <>
      <Card className={Style.card}>
        <Card.Body>
          <Card.Subtitle className={Style.subtitle}>
            WEEKLY FORECAST
          </Card.Subtitle>

          <Row className="mt-3" style={{ textAlign: "center" }}>
            <Col md={12}>
              <BiCheck />
              Dedicated experts
            </Col>
            <Col md={12}>
              <BiCheck />
              Technical charts
            </Col>
            <Col md={12}>
              <BiCheck />
              In-depth analysis
            </Col>
            <Col md={12}>
              <h6
                style={{
                  color: "#fbd84b",
                  textShadow: "3px 2px 15px rgba(251, 216, 75, 1)",
                }}
              >
                {" "}
                PREMIUM
              </h6>
            </Col>
            <Col>
              <Button
                className={Style.btn}
                onClick={() => {
                  dispatch(OPEN_MOB_SIGNUP_MODAL());
                }}
              >
                FREE TRIAL
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
  return Design;
};

export default MobWeeklyForecast;
