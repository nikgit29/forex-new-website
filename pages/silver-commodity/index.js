import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Navbar from "../../Component/Navbar/Nabvar";
import SaveMoney from "../../Component/Home/SaveMoney";
import Analytics from "../../Component/silverGold/SilverForecastAnalytics";
import Footer from "../../Component/Home/Footer";
import MobNavbar from "../../Component/MobComp/MobNavbar/MobNavbar";
import MobSilverAnalytics from "../../Component/MobComp/MobSilverGold/MobSilverAnalytics";
import MobSaveMoney from "../../Component/MobComp/MobHome/MobSaveMoney";
import Mobfooter from "../../Component/MobComp/MobHome/MobFooter";
// Tablet Component Import
import TabNavbar from "../../Component/TabComp/TabNavbar/TabNavbar";
import TabSaveMoney from "../../Component/TabComp/TabHome/TabSaveMoney";
import TabSilverAnalytics from "../../Component/TabComp/TabSilverGold/TabSilverAnalytics";
import TabFooter from "../../Component/TabComp/TabHome/TabFooter";
// Desktop 992px to 1399px
import MediumDesktopNavbar from "../../Component/DesktopComp/DesktopNavbar/MediumDesktopNavbar";
import MediumDesktopSaveMoney from "../../Component/DesktopComp/Home/MediumDesktopSaveMoney";
import MediumDesktopSilverAnalytics from "../../Component/DesktopComp/DesktopSilverGold/MediumDesktopSilverForecastAnalytics";
import MediumDesktopFooter from "../../Component/DesktopComp/Home/MediumDesktopFooter";
import axios from "axios";
const Index = ({ data }) => {
  const design = (
    <>
      <Head>
        <title>ForexBlues</title>
        <link rel="canonical" href="https://forexblues.com/" />
        <meta
          name="google-site-verification"
          content="G0iS4js9vVuZAdlpBUNjj3DkxQFEUmRkvOm8_8r6wyI"
        />
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
                <SaveMoney newsSlider={data} />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          <Analytics />
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
                <MobSaveMoney newsSlider={data} />
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
                <MobSilverAnalytics />
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
                <TabSaveMoney newsSlider={data} />
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
                <TabSilverAnalytics />
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

      {/* ------------------------------------------------------------------------------------------------- */}
      {/* Start Desktop 992px to 1399px */}
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
                <MediumDesktopNavbar />
                <MediumDesktopSaveMoney newsSlider={data} />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          {" "}
          <MediumDesktopSilverAnalytics />
        </main>
        {/*End  Main Section */}

        {/* Start Footer Section */}
        <footer className={styles.footer}>
          <MediumDesktopFooter />
        </footer>
        {/* End Footer Section */}
      </Container>
      {/* End Desktop 992px to 1399px */}
      {/* ------------------------------------------------------------------------------------------------------ */}
    </>
  );

  return design;
};

export default Index;

// Homepage News Slider
export const getServerSideProps = async () => {
  const response = await axios({
    method: "GET",
    url: "https://cms.forexblues.com/json/api/homepage-news-slider?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
  });
  return {
    props: {
      data: response.data,
    },
  };
};
// Homepage News Slider code
