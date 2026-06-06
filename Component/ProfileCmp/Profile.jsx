import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Collapse,
} from "react-bootstrap";
import Image from "next/image";
import Styles from "./profile.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { RiSave3Fill } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import SEND_PROFILE_DATA from "../Redux/Action/sendprofiledata.action";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect, useRef } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import forgetPwd from "../../lottie/forgetPwd.json";
import verifyOtp from "../../lottie/verifyOtp.json";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { number } from "yup";
const Profile = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const response = useSelector((response) => response);
  const PersonDetails = response.SEND_PROFILE_DATA.data;
  const Aid = PersonDetails && PersonDetails.accountId;

  const [sweetAlert, setSweetAlert] = useState(false);
  const [deactivateAlert, setDeactivateAlert] = useState(false);
  const personId = cookies.get("personId");
  const userNumber = PersonDetails && PersonDetails.phone;
  const userEmail = PersonDetails && PersonDetails.email;
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [otpShow, setOtpShow] = useState(false);
  const [wrongOtp, setWrongOtp] = useState("none");
  const [changePwdModal, setChangePwdModal] = useState(false);
  const [editNumber, setEditNumber] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [NumberOtpShow, setNumberOtpShow] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);

  const [saveShow, setSaveShow] = useState("d-none");
  const [saveEmailShow, setSaveEmailShow] = useState("d-none");
  const [pencilShow, setPencilShow] = useState("d-block");
  const [emailPencilShow, setEmailPencilShow] = useState("d-block");
  const [box, setBox] = useState("");
  const [Emailbox, setEmailBox] = useState("");
  const [getNumber, setGetNumber] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [RegexValue, setRegexValue] = useState("");
  const [OtpRegexValue, setOtpRegexValue] = useState("");
  const [NumberOtpRegex, setNumberOtpRegex] = useState("");
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState("Copy Referral Code");
  const [referralBtnColor, setReferralBtnColor] = useState("#1964be");
  const [display, setDisplay] = useState("none");

  const [myReferral, setMyReferral] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [unsubscribed, setUnsubscribed] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [passwordChangedMsg, setPasswordChangedMsg] = useState("");
  const [title, setTitle] = useState("");
  // Start Sweet Alert Coding
  const Alert = () => {
    const alert = (
      <>
        <SweetAlert
          show={sweetAlert}
          title={title}
          success
          customButtons={
            <>
              <Button
                className="Primary w-50"
                onClick={() => setSweetAlert(false)}
              >
                OK
              </Button>
            </>
          }
        >
          {passwordChangedMsg}
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet Alert Coding

  // Start Sweet Alert Coding
  const DeactivateAccount = () => {
    const alert = (
      <>
        <SweetAlert
          show={deactivateAlert}
          title={title}
          danger
          customButtons={
            <>
              <Button
                className="Primary w-25"
                style={{ marginRight: "50px" }}
                onClick={() => DeactivateAccountApi()}
              >
                OK
              </Button>

              <Button
                className="btn-danger w-25"
                onClick={() => setDeactivateAlert(false)}
              >
                Close
              </Button>
            </>
          }
        >
          Delete Account Alert :Reactive within 90 days to restore. Otherwise
          its gone forever!
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet Alert Coding

  const DeactivateAccountApi = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/deactivate-account.php?accountId=${personId}&authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s`,
      });
      setDeactivateAlert(false);
      Logout();
    } catch (err) {}
  };

  // start Logout function
  const Logout = () => {
    cookies.remove("fx_1994");
    cookies.remove("personId");
    router.push("/");
  };
  // End Logout function

  // Start Copy Referal URL
  const copyToClip = () => {
    const copyText = document.getElementById("url");
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    setCopy("Referral Code Copied");
    setReferralBtnColor("#4BB543");
    setDisplay("block");
  };
  // End Copy Referal URL

  useEffect(() => {
    dispatch(SEND_PROFILE_DATA(personId));
  }, []);
  // Start Lottie option
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: forgetPwd,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // End lottie Option

  // Start Verify Otp Lottie
  const verifyOtpOption = {
    loop: true,
    autoplay: true,
    animationData: verifyOtp,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // End Verify Otp Lottie

  // Start send OTP
  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url: "/send-password-change-otp-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });
      setShow(false);
      setOtpShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  // End send OTP

  // Start OTP  verification API
  const otpGetData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios({
        method: "POST",
        url: "profile-verify-otp.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });
      if (response.data[0].response === "1") {
        setWrongOtp("none");
        setOtpShow(false);
        setChangePwdModal(true);
      } else {
        setWrongOtp("block");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // End OTP Verification API

  // Start change password API
  const changePassword = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url: "/reset-password-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });
      setChangePwdModal(false);
      setSweetAlert(true);
      setTitle("Password Changed");
      setPasswordChangedMsg("Your password has been changed successfully!");
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };
  // End Change Password ApI

  // Start Mobile Edit
  const MobileEdit = () => {
    setEditNumber(true);
    setBox("border");
    setSaveShow("d-block");
    setPencilShow("d-none");
  };

  // End Mobile Edit

  // Start Change in Number
  const changeInNumber = async (e) => {
    const value = e.target.innerHTML;
    setGetNumber(value);
  };
  // End Change in Number
  // Update Phone Number Coding
  const updateNumber = async () => {
    const data = {
      account_id: PersonDetails.id,
      phone: getNumber,
    };
    try {
      const response = await axios({
        method: "POST",
        url: "/update-mobile-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: data,
      });
      setSaveShow("d-none");
      setPencilShow("d-block");
      setBox("");
    } catch (err) {
      console.error(err);
    }
  };
  // End Update Phone Number Coding

  // start Email Edit
  // const EmailEdit = () => {
  //   setEditEmail(true);
  //   setEmailBox("border");
  //   setEmailPencilShow("d-none");
  //   setSaveEmailShow("d-block");
  // };

  // End Email Edit

  const changeInEmail = (e) => {
    const value = e.target.innerHTML;
    setGetEmail(value);
  };

  // Update Email Coding
  // const updateEmail = async () => {
  //   const data = {
  //     account_id: PersonDetails.id,
  //     email: getEmail,
  //   };
  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "/update-email-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
  //       data: data,
  //     });
  //     setEmailBox("");
  //     setEmailPencilShow("d-block");
  //     setSaveEmailShow("d-none");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // End Update Email Coding

  // Start code Send Otp for Number verification
  const sendOtpForNumber = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `/process-reset-phone-v2.php?email=${userEmail}&phone=${getNumber}`,
      });
      if (response.data.response == 1) {
        setNumberOtpShow(true);
      } else {
        setNumberAlert(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // Start code Send Otp for Number verification

  // This sweetAlert open when Signup Paid -> OTP -> Premium [Payment flow] -> My / Ac
  useEffect(() => {
    const key = sessionStorage.getItem("_key");
    if (key == "true") {
      setSweetAlert(true);
      setTitle("Account Created Successfully");
      setPasswordChangedMsg("Phone Number Verified");
      setTimeout(() => {
        sessionStorage.removeItem("_key");
      }, 10000);
    } else if (key == "false") {
      setSweetAlert(true);
      setTitle("Account Created Successfully");
      setPasswordChangedMsg("Phone Number Verified");
      setTimeout(() => {
        sessionStorage.removeItem("_key");
      }, 10000);
    }
  }, []);
  // This sweetAlert open when Signup Paid -> OTP -> Premium [Payment flow] -> My / Ac

  const NumberRegex = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };

  const OtpRegex = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setOtpRegexValue(input);
    }
  };

  const NumberOtpVerify = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setNumberOtpRegex(input);
    }
  };

  const otpVerificationForNumber = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const value = formData.get("n-otp");
    try {
      const response = await axios({
        method: "GET",
        url: `/check-otp-phone-change.php?email=${userEmail}&otp=${value}`,
      });
      if (response.data.response == 1) {
        updateNumber();
        setNumberOtpShow(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Design = (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className={Styles.plate}>
              <div>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={120}
                  height={50}
                  className="p-2"
                />
              </div>
              <div className="d-flex">
                <div>
                  <Image src="/refer.png" width={350} height={240} />
                </div>
                <div style={{ marginTop: "-20px" }}>
                  <h4>
                    <span style={{ color: "#f0953f", fontSize: "16px" }}>
                      REFER
                    </span>{" "}
                    &{" "}
                    <span style={{ color: "#637cab", fontSize: "16px" }}>
                      EARN
                    </span>
                  </h4>
                  <div className={Styles.content}>
                    1. Generate Referral code.
                  </div>
                  <div className={Styles.content}>2. Share the Link</div>
                  <div className={Styles.content}>
                    3. Person Sign Up & Subscribe
                  </div>
                  <div className={Styles.content}>
                    4. your account is credited
                  </div>
                  <Button className={Styles.btn} onClick={() => setOpen(!open)}>
                    GENERATE
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* Start Referal Code section */}
        <Row>
          <Col className="d-flex justify-content-center ">
            <Collapse in={open}>
              <div className={Styles.referal} id="example-collapse-text">
                <h4>Your Referral Link is here:</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      value={`Hi, I just invited you to try out Forexblues - World's 1st online forex advisory.                   https://classic.forexblues.com/signup?tid=${Aid}`}
                      className={Styles.referalField}
                      id="url"
                    />
                  </Form.Group>
                </Form>

                <img
                  src="share-stripe.jpg"
                  width="100%"
                  height="70px"
                  className="mb-3"
                />

                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "5px",
                    marginTop: "10px",
                    display: `${display}`,
                  }}
                >
                  Great!, Now you paste the referral link anywhere you want to
                  share. You can share your friend via Whatsapp, Instagram,
                  Twitter, Messenger, Facebook Post
                </p>

                <Button
                  style={{
                    backgroundColor: `${referralBtnColor}`,
                    color: "#fff",
                  }}
                  onClick={copyToClip}
                >
                  {" "}
                  <i class="fa fa-clipboard" aria-hidden="true"></i>
                  <span className="p-1">{copy}</span>
                </Button>
              </div>
            </Collapse>
          </Col>
        </Row>
        {/* End Referal Code section */}
        <Row>
          <Col className="d-flex justify-content-center ">
            <div className={Styles.logout}>
              <div style={{ padding: "5px 0" }}>
                <Image
                  src="/profile.webp"
                  alt="profile"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
                <h3>{PersonDetails && PersonDetails.name}</h3>
                <p>
                  {PersonDetails && PersonDetails.daysLeft} days of premium left
                </p>
              </div>
              <div className="d-flex" style={{ marginLeft: "40px" }}>
                <span>
                  {PersonDetails && PersonDetails.accountType}
                  <Button
                    style={{
                      backgroundColor: "#deb203",
                      border: "none",
                      borderRadius: "10px",
                      color: "#ffffff",
                      fontSize: "12px",
                      padding: "0px",
                      marginLeft: "5px",
                      padding: "5px",
                    }}
                  >
                    {PersonDetails && PersonDetails.accountMode}
                  </Button>
                </span>
              </div>
              <div className="d-flex" style={{ marginLeft: "40px" }}>
                <span>
                  Customer ID: {PersonDetails && PersonDetails.customerId}
                </span>
              </div>
              {/* Start Phone Number */}
              <div className="d-flex" style={{ marginLeft: "40px" }}>
                <span>
                  Phone: +(91){" "}
                  <span
                    contentEditable={editNumber}
                    className={box}
                    onInput={(e) => {
                      changeInNumber(e);
                    }}
                  >
                    {PersonDetails && PersonDetails.phone}
                  </span>
                </span>
                <span
                  className={pencilShow}
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                  onClick={() => {
                    MobileEdit();
                  }}
                >
                  <MdModeEditOutline />
                </span>
                <span
                  className={saveShow}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    sendOtpForNumber();
                  }}
                >
                  <RiSave3Fill className="text-success" />
                </span>
              </div>
              {/* End Phone Number */}

              {/* Start Email Id */}
              <div className="d-flex" style={{ marginLeft: "40px" }}>
                <span
                  contentEditable={editEmail}
                  className={Emailbox}
                  onInput={(e) => {
                    changeInEmail(e);
                  }}
                >
                  {PersonDetails && PersonDetails.email}
                </span>
                {/* <span
                  className={emailPencilShow}
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                  onClick={() => {
                    EmailEdit();
                  }}
                >
                  <MdModeEditOutline />
                </span>
                <span
                  className={saveEmailShow}
                  style={{ cursor: "pointer" }}
                  onClick={updateEmail}
                >
                  <RiSave3Fill className="text-success" />
                </span> */}
              </div>
              {/* End Email Id */}
              <div
                className="d-flex"
                style={{ marginLeft: "40px" }}
                onClick={() => {
                  setMyReferral(true);
                }}
              >
                <a href="#">My referral conversions</a>
              </div>
              <div
                className="d-flex"
                style={{ marginLeft: "40px" }}
                onClick={() => setShow(true)}
              >
                <a href="javascript:void(0)">Change Password</a>
              </div>

              <div
                className="d-flex mb-3"
                style={{ marginLeft: "40px" }}
                onClick={() => setDeactivateAlert(true)}
              >
                <a href="javascript:void(0)">Deactivate Account</a>
              </div>
              <Button className={Styles.logoutBtn} onClick={Logout}>
                LOGOUT
              </Button>
            </div>

            {/* Start Reset Password Modal Coding */}
            <Modal
              show={show}
              onHide={() => {
                setShow(false);
                setRegexValue("");
              }}
              size="sm"
            >
              <Modal.Header closeButton>
                <Modal.Title>Forgot Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Lottie options={defaultOptions} height={150} width={150} />
                <h6 className="d-flex justify-content-center mb-3">
                  Enter Your Registered Mobile Number
                </h6>
                <Form onSubmit={getData}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name="phone"
                      onChange={NumberRegex}
                      value={RegexValue}
                      placeholder="Mobile Number"
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
            {/* End Reset Password Modal Coding */}

            {/* Start Verify-otp Modal coding */}

            <Modal show={otpShow} onHide={() => setOtpShow(false)} size="sm">
              <Modal.Header closeButton>
                <Modal.Title>OTP Verification </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Lottie options={verifyOtpOption} height={150} width={200} />
                <Form onSubmit={otpGetData}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="hidden"
                      value={personId}
                      placeholder="Enter Account Id"
                      name="account-id"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>OTP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP"
                      name="otp"
                      value={OtpRegexValue}
                      onChange={OtpRegex}
                    />
                  </Form.Group>
                  <span
                    className="text-danger"
                    style={{ display: `${wrongOtp}` }}
                  >
                    Wrong OTP
                  </span>

                  <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>
            {/* End Verify-otp Modal coding */}

            {/* Start Number Valid Otp Modal Coding */}
            <Modal
              show={NumberOtpShow}
              onHide={() => setNumberOtpShow(false)}
              size="sm"
            >
              <Modal.Header closeButton>
                <Modal.Title>OTP Verification </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Lottie options={verifyOtpOption} height={150} width={200} />
                <Form onSubmit={otpVerificationForNumber}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>OTP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP"
                      name="n-otp"
                      value={NumberOtpRegex}
                      onChange={NumberOtpVerify}
                    />
                  </Form.Group>
                  <span
                    className="text-danger"
                    style={{ display: `${wrongOtp}` }}
                  >
                    Wrong OTP
                  </span>

                  <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>
            {/* End Start Number Valid Otp Modal Coding */}

            {/* Start Change Password Modal Coding */}
            <Modal
              show={changePwdModal}
              onHide={() => setChangePwdModal(false)}
              size="sm"
            >
              <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={changePassword}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="hidden"
                      placeholder="Enter Registered
                      Phone Number"
                      name="phone"
                      value={userNumber}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="p1"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
            {/* End Change Password Modal Coding */}
            {/* Start My referal Conversion */}
            <Modal
              size="sm"
              show={myReferral}
              animation={false}
              onHide={() => setMyReferral(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title
                  style={{ fontSize: "20px", fontFamily: "Poppins" }}
                >
                  My Referral Conversions
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="text-center">
                  <Button
                    className="w-75 mb-2"
                    onClick={() => {
                      setSubscribed(true);
                    }}
                  >
                    <BiRupee style={{ marginTop: "-3px" }} />
                    Subscribed Referrals
                  </Button>
                  <Button
                    className="w-75"
                    style={{ paddingLeft: "3px" }}
                    onClick={() => {
                      setUnsubscribed(true);
                    }}
                  >
                    <TiArrowForward />
                    Unsubscribed Referrals
                  </Button>
                </div>
              </Modal.Body>
            </Modal>
            {/* End My referal Conversion */}
            {/* Start subscribed Conversion details */}
            <Modal
              show={subscribed}
              fullscreen={fullscreen}
              onHide={() => setSubscribed(false)}
              aria-labelledby="example-custom-modal-styling-title"
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  <div style={{ fontFamily: "Poppins", marginLeft: "500px" }}>
                    <h4>Referral Conversions & Breakdown</h4>
                    <h4 style={{ color: "#1c9ad6", textAlign: "center" }}>
                      Subscribed Referrals
                    </h4>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  src={`https://cms.forexblues.com/json/api/subscribed-track-referral-client-view.php?cid=${Aid}&view=client&token=s57d45e=g54%`}
                  width="100%"
                  height="450px"
                ></iframe>
              </Modal.Body>
            </Modal>
            {/* End subscribed Conversion details */}

            {/* Start unsubscribed Conversion details */}
            <Modal
              show={unsubscribed}
              fullscreen={fullscreen}
              onHide={() => setUnsubscribed(false)}
              aria-labelledby="example-custom-modal-styling-title"
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  <div style={{ fontFamily: "Poppins", marginLeft: "500px" }}>
                    <h4>Referral Conversions & Breakdown</h4>
                    <h4 style={{ color: "#1c9ad6", textAlign: "center" }}>
                      Unsubscribed Referrals
                    </h4>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  src={`https://cms.forexblues.com/json/api/unsubscribed-track-referral-client-view.php?cid=${Aid}&view=client&token=s57d45e=g54%`}
                  width="100%"
                  height="450px"
                ></iframe>
              </Modal.Body>
            </Modal>
            {/* End unsubscribed Conversion details */}
            {/* Start Alert Message when enter wrong number  */}
            <Modal
              size="sm"
              show={numberAlert}
              onHide={() => setNumberAlert(false)}
              style={{ marginTop: "150px" }}
            >
              <Modal.Header
                style={{
                  padding: "0",
                  display: "flex",
                  justifyContent: "center",
                }}
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
                  <span>Please,enter correct number</span>
                </div>

                <div className="text-center">
                  <Button
                    className="w-25 mt-3 "
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
                    onClick={() => setNumberAlert(false)}
                  >
                    CLOSE
                  </Button>
                </div>
              </Modal.Body>
            </Modal>

            {/* End Alert Message when enter wrong number */}

            <Alert />
            <DeactivateAccount />
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Profile;
