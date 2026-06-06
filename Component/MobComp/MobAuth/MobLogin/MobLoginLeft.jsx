import { Button, Form, Modal } from "react-bootstrap";
import Cookies from "universal-cookie";
import useAxios from "../../../Hooks/useAxios";
import { useState, useEffect } from "react";
import OPEN_MOB_SIGNUP_MODAL from "../../../Redux/Action/MobAction/openmobsignupmodal.action";
import CLOSE_MOB_LOGIN_MODAL from "../../../Redux/Action/MobAction/mobcloseloginmodal.action";
import SEND_PROFILE_DATA from "../../../Redux/Action/sendprofiledata.action";
import OPEN_FORGET_PASSWORD_MODAL from "../../../Redux/Action/openforgetpasswordmodal.action";
import { useDispatch } from "react-redux";

import axios from "axios";
const MobLoginLeft = () => {
  const cookies = new Cookies();
  const [errorModal, setErrorModal] = useState(false);

  const dispatch = useDispatch();
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
      if (response.data[0].response == "2") {
        const cookiesData = response.data[0].cookiesdata;
        const persionId = response.data[0].accountId;
        cookies.set("fx_1994", cookiesData, { path: "/", maxAge: "2592000" });
        cookies.set("personId", persionId, { path: "/", maxAge: "2592000" });
        dispatch(SEND_PROFILE_DATA(persionId));
        dispatch(CLOSE_MOB_LOGIN_MODAL());
      } else {
        setErrorModal(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // End getFormData coding

  const design = (
    <>
      <div
        className="w-100 p-2"
        style={{
          backgroundColor: "#ffffff",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              color: "#c3dbf7",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            LOG IN
          </div>
          <div
            onClick={() => {
              dispatch(OPEN_MOB_SIGNUP_MODAL());
              dispatch(CLOSE_MOB_LOGIN_MODAL());
            }}
            style={{
              color: "#7fbbff",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            SIGN UP
          </div>
        </div>

        <div className="p-2">
          <Form onSubmit={getData}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label
                className="mb-0 mt-2"
                style={{
                  color: "#0b2299",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                Email or Phone
              </Form.Label>
              <Form.Control
                type="text"
                required="required"
                placeholder="Enter Email Address or Phone Number"
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
                style={{
                  color: "#0b2299",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
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
                style={{
                  color: "#a0c9f7",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
                onClick={() => {
                  dispatch(OPEN_FORGET_PASSWORD_MODAL());
                  dispatch(CLOSE_MOB_LOGIN_MODAL());
                }}
              >
                Forgot password?
              </Form.Group>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="w-75 mb-2 "
                style={{
                  height: "30px",
                  fontSize: "12px",
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
        </div>
      </div>

      {/* Start Incorrect Email Password Modal */}

      <Modal size="sm" show={errorModal} onHide={() => setErrorModal(false)}>
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
    </>
  );
  return design;
};

export default MobLoginLeft;
