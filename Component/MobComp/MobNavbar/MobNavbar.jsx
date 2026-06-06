import {
  Container,
  Row,
  Col,
  Navbar,
  Offcanvas,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Styles from "./mobnavbar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPersonFill } from "react-icons/bs";
import OPEN_CONTACT_MODAL from "../../Redux/Action/opencontactmodal.action";
import MOB_OPEN_LOGIN_MODAL from "../../Redux/Action/MobAction/mobopenloginmodal.action";
import MOB_CLOSE_LOGIN_MODAL from "../../Redux/Action/MobAction/mobcloseloginmodal.action";
import CLOSE_MOB_SIGNUP_MODAL from "../../Redux/Action/MobAction/closemobsignupmodal.action";
import OPEN_MOB_SIGNUP_MODAL from "../../Redux/Action/MobAction/openmobsignupmodal.action";
import CLOSE_SIGNUP_MODAL from "../../Redux/Action/closesignupmodal.action";
import MobLogin from "../MobAuth/MobLogin/MobLoginLeft";
import MobSignup from "../MobAuth/MobSignup/MobSignup";
import CLOSE_SWEET_ALERT from "../../Redux/Action/closesweetalert.action";
import SweetAlert from "react-bootstrap-sweetalert";
import OPEN_LOGIN_FORWARD_BOOKING from "../../Redux/Action/openloginforwardbooking.action";
import OPEN_RENEW_MODAL from "../../Redux/Action/openrenewmodal.action";
import OPEN_UPGRADE_PLAN_MODAL from "../../Redux/Action/openupgradeplanmodal.action";
import CLOSE_LOGIN_FORWARD_BOOKING from "../../Redux/Action/closeloginforwardbooking.action";
import OPEN_CHECK_QUERY_MODAL from "../../Redux/Action/opencheckquerymodal.action";
import OPEN_UNSUBSCRIBE_USER_MODAL from "../../Redux/Action/openunsubscribeusermodal.action";
import Cookies from "universal-cookie";
import Toast from "react-bootstrap/Toast";
import { FiChevronRight } from "react-icons/fi";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import Router from "next/router";
const MobNavbar = ({ mobReferralPath }) => {
  const [show, setShow] = useState(false);
  const [btnDefault, setBtnDefault] = useState("#ffffff");
  const [modal, openModal] = useState(false);
  const [Login, setLogin] = useState(false);
  const [mobSignupShow, setMobSignupShow] = useState(false);
  const [sweetAlert, setSweetAlert] = useState(false);
  const [profile, showProfile] = useState("none");
  const [premium, setPremium] = useState("d-none");
  const [notify, setNotify] = useState("d-none");
  const [login, showLogin] = useState("block");
  const [freeTrial, setFreeTrial] = useState("d-block");
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const dependency = response && response.SEND_PROFILE_DATA.data;
  const personId = cookies.get("personId");
  const PersonDetails =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data;

  // Start Signup Modal Open when client came through referral Link

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

  useEffect(() => {
    setLogin(response.OPEN_CLOSE_MODAL.open);
    openModal(response.OPEN_CLOSE_CONTACT_MODAL.open);
    setLogin(response.MOB_OPEN_CLOSE_LOGIN_MODAL.status);
    setMobSignupShow(response.MOB_OPEN_CLOSE_SIGNUP_MODAL.state);
    setSweetAlert(response.OPEN_CLOSE_SWEET_ALERT.sweet);
  }, [response]);

  useEffect(() => {
    if (cookies.get("fx_1994") != undefined) {
      showLogin("none");
      showProfile("block");
      setPremium("block");
      setNotify("d-block");
      setFreeTrial("d-none");
      check_Query();
    } else {
      showProfile("none");
    }
  }, [cookiesDependency]);

  useEffect(() => {
    if (window.innerWidth < 600 && mobReferralPath == "signup") {
      dispatch(OPEN_MOB_SIGNUP_MODAL());
      dispatch(CLOSE_SIGNUP_MODAL());
    }
  }, [mobReferralPath]);

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
          Phone Number Verified.
        </SweetAlert>
      </>
    );

    return alert;
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

  const Design = (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image src="/logo.png" width={106} height={29} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setShow(true)}
          />
          <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            placement="end"
            className="w-50"
            style={{
              backgroundColor: "#fafafa",
              backdropFilter: "blur(12px)",
            }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ color: "#6aadfe" }}>
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <Link href="/">
                <div
                  className="w-100 mb-1 d-flex justify-content-between"
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "13px",
                  }}
                >
                  <span className="mt-1">HOME</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link>

              <Link href="/news">
                <div
                  className="w-100 mb-1 d-flex justify-content-between"
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "13px",
                  }}
                >
                  <span className="mt-1">NEWS</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link>
              <Link href="/about">
                <div
                  className="w-100 mb-1  d-flex justify-content-between"
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "13px",
                  }}
                >
                  <span className="mt-1">ABOUT US</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link>

              <Link href="/contact-us">
                <div
                  className="w-100 mb-1 "
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                  }}
                >
                  <a
                    href="javascript:void(0)"
                    // onClick={() => {
                    //   dispatch(OPEN_CONTACT_MODAL());
                    // }}
                    class="text-decoration-none d-flex justify-content-between"
                    style={{ color: "#000", fontSize: "13px" }}
                  >
                    <span className="mt-1">CONTACT US</span>
                    <FiChevronRight
                      style={{
                        marginTop: "5px",
                        color: "#a39b9b",
                      }}
                    />
                  </a>
                </div>
              </Link>

              {/* <Link href="/archive">
                <div
                  className="w-100 mb-1 d-flex justify-content-between"
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "14px",
                  }}
                >
                  <span className="mt-1">ARCHIVE</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link> */}

              {/* <Link href="javascript:void(0)">
                <div
                  className="w-100 mb-1 d-flex justify-content-between"
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "14px",
                  }}
                  onClick={openForwardBooking}
                >
                  <span className="mt-1">FORWARD BOOKING</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link> */}

              <Link href="/live-rate">
                <div
                  className="w-100 mb-1 d-flex justify-content-between"
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "13px",
                  }}
                >
                  <span className="mt-1">LIVE RATES</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link>

              <Link href="/">
                <div className={freeTrial}>
                  <div
                    className="w-100 mb-1 d-flex justify-content-between"
                    style={{
                      backgroundColor: `${btnDefault}`,
                      color: "#000",
                      borderBottom: "1px solid #f3f0f0",
                      letterSpacing: "0.5px",
                      height: "30px",
                      padding: "0 10%",
                      fontFamily: "poppins",
                      fontSize: "13px",
                    }}
                    onClick={() => {
                      dispatch(OPEN_MOB_SIGNUP_MODAL());
                    }}
                  >
                    <span className="mt-1">FREE TRIAL</span>
                    <FiChevronRight
                      style={{ marginTop: "5px", color: "#a39b9b" }}
                    />
                  </div>
                </div>
              </Link>
              {/* <Link href="/premium">
                <div className={premium}>
                  <div
                    className="w-100 mb-1  d-flex justify-content-between"
                    style={{
                      backgroundColor: `${btnDefault}`,
                      color: "#000",
                      borderBottom: "1px solid #f3f0f0",
                      letterSpacing: "0.5px",
                      height: "30px",
                      padding: "0 10%",
                      fontFamily: "poppins",
                      fontSize: "14px",
                    }}
                  >
                    <span className="mt-1">PREMIUM</span>
                    <FiChevronRight
                      style={{ marginTop: "5px", color: "#a39b9b" }}
                    />
                  </div>
                </div>
              </Link> */}
              <Link href="/notification">
                <div className={notify}>
                  <div
                    className="w-100 mb-1 d-flex justify-content-between"
                    style={{
                      backgroundColor: `${btnDefault}`,
                      color: "#000",
                      borderBottom: "1px solid #f3f0f0",
                      letterSpacing: "0.5px",
                      height: "30px",
                      padding: "0 10%",
                      fontFamily: "poppins",
                      fontSize: "13px",
                    }}
                  >
                    <span className="mt-1">NOTIFICATION</span>
                    <FiChevronRight
                      style={{ marginTop: "5px", color: "#a39b9b" }}
                    />
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div
                  className="w-100 mb-2"
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    display: `${login}`,
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "14px",
                  }}
                >
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      dispatch(MOB_OPEN_LOGIN_MODAL());
                    }}
                    className="text-decoration-none d-flex justify-content-between"
                    style={{ color: "#000", fontFamily: "Poppins" }}
                  >
                    <span className="mt-1">LOGIN</span>
                    <FiChevronRight
                      style={{ marginTop: "5px", color: "#a39b9b" }}
                    />
                  </a>
                </div>
              </Link>

              <Link href="/profile">
                <div
                  className="w-100 mb-2 "
                  style={{
                    backgroundColor: `${btnDefault}`,
                    color: "#000",
                    display: `${profile}`,
                    borderBottom: "1px solid #f3f0f0",
                    letterSpacing: "0.5px",
                    height: "30px",
                    padding: "0 10%",
                    fontFamily: "poppins",
                    fontSize: "13px",
                  }}
                >
                  <a
                    href="javascript:void(0)"
                    className="text-decoration-none d-flex justify-content-between"
                    style={{ color: "#000" }}
                  >
                    <span>
                      <BsPersonFill
                        className="mb-1"
                        style={{ marginRight: "2px" }}
                      />
                      Hi{" "}
                      {response != null
                        ? response &&
                          response.SEND_PROFILE_DATA &&
                          response.SEND_PROFILE_DATA.data &&
                          response.SEND_PROFILE_DATA.data.name
                        : null}
                    </span>
                    <FiChevronRight
                      style={{ marginTop: "5px", color: "#a39b9b" }}
                    />
                  </a>
                </div>
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
        <div
          style={{
            position: "fixed",
            top: "200px",
            right: "-3px",
            animation: "shakeX 2s infinite",
            zIndex: "99999",
          }}
        >
          <a href="tel:1800-309-1006">
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
          </a>
        </div>
      </Navbar>

      {/* start LOGIN Modal coding */}
      <Modal
        show={Login}
        size="sm"
        onHide={() => {
          dispatch(MOB_CLOSE_LOGIN_MODAL());
        }}
      >
        <Modal.Body className={Styles.body}>
          {/* Start Login Form Heading Coding */}
          <div className="text-center" style={{ paddingTop: "10px" }}>
            <h4>ForexBlues</h4>
          </div>
          <div className="text-center">
            <h3>Welcomes You!</h3>
          </div>

          <div
            className="text-center"
            style={{ fontWeight: "500", fontSize: "12px" }}
          >
            <span>Try PREMIUM for free!</span>
          </div>
          <div className="text-center">
            <Button
              className="w-75 mb-3 p-0 mt-2"
              style={{
                height: "20px",
                fontSize: "10px",
                letterSpacing: "1.5px",
                fontWeight: "500",
                backgroundColor: "#ffffff",
                border: "none",
                color: "#7fbbff",
              }}
              onClick={() => {
                dispatch(OPEN_MOB_SIGNUP_MODAL());
                dispatch(MOB_CLOSE_LOGIN_MODAL());
              }}
            >
              FREE TRIAL
            </Button>
          </div>
          {/* End Login Form Heading Coding */}

          {/* Start Login Form  Coding */}
          <MobLogin />
          {/* End Login Form  Coding */}
        </Modal.Body>
      </Modal>
      {/* End LOGIN Modal coding */}
      <Alert />
      {/* Start Mob Signup Modal  */}
      <Modal
        show={mobSignupShow}
        onHide={() => {
          dispatch(CLOSE_MOB_SIGNUP_MODAL());
        }}
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
            <Row>
              <Col>
                <MobSignup />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {/* End Mob Signup Modal  */}
    </>
  );
  return Design;
};

export default MobNavbar;
