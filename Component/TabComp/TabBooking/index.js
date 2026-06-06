import { Col, Container, Row, Button } from "react-bootstrap";

import Lottie from "react-lottie";
import Styles from "./tabbooking.module.css";
import animationData from "../../../lottie/booking.json";
import Link from "next/link";
import ALL_CURRENCY_DETAILS from "../../Redux/Action/allcurrencydetails.action";
import DAILY_FORCASTS from "../../Redux/Action/dailyForcasts.action";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import axios from "axios";
const TabBooking = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ALL_CURRENCY_DETAILS());
    dispatch(DAILY_FORCASTS());
  }, []);

  const Design = (
    <>
      <Container>
        <Row>
          <Col
            style={{
              fontFamily: "poppins",
              textAlign: "justify",
              color: "#ffffff",
            }}
          >
            <h1 className="mt-5 mb-4" style={{}}>
              Forward <span>Booking</span>
            </h1>
            <p>
              It is a long established fact that a render will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Epsom is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English.
            </p>
            <div className="w-100">
              <div className={Styles.parentDiv}>
                <Link href="/new_booking">
                  <Button className={Styles.button}>NEW BOOKING</Button>
                </Link>
                <Link href="/pending_booking">
                  <Button className={Styles.button}>PENDING BOOKING</Button>
                </Link>
                <Link href="booking_history">
                  <Button className={Styles.button}>BOOKING HISTORY</Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <Lottie options={defaultOptions} height={400} width={400} />
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default TabBooking;
