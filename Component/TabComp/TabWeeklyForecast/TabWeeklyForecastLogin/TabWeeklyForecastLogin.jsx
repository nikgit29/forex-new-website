import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Container,
  ListGroup,
} from "react-bootstrap";
import Style from "./tabweeklyforcasteLogin.module.css";
import { FaRupeeSign } from "react-icons/fa";
import { CgArrowsScrollV } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import GET_WEEKLY_FORCASTE from "../../../Redux/Action/getweeklyforcaste.action";
import { useState, useEffect } from "react";
import Router from "next/router";
import SweetAlert from "react-bootstrap-sweetalert";

const MobWeeklyForcastLogin = () => {
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const weeklyData = response.GET_WEEKLY_FORCASTE;
  const [sweetAlert, setSweetAlert] = useState(false);
  const [Message, setMessage] = useState("");
  const [buttonMessage, setButtonMessage] = useState("");

  const WeeklyDataDetails =
    Object.keys(weeklyData).length !== 0
      ? response.GET_WEEKLY_FORCASTE.data[0]
      : null;

  const [show, setShow] = useState(false);
  const [finalMudra, setFinalMudra] = useState("");
  const getWeeklyForcaste = (e) => {
    const mudra = e.target.value;
    const upperCase = mudra.toUpperCase();
    const upperData = upperCase.replace("_", "/");
    setFinalMudra(upperData);
    dispatch(GET_WEEKLY_FORCASTE(mudra));
  };

  useEffect(() => {
    dispatch(GET_WEEKLY_FORCASTE("usd_inr"));
  }, []);

  const PersonDetails =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data;
  // Start Sweet Alert Coding
  const Alert = () => {
    const alert = (
      <>
        <SweetAlert
          show={sweetAlert}
          title="Oops!"
          warning
          customButtons={
            <>
              <Button
                className="Primary w-25"
                style={{ marginRight: "50px" }}
                onClick={() => Router.push("/premium")}
              >
                {buttonMessage}
              </Button>

              <Button
                className="btn-danger w-25"
                onClick={() => setSweetAlert(false)}
              >
                Close
              </Button>
            </>
          }
        >
          {Message}
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet Alert Coding

  const CheckPlan = () => {
    if (PersonDetails.accountMode == "FREE TRIAL") {
      setSweetAlert(true);
      setButtonMessage("Subscribe");
      setMessage("Please Subscribe to see future forecast");
    } else {
      setSweetAlert(true);
      setButtonMessage("Renew");
      setMessage("Please Renew your plan to see future forecast");
    }
  };

  //  Start Convert in Upper Case (Currency Name)
  const mudra = WeeklyDataDetails && WeeklyDataDetails.currency;
  const MudraUpperCase = mudra && mudra.toUpperCase();
  const FinalMudra = MudraUpperCase && MudraUpperCase.replace("_", "/");
  // End Convert in Upper Case (Currency Name)

  const Design = (
    <>
      <Card className={Style.card}>
        <Card.Body>
          <Card.Subtitle className={Style.subtitle}>
            WEEKLY FORECAST
          </Card.Subtitle>

          <Row className="mt-3 text-center">
            <Col md={12}>
              {/* Start currency selector  */}
              <Form.Select
                size="sm"
                className={Style.formselect}
                onChange={getWeeklyForcaste}
              >
                <option value="usd_inr">USD/INR</option>
                <option value="aed_inr">AED/INR</option>
                <option value="eur_inr">EUR/INR</option>
                <option value="sar_inr">SAR/INR</option>
                <option value="gbp_inr">GBP/INR</option>
                <option value="sgd_inr">SGD/INR</option>
                <option value="aud_inr">AUD/INR</option>
                <option value="cad_inr">CAD/INR</option>
                <option value="jpy_inr">JPY/INR</option>
              </Form.Select>
              {/* End currency selector  */}
            </Col>
            <Col md={12} className="mt-2 mb-2">
              <div style={{ color: "#004080" }}>
                {PersonDetails && PersonDetails.daysLeft == 0 ? (
                  <>**.** - **.**</>
                ) : (
                  <>
                    <FaRupeeSign />{" "}
                    <b>{WeeklyDataDetails && WeeklyDataDetails.forex_range}</b>
                  </>
                )}
              </div>
            </Col>
            <Col>
              {WeeklyDataDetails && WeeklyDataDetails.trend === "DOWNTREND" ? (
                <Button className={Style.btnDowntrend}>
                  {WeeklyDataDetails && WeeklyDataDetails.trend}
                </Button>
              ) : (
                <Button className={Style.btn}>
                  {WeeklyDataDetails && WeeklyDataDetails.trend}
                </Button>
              )}
            </Col>

            {PersonDetails && PersonDetails.daysLeft == 0 ? (
              <Col
                md={12}
                className="mt-2"
                style={{ color: "#317dd5", cursor: "pointer" }}
                onClick={() => CheckPlan()}
              >
                <CgArrowsScrollV style={{ fontSize: "23px" }} /> VIEW IN DETAILS
              </Col>
            ) : (
              <Col
                md={12}
                className="mt-2"
                style={{ color: "#317dd5", cursor: "pointer" }}
                onClick={() => setShow(true)}
              >
                <CgArrowsScrollV style={{ fontSize: "23px" }} /> VIEW IN DETAILS
              </Col>
            )}

            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <span style={{ marginLeft: "120px" }}>WEEKLY FORECAST</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="text-center mb-2" style={{ color: "#004080" }}>
                  <b>{FinalMudra}</b>
                </div>
                <div className="text-center mb-2" style={{ color: "#004080" }}>
                  <FaRupeeSign />{" "}
                  <b>{WeeklyDataDetails && WeeklyDataDetails.forex_range}</b>
                </div>

                <div className="text-center mb-2 ">
                  {WeeklyDataDetails &&
                  WeeklyDataDetails.trend === "DOWNTREND" ? (
                    <Button className={Style.btnDowntrend}>
                      {WeeklyDataDetails && WeeklyDataDetails.trend}
                    </Button>
                  ) : (
                    <Button className={Style.btn}>
                      {WeeklyDataDetails && WeeklyDataDetails.trend}
                    </Button>
                  )}
                </div>
                <Card style={{ width: "100%" }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      className="text-center"
                      style={{ backgroundColor: "#6aadfe", color: "#ffffff" }}
                    >
                      <b>Technical Charts</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img
                        src={WeeklyDataDetails && WeeklyDataDetails.img}
                        width="100%"
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>

                <Card
                  style={{
                    width: "100%",
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                >
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      className="text-center"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <b>Notes</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h6>{WeeklyDataDetails && WeeklyDataDetails.notes}</h6>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Modal.Body>
            </Modal>
          </Row>
        </Card.Body>
      </Card>
      <Alert />
    </>
  );
  return Design;
};

export default MobWeeklyForcastLogin;
