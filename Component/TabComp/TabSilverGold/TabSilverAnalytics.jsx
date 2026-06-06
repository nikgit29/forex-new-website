import { Container, Row, Col } from "react-bootstrap";
import LiveRate from "./TabMetalLiverate/TabMetalsLiveRate";

import Market from "./TabMarketTrend/TabMarketTrend";
import Openclose from "./TabOpenClose/TabOpenClose";
import DailyForcast from "./TabDailyForecast/TabDailyForecast";
import TechnicalCharts from "../../TabComp/TabTechnicalCharts/TabTechnicalCharts";
import WithoutLoginWeeklyForecast from "../../WeeklyForcasts/WeeklyForcast";
import WeeklyForcastSilver from "./TabWeeklyForecasts/TabWeeklyForecastSilver";
import MOB_COMMODITY_WEEKLY_FORECAST from "../../Redux/Action/MobAction/mobcommodityweeklyforecast.action";
import Commodities from "./TabCurrency/TabCurrency";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import Marquee from "react-fast-marquee";

const MobGoldAnalytics = () => {
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");
  const [cookieInfo, setCookieInfo] = useState("");
  const [headline, setHeadline] = useState("");
  const [anim, setAnim] = useState("");
  const dispatch = useDispatch();

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

  useEffect(() => {
    window.scrollTo(0, 1250);
    dispatch(MOB_COMMODITY_WEEKLY_FORECAST());
  }, []);

  const Design = (
    <>
      {/* start Scroll Down Coding */}
      <Container fluid>
        <Row>
          <Col>
            <div style={{ cursor: "pointer", color: "hwb(212deg 58% 10%)" }}>
              <h6 className="d-flex justify-content-center mt-4">
                <span>Scroll down</span>
              </h6>

              <span className="d-flex justify-content-center">
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      {/* End Scroll Down coding */}

      {/* Start Analytics Name Coding*/}
      <Container fluid>
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
      <Container fluid className="p-0">
        <Row>
          <Col
            className="d-flex justify-content-center mt-4 border"
            style={{
              boxShadow: "0px 1px 14px -5px rgba(8,104,222,0.75)",
              fontSize: "12px",
              color: "#ff0000",
            }}
          >
            <div className="w-75">
              {" "}
              <Marquee
                speed="20"
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

          {/*End Live Rates and Market Signals */}

          {/* --------------------END LEFT SIDE------------------------ */}

          {/* -------------------------START MIDDLE SECTION--------------------------------- */}

          <Col md={12} className="mt-5">
            <DailyForcast />
          </Col>

          <Col md={12}>
            <TechnicalCharts />
          </Col>

          {/* -------------------------END MIDDLE SECTION--------------------------------- */}

          <Col md={12}>
            {cookieInfo != undefined ? (
              <WeeklyForcastSilver />
            ) : (
              <WithoutLoginWeeklyForecast />
            )}
          </Col>

          <Col md={12}>
            <Commodities />
          </Col>

          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default MobGoldAnalytics;
