import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import Styles from "./tabsavemoney.module.css";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import MOB_OPEN_LOGIN_MODAL from "../../Redux/Action/MobAction/mobopenloginmodal.action";
import OPEN_REQUEST_CALLBACK from "../../Redux/Action/openrequestcallback.action";
import OPEN_LOGIN_TO_SET_ALERT from "../../Redux/Action/openpleaselogintosetratealert.action";
import CLOSE_LOGIN_TO_SET_ALERT from "../../Redux/Action/closepleaselogintosetratealert.action";
import OPEN_FREE_TRIAL_MODAL from "../../Redux/Action/openmodalfreetrialover.action";
import OPEN_RENEW_MODAL from "../../Redux/Action/openrenewmodal.action";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FcAlarmClock } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
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
import smallslider from "../../../smallslider.json";

const MobSaveMoney = ({ newsSlider }) => {
  const [fbsToken, setFbsToken] = useState();
  const router = useRouter();
  const cookies = new Cookies();
  const fbsStatus = cookies.get("__fbsStatus");
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const dependency = response && response.SEND_PROFILE_DATA.data;

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

  useEffect(() => {
    setFbsToken(localStorage.getItem("__fbsToken"));
    return () => {};
  }, [fbsStatus]);

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
      <Container fluid className="p-0">
        <Row>
          {/* Start News Slider Coding */}
          <Col sm={12}>
            <div
              style={{
                paddingLeft: "13%",
                paddingRight: "10%",
                marginTop: "20px",
              }}
            >
              <Swiper
                effect={"coverflow"}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                slidesPerView={3}
                pagination={false}
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
                  newsSlider.map((items) => {
                    return (
                      <SwiperSlide>
                        <div className={Styles.testimonial}>
                          <Card
                            className={Styles.card}
                            onClick={() => {
                              router.push("/news");
                            }}
                          >
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
                                {items.excerpt.slice(0, 70) + "....."}
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
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
          {/* End News Slider Coding */}
          {/* Start  Save Money Earn Money Text Coding */}
          <Col md={12} xs={12}>
            <div
              className="d-flex justify-content-center mt-3"
              style={{ color: "#ffffff", letterSpacing: "1px" }}
            >
              <h2>ForexBlues</h2>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ color: "#c3deff", letterSpacing: "1px" }}
            >
              <h4>Save money Earn money</h4>
            </div>
          </Col>
          {/* End  Save Money Earn Money Text Coding */}
          {/* Start Small Slider Coding */}
          <Col md={12} xs={12}>
            <div>
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
                {smallslider.map((items) => {
                  return (
                    <SwiperSlide>
                      <div className="d-flex justify-content-center">
                        <img src={items.img} width="50%" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Col>
          {/* End Small Slider Coding */}

          <Col md={12} xs={12}>
            <div className="d-flex justify-content-center mt-3">
              <div style={{ color: "#ffffff" }}>
                <h5>One Time Advisory</h5>
                <h5>Just Rs. 1000</h5>
              </div>
            </div>
          </Col>

          <Col md={12} xs={12}>
            <div>
              <ul style={{ paddingLeft: "0", display: "grid" }}>
                <li
                  style={{
                    border: "1px solid #ffffff",
                    padding: "2px 10px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Link href="javascript:void(0)">
                    <a
                      onClick={() => {
                        OpenSetAlert();
                      }}
                    >
                      <FcAlarmClock
                        style={{ fontSize: "17px", marginRight: "10px" }}
                      />
                      SET ALERT
                    </a>
                  </Link>
                </li>
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
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
  return Design;
};

export default MobSaveMoney;
