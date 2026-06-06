import { Card, Table } from "react-bootstrap";
// import Style from "./live.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
const MobLiveRates = () => {
  const [Gold, setGold] = useState([]);
  const [Silver, setSilver] = useState([]);

  const currencyData = () => {
    axios
      .get("https://exchange-gold.forexblues.com/getdatagold")
      .then((response) => {
        const USDINR = response && response.data.currency[0].value;
        const XAUUSD = response && response.data.currency[1].value;
        const PriceININR = USDINR * XAUUSD;
        const GoldRate = PriceININR * (1000 / 31.1034768);
        setGold(((GoldRate / 1000) * 10).toFixed(3));
      })
      .catch((response) => console.log(response));
  };

  const SilverData = () => {
    axios
      .get("https://exchange-gold.forexblues.com/getdatasilver")
      .then((response) => {
        const USDINR = response && response.data.currency[0].value;
        const XAGUSD = response && response.data.currency[1].value;
        const PriceININR = USDINR * XAGUSD;
        const SilverRate = PriceININR * (1000 / 31.1034768);
        setSilver(((SilverRate / 1000) * 10).toFixed(3));
      })
      .catch((response) => console.log(response));
  };

  useEffect(() => {
    currencyData();
    SilverData();
    // setInterval(() => {
    //   currencyData();
    //   SilverData();
    // }, 10000);
  }, []);
  const design = (
    <>
      <Card
        className="mb-5 "
        style={{
          borderRadius: "23px",
          boxShadow: "1px 1px 14px 0px rgb(123 182 255 / 46%)",
        }}
      >
        <span
          className="d-flex justify-content-center mt-2"
          style={{ color: "#464646", fontWeight: "600", fontSize: "14px" }}
        >
          LIVE RATES
        </span>

        <Card.Body>
          <div style={{ marginLeft: "10px", paddingLeft: "10px" }}>
            <Table>
              <tbody>
                <tr>
                  <td
                    style={{
                      color: "#77b4ff",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Gold
                    {/* <i
                      class="fa fa-caret-down"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    ></i> */}
                  </td>
                  <td
                    style={{
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      textAlign: "center",
                      textAlign: "center",
                    }}
                  >
                    {Gold}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "#77b4ff",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "roboto",
                      textAlign: "center",
                    }}
                  >
                    Silver
                    {/* <i
                      class="fa fa-caret-down"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    ></i> */}
                  </td>
                  <td
                    style={{
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    {Silver}
                  </td>
                  <td
                    style={{
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  ></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
  return design;
};
export default MobLiveRates;
