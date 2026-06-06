const data = {};

const COMMODITY_WEEKLY_FORECAST = (state = data, action) => {
  if (action.type === "COMMODITY_WEEKLY_FORECAST") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default COMMODITY_WEEKLY_FORECAST;
