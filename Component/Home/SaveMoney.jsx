import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import Link from "next/link";
import Styles from "./savemoney.module.css";
import Cookies from "universal-cookie";
import ALL_CURRENCY_DETAILS from "../Redux/Action/allcurrencydetails.action";
import OPEN_REQUEST_CALLBACK from "../Redux/Action/openrequestcallback.action";
import DAILY_FORCASTS from "../Redux/Action/dailyForcasts.action";
import OPEN_LOGIN_MODAL from "../Redux/Action/openclosemodal.action";
import MOB_OPEN_LOGIN_MODAL from "../Redux/Action/MobAction/mobopenloginmodal.action";
import OPEN_LOGIN_TO_SET_ALERT from "../Redux/Action/openpleaselogintosetratealert.action";
import CLOSE_LOGIN_TO_SET_ALERT from "../Redux/Action/closepleaselogintosetratealert.action";
import OPEN_FREE_TRIAL_MODAL from "../Redux/Action/openmodalfreetrialover.action";
import CLOSE_FREE_TRIAL_MODAL from "../Redux/Action/closemodalfreetrialover.action";
import OPEN_RENEW_MODAL from "../Redux/Action/openrenewmodal.action";
import CLOSE_RENEW_MODAL from "../Redux/Action/closerenewmodal.action";
import { useEffect, useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsLetter from "../Newsletter/Newsletter";
import smallslider from "../../smallslider.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectCoverflow } from "swiper";

const SaveMoney = ({ newsSlider }) => {
  const [fbsToken, setFbsToken] = useState();
  const router = useRouter();
  const cookies = new Cookies();
  const fbsStatus = cookies.get("__fbsStatus");
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const dependency = response && response.SEND_PROFILE_DATA.data;

  const setAlertModalStatus =
    response && response.OPEN_CLOSE_LOGIN_TO_SET_ALERT.Modal;

  const FreeTrialModalStatus =
    response && response.OPEN_CLOSE_FREE_TRIAL_MODAL.Modal;

  const RenewModalStatus = response && response.OPEN_CLOSE_RENEW_MODAL.Modal;

  //  Start redux dispatch code
  useEffect(() => {
    // dispatch(ALL_CURRENCY_DETAILS());
    dispatch(DAILY_FORCASTS());
  }, []);

  useEffect(() => {
    setFbsToken(localStorage.getItem("__fbsToken"));
    return () => {};
  }, [fbsStatus]);

  // setInterval(() => {
  //   dispatch(ALL_CURRENCY_DETAILS());
  // }, 10000);

  // End redux dispatch code

  const PersonDetails =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data;

  // Open Rate Alert
  const OpenSetAlert = () => {
    if (dependency != undefined) {
      dispatch(CLOSE_LOGIN_TO_SET_ALERT());
      if (
        PersonDetails.accountMode == "FREE TRIAL" &&
        PersonDetails.daysLeft == 0
      ) {
        dispatch(OPEN_FREE_TRIAL_MODAL());
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
        if (fbsToken != undefined) {
          router.push("/setalert");
        } else {
          Notification("error");
        }
      }
    } else {
      dispatch(OPEN_LOGIN_TO_SET_ALERT());
    }
  };
  // Close Rate Alert

  const openLoginModal = () => {
    if (window.innerWidth > 992) {
      dispatch(OPEN_LOGIN_MODAL());
      dispatch(CLOSE_LOGIN_TO_SET_ALERT());
    } else if (window.innerWidth < 992) {
      dispatch(MOB_OPEN_LOGIN_MODAL());
      dispatch(CLOSE_LOGIN_TO_SET_ALERT());
    }
  };

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "error":
        toast.error("please allow notification !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  const Design = (
    <>
      <Container className="mt-5">
        <Row>
          {/* Start Left Side Coding */}
          <Col md={6}>
            <h1 className="text-light">ForexBlues</h1>
            <h2 style={{ color: "rgba(255,255,255,0.3)" }}>
              Save money Earn money
            </h2>
            {/* Start Slider and content */}
            <Row>
              <Col md={3}>
                <Swiper
                  effect={"creative"}
                  grabCursor={true}
                  pagination={false}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  className="mySwiper"
                >
                  {smallslider.map((items, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={items.img} width="100%" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Col>

              <Col md={9} className="text-light mt-3">
                <h5>One Time Advisory</h5>
                <h6 style={{ fontSize: "21px" }}>Just Rs. 1000</h6>
                <p>USD | EUR | GBP | CAD</p>
                <p style={{ marginTop: "-21px" }}>
                  AUD | SGD | AED | SAR | JPY | GOLD
                </p>
              </Col>
            </Row>
            {/* End  Slider and content */}

            {/* Start Login Button and Request CallBack */}
            <Row>
              <Col md={3} style={{ padding: "27px 0" }}>
                <ul style={{ paddingLeft: "0" }}>
                  <li
                    style={{
                      border: "1px solid #ffffff",
                      padding: "0 27px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      paddingTop: "1px",
                      paddingBottom: "1px",
                    }}
                  >
                    <Link href="javascript:void(0)">
                      <a
                        onClick={() => {
                          OpenSetAlert();
                        }}
                      >
                        <FcAlarmClock
                          style={{ fontSize: "15px", marginRight: "5px" }}
                        />
                        SET ALERT
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} style={{ padding: "27px 0px" }}>
                <div>
                  <ul style={{ paddingLeft: "0px" }}>
                    <Link href="/request-call-back">
                      <li
                        style={{
                          padding: "2px 14px",
                          borderRadius: "8px",
                          fontSize: "13px",
                          backgroundColor: "#1fe32d",
                          color: "#ffffff",
                          cursor: "pointer",
                        }}
                        // onClick={() => {
                        //   dispatch(OPEN_REQUEST_CALLBACK());
                        // }}
                      >
                        <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                        <span>REQUEST CALLBACK</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            {/* End Login Button and Request CallBack */}
          </Col>
          {/* End Left Side Coding */}

          {/* Start Right Slider Coding */}

          <Col md={5} style={{ marginTop: "-40px" }}>
            <Swiper
              effect={"coverflow"}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              navigation={true}
              slidesPerView={3}
              pagination={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
                loop: true,
              }}
              modules={[EffectCoverflow, Navigation, Pagination]}
              className={Styles.mySwiper}
            >
              {newsSlider &&
                newsSlider.map((items, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={Styles.testimonial}>
                        <Link href={`/article/${items.slug}`}>
                          <Card className={Styles.card}>
                            <Card.Img
                              variant="top"
                              src={items.img}
                              className={Styles.img}
                            />

                            <Card.Body className={Styles.cardBody}>
                              <Card.Title className={Styles.title}>
                                {items.title}
                              </Card.Title>
                              <Card.Text className={Styles.text}>
                                {items.excerpt.slice(0, 100) + "....."}
                              </Card.Text>

                              <div
                                className="d-flex justify-content-center"
                                style={{
                                  boxShadow:
                                    "0px 5px 20px -2px rgb(160 155 155 / 75%)",
                                  borderRadius: "10px",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                }}
                              >
                                <span>READ MORE</span>
                              </div>
                            </Card.Body>
                          </Card>
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Col>
          {/* End Right Slider Coding */}
        </Row>
      </Container>

      {/* Start News Letter */}
      <NewsLetter />
      {/* Start News Letter */}

      {/* Start Modal Login to set alert */}
      <Modal
        show={setAlertModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_LOGIN_TO_SET_ALERT())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
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
            <span>Please login to set Rate Alert</span>
          </div>

          <Button
            className="mt-3"
            style={{
              backgroundColor: "#0c8fff",
              border: "none",
              boxShadow: "none",
              letterSpacing: "1px",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "12px",
              width: "70%",
            }}
            onClick={() => {
              openLoginModal();
            }}
          >
            Login
          </Button>
          <Link href="javascript:void(0)">
            <Button
              className="w-25 mt-3"
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
              onClick={() => dispatch(CLOSE_LOGIN_TO_SET_ALERT())}
            >
              Close
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
      {/* End Modal Login to set alert */}
      {/* Start Free Trial modal code */}
      <Modal
        show={FreeTrialModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_FREE_TRIAL_MODAL())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
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
            <span>Your Free Trial is Over Subscribe to set rate alert</span>
          </div>
          <div className="text-center">
            <Link href="/premium">
              <Button
                className="mt-3"
                style={{
                  backgroundColor: "#5cb85c",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                  padding: "5px 0",
                  fontSize: "12px",
                  width: "70%",
                }}
              >
                Subscribe
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/* End Free Trial modal code */}

      {/* Start Renew modal code */}
      <Modal
        show={RenewModalStatus}
        animation={false}
        onHide={() => dispatch(CLOSE_RENEW_MODAL())}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
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
            <span>Your Subscription has expired. Please Renew</span>
          </div>
          <div className="text-center">
            <Link href="/premium">
              <Button
                className="mt-3"
                style={{
                  backgroundColor: "#5cb85c",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                  padding: "5px 0",
                  fontSize: "12px",
                  width: "70%",
                }}
              >
                Renew Now
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/* End Renew modal code */}
      <ToastContainer />
    </>
  );
  return Design;
};

export default SaveMoney;
