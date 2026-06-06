import ALL_CURRENCY_DETAILS from "./Reducer/alllcurrencydetails.reducer";
import DAILY_FORCASTS from "./Reducer/dailyForcasts.reducer";
import NEWS_DETAILS from "./Reducer/newsdetails.reducer";
import OPEN_CLOSE_MODAL from "./Reducer/openclosemodal.reducer";
import OPEN_CLOSE_CONTACT_MODAL from "../Redux/Reducer/openclosecontactmodal.reducer";
import OPEN_CLOSE_SIGNUP_MODAL from "../Redux/Reducer/openclosesignupmodal.reducer";
import OPEN_CLOSE_REQUEST_CALLBACK from "../Redux/Reducer/opencloserequestcallback.reducer";
import SEND_PROFILE_DATA from "../Redux/Reducer/sendprofiledata.reduce";
import OPEN_CLOSE_SIGNUP_OTP_MODAL from "../Redux/Reducer/openclosesignupotp.reducer";
import GET_WEEKLY_FORCASTE from "../Redux/Reducer/getweeklyforcatse.reducer";
import PREMIUM_PLAN from "../Redux/Reducer/premiumplan.reducer";
import MOB_OPEN_CLOSE_LOGIN_MODAL from "../Redux/Reducer/MobReducer/mobopencloseloginmodal.reducer";
import MOB_OPEN_CLOSE_SIGNUP_MODAL from "../Redux/Reducer/MobReducer/openclosemobsignupmodal.reducer";
import OPEN_CLOSE_SWEET_ALERT from "../Redux/Reducer/openclosesweetalert.reducer";
import OPEN_CLOSE_PROVIDE_FEEDBACK from "../Redux/Reducer/opencloseprovidefeedback.reducer";
import OPEN_CLOSE_FORGET_PASSWORD_MODAL from "../Redux/Reducer/opencloseforegetpasswordmodal.reducer";
import OPEN_CLOSE_LOGIN_TO_SET_ALERT from "./Reducer/opencloselogintosetratealert.reducer";
import OPEN_CLOSE_FREE_TRIAL_MODAL from "./Reducer/openclosemodalfreetrialover.reducer";
import OPEN_CLOSE_RENEW_MODAL from "../Redux/Reducer/opencloserenewmodal.reducer";
import COMMODITY_WEEKLY_FORECAST from "../Redux/Reducer/commodityweeklyforecaste.reducer";
import SET_ALERT from "../Redux/Reducer/setalert.reducer";
import MOB_COMMODITY_WEEKLY_FORECAST from "../Redux/Reducer/MobReducer/mobcommodityweeklyforecast.reducer";
import OPEN_CLOSE_LOCK_RATE from "../Redux/Reducer/opencloselockrate.reducer";
import MOB_OPEN_CLOSE_LOCK_RATE from "../Redux/Reducer/MobReducer/mobopencloselockrate.reducer";
import TAB_OPEN_CLOSE_LOCK_RATE from "../Redux/Reducer/MobReducer/tabopencloselockrate.reducer";
import OPEN_CLOSE_FORWARD_BOOKING from "./Reducer/opencloseforwardbooking.reducer";
import OPEN_CLOSE_UPGRADE_PLAN_MODAL from "./Reducer/opencloseupgradepplan.action";
import OPEN_CLOSE_CHECK_QUERY_MODAL from "./Reducer/openclosecheckquerymodal.reducer";
import OPEN_CLOSE_UNSUBSCRIBE_USER from "./Reducer/opencloseunsubscribeuser.reducer";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(logger, thunk);

const root = combineReducers({
  ALL_CURRENCY_DETAILS,
  DAILY_FORCASTS,
  NEWS_DETAILS,
  OPEN_CLOSE_MODAL,
  OPEN_CLOSE_CONTACT_MODAL,
  OPEN_CLOSE_SIGNUP_MODAL,
  OPEN_CLOSE_REQUEST_CALLBACK,
  SEND_PROFILE_DATA,
  OPEN_CLOSE_SIGNUP_OTP_MODAL,
  GET_WEEKLY_FORCASTE,
  PREMIUM_PLAN,
  MOB_OPEN_CLOSE_LOGIN_MODAL,
  MOB_OPEN_CLOSE_SIGNUP_MODAL,
  OPEN_CLOSE_SWEET_ALERT,
  OPEN_CLOSE_PROVIDE_FEEDBACK,
  OPEN_CLOSE_FORGET_PASSWORD_MODAL,
  COMMODITY_WEEKLY_FORECAST,
  MOB_COMMODITY_WEEKLY_FORECAST,
  OPEN_CLOSE_LOGIN_TO_SET_ALERT,
  OPEN_CLOSE_FREE_TRIAL_MODAL,
  OPEN_CLOSE_RENEW_MODAL,
  SET_ALERT,
  OPEN_CLOSE_LOCK_RATE,
  MOB_OPEN_CLOSE_LOCK_RATE,
  TAB_OPEN_CLOSE_LOCK_RATE,
  OPEN_CLOSE_FORWARD_BOOKING,
  OPEN_CLOSE_UPGRADE_PLAN_MODAL,
  OPEN_CLOSE_CHECK_QUERY_MODAL,
  OPEN_CLOSE_UNSUBSCRIBE_USER,
});

const storage = createStore(root, {}, middlewares);

export default storage;
