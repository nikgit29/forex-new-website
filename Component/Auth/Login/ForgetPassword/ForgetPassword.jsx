import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import CLOSE_FORGET_PASSWORD_MODAL from "../../../Redux/Action/closeforgetpasswordmodal.action";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
const ForgetPassword = () => {
  const [otpShow, setOtpShow] = useState(false);
  const [wrongOtp, setWrongOtp] = useState("none");
  const [number, setNumber] = useState([]);
  const [sweetAlert, setSweetAlert] = useState(false);
  const [changePwdModal, setChangePwdModal] = useState(false);
  const [show, setShow] = useState(false);
  const [RegexValue, setRegexValue] = useState("");
  const [otpRegex, setOtpRegex] = useState("");
  const response = useSelector((response) => response);
  const dispatch = useDispatch();
  useEffect(() => {
    setShow(response.OPEN_CLOSE_FORGET_PASSWORD_MODAL.open);
  }, [response]);

  // Start Sweet Alert Coding
  const Alert = () => {
    const alert = (
      <>
        <SweetAlert
          show={sweetAlert}
          title="You're All Set"
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
          Password Changed Successfully
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet Alert Coding
  // Start send OTP
  const getOtpData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url: "/send-password-change-otp-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });
      setNumber(response.data[0].phone);
      setShow(false);
      setOtpShow(true);
      setRegexValue("");
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
        url:
          "check_otp.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&phone=" +
          number,
        data: formData,
      });
      if (response.data.response === true) {
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
        url:
          "/update_password.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&phone=" +
          number,
        data: formData,
      });
      setChangePwdModal(false);
      setSweetAlert(true);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };
  // End Change Password ApI

  const getPhoneData = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };

  const OtpValidation = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setOtpRegex(input);
    }
  };

  const Design = (
    <>
      {/* Start Reset Password Modal Coding */}
      <Modal
        show={show}
        onHide={() => {
          dispatch(CLOSE_FORGET_PASSWORD_MODAL());
          setRegexValue("");
        }}
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="d-flex justify-content-center mb-3">
            Enter Your Registered Mobile Number
          </h6>
          <Form onSubmit={getOtpData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="phone"
                placeholder="Mobile Number"
                value={RegexValue}
                onChange={getPhoneData}
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
      <Modal
        show={otpShow}
        onHide={() => {
          setOtpShow(false), setWrongOtp("none");
        }}
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>OTP Verification </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={otpGetData}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                value={otpRegex}
                onChange={OtpValidation}
                placeholder="Enter OTP"
                name="otp"
              />
            </Form.Group>
            <span className="text-danger" style={{ display: `${wrongOtp}` }}>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* End Change Password Modal Coding */}
      <Alert />
    </>
  );

  return Design;
};

export default ForgetPassword;
