import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
// import loginAction from "../../Redux/Action/login.action";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import SweetAlert from "react-bootstrap-sweetalert";
import { useState } from "react";
import OPEN_SIGNUP_MODAL from "../../Redux/Action/opensignupmodal.action";
import SEND_PROFILE_DATA from "../../Redux/Action/sendprofiledata.action";
import CLOSE_LOGIN_MODAL from "../../Redux/Action/closeloginmodal.action.";
import OPEN_FORGET_PASSWORD_MODAL from "../../Redux/Action/openforgetpasswordmodal.action";
const Login = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [errorModal, setErrorModal] = useState(false);
  const [activateAlert, setActivateAlert] = useState(false);
  const [emailId, setEmailId] = useState("");
  // Start getFormData coding
  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url: "/login-v2.php/?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });

      if (response.data[0].response == "1") {
        const cookiesData = response.data[0].cookiesdata;
        const persionId = response.data[0].accountId;
        cookies.set("fx_1994", cookiesData, { path: "/", maxAge: "2592000" });
        cookies.set("personId", persionId, { path: "/", maxAge: "2592000" });
        dispatch(SEND_PROFILE_DATA(persionId));
        dispatch(CLOSE_LOGIN_MODAL());
      } else if (response.data[0].response == "2") {
        setActivateAlert(true);
      } else {
        setErrorModal(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // End getFormData coding

  // Start Sweet Alert Coding
  const ActivateAccount = () => {
    const alert = (
      <>
        <SweetAlert
          show={activateAlert}
          danger
          customButtons={
            <>
              <Button
                className="Primary w-25"
                style={{ marginRight: "50px" }}
                onClick={() => restoreAccount()}
              >
                Restore
              </Button>

              <Button
                className="btn-danger w-25"
                onClick={() => setActivateAlert(false)}
              >
                Close
              </Button>
            </>
          }
        >
          Account Deactivated: Please login within the next 90 days to
          reactivate your account.
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet Alert Coding

  const restoreAccount = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/activate-account.php?email=${emailId}&authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s`,
      });
      setActivateAlert(false);
    } catch (err) {}
  };

  const Design = (
    <>
      <Container
        style={{
          padding: "0px",
          fontSize: "13px",
          paddingTop: "20px",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "#7fbbff", cursor: "pointer" }}>LOG IN</div>
          <div
            onClick={() => {
              dispatch(OPEN_SIGNUP_MODAL());
              dispatch(CLOSE_LOGIN_MODAL());
            }}
            style={{ color: "#c3dbf7", cursor: "pointer" }}
          >
            SIGN UP
          </div>
        </div>
        <Row>
          <Col>
            <Form onSubmit={getData}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{ color: "#0b2299", fontWeight: "500" }}
                >
                  Email or Phone
                </Form.Label>
                <Form.Control
                  type="text"
                  required="required"
                  placeholder="Enter Email or Phone Number"
                  name="email"
                  onChange={(e) => setEmailId(e.target.value)}
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{ color: "#0b2299", fontWeight: "500" }}
                >
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  required="required"
                  placeholder="Enter Password"
                  name="password"
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Form.Group
                  className="mb-2"
                  controlId="formBasicCheckbox"
                  style={{ color: "#a0c9f7", cursor: "pointer" }}
                  onClick={() => {
                    dispatch(OPEN_FORGET_PASSWORD_MODAL());
                    dispatch(CLOSE_LOGIN_MODAL());
                  }}
                >
                  Forgot password?
                </Form.Group>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-3 p-0"
                  style={{
                    height: "25px",
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    fontWeight: "500",
                    backgroundColor: "#92c5ff",
                    border: "none",
                  }}
                >
                  LOGIN
                </Button>
              </div>
            </Form>
            <ActivateAccount />
          </Col>
          {/* Start Incorrect Email Password Modal */}
          <Modal
            size="sm"
            show={errorModal}
            onHide={() => setErrorModal(false)}
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
                <span>Sorry, incorrect e-mail or password</span>
              </div>
              <Button
                className="w-100 mt-3"
                style={{
                  backgroundColor: "#e96e6e",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                  padding: "5px 0",
                  fontSize: "12px",
                }}
                onClick={() => {
                  setErrorModal(false);
                }}
              >
                TRY AGAIN
              </Button>
            </Modal.Body>
          </Modal>
          {/* End Incorrect Email Password Modal */}
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Login;
