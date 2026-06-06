const PREMIUM_PLAN = (state = "", action) => {
  if (action.type === "GOLD_PLAN") {
    return {
      amount: "12000",
    };
  } else if (action.type === "DIAMOND_PLAN") {
    return {
      amount: "45000",
    };
  } else if (action.type === "PLATINUM_PLAN") {
    return {
      amount: "75000",
    };
  } else if (action.type === "TITANIUM_PLAN") {
    return {
      amount: "120000",
    };
  } else {
    return state;
  }
};

export default PREMIUM_PLAN;
