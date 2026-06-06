import { Container, Row, Col, Modal } from "react-bootstrap";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore, IoLogoTwitter } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProvideFeedback from "./ProvideFeedback/ProvideFeedback";
import OPEN_CONTACT_MODAL from "../../Redux/Action/opencontactmodal.action";
import OPEN_REQUEST_CALLBACK from "../../Redux/Action/openrequestcallback.action";
import OPEN_PROVIDE_FEEDBACK from "../../Redux/Action/openprovidefeedbackmodal.action";
import CLOSE_PROVIDE_FEEDBACK from "../../Redux/Action/closeprovidefeedbackmodal.action";
import Link from "next/link";
const Footer = () => {
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const [modal, openModal] = useState(false);
  useEffect(() => {
    openModal(response.OPEN_CLOSE_PROVIDE_FEEDBACK.open);
  }, [response]);
  const Design = (
    <>
      <Container style={{ letterSpacing: "1px" }}>
        <Row>
          {/* Start Left Side Footer Coding */}
          <Col>
            <Row
              style={{
                paddingTop: "50px",
                paddingLeft: "50px",
                color: "#ffffff",
              }}
            >
              <Col className="mb-2" md={12}>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    letterSpacing: "2px",
                  }}
                >
                  CONTACT US
                </span>
              </Col>

              <div
                style={{
                  color: "#ffffff",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                <Col className="mb-2" md={12}>
                  <span
                    onClick={() => {
                      dispatch(OPEN_CONTACT_MODAL());
                    }}
                  >
                    {/* Message us */}
                  </span>
                </Col>
                <Col className="mb-2" md={12}>
                  <Link href="/request-call-back">
                    <span>Request Callback</span>
                  </Link>
                </Col>
                <Col
                  className="mb-4"
                  md={12}
                  onClick={() => {
                    dispatch(OPEN_PROVIDE_FEEDBACK());
                  }}
                >
                  <Link href="/provide-feedback">Provide Feedback</Link>
                </Col>
                {/* <Col className="mb-4" md={12}>
                  Chat bot
                </Col> */}

                <Col md={12}>
                  <div className="d-flex">
                    {/* Start Download on the app store */}
                    <Link href="https://apps.apple.com/us/app/forexblues/id1498671554?ls=1&fbclid=IwAR0wKLLbzJWW7klIr9J1wuEBKPHzpKgIF4L3dqCo7u3BhlypTGqitoaR6L4">
                      <a target="_blank" style={{ textDecoration: "none" }}>
                        <div
                          style={{
                            border: "1px solid #ffffff",
                            borderRadius: "10px",
                            width: "160px",
                            display: "flex",
                            color: "#ffffff",
                            padding: "4px",
                            cursor: "pointer",
                          }}
                        >
                          <BsApple style={{ fontSize: "50px" }} />
                          <span
                            style={{
                              marginTop: "8px",
                              marginLeft: "5px",
                              fontSize: "12px",
                            }}
                          >
                            Download on the App Store
                          </span>
                        </div>
                      </a>
                    </Link>
                    {/* End Download on the app store */}

                    {/* Start Get it on google play*/}
                    <Link href="https://play.google.com/store/search?q=forexblues&c=apps">
                      <a target="_blank" style={{ textDecoration: "none" }}>
                        <div
                          style={{
                            border: "1px solid #ffffff",
                            borderRadius: "10px",
                            display: "flex",
                            padding: "4px",
                            color: "white",
                            marginLeft: "20px",
                            cursor: "pointer",
                            padding: "7px",
                          }}
                        >
                          <IoLogoGooglePlaystore
                            style={{ fontSize: "35px", marginTop: "5px" }}
                          />
                          <span
                            style={{
                              marginLeft: "8px",
                              marginTop: "5px",
                              width: "90px",
                              fontSize: "12px",
                            }}
                          >
                            Get it on <br /> Google Play
                          </span>
                        </div>
                      </a>
                    </Link>
                    {/* End get it on google play*/}
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
          {/* End Left Side Footer Coding */}

          {/* Start Footer Middle Section */}
          <Col>
            <Row style={{ padding: "50px", color: "#ffffff" }}>
              <Col className="mb-2" md={12}>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    letterSpacing: "2px",
                  }}
                >
                  HELP
                </span>
              </Col>

              <div
                style={{
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                <Col className="mb-2" md={12}>
                  <Link href="/news">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      News
                    </a>
                  </Link>
                </Col>
                <Col className="mb-2" md={12}>
                  <Link href="/FAQ">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      FAQ
                    </a>
                  </Link>
                  <Link href="/about">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      /Testimonial
                    </a>
                  </Link>
                </Col>
                <Col className="mb-2" md={12}>
                  <Link href="/privacy-policy">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Privacy Policy
                    </a>
                  </Link>
                </Col>
                <Col className="mb-2" md={12}>
                  <Link href="/terms-and-condition">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Terms & Condition
                    </a>
                  </Link>
                </Col>

                <Col className="mb-2" md={12}>
                  <Link href="/economic-calender">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Economic Calender
                    </a>
                  </Link>
                </Col>

                <Col className="mb-2" md={12}>
                  <Link href="/coming-soon">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Forward Booking
                    </a>
                  </Link>
                </Col>
              </div>
            </Row>
          </Col>
          {/* End Footer Middle Section */}

          {/* Start Right side Footer Coding */}
          <Col>
            <Row
              style={{
                padding: "50px",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              <Col className="mb-2" md={12}>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    letterSpacing: "2px",
                  }}
                >
                  FOLLOW
                </span>
              </Col>

              <Col
                className="mb-2"
                md={12}
                style={{
                  fontSize: "13px",
                  cursor: "pointer",
                  marginLeft: "-4px",
                }}
              >
                <ul className="d-flex flex-column p-0">
                  <li className="mb-2">
                    <Link href="https://www.facebook.com/forexblues/">
                      <a
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <CgFacebook
                          style={{ fontSize: "20px", paddingRight: "1px" }}
                        />{" "}
                        Facebook
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://twitter.com/forex_blues">
                      <a
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <IoLogoTwitter
                          style={{ fontSize: "20px", paddingRight: "3px" }}
                        />
                        Twitter
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://www.youtube.com/channel/UCP9s1oyDvYJn7sVrO217O7Q">
                      <a
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <BsYoutube style={{ fontSize: "20px" }} /> Youtube
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://telegram.me/share/url?url=https://t.me/USDINRforecasts&text=JOIN%20TELEGRAM%20GROUP">
                      <a
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {" "}
                        <FaTelegramPlane
                          style={{ fontSize: "20px", paddingRight: "1px" }}
                        />
                        Telegram
                      </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="https://in.linkedin.com/company/forexblues">
                      <a
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <AiFillLinkedin
                          style={{ fontSize: "20px", paddingRight: "1px" }}
                        />{" "}
                        Linkedln
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          {/* End Right side Footer Coding */}
        </Row>

        <Row
          style={{
            color: "#ffffff",
            fontSize: "12px",
            padding: "10px 20px",
            marginLeft: "0px",
            fontWeight: "bolder",
          }}
        >
          <Col>
            Registered Address : - NEAR NIRMAL MAHTO PARK, RANCHI PATNA MAIN
            ROAD, MASRATU, HAZARIBAGH, JHARKHAND, 825301.
            <br /> Corporate Office Address : - IRIS Tower Sohna Road, Gurugram,
            India, 122018.
          </Col>
        </Row>

        <Row
          style={{
            color: "#ffffff",
            fontSize: "12px",
            padding: "10px 20px",
            marginLeft: "0px",
          }}
        >
          <Col>
            Disclaimer - We are not buying or selling Forex currencies, we are
            just providing consultancy, news and charts for educational purposes
            and also no monetary services are provided on the website.
          </Col>
        </Row>
        <Row
          style={{
            color: "#ffffff",
            fontSize: "12px",
            padding: "30px",
            marginLeft: "40px",
          }}
        >
          <Col>© 2023 forexblues.com</Col>
          <Col>All rights reserved</Col>
          <Col>+(91)-879 707 71 09</Col>
        </Row>
        <Row>
          <Col>
            <h6
              style={{
                fontFamily: "Poppins",
                color: "#ffffff",
                textAlign: "center",
                fontSize: "10px",
              }}
            >
              Crafted with{" "}
              <AiFillHeart style={{ color: "red", fontSize: "20px" }} /> by{" "}
              <a
                href="https://cybertizeweb.com/"
                target="_blank"
                className="text-decoration-none"
                style={{ color: "#ffffff" }}
              >
                Cybertize Technologies Pvt. Ltd.
              </a>
            </h6>
          </Col>

          {/*Start Provide feedback Modal Coding */}
          <Modal
            size="sm"
            show={modal}
            animation={false}
            onHide={() => {
              dispatch(CLOSE_PROVIDE_FEEDBACK());
            }}
          >
            <Modal.Header
              style={{
                padding: "0px",
                display: "flex",
                justifyContent: "center",
                letterSpacing: "1px",
              }}
            >
              <Modal.Title>
                <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
                  FEEDBACK
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ProvideFeedback />
            </Modal.Body>
          </Modal>
          {/* End Provide feedback Modal Coding */}
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Footer;
