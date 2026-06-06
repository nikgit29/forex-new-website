import { Container, Row, Col } from "react-bootstrap";
import ALL_CURRENCY_DETAILS from "../../../Redux/Action/allcurrencydetails.action";
import { useDispatch, useSelector } from "react-redux";
import MobLiveRates from "../../TabLiveRates/TabLiveRate";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
import Style from "./alert.module.css";
import { useEffect } from "react";
import Link from "next/link";
const TabLiveRateHead = () => {
  const dispatch = useDispatch();
  const response = useSelector((response) => response);

  useEffect(() => {
    dispatch(ALL_CURRENCY_DETAILS());
  }, []);

  const width = "350px";
  const height = "500px";
  const design = (
    <>
      <Container>
        <Row>
          <Col style={{ color: "#ffffff" }}>
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
                <div>
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
                          marginLeft: "20px",
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
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <MobLiveRates
              ExchangeData={response}
              width={width}
              height={height}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
  return design;
};

export default TabLiveRateHead;
