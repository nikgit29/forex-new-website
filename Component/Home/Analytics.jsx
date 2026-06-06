import { Container, Row, Col } from "react-bootstrap";
import LiveRate from "../LiveRates/LiveRates";
import MarketSignal from "../MarketSignals/MarketSignals";
import DailyForcast from "../DailyForcasts/DailyForcast";
import TechnicalCharts from "../TechnicalChart/TechnicalCharts";
import WeeklyForcast from "../WeeklyForcasts/WeeklyForcast";
import WeeklyForcastLogin from "../WeeklyForcasts/WeeklyForecastLogin/WeeklyForecastLogin";
import Commodities from "../Commodities/Commodities";
import { BiChevronRight } from "react-icons/bi";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
const Analytics = ({ breakingStory, checkTimeData}) => {
  const response = useSelector((response) => response);
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");
  const [cookieInfo, setCookieInfo] = useState("");

  const [anim, setAnim] = useState();

  // Start Breaking Story
const [headline, setHeadline] = useState(breakingStory);

useEffect(() => {
  setHeadline(breakingStory);
}, [breakingStory]);

  // End Breaking Story

  useEffect(() => {
    const cookiesData = cookies.get("fx_1994");
    setCookieInfo(cookiesData);
  }, [cookies.get("fx_1994")]);

  const Design = (
    <>
      {/* start Scroll Down Coding */}
      <Container fluid>
        <Row>
          <Col>
            <div style={{ cursor: "pointer" }}>
              <a
                href="#analytics"
                style={{ textDecoration: "none", color: "hwb(212deg 58% 10%)" }}
              >
                <h6 className="d-flex justify-content-center mt-4">
                  <span>Scroll down</span>
                </h6>

                <span className="d-flex justify-content-center">
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      {/* End Scroll Down coding */}

      {/* Start Analytics Name Coding*/}
      <Container fluid id="analytics">
        <Row>
          <Col>
            <h1
              className="d-flex justify-content-center mt-4"
              style={{ color: "#919191", fontweight: "bold" }}
            >
              Analytics
            </h1>
          </Col>
        </Row>
      </Container>
      {/* End Analytics Name Coding*/}
      <Container fluid>
        <Row>
          <Col
            className="d-flex justify-content-center mt-4 border"
            style={{
              boxShadow: "0px 1px 14px -5px rgba(8,104,222,0.75)",
              fontSize: "15px",
              color: "#ff0000",
            }}
          >
            <div className="w-75">
              {" "}
              <Marquee
                speed="50"
                pauseOnHover="true"
                gradient="false"
                gradientWidth="0"
              >
                <BiChevronRight />
                {headline}
              </Marquee>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5" style={{ padding: "0 80px" }}>
        <Row>
          {/* --------------------START LEFT SIDE------------------------ */}
          {/* Starts Live Rates and Market Signals */}
          <Col>
            <Row style={{ marginLeft: "20px" }}>
              {/* Start Live Rates code */}
              <Col md={12}>
                <LiveRate ExchangeData={response} />
              </Col>
              {/* End Live Rates code */}
              <Col md={12}>
                <MarketSignal ExchangeData={response} />
              </Col>
            </Row>
          </Col>
          {/*End Live Rates and Market Signals */}

          {/* --------------------END LEFT SIDE------------------------ */}

          {/* -------------------------START MIDDLE SECTION--------------------------------- */}
          <Col xs={6}>
            <Row>
              <Col md={12}>
                <DailyForcast DailyForcast={response} checkTimeData={checkTimeData}/>
              </Col>

              <Col md={12}>
                <TechnicalCharts />
              </Col>
            </Row>
          </Col>

          {/* -------------------------END MIDDLE SECTION--------------------------------- */}
          <Col>
            <Row>
              <Col md={12}>
                {cookieInfo != undefined ? (
                  <WeeklyForcastLogin />
                ) : (
                  <WeeklyForcast />
                )}
              </Col>

              <Col md={12}>
                <Commodities />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Analytics;
