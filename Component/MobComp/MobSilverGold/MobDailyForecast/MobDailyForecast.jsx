import { Card, Table, Row, Col } from "react-bootstrap";
import Style from "./mobdaily.module.css";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
import moment from "moment";
import { useEffect, useState } from "react";

const MobDailyForcast = () => {
  const [dailyforcast, setDailyforcast] = useState([]);
  const [formatedTime, setFormatedTime] = useState();
  const [checkSatSun, setCheckSatSun] = useState();

  const commodityDailyforecast = async (signal) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/commodity-dailyforecast-v2.php",
        signal,
      });
      const forecastData = Array.isArray(response.data)
        ? response.data
        : Array.isArray(response.data?.data)
        ? response.data.data
        : [];
      setDailyforcast(forecastData);
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    commodityDailyforecast(controller.signal);

    return () => controller.abort();
  }, []);

  const formatAMPM = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/check_time.php",
      });
      // setFormatedTime(response.data.response);
      setCheckSatSun(response.data.today);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const refreshTime = () => {
      const currentTime = moment().format("HH:mm");
      setFormatedTime(currentTime >= "09:30" && currentTime <= "17:00");
    };

    refreshTime();
    const intervalId = setInterval(() => {
      refreshTime();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    formatAMPM();
  }, [formatedTime]);

  const TableData = ({ data }) => {
    const toUpperBullion =
      data && data.bullion.charAt(0).toUpperCase() + data.bullion.slice(1);
    const design = (
      <>
        <tr>
          <td
            style={{
              color: "#77b4ff",
              fontSize: "12px",
              padding: "0",
              textAlign: "center",
            }}
          >
            {toUpperBullion}
          </td>

          <td
            style={{
              fontSize: "12px",
              fontWeight: "500",
              padding: "0",
              textAlign: "center",
            }}
          >
            {checkSatSun
              ? "Market Closed"
              : formatedTime === true
              ? data.dailyrange
              : "9:30AM-5:00PM"}
          </td>

          <td
            style={{
              fontSize: "12px",
              fontWeight: "500",
              padding: "0",
              textAlign: "center",
            }}
          >
            {data.s1}
          </td>

          <td
            style={{
              fontSize: "12px",
              fontWeight: "500",
              padding: "0px",
              textAlign: "center",
            }}
          >
            {data.r1}
          </td>
        </tr>
      </>
    );
    return design;
  };

  const Design = (
    <>
      <Card className={Style.card}>
        <Card.Body>
          <Card.Subtitle className={Style.subtitle}>
            DAILY FORECAST
          </Card.Subtitle>
          <Row className={Style.table_heading}>
            <Col style={{ textAlign: "center" }}>CURRENCY</Col>
            <Col style={{ textAlign: "center" }}>RANGE</Col>
            <Col style={{ textAlign: "center", marginLeft: "10px" }}>S1</Col>
            <Col style={{ textAlign: "start" }}>R1</Col>
          </Row>
          <div
            className={Style.scrolled}
            style={{
              overflowY: "scroll",
              marginLeft: "10px",
              marginTop: "10px",
              fontFamily: "roboto",
            }}
          >
            <Table>
              <tbody>
                {dailyforcast.map((items) => {
                  return <TableData data={items} key={items.id} />;
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );

  return Design;
};

export default MobDailyForcast;
