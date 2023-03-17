const apiCoin = 'https://api.coincap.io/v2/assets/';

const GET_DETAIL = 'GET_DETAIL';
const initialState = [{ id: 1, symbol: 'CrytoCoin' }];

const fetchDetail = async (id) => {
  const get = await fetch(apiCoin + id, { method: 'GET' });
  const coins = await get.json();
  return coins;
};

export const coinDetail = (id) => async (dispatch) => {
  const cDetail = await fetchDetail(id);
  dispatch({
    type: GET_DETAIL,
    detail: cDetail.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return action.detail;
    default:
      return state;
  }
};

export default reducer;
