import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/News.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Component/Navbar/Nabvar";
import NewsSlider from "../../Component/NewsCmp/NewsSlider";
import NewsMain from "../../Component/NewsCmp/NewsMain/NewsMain";
import Footer from "../../Component/Home/Footer";
import MobNavbar from "../../Component/MobComp/MobNavbar/MobNavbar";
import MobNewsSlider from "../../Component/MobComp/MobNewsCmp/MobNewsSlider";
import Mobfooter from "../../Component/MobComp/MobHome/MobFooter";
// Tablet Component Import
import TabNavbar from "../../Component/TabComp/TabNavbar/TabNavbar";
import TabSaveMoney from "../../Component/TabComp/TabHome/TabSaveMoney";
import TabNewsSlider from "../../Component/TabComp/TabNewsCmp/TabNewsSlider";
import TabFooter from "../../Component/TabComp/TabHome/TabFooter";

// Desktop 1280px
import MediumDesktopNavbar from "../../Component/DesktopComp/DesktopNavbar/MediumDesktopNavbar";
import MediumDesktopNewsSlider from "../../Component/DesktopComp/MediumDesktopNewsCmp/MediumDesktopNewsSlider";
import MediumDesktopNewsMain from "../../Component/DesktopComp/MediumDesktopNewsCmp/MediumDesktopNewsMain/MediumDesktopNewsMain";
import MediumDesktopFooter from "../../Component/DesktopComp/Home/MediumDesktopFooter";
import axios from "axios";
import { useState, useEffect } from "react";

const Index = ({ data, newsData }) => {
  const design = (
    <>
      <Head>
        {/* Primary Tag */}
        <title>{data && data.title}</title>
        <meta name="title" content={data && data.title} />
        <meta name="description" content={data && data.description} />
        <link rel="canonical" href="https://forexblues.com/" />
        <meta
          name="google-site-verification"
          content="G0iS4js9vVuZAdlpBUNjj3DkxQFEUmRkvOm8_8r6wyI"
        />
        {/* Facebook */}
        <meta property="og:type" content={data && data.ogtype} />
        <meta property="og:url" content={data && data.ogurl} />
        <meta property="og:title" content={data && data.ogtitle} />
        <meta property="og:description" content={data && data.ogdescription} />
        <meta property="og:image" content={data && data.ogimage} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />

        {/* Twitter */}
        <meta property="twitter:card" content={data && data.twittercard} />
        <meta property="twitter:url" content={data && data.twitterurl} />
        <meta property="twitter:title" content={data && data.twittertitle} />
        <meta
          property="twitter:description"
          content={data && data.twittertitle}
        />
        <meta property="twitter:image" content={data && data.twitterimage} />
        <link rel="icon" href="/favicon.png" />
        <style>
          {`   
          @media(min-width:1400px){
                              
                .desktopView{
                  display:block !important;
                }

                  .desktopMedium{
                    display:none !important;
                  }

                .mobileView{
                  display:none !important;
                }

                .tabView{
                  display:none !important;
                }

              }

              @media(min-width:992px)and (max-width:1399px){
                              
                .desktopView{
                  display:none !important;
                }

                .desktopMedium{
                    display:block !important;
                  }

                .mobileView{
                  display:none !important;
                }

                .tabView{
                  display:none !important;
                }

              }

             @media(min-width:768px) and (max-width:992px){
              .mobileView{
                display:none !important;
              }

              .desktopMedium{
                    display:none !important;
                  }
          
              .desktopView{
                display:none !important;
              }

              .tabView{
                display:block !important;
              }
             }

              @media(max-width:768px){
                .mobileView{
                  display:block !important;
                }

                .desktopMedium{
                    display:none !important;
                  }
            
                .desktopView{
                  display:none !important;
                }

                .tabView{
                  display:none !important;
                }
              }

              `}
        </style>
      </Head>

      <Container
        fluid
        style={{ padding: "0", margin: "0" }}
        className="desktopView"
      >
        {/* Start Header Section */}
        <header className={styles.header}>
          <Container>
            <Row>
              <div
                style={{
                  width: "209px",
                  height: "445px",
                  backgroundColor: "white",
                  borderTopRightRadius: "38px",
                  transform: "rotate(71deg)",
                  marginTop: "-177px",
                  marginLeft: "-133px",
                }}
              />
              <Container
                className="mt-4"
                style={{
                  position: "absolute",
                  zIndex: "999",
                  top: 0,
                  left: 0,
                }}
              >
                <Navbar />
             <NewsSlider newsData={newsData} />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          <NewsMain newsData={newsData?.[0] || null} />
        </main>
        {/*End  Main Section */}

        {/* Start Footer Section */}
        <footer className={styles.footer}>
          <Footer />
        </footer>
        {/* End Footer Section */}
      </Container>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Mobile Version Start  */}
      {/* Start Mobile Version Header Section */}
     <Container className="mobileView p-0">
        <header className={styles.mobHeader}>
          <Container fluid>
            <Row>
              <Col>
                <MobNavbar />
                <MobNewsSlider newsData={newsData} />
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Mobile Version Header Section */}

        {/* Start Mobile Version Analytics Section */}
        <main>
          <Container className={styles.main}>
            <Row>
              <Col>{/* <MobAboutMain /> */}</Col>
            </Row>
          </Container>
        </main>
        {/* End Mobile Version Analytics Section */}

        <footer className={styles.footer}>
          <Mobfooter />
        </footer>
      </Container>
      {/* Mobile Version End */}

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Tablet Version Start  */}
      {/* Start Tablet Version Header Section */}
      <Container fluid className="tabView p-0">
        <header className={styles.mobHeader}>
          <Container fluid>
            <Row>
              <Col>
                <TabNavbar />
                <TabNewsSlider newsData={newsData}/>
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Tablet Version Header Section */}

        {/* Start Tablet Version Analytics Section */}
        <main>
          <Container fluid className={styles.main}>
            <Row>
              <Col>
                <Col>{/* <MobAboutMain /> */}</Col>
              </Col>
            </Row>
          </Container>
        </main>
        {/* End Tablet Version Analytics Section */}

        <footer className={styles.footer}>
          <TabFooter />
        </footer>
      </Container>

      {/* Tablet Version End */}
      {/* --------------------------------------------------------------------------------------------------------------- */}
      {/* Start Desktop 1280px */}
        <Container
        fluid
        className="desktopMedium"
        style={{ padding: "0", margin: "0" }}
      >
        {/* Start Header Section */}
        <header className={styles.header}>
          <Container>
            <Row>
              <div
                style={{
                  width: "239px",
                  height: "445px",
                  backgroundColor: "white",
                  borderTopRightRadius: "38px",
                  transform: "rotate(71deg)",
                  marginTop: "-187px",
                  marginLeft: "-133px",
                }}
              />
              <Container
                className="mt-4"
                style={{
                  position: "absolute",
                  zIndex: "999",
                  top: 0,
                  left: 0,
                }}
              >
                <MediumDesktopNavbar />
                <MediumDesktopNewsSlider newsData={newsData}/>
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          {" "}
          <MediumDesktopNewsMain newsData={newsData?.[0] || null} />
        </main>
        {/*End  Main Section */}

        {/* Start Footer Section */}
        <footer className={styles.footer}>
          <MediumDesktopFooter />
        </footer>
        {/* End Footer Section */}
      </Container>
      {/* End Desktop 1280px */}
    </>
  );
  return design;
};

export default Index;

export const getServerSideProps = async () => {
  const [metaResponse, newsResponse] = await Promise.all([
    axios.get(
      "https://cms.forexblues.com/json/staticmeta/meta_all_news.php"
    ),
    axios.get(
      "https://cms.forexblues.com/json/api/get-news-v3.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s"
    ),
  ]);

  return {
    props: {
      data: metaResponse.data,
      newsData: newsResponse.data || [],
    },
  };
};