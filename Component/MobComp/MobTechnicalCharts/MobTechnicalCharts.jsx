import Style from "./mobtechnical.module.css";
import { Card, Modal, Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import MOB_OPEN_LOGIN_MODAL from "../../Redux/Action/MobAction/mobopenloginmodal.action";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
const MobTechnicalCharts = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [large, setLarge] = useState(false);
  const [expand, setExpand] = useState(false);
  const [silverExpand, setSilverExpand] = useState(false);
  const [dummy, setDummy] = useState("d-block");
  const [graph, setGraph] = useState("d-none");
  const [goldGraph, setGoldGraph] = useState("d-none");
  const [silverGraph, setSilverGraph] = useState("d-none");
  const [currencyImage, setCurrencyImage] = useState([]);
  const [goldImages, setGoldImage] = useState([]);
  const [silverImages, setSilverImage] = useState([]);
  const [BeforeLoginImage, setBreforeLoginImage] = useState([]);
  const dispatch = useDispatch();

  const router = useRouter();
  const url = router.asPath;
  const cookies = new Cookies();
  const cookiesDependency = cookies.get("fx_1994");
  const response = useSelector((response) => response);
  const checkDays =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data.daysLeft;

  const imageData = response.GET_WEEKLY_FORCASTE.data[0];

  const goldImage =
    response &&
    response.COMMODITY_WEEKLY_FORECAST &&
    response.COMMODITY_WEEKLY_FORECAST.data &&
    response.COMMODITY_WEEKLY_FORECAST.data[1];
  const silverImage =
    response &&
    response.COMMODITY_WEEKLY_FORECAST &&
    response.COMMODITY_WEEKLY_FORECAST.data &&
    response.COMMODITY_WEEKLY_FORECAST.data[0];

  const GetBeforeLoginImage = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/get-chart-image.php",
      });
      setCurrencyImage(response.data[2].image);
      setSilverImage(response.data[1].image);
      setGoldImage(response.data[0].image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (cookies.get("fx_1994") != undefined) {
      setGraph("d-block");
      setDummy("d-none");
      if (url == "/gold-commodity") {
        setGoldGraph("d-block");
        setGraph("d-none");
      } else if (url == "/silver-commodity") {
        setGoldGraph("d-none");
        setSilverGraph("d-block");
        setGraph("d-none");
      }
    } else {
      setBreforeLoginImage(currencyImage);
      if (url == "/gold-commodity") {
        setBreforeLoginImage(goldImages);
      } else if (url == "/silver-commodity") {
        setBreforeLoginImage(silverImages);
      }
      setDummy("d-block");
      setGraph("d-none");
    }
  }, [cookiesDependency, currencyImage]);

  useEffect(() => {
    GetBeforeLoginImage();
  }, [cookiesDependency]);

  const check_plan_to_show_popup = () => {
    if (checkDays == "0") {
      setOpen(true);
    } else {
      setLarge(true);
    }
  };

  const ExpandGraph = () => {
    setExpand(true);
  };

  const ExpandGraphSilvers = () => {
    setSilverExpand(true);
  };

  const openModal = () => {
    setShow(true);
  };

  const Design = (
    <>
      {/* start Demo modal */}

      <Modal size="sm" show={open} onHide={() => setOpen(false)}>
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span>Please, Subscribe to paid plans to see technical chart</span>
          </div>
          <Button
            className="mt-3"
            style={{
              backgroundColor: "#81baff",
              border: "none",
              boxShadow: "none",
              letterSpacing: "1px",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "12px",
              width: "70%",
            }}
            onClick={() => {
              router.push("/premium");
            }}
          >
            View Premium Plans
          </Button>

          <Button
            className="w-25 mt-3"
            style={{
              backgroundColor: "#e96e6e",
              border: "none",
              boxShadow: "none",
              letterSpacing: "1px",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "12px",
              marginLeft: "10px",
            }}
            onClick={() => setOpen(false)}
          >
            CLOSE
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        style={{ marginTop: "150px" }}
      >
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span>Please log-in to see future forecast</span>
          </div>
          <Button
            className="mt-3"
            style={{
              backgroundColor: "#81baff",
              border: "none",
              boxShadow: "none",
              letterSpacing: "1px",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "12px",
              width: "70%",
            }}
            onClick={() => {
              dispatch(MOB_OPEN_LOGIN_MODAL());
              setShow(false);
            }}
          >
            LOGIN
          </Button>

          <Button
            className="w-25 mt-3"
            style={{
              backgroundColor: "#e96e6e",
              border: "none",
              boxShadow: "none",
              letterSpacing: "1px",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "12px",
              marginLeft: "10px",
            }}
          >
            CLOSE
          </Button>
        </Modal.Body>
      </Modal>

      {/* Demo Modal */}

      <Card className={Style.card}>
        <Card.Body>
          <Card.Subtitle className={Style.subtitle}>
            TECHNICAL CHART
          </Card.Subtitle>
          <div>
            <img
              src={BeforeLoginImage}
              width="100%"
              height="137px"
              className={dummy}
              onClick={() => setShow(true)}
            />
            <img
              src={imageData && imageData.img}
              width="100%"
              height="137px"
              className={graph}
              onClick={() => check_plan_to_show_popup()}
            />

            <img
              src={goldImage && goldImage.technicalchart}
              width="100%"
              height="137px"
              className={goldGraph}
              onClick={() => ExpandGraph()}
            />

            <img
              src={silverImage && silverImage.technicalchart}
              width="100%"
              height="137px"
              className={silverGraph}
              onClick={() => ExpandGraphSilvers()}
            />
          </div>
        </Card.Body>
      </Card>

      {/* Start Modal to Enlarge Technical Charts for currency */}
      <Modal
        show={large}
        onHide={() => setLarge(false)}
        aria-labelledby="example-custom-modal-styling-title"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <span style={{ marginLeft: "60px" }}>TECHNICAL CHART</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imageData && imageData.img} width={1100} height={500} />
        </Modal.Body>
      </Modal>
      {/* End Modal to Enlarge Technical Charts for currency*/}

      {/* Start Modal to Enlarge Technical Charts for Gold commodities */}
      <Modal
        show={expand}
        onHide={() => setExpand(false)}
        aria-labelledby="example-custom-modal-styling-title"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span style={{ marginLeft: "60px" }}>TECHNICAL CHART</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={goldImage && goldImage.technicalchart}
            width={1100}
            height={500}
          />
        </Modal.Body>
      </Modal>
      {/* End Modal to Enlarge Technical Charts for commodities*/}

      {/* Start Modal to Enlarge Technical Charts for Silver commodities */}
      <Modal
        show={silverExpand}
        onHide={() => setSilverExpand(false)}
        aria-labelledby="example-custom-modal-styling-title"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span style={{ marginLeft: "60px" }}>TECHNICAL CHART</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={silverImage && silverImage.technicalchart}
            width={1100}
            height={500}
          />
        </Modal.Body>
      </Modal>
      {/* End Modal to Enlarge Technical Charts for commodities*/}
    </>
  );
  return Design;
};

export default MobTechnicalCharts;
