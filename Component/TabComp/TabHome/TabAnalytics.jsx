import { Container, Row, Col } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import TabLiveRates from "../TabLiveRates/TabLiveRate";
import TabMarketSignal from "../TabMarketSignal/TabMarketSignal";
import TabDailyForcast from "../TabDailyForecast/TabDailyForecast";
import TabTechnicalCharts from "../TabTechnicalCharts/TabTechnicalCharts";
import TabCommodities from "../TabCommodities/TabCommodities";
import TabWeeklyForecast from "../TabWeeklyForecast/TabWeeklyForeCast";
import TabWeeklyForcastLogin from "../TabWeeklyForecast/TabWeeklyForecastLogin/TabWeeklyForecastLogin";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import { useSelector } from "react-redux";
const TabAnalytics = ({ breakingStory, checkTimeData }) => {
  const response = useSelector((response) => response);
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");
  const [cookieInfo, setCookieInfo] = useState("");

  const [headline, setHeadline] = useState(breakingStory);
 

  // Start Breaking Story
 useEffect(() => {
  setHeadline(breakingStory);
}, [breakingStory]);

  // End Breaking Story

  useEffect(() => {
    const cookiesData = cookies.get("fx_1994");
    setCookieInfo(cookiesData);
  }, [cookiesDependency]);
  const Design = (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col md={12} xs={12} className="d-flex justify-content-center mt-3">
            <div style={{ color: "#8e8e8e", letterSpacing: "1px" }}>
              <h1>Analytics</h1>
            </div>
          </Col>

          <Col
            md={12}
            className="d-flex justify-content-center mt-2 border"
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

      <Container className="mt-4">
        <Row>
          <Col md={12} xs={12} sm={12}>
            <TabLiveRates ExchangeData={response} />
          </Col>

          <Col md={12} xs={12} sm={12}>
            <TabMarketSignal ExchangeData={response} />
          </Col>

          <Col md={12} xs={12} sm={12}>
            <TabDailyForcast DailyForcast={response} checkTimeData={checkTimeData}/>
          </Col>

          <Col md={12} xs={12} sm={12}>
            <TabTechnicalCharts />
          </Col>

          <Col md={12} xs={12} sm={12}>
            {cookieInfo != undefined ? (
              <TabWeeklyForcastLogin />
            ) : (
              <TabWeeklyForecast />
            )}
          </Col>

          <Col md={12} xs={12} sm={12}>
            <TabCommodities />
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default TabAnalytics;
