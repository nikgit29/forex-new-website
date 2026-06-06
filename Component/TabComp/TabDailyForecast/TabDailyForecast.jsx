import { Card, Table, Row, Col } from "react-bootstrap";
import Style from "./tabdaily.module.css";
import { useEffect, useState } from "react";
import moment from "moment";;
const MobDailyForcast = ({ DailyForcast, checkTimeData }) => {
  const [formatedTime, setFormatedTime] = useState();
  const checkSatSun = checkTimeData?.today;

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

  const timer = setInterval(() => {
    refreshTime();
  }, 10000);

  return () => clearInterval(timer);
}, []);


  const TableData = ({ data }) => {
    const getOpenTwoDigit = parseFloat(data.open);

    const open =
      getOpenTwoDigit > 10
        ? getOpenTwoDigit.toFixed(2)
        : getOpenTwoDigit.toFixed(4);

    const getCloseTwoDigit = parseFloat(data.close);

    const close =
      getCloseTwoDigit > 10
        ? getCloseTwoDigit.toFixed(2)
        : getCloseTwoDigit.toFixed(4);

    const design = (
      <>
        <tr height="25px">
          <td
            style={{
              color: "#77b4ff",
              fontSize: "12px",
              padding: "0",
            }}
          >
            {data.currency_name}
          </td>

          <td
            style={{
              fontSize: "12px",
              fontWeight: "500",
              padding: "0",
              width: "110px",
            }}
          >
            {checkSatSun
              ? "Market Closed"
              : formatedTime === true
              ? data.days_range
              : "9:30AM-5:00PM"}
          </td>

          <td
            className="text-center"
            style={{
              fontSize: "12px",
              fontWeight: "500",
              padding: "0",
            }}
          >
            {open}
          </td>

          <td
            className="text-center"
            style={{
              fontSize: "12px",
              fontWeight: "500",
              padding: "1px",
            }}
          >
            {close}
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
            <Col className="text-center">RANGE</Col>
            <Col className="text-center" style={{ marginLeft: "-40px" }}>
              OPEN
            </Col>
            <Col className="text-center">PREV. CLOSE</Col>
          </Row>
          <div
            className={Style.scrolled}
            style={{
              overflowY: "scroll",
              marginLeft: "10px",
              height: "155px",
              fontFamily: "roboto",
            }}
          >
            <Table>
              <tbody>
                {DailyForcast &&
                  DailyForcast.DAILY_FORCASTS &&
                  DailyForcast.DAILY_FORCASTS.data.slice(0, 9).map((items) => {
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
