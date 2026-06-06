import { Container, Row, Col, Form, Card } from "react-bootstrap";

const Loader = () => {
  const design = (
    <>
      <style jsx>{`
        .page {
          background-color: #f6f6f6;
          width: 230px;
          height: 356px;
          overflow: hidden;
          border-radius: 30px;
          margin-left: 58px;
          padding: 13px;
        }
        .anim {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            #0000 33%,
            rgba(255, 255, 255, 0.3) 50%,
            #0000 66%
          );
          position: relative;
          left: 0;
          animation: demo 1.2s infinite;
        }

        @keyframes demo {
          from {
            left: -200px;
          }

          to {
            left: 80%;
          }
        }
      `}</style>
      <div className="page">
        <div
          style={{
            width: "200px",
            height: "160px",
            border: "1px solid #f8efef",
            overflow: "hidden",
            borderRadius: "30px",
            backgroundColor: "#ececec",
          }}
        >
          <div className="anim"></div>
        </div>

        <div
          style={{
            width: "180px",
            height: "20px",
            border: "1px solid #f8efef",
            overflow: "hidden",
            backgroundColor: "#ececec",
            marginTop: "10px",
            marginLeft: "8px",
          }}
        >
          <div className="anim"></div>
        </div>

        <div
          style={{
            width: "180px",
            height: "20px",
            border: "1px solid #f8efef",
            overflow: "hidden",
            backgroundColor: "#ececec",
            marginTop: "10px",
            marginLeft: "8px",
          }}
        >
          <div className="anim"></div>
        </div>

        <div
          style={{
            width: "180px",
            height: "20px",
            border: "1px solid #f8efef",
            overflow: "hidden",
            backgroundColor: "#ececec",
            marginTop: "10px",
            marginLeft: "8px",
          }}
        >
          <div className="anim"></div>
        </div>

        <div
          style={{
            width: "150px",
            height: "20px",
            border: "1px solid #f8efef",
            overflow: "hidden",
            backgroundColor: "#ececec",
            marginTop: "10px",
            marginLeft: "8px",
          }}
        >
          <div className="anim"></div>
        </div>
      </div>
    </>
  );
  return design;
};

export default Loader;
