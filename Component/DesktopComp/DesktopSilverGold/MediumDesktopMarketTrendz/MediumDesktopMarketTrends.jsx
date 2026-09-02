import { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import useAxios from "../../../Hooks/useAxios";
import axios from "axios";
import { useState } from "react";

const Market = () => {
  const [trendz, setTrendz] = useState([]);
  const [colour, setColour] = useState("");
  const MarketTrendzData = async (signal) => {
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
      setTrendz(forecastData);
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    MarketTrendzData(controller.signal);

    return () => controller.abort();
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
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {toUpperBullion}

            {finalStatus == "UPTREND" ? (
              <i
                class="fa fa-caret-up"
                aria-hidden="true"
                style={{ color: "green", marginLeft: "3px", fontSize: "17px" }}
              ></i>
            ) : (
              <i
                class="fa fa-caret-down"
                aria-hidden="true"
                style={{ color: "red", marginLeft: "3px", fontSize: "17px" }}
              ></i>
            )}
          </td>

          {finalStatus == "UPTREND" ? (
            <td
              style={{
                padding: "0",
                fontSize: "14px",
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
                fontSize: "14px",
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
        className="mb-5 mt-1"
        style={{
          borderRadius: "23px",
          width: "250px",
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
          <div style={{ marginLeft: "10px" }}>
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
export default Market;
