import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import OPEN_SIGNUP_MODAL from "../../Redux/Action/opensignupmodal.action";
import CLOSE_LOGIN_MODAL from "../../Redux/Action/closeloginmodal.action.";
const LoginRight = () => {
  const dispatch = useDispatch();
  const Design = (
    <>
      <div style={{ color: "white" }}>
        <h2 className="d-flex justify-content-center pt-4">ForexBlues</h2>
        <h6 className="d-flex justify-content-center ">Welcomes You!</h6>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "27%", color: "#ffffff" }}
      >
        Try{" "}
        <span
          style={{
            margin: "0 5px",
            color: "#ffffff",
            textShadow: "3px 2px 15px rgba(251, 216, 75, 1)",
          }}
        >
          PREMIUM
        </span>{" "}
        for free!
      </div>
      <Button
        className="w-100 mb-3 p-0 mt-2"
        style={{
          height: "25px",
          fontSize: "10px",
          letterSpacing: "1.5px",
          fontWeight: "500",
          backgroundColor: "#ffffff",
          border: "none",
          color: "#7fbbff",
        }}
        onClick={() => {
          dispatch(OPEN_SIGNUP_MODAL());
          dispatch(CLOSE_LOGIN_MODAL());
        }}
      >
        FREE TRIAL
      </Button>
    </>
  );
  return Design;
};

export default LoginRight;
