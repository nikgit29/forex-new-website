import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
import OPEN_REQUEST_CALLBACK from "../../Redux/Action/openrequestcallback.action";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import Style from "./alert.module.css";
import LiveRates from "../../LiveRates/LiveRates";
import ALL_CURRENCY_DETAILS from "../../Redux/Action/allcurrencydetails.action";
import DAILY_FORCASTS from "../../Redux/Action/dailyForcasts.action";
const LiveRateHead = () => {
  const response = useSelector((response) => response);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ALL_CURRENCY_DETAILS());
    dispatch(DAILY_FORCASTS());
  }, []);

  const width = "350px";
  const height = "500px";
  const design = (
    <>
      <Container>
        <Row>
          <Col style={{ color: "#ffffff", marginLeft: "90px" }}>
            <h2 className="mt-5 mb-4">LIVE RATES ?</h2>

            <div style={{ letterSpacing: "0.5px" }}>
              <div className="d-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="2.2em"
                  width="2.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                </svg>
                <p>
                  Live rates offer constantly updated information, such as
                  exchange rates or stock prices, reflecting the current market
                  situation.
                </p>
              </div>

              <div className="d-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="2.2em"
                  width="2.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                </svg>
                <p>
                  Crucial for traders and businesses to make timely,
                  well-informed choices based on real-time market conditions.
                </p>
              </div>

              <div className="d-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="2.2em"
                  width="2.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                </svg>
                <p>
                  Used in finance, e-commerce, and more to ensure dynamic
                  decision-making and operations relying on up-to-the-minute
                  data.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className={Style.requestCallback}>
                <ul>
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
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            {" "}
            <LiveRates ExchangeData={response} width={width} height={height} />
          </Col>
        </Row>
      </Container>
    </>
  );
  return design;
};

export default LiveRateHead;
