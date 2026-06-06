import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/News.module.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Navbar from "../../Component/Navbar/Nabvar";
import NewsSlider from "../../Component/NewsCmp/NewsSlider";
import NewsMain from "../../Component/NewsCmp/NewsMain/NewsMain";
import Footer from "../../Component/Home/Footer";
import MobNavbar from "../../Component/MobComp/MobNavbar/MobNavbar";
// import MobNewsSlider from "../../Component/MobComp/MobNewsCmp/MobNewsSlider";
import MobNewsPost from "../../Component/MobComp/MobNewsCmp/MonNewsMain/MobNewsMain";
import MobFooter from "../../Component/MobComp/MobHome/MobFooter";

// Tablet Component Import
import TabNavbar from "../../Component/TabComp/TabNavbar/TabNavbar";
import TabNewsPost from "../../Component/TabComp/TabNewsCmp/TabNewsMain/TabNewsMain";
import TabFooter from "../../Component/TabComp/TabHome/TabFooter";
const Index = ({ data }) => {
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
                <NewsSlider />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          <NewsMain />
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
          <Container className={styles.mobNewsMain}>
            <Row>
              <Col>
                <MobNewsPost />
              </Col>
            </Row>
          </Container>
        </main>
        {/* End Mobile Version Analytics Section */}

        <footer className={styles.footer}>
          <MobFooter />
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
                <Col>
                  <TabNewsPost />
                </Col>
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
    </>
  );
  return design;
};

export default Index;

export const getServerSideProps = async (context) => {
  const slug = context.params.post;

  const response = await axios({
    method: "GET",
    url: `https://cms.forexblues.com/json/staticmeta/meta_news_by_slug_mobile.php?news_slug=${slug}`,
  });
  return {
    props: {
      data: response.data,
    },
  };
};
