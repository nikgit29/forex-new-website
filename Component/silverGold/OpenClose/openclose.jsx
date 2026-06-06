import { Card, Table } from "react-bootstrap";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import { useState, useEffect } from "react";
// import Style from "./live.module.css";

const OpenClose = () => {
  const [Data, setData] = useState([]);
  const openCloseData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/commodity-liverate-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s%20Gold%20and%20Silver%20prev.%20close%20data%20not%20get%20in%20API",
      });
      var d = response.data;
      var x = d.reverse();
      setData(x);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    openCloseData();
  }, []);
  const RateTable = ({ data }) => {
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
          </td>
          <td
            style={{
              padding: "0",
              fontSize: "14px",
              fontWeight: "500",
              textAlign: "center",
              fontFamily: "roboto",
            }}
          >
            {data.open}
          </td>
          {/* <td
            style={{
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {data.difference}
          </td> */}
        </tr>
      </>
    );
    return design;
  };
  const design = (
    <>
      <Card
        className="mb-2 mt-1"
        style={{
          borderRadius: "23px",
          width: "250px",
          boxShadow: "1px 1px 14px 0px rgb(123 182 255 / 46%)",
          fontFamily: "poppins",
        }}
      >
        <span
          className="d-flex justify-content-center mt-2"
          style={{ color: "#464646", fontWeight: "600", fontSize: "14px" }}
        >
          TODAY'S OPEN
        </span>

        <Card.Body>
          <div className="d-flex" style={{ fontSize: "12px", color: "#ccc" }}>
            <div style={{ marginLeft: "70%" }}>OPEN</div>
            {/* <div style={{ marginLeft: "28%" }}>CLOSE</div> */}
          </div>

          <div style={{ marginLeft: "10px" }}>
            <Table>
              <tbody>
                {Data.map((items) => {
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
export default OpenClose;
