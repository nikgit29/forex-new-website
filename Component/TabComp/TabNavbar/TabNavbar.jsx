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
import Styles from "./Tabnavbar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPersonFill } from "react-icons/bs";
import OPEN_CONTACT_MODAL from "../../Redux/Action/opencontactmodal.action";
import MOB_OPEN_LOGIN_MODAL from "../../Redux/Action/MobAction/mobopenloginmodal.action";
import MOB_CLOSE_LOGIN_MODAL from "../../Redux/Action/MobAction/mobcloseloginmodal.action";
import CLOSE_MOB_SIGNUP_MODAL from "../../Redux/Action/MobAction/closemobsignupmodal.action";
import OPEN_MOB_SIGNUP_MODAL from "../../Redux/Action/MobAction/openmobsignupmodal.action";
import CLOSE_SIGNUP_MODAL from "../../Redux/Action/closesignupmodal.action";
import { FiChevronRight } from "react-icons/fi";

import TabLogin from "../TabAuth/TabLogin/TabLoginLeft";
import TabSignup from "../../MobComp/MobAuth/MobSignup/MobSignup";
import CLOSE_SWEET_ALERT from "../../Redux/Action/closesweetalert.action";
import SweetAlert from "react-bootstrap-sweetalert";
import Cookies from "universal-cookie";

const MobNavbar = ({ mobReferralPath }) => {
  const [show, setShow] = useState(false);
  const [btnDefault, setBtnDefault] = useState("#ebeaea");
  const [modal, openModal] = useState(false);
  const [Login, setLogin] = useState(false);
  const [tabSignupShow, setTabSignupShow] = useState(false);
  const [sweetAlert, setSweetAlert] = useState(false);
  const [profile, showProfile] = useState("none");
  const [premium, setPremium] = useState("d-none");
  const [trial, setTrial] = useState("d-block");
  const [notify, setNotify] = useState("d-none");
  const [login, showLogin] = useState("block");
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");

  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  useEffect(() => {
    setLogin(response.OPEN_CLOSE_MODAL.open);
    openModal(response.OPEN_CLOSE_CONTACT_MODAL.open);
    setLogin(response.MOB_OPEN_CLOSE_LOGIN_MODAL.status);
    setTabSignupShow(response.MOB_OPEN_CLOSE_SIGNUP_MODAL.state);
    setSweetAlert(response.OPEN_CLOSE_SWEET_ALERT.sweet);
  }, [response]);

  useEffect(() => {
    if (cookies.get("fx_1994") != undefined) {
      showLogin("none");
      showProfile("block");
      setPremium("d-block");
      setTrial("d-none");
      setNotify("d-block");
    } else {
      showProfile("none");
    }
  }, [cookiesDependency]);

  // Start Signup Modal Open when client came through referral Link

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
          Phone Number Verified
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet alert Coding
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
                    fontSize: "14px",
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
                    fontSize: "14px",
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
                    fontSize: "14px",
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
                    style={{ color: "#000", fontSize: "14px" }}
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

              {/* <Link href="/forward_booking">
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
                  <span className="mt-1">FORWARD BOOKING</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link> */}
              <Link href="/coming-soon">
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
                  <span className="mt-1">FORWARD BOOKING</span>
                  <FiChevronRight
                    style={{ marginTop: "5px", color: "#a39b9b" }}
                  />
                </div>
              </Link>
              <Link href="/">
                <div className={trial}>
                  <div
                    className="w-100 mb-1 d-flex justify-content-between"
                    style={{
                      backgroundColor: `${btnDefault}`,
                      color: "#000",
                      display: `${trial}`,
                      borderBottom: "1px solid #f3f0f0",
                      letterSpacing: "0.5px",
                      height: "30px",
                      padding: "0 10%",
                      fontFamily: "poppins",
                      fontSize: "14px",
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
                      display: `${premium}`,
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
                      display: `${notify}`,
                      borderBottom: "1px solid #f3f0f0",
                      letterSpacing: "0.5px",
                      height: "30px",
                      padding: "0 10%",
                      fontFamily: "poppins",
                      fontSize: "14px",
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
                    fontSize: "14px",
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
          <TabLogin />
          {/* End Login Form  Coding */}
        </Modal.Body>
      </Modal>
      {/* End LOGIN Modal coding */}
      <Alert />
      {/* Start Mob Signup Modal  */}
      <Modal
        show={tabSignupShow}
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
                <TabSignup />
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
