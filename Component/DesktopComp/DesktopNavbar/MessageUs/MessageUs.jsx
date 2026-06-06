import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Link from "next/link";
import CLOSE_CONTACT_MODAL from "../../../Redux/Action/closecontactmodal.action";
import { useDispatch } from "react-redux";
import Style from "../navbar.module.css";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
const MessageUs = () => {
  const dispatch = useDispatch();
  const [sweetAlert, setSweetAlert] = useState(false);
  const [messageUs, setMessageUs] = useState("");
  const [RegexValue, setRegexValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  // Start Message Us api coding
  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios({
        method: "POST",
        url: "/save-contact-details.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });
      setMessageUs(response.data[0].msg);
      form.reset();
      setSweetAlert(true);
    } catch (err) {
      console.log(err);
    }
  };
  // End Message Us api coding

  const getFormData = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };

  // start regular expression for Name field

  const getNameData = (event) => {
    const input = event.target.value;
    const regex = /^[a-zA-Z_ ]*$/;
    if (input === "" || regex.test(input)) {
      setNameValue(input);
    }
  };
  // End regular expression for Name field

  const Alert = () => {
    const alert = (
      <>
        <SweetAlert
          show={sweetAlert}
          title="Your concern is submitted"
          success
          customButtons={
            <>
              <Button
                className="Primary w-50"
                onClick={() => {
                  setSweetAlert(false);
                  dispatch(CLOSE_CONTACT_MODAL());
                }}
              >
                OK
              </Button>
            </>
          }
        >
          We will get back to you shortly.
        </SweetAlert>
      </>
    );
    return alert;
  };

  const Design = (
    <>
      <Container>
        <Row>
          <Form onSubmit={getData}>
            <Col md={12}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required="required"
                  placeholder="Enter Full Name"
                  value={nameValue}
                  maxLength="20"
                  autocomplete="off"
                  onChange={getNameData}
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    borderColor: "#a1c4ec",
                  }}
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Phone number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  required="required"
                  placeholder="Enter Phone Number"
                  maxLength="10"
                  value={RegexValue}
                  onChange={getFormData}
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    borderColor: "#a1c4ec",
                  }}
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required="required"
                  placeholder="Enter Email "
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    borderColor: "#a1c4ec",
                  }}
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Your message
                </Form.Label>

                <Form.Control
                  as="textarea"
                  name="message"
                  required="required"
                  maxLength="600"
                  placeholder="Leave a comment here"
                  style={{ height: "200px", borderColor: "#a1c4ec" }}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  style={{
                    width: "250px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    fontSize: "12px",
                    borderRadius: "8px",
                    backgroundColor: "#1fe32d",
                    border: "none",
                    boxShadow: "none",
                    letterSpacing: "1px",
                  }}
                >
                  <MdOutlineForwardToInbox
                    style={{
                      fontSize: "16px",
                      marginTop: "-3px",
                      marginRight: "3px",
                    }}
                  />{" "}
                  SEND MESSAGE
                </Button>
                <Link href="https://web.whatsapp.com/send?phone=+(91)-8580255271">
                  <a
                    target="_blank"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Button
                      style={{
                        width: "40px",
                        paddingTop: "0px",
                        paddingBottom: "3px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        backgroundColor: "#1fe32d",
                        border: "none",
                        letterSpacing: "1px",
                        marginLeft: "3px",
                        boxShadow: "none",
                      }}
                    >
                      <FaWhatsapp />
                    </Button>
                  </a>
                </Link>
              </div>
            </Col>
          </Form>
          <Alert />
        </Row>
      </Container>
    </>
  );

  return Design;
};

export default MessageUs;
