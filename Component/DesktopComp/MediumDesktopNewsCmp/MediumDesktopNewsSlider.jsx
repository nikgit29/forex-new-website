import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Styles from "./news.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
SwiperCore.use([Virtual, Navigation, Pagination]);

import axios from "axios";

const NewsSlider = ({ newsData = [] }) => {
  const [newsTitle, setNewsTitle] = useState("NEWS");
  const [storeNews, setStoreNews] = useState([]);
  const originalNewsRef = useRef([]);

  useEffect(() => {
    if (Array.isArray(newsData)) {
      setStoreNews(newsData);
      originalNewsRef.current = newsData;
    }
  }, [newsData]);

  const search = async (e) => {
    const value = e.target.value;

    if (value.length >= 3) {
      try {
        const response = await axios({
          method: "POST",
          url: "/get-news-search.php",
          data: {
            search: value,
          },
        });

        setStoreNews(
          Array.isArray(response.data)
            ? response.data
            : []
        );

        setNewsTitle("SEARCH RESULTS");
      } catch (err) {
        console.log(err);
      }
    } else {
      setStoreNews(originalNewsRef.current);
      setNewsTitle("NEWS");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 style={{ color: "#ffffff", marginLeft: "100px" }}>
              {newsTitle}
            </h1>
          </Col>

          <Col className="mt-2">
            <div className={Styles.search}>
              <AiOutlineSearch className={Styles.searchIcon} />

              <Form>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Search for news & topics..."
                  style={{
                    border: "none",
                    width: "250px",
                    marginLeft: "-20px",
                    boxShadow: "none",
                  }}
                  onChange={search}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                    }
                  }}
                />
              </Form>
            </div>
          </Col>
        </Row>

        <Row>
          <Col style={{ padding: "20px", marginTop: "20px" }}>
            <Swiper
              slidesPerView={4}
              navigation={true}
              virtual
            >
              {storeNews?.map((items) => {
                const date = moment(items.updated_at).format(
                  "Do MMMM YYYY"
                );

                return (
                  <SwiperSlide
                    key={items.post_id || items.slug}
                  >
                    <Link href={`/article/${items.slug}`}>
                      <Card
                        style={{
                          borderRadius: "30px",
                          width: "225px",
                          height: "356px",
                          marginLeft: "44px",
                          cursor: "pointer",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={items.img?.replaceAll("\\/", "/")}
                          alt={items.title}
                          style={{
                            borderRadius: "30px",
                            padding: "10px",
                            width: "100%",
                            height: "160px",
                            objectFit: "cover",
                          }}
                        />

                        <Card.Body>
                          <Card.Title
                            style={{
                              fontSize: "14px",
                              marginTop: "-16px",
                            }}
                          >
                            {items.title}
                          </Card.Title>

                          <Card.Text>
                            <p style={{ fontSize: "10px" }}>
                              {items.excerpt?.slice(0, 100)}
                            </p>
                          </Card.Text>

                          <Card.Text>
                            <p style={{ fontSize: "10px" }}>
                              {date}
                            </p>
                          </Card.Text>

                          <div
                            className="d-flex justify-content-center"
                            style={{
                              boxShadow:
                                "0px 5px 20px -2px rgb(160 155 155 / 75%)",
                              borderRadius: "10px",
                              fontSize: "12px",
                            }}
                          >
                            <span>READ MORE</span>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsSlider;