import { useEffect, useState } from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import Style from "./daily.module.css";
import moment from "moment";
const DailyForcast = ({ DailyForcast,  checkTimeData}) => {
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
              width: "131px",
            }}
          >
            {data.currency_name}
          </td>

          <td
            style={{
              fontSize: "12px",
              fontWeight: "500",
              padding: "0",
              width: "131px",
              fontFamily: "roboto",
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
              width: "131px",
              fontFamily: "roboto",
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
              width: "131px",
              fontFamily: "roboto",
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
            <Col className="text-center">CURRENCY</Col>
            <Col className="text-center">RANGE</Col>
            <Col className="text-center">OPEN</Col>
            <Col className="text-center">PREV. CLOSE</Col>
          </Row>
          <div
            className={Style.scrolled}
            style={{
              overflowY: "scroll",
              marginLeft: "10px",
              height: "200px",
              paddingLeft: "20px",
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

export default DailyForcast;
