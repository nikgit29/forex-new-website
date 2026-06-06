import { Container, Row, Col } from "react-bootstrap";
import LiveRate from "./MediumDesktopMetals-Liverate/MediumDesktopLiveRates";
import Market from "./MediumDesktopMarketTrendz/MediumDesktopMarketTrends";
import Openclose from "./MediumDesktopOpenClose/openclose";
import DailyForcast from "./MediumDesktopDailyForecasts/MediumDesktopDailyForecast";
import TechnicalCharts from "../../TechnicalChart/TechnicalCharts";
import WeeklyForecast from "./MediumDesktopWeeklyForecasts/MediumDesktopWeeklyForecast";
import WithoutLoginWeeklyForecast from "../../WeeklyForcasts/WeeklyForcast";
import COMMODITY_WEEKLY_FORECAST from "../../Redux/Action/commodityweeklyforecast.action";
import { useDispatch } from "react-redux";
import Commodities from "./MediumDesktopCurrency/MediumDesktopCurrency";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import Marquee from "react-fast-marquee";

import axios from "axios";
const Analytics = () => {
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");
  const [cookieInfo, setCookieInfo] = useState("");
  const dispatch = useDispatch();
  const [headline, setHeadline] = useState("");
  const [anim, setAnim] = useState("");

  // Start Breaking Story
  const breaking_story = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/breaking-story.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
      });
      setHeadline(response.data[0].headline);
    } catch (err) {
      console.log(err);
    }
  };
  // const trimData = headline.trim();
  // const array = trimData.split("*");

  useEffect(() => {
    breaking_story();
    // let counter = 0;
    // setInterval(() => {
    //   const index = counter++ % array.length;
    //   setAnim(array[index]);
    // }, 10000);
  }, [headline]);

  // End Breaking Story
  useEffect(() => {
    const cookiesData = cookies.get("fx_1994");
    setCookieInfo(cookiesData);
  }, [cookiesDependency]);

  // Start code Scroll to analytics section & commodity weekly forcast
  useEffect(() => {
    window.scrollTo(0, 650);
    dispatch(COMMODITY_WEEKLY_FORECAST());
  }, []);

  // End code Scroll to analytics section  & commodity weekly forcast

  const Design = (
    <>
      {/* start Scroll Down Coding */}
      <Container fluid>
        <Row>
          <Col>
            <div style={{ cursor: "pointer", color: "hwb(212deg 58% 10%)" }}>
              <a
                href="#golds"
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
      <Container fluid id="golds">
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
      <Container className="mt-5">
        <Row>
          {/* --------------------START LEFT SIDE------------------------ */}
          {/* Starts Live Rates and Market Signals */}
          <Col md={3}>
            <Row>
              {/* Start Live Rates code */}
              <Col md={12}>
                <LiveRate />
              </Col>
              {/* End Live Rates code */}
              <Col md={12}>
                <Market />
              </Col>

              <Col md={12}>
                <Openclose />
              </Col>
            </Row>
          </Col>
          {/*End Live Rates and Market Signals */}

          {/* --------------------END LEFT SIDE------------------------ */}

          {/* -------------------------START MIDDLE SECTION--------------------------------- */}
          <Col xs={6}>
            <Row>
              <Col md={12}>
                <DailyForcast />
              </Col>

              <Col md={12}>
                <TechnicalCharts />
              </Col>
            </Row>
          </Col>

          {/* -------------------------END MIDDLE SECTION--------------------------------- */}
          <Col md={3}>
            <Row>
              <Col md={12}>
                {cookieInfo != undefined ? (
                  <WeeklyForecast />
                ) : (
                  <WithoutLoginWeeklyForecast />
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
