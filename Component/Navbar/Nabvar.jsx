import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginLeft from "../Auth/Login/LoginLeft";
import LoginRight from "../Auth/Login/LoginRight";
import Signup from "../Auth/Signup/SignupLeft";
import MessageUs from "./MessageUs/MessageUs";
import CallbackForm from "../Home/RequestCallback/CallBackForm/Callback";
import Cookies from "universal-cookie";
import { BsPersonFill } from "react-icons/bs";
import OPEN_LOGIN_MODAL from "../Redux/Action/openclosemodal.action";
import CLOSE_LOGIN_MODAL from "../Redux/Action/closeloginmodal.action.";
import OPEN_CONTACT_MODAL from "../Redux/Action/opencontactmodal.action";
import CLOSE_CONTACT_MODAL from "../Redux/Action/closecontactmodal.action";
import CLOSE_SIGNUP_MODAL from "../Redux/Action/closesignupmodal.action";
import OPEN_SIGNUP_MODAL from "../Redux/Action/opensignupmodal.action";
import CLOSE_SIGNUP_OTP_MODAL from "../Redux/Action/closesignupotpmodals.action";
import OPEN_SWEET_ALERT from "../Redux/Action/opensweetalert.action";
import CLOSE_SWEET_ALERT from "../Redux/Action/closesweetalert.action";
import MOB_OPEN_LOGIN_MODAL from "../Redux/Action/MobAction/mobopenloginmodal.action";
import CLOSE_MOB_SIGNUP_MODAL from "../Redux/Action/MobAction/closemobsignupmodal.action";
import CLOSE_REQUEST_CALLBACK from "../Redux/Action/closerequestcallback.action";
import OPEN_RENEW_MODAL from "../Redux/Action/openrenewmodal.action";
import CLOSE_RENEW_MODAL from "../Redux/Action/closerenewmodal.action";
import SEND_PROFILE_DATA from "../Redux/Action/sendprofiledata.action";
import { AiTwotoneBell } from "react-icons/ai";
import SweetAlert from "react-bootstrap-sweetalert";
import ForgetPassword from "../Auth/Login/ForgetPassword/ForgetPassword";
import OPEN_LOGIN_FORWARD_BOOKING from "../Redux/Action/openloginforwardbooking.action";
import CLOSE_LOGIN_FORWARD_BOOKING from "../Redux/Action/closeloginforwardbooking.action";
import OPEN_UPGRADE_PLAN_MODAL from "../Redux/Action/openupgradeplanmodal.action";
import CLOSE_UPGRADE_PLAN_MODAL from "../Redux/Action/closeupgradeplanmodal.action";
import OPEN_CHECK_QUERY_MODAL from "../Redux/Action/opencheckquerymodal.action";
import CLOSE_CHECK_QUERY_MODAL from "../Redux/Action/closecheckquerymodal.action";
import OPEN_UNSUBSCRIBE_USER_MODAL from "../Redux/Action/openunsubscribeusermodal.action";
import CLOSE_UNSUBSCRIBE_USER_MODAL from "../Redux/Action/closeunsbscribeusermodal.action";
import Style from "./navbar.module.css";
import Toast from "react-bootstrap/Toast";
import useAxios from "../Hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Router from "next/router";
const Navbars = ({ referralPath }) => {
  const [show, setShow] = useState(false);
  const [callBck, setCallBck] = useState(false);
  const [modal, openModal] = useState(false);
  const [profile, showProfile] = useState("none");
  const [trial, setTrial] = useState("block");
  const [sweetAlert, setSweetAlert] = useState(false);
  const [isMobile, setIsMobile] = useState();
  const [login, showLogin] = useState("block");
  const [premium, setPremium] = useState("none");
  const [signupShow, setSignupShow] = useState(false);
  const [signupMobileOTP, setSignupMobileOTP] = useState(false);
  const [query, setQuery] = useState();
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");
  const personId = cookies.get("personId");
  const [Notify, setNotify] = useState();
  const [RegexValue, setRegexValue] = useState("");
  useEffect(() => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);
  console.log(isMobile, "polo");
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const dependency = response && response.SEND_PROFILE_DATA.data;

  const forwardBookingModalStatus =
    response && response.OPEN_CLOSE_FORWARD_BOOKING.Modal;

  const upgradePlanModalStatus =
    response && response.OPEN_CLOSE_UPGRADE_PLAN_MODAL.open;

  const checkQueryModalStatus =
    response && response.OPEN_CLOSE_CHECK_QUERY_MODAL.open;

  const RenewModalStatus = response && response.OPEN_CLOSE_RENEW_MODAL.Modal;

  const unsubscribeUserModalStatus =
    response && response.OPEN_CLOSE_UNSUBSCRIBE_USER.Modal;

  const PersonDetails =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data;

  useEffect(() => {
    setShow(response.OPEN_CLOSE_MODAL.open);
    openModal(response.OPEN_CLOSE_CONTACT_MODAL.open);
    setSignupShow(response.OPEN_CLOSE_SIGNUP_MODAL.open);
    setSignupMobileOTP(response.OPEN_CLOSE_SIGNUP_OTP_MODAL.open);
    setSweetAlert(response.OPEN_CLOSE_SWEET_ALERT.sweet);
    setCallBck(response.OPEN_CLOSE_REQUEST_CALLBACK.open);
  }, [response]);

  useEffect(() => {
    dispatch(SEND_PROFILE_DATA(personId));
  }, []);

  useEffect(() => {
    if (cookies.get("fx_1994") != undefined) {
      showLogin("none");
      showProfile("block");
      setPremium("block");
      setTrial("none");
      check_Query();
    } else {
      showProfile("none");
    }
  }, [cookiesDependency]);

  // Start Signup Modal Open when client came through referral Link

  useEffect(() => {
    if (window.innerWidth > 600 && referralPath == "signup") {
      dispatch(CLOSE_MOB_SIGNUP_MODAL());
      dispatch(OPEN_SIGNUP_MODAL());
    }
  }, [referralPath]);

  //End Signup Modal Open when client came through referral Link

  // Start Sweet Alert Coding
  const Alert = () => {
    const alert = (
      <>
        <SweetAlert
          show={sweetAlert}
          title="Account Created Successfully"
          success
          customButtons={
            <>
              <Button
                className="Primary w-50"
                onClick={() => dispatch(CLOSE_SWEET_ALERT())}
              >
                OK
              </Button>
            </>
          }
        >
          Phone Number Verified
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet alert Coding

  // Start Fetch Notification

  const Notification = async () => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "/fetch-notfications-total-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&account-id=" +
          personId,
      });
      setNotify(response.data[0].notification);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Notification();
    setInterval(() => {
      Notification();
    }, 300000);
  }, [cookiesDependency]);

  // End Fetch Notification

  // Verify Signup OTP
  const verifyOTP = async (e) => {
    e.preventDefault();
    const phone = cookies.get("phone");
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url:
          "/verify-otp-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&phone=" +
          phone,
        data: formData,
      });
      dispatch(CLOSE_SIGNUP_OTP_MODAL());
      dispatch(OPEN_SWEET_ALERT());
      if (cookies.get("PAYKEY")) {
        Router.push("/premium");
      } else {
        sessionStorage.setItem("_key", "false");
        Router.push("/profile");
      }
    } catch (err) {
      console.error(err);
    }
  };
  // End verify Signup OTP

  const check_Query = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/check_query.php",
        data: {
          account_id: personId,
        },
      });
      setQuery(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };

  const getFormData = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };

  // Start  Condition when click on forward booking
  const openForwardBooking = () => {
    if (dependency != undefined) {
      dispatch(CLOSE_LOGIN_FORWARD_BOOKING());
      if (
        PersonDetails.accountMode == "FREE TRIAL" &&
        PersonDetails.daysLeft == 0
      ) {
        dispatch(OPEN_UPGRADE_PLAN_MODAL());
      } else if (
        (PersonDetails.accountMode == "SILVER" ||
          PersonDetails.accountMode == "GOLD" ||
          PersonDetails.accountMode == "DIAMOND" ||
          PersonDetails.accountMode == "PLATINUM" ||
          PersonDetails.accountMode == "TITANIUM") &&
        PersonDetails.daysLeft == 0
      ) {
        dispatch(OPEN_RENEW_MODAL());
      } else {
        if (query == 2) {
          dispatch(OPEN_CHECK_QUERY_MODAL());
        } else if (query == 3) {
          dispatch(OPEN_UNSUBSCRIBE_USER_MODAL());
        } else {
          Router.push("/forward_booking");
          sessionStorage.setItem("myCat", "Pacman");
        }
      }
    } else {
      dispatch(OPEN_LOGIN_FORWARD_BOOKING());
    }
  };
  // End Condition when click on forward booking

  const openLoginModal = () => {
    if (window.innerWidth > 992) {
      dispatch(OPEN_LOGIN_MODAL());
      dispatch(CLOSE_LOGIN_FORWARD_BOOKING());
    } else if (window.innerWidth < 992) {
      dispatch(MOB_OPEN_LOGIN_MODAL());
      dispatch(CLOSE_LOGIN_FORWARD_BOOKING());
    }
  };

  const design = (
    <>
      <Row>
        <Col md={1}></Col>
        {/* Start Logo */}
        <Col md={2}>
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="Picture of the author"
                  width="160px"
                  height="50px"
                />
              </a>
            </Link>
          </div>
        </Col>
        {/* End Logo */}

        {/* Start Menu Coding */}
        <Col md={8} style={{ fontSize: "14px", fontFamily: "Poppins" }}>
          <ul className={Style.menu}>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a>NEWS</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>ABOUT US</a>
              </Link>
            </li>
            <Link href="/contact-us">
              <li
                style={{
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <a
                  href="#"
                  // onClick={() => {
                  //   dispatch(OPEN_CONTACT_MODAL());
                  // }}
                >
                  CONTACT US
                </a>
              </li>
            </Link>

            {/* <li onClick={openForwardBooking}>
              <Link href="javascript:void(0)">
                <a>FORWARD BOOKING</a>
              </Link>
            </li> */}
            <li>
              <Link href="/live-rate">
                <a>LIVE RATES</a>
              </Link>
            </li>
            <li
              onClick={() => {
                dispatch(OPEN_SIGNUP_MODAL());
              }}
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "0 25px",
                borderRadius: "8px",
                display: `${trial}`,
              }}
            >
              <Link href="javascript:void(0)">
                <a>FREE TRIAL</a>
              </Link>
            </li>
            {/* <li style={{ display: `${premium}` }}>
              <Link href="/premium">
                <a>PREMIUM</a>
              </Link>
            </li> */}
            <li
              style={{
                border: "1px solid #ffffff",
                padding: "0 25px",
                borderRadius: "8px",
                color: "#ffffff",
                cursor: "pointer",
                display: `${login}`,
              }}
            >
              <a
                href="javascript:void(0)"
                onClick={() => {
                  dispatch(OPEN_LOGIN_MODAL());
                }}
              >
                LOGIN
              </a>
            </li>

            <li className="d-flex">
              <div
                style={{
                  color: "#ffffff",
                  marginRight: "10px",
                  cursor: "pointer",
                  // display: `${profile}`,
                }}
              >
                <Link href="/notification">
                  <AiTwotoneBell />
                </Link>
                <sup
                  style={{
                    backgroundColor: "red",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    borderRadius: "30px",
                  }}
                >
                  {Notify}
                </sup>
              </div>
              <div
                style={{
                  border: "1px solid #ffffff",
                  padding: "0 25px",
                  borderRadius: "8px",
                  color: "#ffffff",
                  cursor: "pointer",
                  backgroundColor: "#ffffff10",
                  backdropFilter: "blur(12px)",
                  display: `${profile}`,
                }}
              >
                <Link href="/profile">
                  <a>
                    <BsPersonFill className="mb-1" />
                    Hi{" "}
                    {response != null
                      ? response &&
                        response.SEND_PROFILE_DATA &&
                        response.SEND_PROFILE_DATA.data &&
                        response.SEND_PROFILE_DATA.data.name
                      : null}
                  </a>
                </Link>
              </div>
            </li>
          </ul>

          <div
            style={{
              position: "fixed",
              top: "200px",
              right: "-3px",
              animation: "shakeX 2s infinite",
            }}
          >
            <Link href="/request-call-back">
              <Button
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  color: "#000",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                <div className="rounded-circle border border-info px-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
                  </svg>
                </div>
              </Button>
            </Link>
          </div>
        </Col>
        {/* End  Menu Coding */}
      </Row>
      {/* Start Login Modal Coding */}

      <Modal
        className={Style.modal}
        show={show}
        animation={false}
        onHide={() => {
          dispatch(CLOSE_LOGIN_MODAL());
        }}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header
          style={{
            borderBottom: "none",
            paddingBottom: "0px",
            paddingTop: "0px",
          }}
        >
          <Container>
            <Row>
              <Col></Col>
              <Col style={{ backgroundColor: "#7fbbff" }}></Col>
            </Row>
          </Container>
        </Modal.Header>
        <Modal.Body className="show-grid p-0">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <LoginLeft />
              </Col>
              <Col xs={12} md={6} className={Style.upperRight}>
                <LoginRight />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {/*End Login  Modal Coding */}
      {/*Start Signup Modal Coding */}
      <Modal
        show={signupShow}
        onHide={() => {
          dispatch(CLOSE_SIGNUP_MODAL());
        }}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header
          style={{
            borderBottom: "none",
            paddingBottom: "0px",
            paddingTop: "0px",
          }}
        ></Modal.Header>
        <Modal.Body className="show-grid p-0">
          <Container>
            <Row className={Style.SignupModal}>
              <Col xs={12} md={6}>
                <Signup />
              </Col>
              <Col xs={12} md={6} className={Style.LowerRight}>
                <Image
                  src="/freetrial.jpg"
                  alt="free trial"
                  width={500}
                  height={740}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {/*End Signup Modal Coding */}

      {/* Start Verify Signup Mobile OTP */}

      <Modal
        show={signupMobileOTP}
        // onHide={() => {
        //   dispatch(CLOSE_SIGNUP_OTP_MODAL());
        // }}
        size="sm"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className=" mb-3">
            Enter the otp we've sent to your number and email
          </h6>
          <Form onSubmit={verifyOTP}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={RegexValue}
                onChange={getFormData}
                name="otp"
                placeholder="Enter OTP"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Proceed
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* End Verify Signup MObile OTP */}

      {/*Start Contact Us Modal Coding */}
      <Modal
        size="sm"
        show={modal}
        animation={false}
        onHide={() => {
          dispatch(CLOSE_CONTACT_MODAL());
        }}
      >
        <Modal.Header className={Style.messageModal}>
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              MESSAGE US
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MessageUs />
        </Modal.Body>
      </Modal>
      {/* End Contact Us Modal Coding */}

      {/* Start  Forget Password Flow Modal */}
      <ForgetPassword />
      {/* End  Forget Password Flow Modal */}

      {/* Start Open Call back Modal */}
      <Modal
        size="sm"
        show={callBck}
        animation={false}
        onHide={() => {
          dispatch(CLOSE_REQUEST_CALLBACK());
        }}
      >
        <Modal.Header
          style={{
            padding: "0px",
            display: "flex",
            justifyContent: "center",
            fontFamily: "Poppins",
          }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              REQUEST CALLBACK
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CallbackForm />
        </Modal.Body>
      </Modal>
      {/* Start Open Call back Modal */}

      {/* Start Modal Login to see forward booking */}
      <Modal
        show={forwardBookingModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_LOGIN_FORWARD_BOOKING())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span>Please login to see Forward Booking</span>
          </div>

          <Button
            className="mt-3"
            style={{
              backgroundColor: "#0c8fff",
              border: "none",
              boxShadow: "none",
              letterSpacing: "1px",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "12px",
              width: "70%",
            }}
            onClick={() => {
              openLoginModal();
            }}
          >
            Login
          </Button>
          <Link href="javascript:void(0)">
            <Button
              className="w-25 mt-3"
              style={{
                backgroundColor: "#e96e6e",
                border: "none",
                boxShadow: "none",
                letterSpacing: "1px",
                borderRadius: "8px",
                padding: "5px 0",
                fontSize: "12px",
                marginLeft: "10px",
              }}
              onClick={() => dispatch(CLOSE_LOGIN_FORWARD_BOOKING())}
            >
              Close
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
      {/* End Modal Login to see forward booking */}

      {/* Start upgrade plan modal code */}
      <Modal
        show={upgradePlanModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_UPGRADE_PLAN_MODAL())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span>Please Upgrade your plan to view this page</span>
          </div>
          <div className="text-center">
            <Link href="/premium">
              <Button
                className="mt-3"
                style={{
                  backgroundColor: "#5cb85c",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                  padding: "5px 0",
                  fontSize: "12px",
                  width: "70%",
                }}
                onClick={() => dispatch(CLOSE_UPGRADE_PLAN_MODAL())}
              >
                Upgrade Now
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/* End upgrade plan modal code */}

      {/* Start check query modal code */}
      <Modal
        show={checkQueryModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_CHECK_QUERY_MODAL())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span>Your Limit of 4 queries is over. Please Subscribe now</span>
          </div>
          <div className="text-center">
            <Link href="/premium">
              <Button
                className="mt-3"
                style={{
                  backgroundColor: "#5cb85c",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                  padding: "5px 0",
                  fontSize: "12px",
                  width: "70%",
                }}
                onClick={() => dispatch(CLOSE_CHECK_QUERY_MODAL())}
              >
                Subscribe Now
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/* End check query modal code */}

      {/* Start Renew modal code */}
      <Modal
        show={RenewModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_RENEW_MODAL())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span>Your Subscription has expired. Please Renew</span>
          </div>
          <div className="text-center">
            <Link href="/premium">
              <Button
                className="mt-3"
                style={{
                  backgroundColor: "#5cb85c",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                  padding: "5px 0",
                  fontSize: "12px",
                  width: "70%",
                }}
                onClick={() => dispatch(CLOSE_RENEW_MODAL())}
              >
                Renew Now
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/* End Renew modal code */}

      {/* Start Unsubscribe user can ask 4 question modal code */}
      <Modal
        show={unsubscribeUserModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_UNSUBSCRIBE_USER_MODAL())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span className="text-center">
              <span>Unsubscribe user can ask 4 queries maximum in 60 days</span>
              <br />
              <span> Use your option wisely</span>
            </span>
          </div>
          <div className="text-center">
            <Link href="/forward_booking">
              <Button
                className="mt-3"
                style={{
                  backgroundColor: "#5cb85c",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                  padding: "5px 0",
                  fontSize: "12px",
                  width: "70%",
                }}
                onClick={() => {
                  dispatch(CLOSE_UNSUBSCRIBE_USER_MODAL());
                  sessionStorage.setItem("myCat", "Pacman");
                }}
              >
                Ok
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/* End Unsubscribe user can ask 4 question modal code */}
    </>
  );

  return design;
};

export default Navbars;
