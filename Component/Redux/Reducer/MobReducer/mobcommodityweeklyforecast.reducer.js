const data = {};

const MOB_COMMODITY_WEEKLY_FORECAST = (state = data, action) => {
  if (action.type === "MOB_COMMODITY_WEEKLY_FORECAST") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default MOB_COMMODITY_WEEKLY_FORECAST;
