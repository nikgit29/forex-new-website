import { Card, Table, Row, Col } from "react-bootstrap";
import Style from "./daily.module.css";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
const DailyForcast = () => {
  const [dailyforcast, setDailyforcast] = useState([]);
  const [formatedTime, setFormatedTime] = useState();
  const [checkSatSun, setCheckSatSun] = useState();

  const commodityDailyforecast = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/commodity-dailyforecast-v2.php",
      });
      setDailyforcast(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    commodityDailyforecast();
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

  const getTime = moment().format("HH:mm");

  const refreshTime = () => {
    if (getTime >= "09:30" && getTime <= "17:00") {
      setFormatedTime(true);
    } else {
      setFormatedTime(false);
    }
  };

  useEffect(() => {
    refreshTime();
    setInterval(() => {
      refreshTime();
    }, 30000);

    return () => {};
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
              fontSize: "14px",
              padding: "0",
            }}
          >
            {toUpperBullion}
          </td>

          <td
            style={{
              fontSize: "14px",
              fontWeight: "500",
              padding: "0",
              textAlign: "center",
              width: "238px",
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
              fontSize: "14px",
              fontWeight: "500",
              padding: "0",
              textAlign: "start",
            }}
          >
            {data.s1}
          </td>

          <td
            style={{
              fontSize: "14px",
              fontWeight: "500",
              padding: "1px",
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
            <Col>CURRENCY</Col>
            <Col>RANGE</Col>
            <Col>S1</Col>
            <Col style={{ marginLeft: "-39px" }}>R1</Col>
          </Row>
          <div
            className={Style.scrolled}
            style={{
              overflowY: "scroll",
              marginLeft: "10px",
              height: "100px",
              fontFamily: "roboto",
            }}
          >
            <Table>
              <tbody className="text-center">
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

export default DailyForcast;
