import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import CLOSE_PROVIDE_FEEDBACK from "../../Redux/Action/closeprovidefeedbackmodal.action";
import { useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
const ProvideFeedback = () => {
  const [sweetAlert, setSweetAlert] = useState(false);
  const [RegexValue, setRegexValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const dispatch = useDispatch();

  // Start Message Us api coding
  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios({
        method: "POST",
        url: "/save-feedback.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });

      form.reset();
      setSweetAlert(true);
    } catch (err) {
      console.log(err);
    }
  };
  // End Message Us api coding

  // start regular expression for Number field
  const getFormData = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };
  // End regular expression for Number field

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
          title="Feedback Sent"
          success
          customButtons={
            <>
              <Button
                className="Primary w-50"
                onClick={() => {
                  setSweetAlert(false);
                  dispatch(CLOSE_PROVIDE_FEEDBACK());
                }}
              >
                OK
              </Button>
            </>
          }
        >
          Thank You for your feedback. <br /> Your feedback is really important
          for us
        </SweetAlert>
      </>
    );
    return alert;
  };

  const Design = (
    <>
      <Container style={{ fontFamily: "roboto" }}>
        <Row className="d-flex justify-content-center">
          <Col
            sm={12}
            md={8}
            lg={3}
            className=" pt-4 pb-5 bg-light"
            style={{ borderRadius: "20px" }}
          >
            <div className="text-center">
              <span
                style={{
                  fontSize: "12px",
                  color: "#a3a2a2",
                }}
              >
                PROVIDE FEEDBACK
              </span>
              <hr />
            </div>
            <div className="px-1">
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
                      value={nameValue}
                      onChange={getNameData}
                      placeholder="Enter Full Name"
                      maxLength="20"
                      autocomplete="off"
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
                      value={RegexValue}
                      onChange={getFormData}
                      maxLength="10"
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
                      PROVIDE FEEDBACK
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
            </div>
          </Col>

          <Alert />
        </Row>
      </Container>
    </>
  );

  return Design;
};

export default ProvideFeedback;
