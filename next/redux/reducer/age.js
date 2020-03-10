const initeState = {
  zp: 29,
  zw: 29
};

export default function(state = initeState, action) {
  const { type } = action;
  switch (type) {
    case "ZP":
      return { ...state, zp: action.data };
    case "ZW":
      return { ...state, zw: action.data };
    default:
      return state;
  }
}
