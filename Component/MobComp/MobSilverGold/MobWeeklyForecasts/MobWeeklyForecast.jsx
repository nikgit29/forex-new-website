import { Card, Row, Col, Button, Modal, ListGroup } from "react-bootstrap";
import Style from "./mobweekly.module.css";
import { useState, useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { CgArrowsExchange } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../../Hooks/useAxios";
const MobWeeklyForcast = () => {
  const [silver, setSilver] = useState([]);
  const [gold, setGold] = useState([]);
  const [variable, setVariable] = useState();
  const [goldColor, setGoldColor] = useState("#FFD700");
  const [silverColor, setSilverColor] = useState("#FFFFFF");
  const response = useSelector((response) => response);
  const [sweetAlert, setSweetAlert] = useState(false);
  const [Message, setMessage] = useState("");
  const [buttonMessage, setButtonMessage] = useState("");
  const [show, setShow] = useState(false);
  const forecastedata = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/commodity-weeklyforecast-v2.php",
      });
      setSilver(response.data[0]);
      setGold(response.data[1]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    forecastedata();
  }, []);

  //Start  Change trends in Uppercase
  const trend = gold && gold.trend;
  const trendUpperCase = trend && trend.toUpperCase();
  //End Change trends in Uppercase

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

  const Design = (
    <>
      <Card className={Style.card}>
        <Card.Body>
          <Card.Subtitle className={Style.subtitle}>
            WEEKLY FORECAST
          </Card.Subtitle>

          <Row className="mt-3" style={{ textAlign: "center" }}>
            <Col>
              <div
                className="d-flex"
                style={{ border: "1px solid red", borderRadius: "20px" }}
              >
                <Link href="/gold-commodity">
                  <div>
                    <Button
                      style={{
                        width: "132px",
                        borderRadius: "20px",
                        backgroundColor: `${goldColor}`,
                        color: "#000000",
                        border: "none",
                        boxShadow: "none",
                      }}
                      value="GOLD"
                    >
                      GOLD
                    </Button>
                  </div>
                </Link>
                <Link href="/silver-commodity">
                  <Button
                    style={{
                      width: "132px",
                      borderRadius: "20px",
                      backgroundColor: `${silverColor}`,
                      color: "#000",
                      border: "none",
                      boxShadow: "none",
                    }}
                    value="SILVER"
                  >
                    SILVER
                  </Button>
                </Link>
                <div></div>
              </div>
              <div className="mt-2" style={{ color: "blue" }}>
                <BiRupee style={{ marginTop: "-4px" }} />{" "}
                <span>{gold && gold.dailyrange}</span>
              </div>

              {trendUpperCase === "DOWNTREND" ? (
                <Button
                  className="w-75 mt-2"
                  style={{
                    backgroundColor: "#df4759",
                    borderRadius: "8px",
                    border: "none",
                  }}
                >
                  {trendUpperCase}
                </Button>
              ) : (
                <Button
                  className="w-75 mt-2"
                  style={{
                    backgroundColor: "#6ee983",
                    borderRadius: "8px",
                    border: "none",
                  }}
                >
                  {trendUpperCase}
                </Button>
              )}

              {PersonDetails && PersonDetails.daysLeft == 0 ? (
                <div
                  className="d-flex justify-content-center mt-3"
                  style={{ color: "blue" }}
                  onClick={() => CheckPlan()}
                >
                  <div>
                    <CgArrowsExchange />
                  </div>
                  <div> VIEW IN DETAILS</div>
                </div>
              ) : (
                <div
                  className="d-flex justify-content-center mt-3"
                  style={{ color: "blue" }}
                  onClick={() => setShow(true)}
                >
                  <div>
                    <CgArrowsExchange />
                  </div>
                  <div> VIEW IN DETAILS</div>
                </div>
              )}
            </Col>

            {/* Open details modal */}
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <span style={{ marginLeft: "80px" }}>WEEKLY FORECAST</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="text-center mb-2" style={{ color: "#004080" }}>
                  <FaRupeeSign /> <b>{gold && gold.dailyrange}</b>
                </div>

                <div className="text-center mb-2 ">
                  {trendUpperCase === "DOWNTREND" ? (
                    <Button
                      className={Style.modalBtnDowntrend}
                      style={{ width: "50%" }}
                    >
                      {trendUpperCase}
                    </Button>
                  ) : (
                    <Button className={Style.modalBtn} style={{ width: "50%" }}>
                      {trendUpperCase}
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
                      <img src={gold && gold.technicalchart} width="100%" />
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
                      <h6>{gold && gold.notes}</h6>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Modal.Body>
            </Modal>
            {/* Open Details modal */}
          </Row>
        </Card.Body>
      </Card>
      <Alert />
    </>
  );
  return Design;
};

export default MobWeeklyForcast;
