import { Row, Col, Card, Form } from "react-bootstrap";
import Style from "./market.module.css";
import Image from "next/image";
import ForexCalc from "./ForexCalculator/ForexCalc";
import useAxios from "../Hooks/useAxios";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const MarketSignals = ({ ExchangeData }) => {
  const [mudra, setmudra] = useState([]);
  const [selectedValue, setSelectedValue] = useState("USD/INR");
  // Null sefety
  const currencyData = ExchangeData.ALL_CURRENCY_DETAILS.data;
  const currencyDataDetails =
    Object.keys(currencyData).length !== 0
      ? ExchangeData.ALL_CURRENCY_DETAILS.data
      : null;
  // Null safety

  //  Start Market Signal Increase/decrease API
  const IncDsc = async (e) => {
    const currency = e.target.value;
    setSelectedValue(currency);
    try {
      const response = await axios({
        method: "POST",
        url:
          "/fx-calculator-detail-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&currency_name=" +
          `${currency}`,
      });
      setmudra(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // End Market Signal Increase/decrease coding API

  const CurrencyData = ({ data }) => {
    const design = (
      <>
        <option value={data.currency}>{data.currency}</option>
      </>
    );
    return design;
  };
  const design = (
    <>
      <Card className={Style.card}>
        <span className={Style.span}>INCREASE / DECREASES</span>
        <Card.Body>
          {/* Start currency selector  */}
          {/* <Form.Select
            size="sm"
            className={Style.formselect}
            value={selectedValue}
            onChange={IncDsc}
          >
            {currencyDataDetails &&
              currencyDataDetails.currency &&
              currencyDataDetails.currency.map((items) => {
                return <CurrencyData data={items} key={items.id} />;
              })}
          </Form.Select> */}
          {/* End currency selector  */}

          {/* start Expected to Increase/Decrease */}
          {/* <Row>
            <Col
              style={{
                marginTop: "15px",
                marginLeft: "40px",
                padding: "0px",
              }}
            >
              <span style={{ color: "#ccc" }}>EXPECTED </span>
              <div className="d-flex">
                <span style={{ color: "#ccc" }}>TO </span>
                <span
                  style={{
                    letterSpacing: "1px",
                    color: "#ff0000",
                    marginLeft: "7px",
                  }}
                >
                  {mudra == "" ? "INCREASE" : mudra.msg}
                </span>
              </div>
            </Col>
            <Col>
              <img
                className="mt-2"
                src={mudra == "" ? "increase.png" : mudra.img}
                alt={mudra.mudra}
                width="50px"
                height="60px"
              />
            </Col>
          </Row> */}
          {/* End Expected to Increase/Decrease */}
          <div className="text-center mb-3" style={{ color: "#349acb" }}>
            <h6>Click here</h6>
          </div>
          <div className={Style.forexcalculator}>
            <ForexCalc AllCurrencyDetails={ExchangeData} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
  return design;
};

export default MarketSignals;
