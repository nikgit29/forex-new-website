import { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import moment from "moment";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";
const Notification = () => {
  const [data, setData] = useState([]);
  const response = useSelector((response) => response);
  const getUserEmail =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data.email;
  // Start Notification Coding
  const NotificationData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "/get-notification-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&username=" +
          getUserEmail,
      });
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    NotificationData();
  }, []);

  // End Notification Coding
  const CardDesign = ({ data }) => {
    const splitDate = data.date_creation.replaceAll("-", "");
    const inAgo = moment(splitDate, "YYYYMMDD").fromNow();

    const design = (
      <>
        {data?.title == " " || data?.image == null || data?.body == null ? (
          ""
        ) : (
          <Col className="mb-5 d-flex justify-content-center">
            <div>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #ddd",
                  color: "#fff",
                  padding: "5px 10px",
                  backgroundColor: "#004484",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              >
                <IoMdNotifications
                  style={{
                    color: "#6aadfe",
                    marginTop: "-4px",
                    marginRight: "5px",
                  }}
                />
                {data?.title}
              </div>
              <Card
                style={{
                  width: "35rem",
                  boxShadow: "0px 10px 10px 3px rgb(0 0 0 / 15%)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={data.image}
                  width="446px"
                  height="300px"
                />
                <Card.Body>
                  <Card.Title>{data.body}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <small>{inAgo}</small>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Col>
        )}
      </>
    );
    return design;
  };
  const Design = (
    <>
      <Container>
        <Row
          style={{ marginLeft: "50px", marginTop: "20px", marginRight: "50px" }}
        >
          <div className="d-flex justify-content-center mb-5">
            <Button
              style={{
                color: "#ffffff",
                fontSize: "30px",
                backgroundColor: "rgba(255, 255, 255, 0.063)",
                borderColor: "#bacccb",
                borderRadius: "20px",
                width: "500px",
                fontWeight: "600",
                cursor: "none",
              }}
            >
              NOTIFICATIONS
            </Button>
          </div>
        </Row>
        <Row>
          {data.map((items) => {
            return <CardDesign data={items} />;
          })}
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Notification;
