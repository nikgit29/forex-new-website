import { Container, Row, Col } from "react-bootstrap";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore, IoLogoTwitter } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { useDispatch } from "react-redux";
import OPEN_CONTACT_MODAL from "../../Redux/Action/opencontactmodal.action";
import OPEN_REQUEST_CALLBACK from "../../Redux/Action/openrequestcallback.action";
import OPEN_PROVIDE_FEEDBACK from "../../Redux/Action/openprovidefeedbackmodal.action";

import Link from "next/link";
const Footer = () => {
  const dispatch = useDispatch();
  const Design = (
    <>
      <Container>
        <Row>
          {/* Start Left Side Footer Coding */}
          <Col sm={6}>
            <Row
              style={{
                paddingTop: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
                color: "#ffffff",
              }}
            >
              <Col className="mb-2" md={12}>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    letterSpacing: "2px",
                  }}
                >
                  CONTACT US
                </span>
              </Col>

              <div
                style={{
                  color: "#ffffff",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                {/* <Col className="mb-2" md={12}>
                  <span
                    onClick={() => {
                      dispatch(OPEN_CONTACT_MODAL());
                    }}
                  >
                    Message us
                  </span>
                </Col> */}
                <Col className="mb-2" md={12}>
                  <Link href="/request-call-back">
                    <span
                    // onClick={() => {
                    //   dispatch(OPEN_REQUEST_CALLBACK());
                    // }}
                    >
                      Request Callback
                    </span>
                  </Link>
                </Col>
                <Col
                  className="mb-4"
                  md={12}
                  // onClick={() => {
                  //   dispatch(OPEN_PROVIDE_FEEDBACK());
                  // }}
                >
                  <Link href="/provide-feedback">
                    <span>Provide Feedback</span>
                  </Link>
                </Col>
                {/* <Col className="mb-4" md={12}>
                  Chat bot
                </Col> */}
              </div>
            </Row>
          </Col>
          {/* End Left Side Footer Coding */}

          {/* Start Footer Middle Section */}

          <Col sm={6}>
            <Row
              style={{
                paddingTop: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
                color: "#ffffff",
                marginLeft: "20px",
              }}
            >
              <Col className="mb-2" md={12}>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    letterSpacing: "2px",
                  }}
                >
                  HELP
                </span>
              </Col>

              <div
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                <Col className="mb-2" md={12}>
                  <Link href="/FAQ">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      FAQ
                    </a>
                  </Link>
                </Col>
                <Col className="mb-2" md={12}>
                  <Link href="/news">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      News
                    </a>
                  </Link>
                </Col>
                <Col className="mb-2" md={12}>
                  <Link href="/archive">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Archive
                    </a>
                  </Link>
                </Col>
                <Col className="mb-2" md={12}>
                  <Link href="/terms-and-condition">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      T&C/
                    </a>
                  </Link>
                  <Link href="/privacy-policy">
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Privacy Policy
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
          <Row>
            <Col sm={6}>
              <Row
                style={{
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  paddingTop: "10px",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <Col className="mb-2" md={12}>
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "15px",
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
                    fontSize: "12px",
                    cursor: "pointer",
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
            <Col sm={6}>
              <Link href="https://apps.apple.com/us/app/forexblues/id1498671554?ls=1&fbclid=IwAR0wKLLbzJWW7klIr9J1wuEBKPHzpKgIF4L3dqCo7u3BhlypTGqitoaR6L4">
                <a target="_blank" style={{ textDecoration: "none" }}>
                  <div className="d-flex justify-content-center mb-4 mt-4">
                    <div
                      style={{
                        border: "1px solid #ffffff",
                        borderRadius: "10px",
                        width: "47%",
                        display: "flex",
                        padding: "4px",
                        cursor: "pointer",
                        color: "#ffffff",
                      }}
                    >
                      <BsApple style={{ fontSize: "50px" }} />
                      <span
                        style={{
                          marginLeft: "8px",
                          marginTop: "8px",
                          fontSize: "12px",
                        }}
                      >
                        Download on the App Store
                      </span>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="https://play.google.com/store/search?q=forexblues&c=apps">
                <a target="_blank" style={{ textDecoration: "none" }}>
                  <div className="d-flex justify-content-center">
                    <div
                      style={{
                        border: "1px solid #ffffff",
                        borderRadius: "10px",
                        width: "47%",
                        display: "flex",
                        padding: "7px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <IoLogoGooglePlaystore style={{ fontSize: "40px" }} />
                      <span
                        style={{
                          marginLeft: "8px",
                          marginTop: "5px",
                          fontSize: "12px",
                        }}
                      >
                        Get it on <br /> Google Play
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
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
            color: "#D6D5D4",
            fontSize: "12px",
            padding: "30px",
            color: "#ffffff",
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
            color: "#D6D5D4",
            fontSize: "12px",
            padding: "30px",
            color: "#ffffff",
          }}
        >
          <Col sm={4} className="text-center mb-2">
            © 2023 forexblues.com
          </Col>
          <Col sm={4} className="text-center  mb-2">
            All rights reserved
          </Col>
          <Col sm={4} className="text-center mb-4">
            +(91)-879 707 71 09
          </Col>

          <Col>
            <h6
              style={{
                fontFamily: "Poppins",
                color: "#ffffff",
                textAlign: "center",
                fontSize: "11px",
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
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Footer;
