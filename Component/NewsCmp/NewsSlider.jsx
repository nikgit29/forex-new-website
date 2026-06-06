import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Styles from "./news.module.css";
import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NEWS_DETAILS from "../Redux/Action/newsdetails.action";
import moment from "moment";
import NewsLoader from "./newsloader";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
SwiperCore.use([Virtual, Navigation, Pagination]);
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
const NewsSlider = ({ newsData = [] }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [newsTitle, setNewsTitle] = useState("NEWS");
  const [storeNews, setStoreNews] = useState(newsData);
  const [slug, setSlug] = useState("");
const originalNewsRef = useRef(newsData);
  const dispatch = useDispatch();

 useEffect(() => {
  if (newsData?.length > 0) {
    setStoreNews(newsData);

    if (!slug) {
      setSlug(newsData[0]?.slug || "");
    }
  }
}, [newsData]);
console.log("News Data in NewsSlider:", newsData);
  // Start News Slider Data
 
  // End News Slider Data

  // Start Search News Coding
  const search = async (e) => {
    e.preventDefault();
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
    } else if (value.length < 3) {
      setStoreNews(originalNewsRef.current);
      setNewsTitle("NEWS");
    }
  };
  // End Search News Coding

  const Design = (
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
                  onChange={(e) => search(e)}
                  onKeyPress={(e) => {
                    e.key === "Enter" && e.preventDefault();
                  }}
                />
              </Form>
            </div>
          </Col>
        </Row>

        <Row>
          <Col style={{ padding: "60px", marginTop: "20px" }}>
           <Swiper
  onSwiper={setSwiperRef}
  slidesPerView={4}
  navigation={true}
  virtual
>
  {storeNews?.map((items) => {
    const date = moment(items.updated_at).format(
      "Do MMMM YYYY"
    );

    return (
      <SwiperSlide key={items.post_id || items.slug}>
        <Link href={`/article/${items.slug}`}>
          <Card
            style={{
              borderRadius: "30px",
              width: "230px",
              height: "356px",
              marginLeft: "58px",
              cursor: "pointer",
            }}
          >
            <Card.Img
              variant="top"
              src={items.img?.replaceAll("\\/", "/")}
              style={{
                borderRadius: "30px",
                padding: "10px",
                width: "100%",
                height: "160px",
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
  return Design;
};

export default NewsSlider;
