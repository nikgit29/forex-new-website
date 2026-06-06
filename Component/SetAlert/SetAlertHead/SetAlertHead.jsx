import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

import { FcAlarmClock } from "react-icons/fc";
import OPEN_REQUEST_CALLBACK from "../../Redux/Action/openrequestcallback.action";
import { useDispatch, useSelector } from "react-redux";
import SET_ALERT from "../../Redux/Action/setalert.action";
import OPEN_LOCK_RATE_MODAL from "../../Redux/Action/openlockrate.action";
import CLOSE_LOCK_RATE_MODAL from "../../Redux/Action/closelockrate.action";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import Style from "./alert.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AlertHead = () => {
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("LOCK RATE");
  const [checkLiveRate, setCheckLiveRate] = useState();
  const [currencyName, setCurrencyName] = useState();
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedValue, setCheckedValue] = useState("");
  const [fbsToken, setFbsToken] = useState();
  const [variant, setVariant] = useState("success");
  const [submit, setSubmit] = useState("Submit");
  const [Index, setIndex] = useState(0);
  const RateAlertData = response && response.SET_ALERT.data;
  const Show = response && response.OPEN_CLOSE_LOCK_RATE.Modal;
  const personId =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data.id;

  const openLockRate = (rate_alert, currencyName, filledAmount, radio) => {
    setAmount(rate_alert);
    setCheckLiveRate(rate_alert);
    setCurrencyName(currencyName);
    checkedBtn(0);
    dispatch(OPEN_LOCK_RATE_MODAL());
    if (filledAmount != undefined) {
      setAmount(filledAmount);
      setTitle("ALERT ON");
      setSubmit("Change");
      setVariant("danger");
      checkedBtn(radio);
    }
  };

  // Start Validation for enter amount
  const getFormData = (event) => {
    const input = event.target.value;
    if (amount != "") {
      setAmount(input);
    } else {
      const regex = /^[0-9\b]+$/;
      if (input === "" || regex.test(input)) {
        setAmount(input);
      }
    }
  };
  // Start Validation for enter amount

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "delete":
        toast.success("Alert is deleted !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  // Start Radio Button checker
  const checkedBtn = (id) => {
    if (id == 0) {
      setCheckedOne(true);
      setCheckedTwo(false);
      setCheckedThree(false);
      setCheckedFour(false);
      setCheckedValue("G");
      setIndex(0);
    }
    if (id == 1) {
      setCheckedOne(false);
      setCheckedTwo(true);
      setCheckedThree(false);
      setCheckedFour(false);
      setCheckedValue("GE");
      setIndex(1);
    }
    if (id == 2) {
      setCheckedOne(false);
      setCheckedTwo(false);
      setCheckedThree(true);
      setCheckedFour(false);
      setCheckedValue("L");
      setIndex(2);
    }
    if (id == 3) {
      setCheckedOne(false);
      setCheckedTwo(false);
      setCheckedThree(false);
      setCheckedFour(true);
      setCheckedValue("LE");
      setIndex(3);
    }
  };
  // End Radio Button checker

  // Start for Firebase
  const getSubmitData = async (e) => {
    e.preventDefault();
    if (Index == 0 && amount < checkLiveRate) {
      alert("Invalid Condition");
      return;
    }
    if (Index == 1 && amount <= checkLiveRate) {
      alert("Invalid Condition");
      return;
    }
    if (Index == 2 && amount > checkLiveRate) {
      alert("Invalid Condition");
      return;
    }
    if (Index == 3 && amount >= checkLiveRate) {
      alert("Invalid Condition");
      return;
    } else {
      const currencyNames = currencyName.split("/");
      const response = await axios({
        method: "POST",
        url: "save_rate_alert_web_v2.php",
        data: {
          currency: currencyNames[0],
          firebase_token: fbsToken,
          condition: checkedValue,
          amount: amount,
          user_id: personId,
          live_rate: checkLiveRate,
        },
      });
      dispatch(CLOSE_LOCK_RATE_MODAL());
      dispatch(SET_ALERT(fbsToken));
    }
  };
  // End for Firebase

  // Start Remove Set alert code
  const removeSetAlert = async (currency) => {
    try {
      const response = await axios({
        method: "POST",
        url: "delete_rate_alert_web.php",
        data: {
          currency: currency,
          firebase_token: fbsToken,
        },
      });
      Notification("delete");
    } catch (err) {
      console.error(err);
    }
  };
  // End Remove Set alert code

  useEffect(() => {
    if (fbsToken != undefined) {
      dispatch(SET_ALERT(fbsToken));
    }
    setFbsToken(localStorage.getItem("__fbsToken"));
    return () => {};
  }, []);

  useEffect(() => {
    if (fbsToken != undefined) {
      dispatch(SET_ALERT(fbsToken));
    }
    return () => {};
  }, [fbsToken]);

  useEffect(() => {
    if (fbsToken != undefined) {
      setInterval(() => {
        dispatch(SET_ALERT(fbsToken));
      }, 10000);
    }
    return () => {};
  }, [fbsToken]);

  const design = (
    <>
      <Container>
        <Row>
          <Col style={{ color: "#ffffff", marginLeft: "90px" }}>
            <h2 className="mt-5 mb-4">WHY SET ALERT ?</h2>

            <div style={{ letterSpacing: "0.5px" }}>
              <div className="d-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="2.2em"
                  width="2.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                </svg>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div className="d-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="2.2em"
                  width="2.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                </svg>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div className="d-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="2.2em"
                  width="2.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                </svg>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div style={{ padding: "27px 0" }}>
                <ul style={{ paddingLeft: "0" }}>
                  <li
                    style={{
                      border: "1px solid #ffffff",
                      padding: "0 27px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      paddingTop: "1px",
                      paddingBottom: "1px",
                    }}
                  >
                    <Link href="javascript:void(0)">
                      <a
                      // onClick={() => {
                      //   OpenSetAlert();
                      // }}
                      >
                        <FcAlarmClock
                          style={{ fontSize: "15px", marginRight: "5px" }}
                        />
                        SET ALERT
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={Style.requestCallback}>
                <div>
                  <ul>
                    <li
                      style={{
                        padding: "2px 14px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        backgroundColor: "#1fe32d",
                        color: "#ffffff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(OPEN_REQUEST_CALLBACK());
                      }}
                    >
                      <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span>REQUEST CALLBACK</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            {" "}
            <Card className={Style.setAlertCard}>
              <Card.Header className="text-center">SET ALERT</Card.Header>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div
                    className="d-flex justify-content-between"
                    style={{
                      fontSize: "14px",
                      color: "#b9b6b6",
                      border: "1px solid #ccc",
                      padding: "4px 9px",
                      borderRadius: "8px",
                      borderTop: "none",
                      boxShadow: "-6px 16px 40px -3px rgb(0 0 0 / 27%)",
                    }}
                  >
                    <div>
                      <span>CURRENCY</span>
                    </div>
                    <div>
                      <span>LIVE RATE</span>
                    </div>
                    <div>
                      <span>RATE ALERT</span>
                    </div>
                    <div>
                      <span>DELETE</span>
                    </div>
                  </div>
                </Card.Title>

                <div className={Style.cardbody}>
                  {RateAlertData &&
                    RateAlertData.map((data, index) => {
                      const currency = data.currency.split("/")[0];
                      const rate_alert_data = data && data.live_rate;
                      const rate_alert = parseFloat(rate_alert_data).toFixed(4);
                      return (
                        <div
                          className="d-flex justify-content-between"
                          key={index}
                        >
                          <div
                            style={{
                              color: "#77b4ff",
                              padding: "0px 9px",
                              fontSize: "14px",
                              fontWeight: "500",
                              textAlign: "center",
                              fontFamily: "poppins",
                            }}
                          >
                            <span>{data && data.currency}</span>
                          </div>
                          <div
                            style={{
                              padding: "0",
                              fontSize: "14px",
                              fontWeight: "500",
                              fontFamily: "roboto",
                            }}
                          >
                            <span>{rate_alert}</span>
                          </div>
                          <div>
                            <ul className="p-0">
                              {data.set === "no" ? (
                                <li
                                  style={{
                                    width: "89px",
                                    backgroundColor: "#05AB47",
                                    padding: "1px 17px",
                                    borderRadius: "6px",
                                    fontSize: "13px",
                                    color: "#ffff",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    openLockRate(rate_alert, data.currency)
                                  }
                                >
                                  Set Alert
                                </li>
                              ) : data && data.isNotification == 1 ? (
                                <li
                                  style={{
                                    width: "89px",
                                    backgroundColor: "#007bff",
                                    padding: "3px 17px",
                                    borderRadius: "6px",
                                    fontSize: "11px",
                                    color: "#ffff",
                                    cursor: "pointer",
                                  }}
                                >
                                  Target Hit
                                </li>
                              ) : (
                                <li
                                  style={{
                                    width: "89px",
                                    backgroundColor: "#d9534f",
                                    padding: "1px 17px",
                                    borderRadius: "6px",
                                    fontSize: "13px",
                                    color: "#ffff",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    openLockRate(
                                      rate_alert,
                                      data.currency,
                                      data.amount,
                                      data.radio
                                    )
                                  }
                                >
                                  Alert on
                                </li>
                              )}
                            </ul>
                          </div>

                          {data && data.set == "yes" ? (
                            <i
                              className="fa fa-remove"
                              role="button"
                              style={{ marginRight: "10px" }}
                              onClick={() => removeSetAlert(currency)}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-remove"
                              style={{ marginRight: "10px", opacity: "0" }}
                            ></i>
                          )}
                        </div>
                      );
                    })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        show={Show}
        onHide={() => {
          dispatch(CLOSE_LOCK_RATE_MODAL());
          setSubmit("Submit");
          setVariant("success");
          setTitle("LOCK RATE");
          setCheckedOne(true);
        }}
        animation={false}
      >
        <Modal.Header className="p-0">
          <Modal.Title className="text-center">
            <span
              style={{
                marginLeft: "190px",
                padding: "0",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "poppins",
              }}
            >
              {title}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="text-center mb-2"
            style={{
              color: "#77b4ff",
              padding: "0px 9px",
              fontSize: "14px",
              fontWeight: "500",
              textAlign: "center",
              fontFamily: "poppins",
            }}
          >
            <span>
              {currencyName}-{checkLiveRate}
            </span>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ fontFamily: "poppins" }}
          >
            <Form onSubmit={getSubmitData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="₹ Enter Amount"
                  value={amount}
                  onChange={getFormData}
                  style={{ boxShadow: "none" }}
                />
              </Form.Group>
              <Form.Check
                className="radio_btn"
                type="radio"
                label="Greater then"
                id="1"
                checked={checkedOne}
                onClick={() => checkedBtn("0")}
              />
              <Form.Check
                className="radio_btn"
                type="radio"
                label="Greater then equal to"
                id="2"
                checked={checkedTwo}
                onClick={() => checkedBtn("1")}
              />
              <Form.Check
                className="radio_btn"
                type="radio"
                label="Less then"
                id="3"
                checked={checkedThree}
                onClick={() => checkedBtn("2")}
              />
              <Form.Check
                className="radio_btn"
                type="radio"
                label="Less then equal to"
                id="4"
                checked={checkedFour}
                onClick={() => checkedBtn("3")}
              />
              {}
              <div className="text-center mt-4">
                <Button className="w-100 p-0" variant={variant} type="submit">
                  {submit}
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
  return design;
};

export default AlertHead;
