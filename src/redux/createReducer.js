const createReducer = (state, action, types, reducerName) => {
  reducerName = reducerName.toUpperCase();

  switch (action.type) {
    case types[`FETCH_${reducerName}_START`]:
      return {
        ...state,
        isFetching: true
      };
    case types[`FETCH_${reducerName}_SUCCESS`]:
      return {
        ...state,
        resource: action.payload,
        isFetching: false
      };
    case types[`FETCH_${reducerName}_FAILURE`]:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default createReducer;
