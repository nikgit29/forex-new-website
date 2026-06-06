import { Container, Row, Col, Card } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
import moment from "moment";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RiWhatsappLine } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
const ReactDOMServer = require("react-dom/server");
const HtmlToReactParser = require("html-to-react").Parser;
import Script from "next/script";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
SwiperCore.use([Virtual, Navigation, Pagination]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

const MobNewsMain = () => {
  const router = useRouter();
  const slug = router.query.post;
  const [newsData, setNewsData] = useState([]);
  const [show, setShow] = useState("d-block");
  const [showContent, setShowContent] = useState("d-none");
  const [storeNews, setStoreNews] = useState([]);
  const newsDetails = async () => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "/get-news-detail.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&news_slug=" +
          slug,
      });
      setNewsData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Start News Slider Data
  const GetNews = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/get-news-v3.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
      });
      setStoreNews(
        Array.isArray(response.data)
          ? response.data
          : []
      );
    } catch (err) {
      console.log(err);
    }
  };
  // End News Slider Data

  useEffect(() => {
    GetNews();
  }, []);

  setTimeout(() => {
    setShow("d-none");
    setShowContent("d-block");
  }, 2000);

  useEffect(() => {
    if (slug != undefined) {
      newsDetails();
    }
  }, [slug]);

  const details = newsData && newsData.excerpt;
  const date = moment(newsData && newsData.updated_at).format("Do MMM  YY");
  const newsDetail = (details) => {
    const htmlInput = "";
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(details);
    return reactElement;
  };

  const design = (
    <>
      {/* <Script src="/newswidth.js" strategy="lazyOnload" /> */}

      <Container fluid className="p-0 mt-3 mb-4">
        <div className={show}>
          <Skeleton height={20} />
          <Skeleton height={450} />
          <Skeleton width="80%" />
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </div>
        <Row className={showContent}>
          <Col md={12} className="mb-3">
            <h1 style={{ fontSize: "19px" }}>{newsData && newsData.title}</h1>
            <div className="d-flex mb-2">
              <p
                style={{
                  color: "#b4b1b1",
                  fontSize: "10px",
                  padding: "0",
                  margin: "0",
                }}
              >
                Updated at {newsData && newsData.time}
              </p>
              <span
                style={{
                  color: "#b4b1b1",
                  fontSize: "10px",
                  marginBottom: "2px",
                }}
              >
                | {date}
              </span>
            </div>
            <div className="d-flex">
              <a
                href={`https://wa.me/?text=https://classic.forexblues.com/news/${slug}`}
                target="_blank"
              >
                <RiWhatsappLine
                  style={{ fontSize: "22px", color: "#25D366" }}
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=https://classic.forexblues.com/news/${slug}`}
                target="_blank"
              >
                <GrTwitter
                  style={{
                    fontSize: "22px",
                    marginLeft: "10px",
                    color: "#00acee",
                    marginRight: "10px",
                  }}
                />
              </a>
              {/* Start Facebook like & share button */}
              <div id="fb-root"></div>
              <Script
                async
                defer
                crossorigin="anonymous"
                src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0"
                nonce="lsg4CWOd"
              />

              <div className="fb-like-container">
                <div
                  className="fb-like"
                  data-href="https://developers.facebook.com/docs/plugins/"
                  data-action="like"
                  data-size="small"
                  data-share="true"
                ></div>
              </div>
            </div>

            {/* End Facebook like & share button */}
          </Col>
          <Col md={12} className="mb-4">
            <img src={newsData.img} width="100%" height="200px" />
          </Col>

          <Col md={12}>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "18px",
                lineHeight: "31px",
              }}
            >
              {newsDetail(details)}
            </p>
          </Col>

          <Col md={12} className="mt-5">
            <h1>Related News</h1>

            <div className="mt-4">
              <Swiper slidesPerView={1} navigation={true} className="mySwiper">
                {storeNews &&
                  storeNews.data &&
                  storeNews.data.map((items) => {
                    const date = moment(items.updated_at).format(
                      " Do MMMM  YYYY"
                    );
                    return (
                      <SwiperSlide>
                        <Link href={`/news/${items.slug}`}>
                          <Card
                            style={{
                              borderRadius: "30px",
                              height: "400px",
                              marginLeft: "5%",
                              marginRight: "5%",
                              cursor: "pointer",
                            }}
                            className="mb-4"
                          >
                            <Card.Img
                              variant="top"
                              src={items.img}
                              style={{
                                borderRadius: "30px",
                                padding: "10px",
                                height: "200px",
                              }}
                            />

                            <Card.Body>
                              <Card.Title style={{ fontSize: "16px" }}>
                                {items.title}
                              </Card.Title>
                              <Card.Text>
                                <p style={{ fontSize: "12px" }}>
                                  {items.excerpt.slice(0, 100)}
                                </p>
                              </Card.Text>

                              <Card.Text>
                                <p style={{ fontSize: "10px" }}>{date}</p>
                              </Card.Text>

                              <div
                                className="d-flex justify-content-center mt-4"
                                style={{
                                  boxShadow:
                                    "0px 5px 20px -2px rgb(160 155 155 / 75%)",
                                  borderRadius: "10px",
                                  fontSize: "14px",
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
  return design;
};

export default MobNewsMain;
