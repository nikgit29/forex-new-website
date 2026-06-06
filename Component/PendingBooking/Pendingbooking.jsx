import { Col, Container, Row, Table } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Style from "./pendingbooking.module.css";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Booking = () => {
  const response = useSelector((response) => response);
  const [bookingData, setBookingData] = useState([]);
  const personId =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data.id;

  const pendingBooking = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/get_pending_booking_byid.php",
        data: {
          user_id: personId,
        },
      });
      setBookingData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    {
      personId != undefined ? pendingBooking() : null;
    }
  }, [personId]);

  const Design = (
    <>
      <Container>
        <Row>
          <Col
            style={{
              fontFamily: "poppins",
              textAlign: "justify",
              color: "#ffffff",
            }}
          >
            <h1 className="mt-5 mb-4 text-center">Pending Booking</h1>

            <div className="d-flex justify-content-center">
              <div className={Style.main}>
                <Table bordered responsive size="sm">
                  <thead className={Style.thead}>
                    <tr>
                      <th>Booking No.</th>
                      <th>Date</th>
                      <th>Invoice Amount</th>
                      <th>Inward/Outward</th>
                      <th>Rate When Informed</th>
                      <th>Booking due date</th>
                      <th>Suggestion</th>
                      <th>Remark</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody hover="false">
                    {bookingData &&
                      bookingData.map((items, index) => {
                        return (
                          <tr key={index} className="text-center">
                            <td>{items && items.booking_number}</td>
                            <td>{items && items.informed_date}</td>
                            <td>{items && items.invoice}</td>
                            <td>{items && items.inward}</td>
                            <td>{items && items.rate_when_informed}</td>
                            <td>{items && items.booking_due_date}</td>
                            <td>{items && items.suggestion}</td>
                            <td>{items && items.remarks}</td>
                            <td>{items && items.status}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Booking;
