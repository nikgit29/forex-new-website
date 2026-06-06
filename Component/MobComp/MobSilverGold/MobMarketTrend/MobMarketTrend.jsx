import { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import useAxios from "../../../Hooks/useAxios";
const MobMarket = () => {
  const [trendz, setTrendz] = useState([]);
  const MarketTrendzData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/commodity-dailyforecast-v2.php",
      });
      setTrendz(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    MarketTrendzData();
  }, []);

  const RateTable = ({ data }) => {
    const status = data.trend;
    const finalStatus = status.toUpperCase();
    const toUpperBullion =
      data && data.bullion.charAt(0).toUpperCase() + data.bullion.slice(1);
    const design = (
      <>
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
            {toUpperBullion}

            {finalStatus == "UPTREND" ? (
              <i
                class="fa fa-caret-up"
                aria-hidden="true"
                style={{ color: "green", marginLeft: "3px" }}
              ></i>
            ) : (
              <i
                class="fa fa-caret-down"
                aria-hidden="true"
                style={{ color: "red", marginLeft: "3px" }}
              ></i>
            )}
          </td>

          {finalStatus == "UPTREND" ? (
            <td
              style={{
                padding: "0",
                fontSize: "12px",
                fontWeight: "500",
                textAlign: "center",
                color: "green",
              }}
            >
              {finalStatus}
            </td>
          ) : (
            <td
              style={{
                padding: "0",
                fontSize: "12px",
                fontWeight: "500",
                textAlign: "center",
                color: "red",
              }}
            >
              {finalStatus}
            </td>
          )}
        </tr>
      </>
    );
    return design;
  };
  const design = (
    <>
      <Card
        className="mb-5"
        style={{
          borderRadius: "23px",
          boxShadow: "1px 1px 14px 0px rgb(123 182 255 / 46%)",
        }}
      >
        <span
          className="d-flex justify-content-center mt-2"
          style={{ color: "#464646", fontWeight: "600", fontSize: "14px" }}
        >
          TODAY'S MARKET TREND
        </span>

        <Card.Body>
          <div
            style={{
              marginLeft: "10px",
              paddingleft: "10px",
              paddingRight: "10px",
            }}
          >
            <Table>
              <tbody>
                {trendz.map((items) => {
                  return <RateTable data={items} id={items.id} />;
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
  return design;
};
export default MobMarket;
