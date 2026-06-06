import { Card, Table, Row, Col } from "react-bootstrap";
import Style from "./mobliverates.module.css";
import useAxios from "../../Hooks/useAxios";
import axios from "axios";
import { useSelector } from "react-redux";

const MobLiveRates = ({ ExchangeData, height, width }) => {
  // Null sefety
  const currencyData = ExchangeData.ALL_CURRENCY_DETAILS.data;
  const currencyDataDetails =
    Object.keys(currencyData).length !== 0
      ? ExchangeData.ALL_CURRENCY_DETAILS.data
      : null;
  // Null safety

  const emptyArrayForCurrencyFeed = [];
  const emptyArrayForDailyForcast = [];
  const ChangeLiveRateValue = [];
  const response = useSelector((response) => response);

  const dailyForcastData =
    response && response.DAILY_FORCASTS && response.DAILY_FORCASTS.data;

  const currencyLength =
    currencyDataDetails &&
    currencyDataDetails.currency &&
    currencyDataDetails.currency.length;

  const currencyArray = currencyDataDetails && currencyDataDetails.currency;

  // Start Extract data from dailyforecast(open) & liverate(value) and push in empty array
  for (var i = 0; i < currencyLength; i++) {
    var currencyValueinArray = currencyArray[i].value;
    emptyArrayForCurrencyFeed.push(currencyValueinArray);

    var DailyForcastOpenValue = dailyForcastData[i] && dailyForcastData[i].open;
    emptyArrayForDailyForcast.push(DailyForcastOpenValue);
  }
  // End Extract data from dailyforecast(open) & liverate(value) and push in empty array

  for (var i = 0; i < emptyArrayForDailyForcast.length; i++) {
    var b = emptyArrayForCurrencyFeed[i] - emptyArrayForDailyForcast[i];
    ChangeLiveRateValue.push(b);
  }

  const RateTable = ({ data, index }) => {
    const FloatValue = parseFloat(data.value);
    const finalData = FloatValue.toFixed(4);
    const ChangeLiveRate = ChangeLiveRateValue[index].toFixed(2);
    const design = (
      <>
        <tr height="25px">
          <td
            style={{
              color: "#77b4ff",
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {data.currency}
            {ChangeLiveRate > "0" ? (
              <i
                class="fa fa-caret-up"
                aria-hidden="true"
                style={{ color: "green", marginLeft: "3px" }}
              />
            ) : (
              <i
                class="fa fa-caret-down"
                aria-hidden="true"
                style={{ color: "red", marginLeft: "3px" }}
              />
            )}
          </td>
          <td
            style={{
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {finalData}
          </td>
          {ChangeLiveRate > "0" ? (
            <td
              style={{
                padding: "0",
                fontSize: "12px",
                fontWeight: "500",
                color: "green",
              }}
            >
              +{ChangeLiveRate}
            </td>
          ) : (
            <td
              style={{
                padding: "0",
                fontSize: "12px",
                fontWeight: "500",
                color: "#d9534f",
              }}
            >
              {ChangeLiveRate}
            </td>
          )}
        </tr>
      </>
    );
    return design;
  };
  const Design = (
    <>
      <Card
        className="mb-2"
        style={{
          width: width != undefined ? "350px" : null,
          borderRadius: "23px",
          boxShadow: "1px 1px 14px 0px rgb(123 182 255 / 46%)",
        }}
      >
        <span
          className="d-flex justify-content-center mt-2 mb-2"
          style={{ color: "#464646", fontWeight: "600", fontSize: "14px" }}
        >
          LIVE RATES
        </span>
        <Row className={Style.table_heading}>
          <Col className="text-center" style={{ marginLeft: "10px" }}>
            CURRENCY
          </Col>
          <Col className="text-center" style={{ marginLeft: "10px" }}>
            VALUE
          </Col>
          <Col className="text-center" style={{ paddingRight: "38px" }}>
            CHANGE
          </Col>
        </Row>
        <Card.Body>
          <div
            className={Style.cardbody}
            style={{
              overflowY: "scroll",
              marginLeft: "10px",
              height: height != undefined ? "240px" : "160px",
              fontFamily: "roboto",
            }}
          >
            <Table>
              <tbody>
                {currencyDataDetails &&
                  currencyDataDetails.currency &&
                  currencyDataDetails.currency.map((items, index) => {
                    return (
                      <RateTable
                        data={items}
                        id={items.id}
                        key={items.currency}
                        index={index}
                      />
                    );
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

export default MobLiveRates;
