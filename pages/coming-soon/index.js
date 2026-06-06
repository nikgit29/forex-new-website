import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/booking.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Component/Navbar/Nabvar";
import Booking from "../../Component/Booking/Booking";
import Analytics from "../../Component/Home/Analytics";
import Lottie from "react-lottie";
import animationData from "../../lottie/coming.json";
import Footer from "../../Component/Home/Footer";
import MobNavbar from "../../Component/MobComp/MobNavbar/MobNavbar";
import MobBooking from "../../Component/MobComp/MobBooking/MobBooking";
import MobAnalytics from "../../Component/MobComp/MobHome/MobAnalytics";
import MobFaq from "../../Component/MobComp/MobFAQ/MobFaq";
import Mobfooter from "../../Component/MobComp/MobHome/MobFooter";
// Tablet Component Import
import TabNavbar from "../../Component/TabComp/TabNavbar/TabNavbar";
import TabBooking from "../../Component/TabComp/TabBooking/index";
import TabFooter from "../../Component/TabComp/TabHome/TabFooter";
import { useEffect } from "react";
import Router from "next/router";
const Index = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const design = (
    <>
      <Head>
        <title>ForexBlues</title>
        <meta name="Premium" content="Choose Your Plan" />
        <link rel="icon" href="/favicon.png" />
        <style>
          {`   

              @media(min-width:992px){
                              
                .desktopView{
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
                className={styles.logobox}
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
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          <Lottie options={defaultOptions} height={500} width={500} />
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
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Mobile Version Header Section */}

        {/* Start Mobile Version Analytics Section */}
        <main>
          <Container className={styles.main}>
            <Row>
              <Col>
                <Lottie options={defaultOptions} height={400} width={400} />
              </Col>
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
                {/* <TabAboutMain /> */}
                <Lottie options={defaultOptions} height={500} width={500} />
              </Col>
            </Row>
          </Container>
        </main>
        {/* End Tablet Version Analytics Section */}

        <footer fluid className={styles.footer}>
          <TabFooter />
        </footer>
      </Container>

      {/* Tablet Version End */}
    </>
  );
  return design;
};

export default Index;
