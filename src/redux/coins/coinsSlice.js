import axios from 'axios';

const FETCHCOINS = 'FETCHCOINS';
const FILTERCOINS = 'FILTERCOINS';

const fetchCoin = (newState) => ({
  type: FETCHCOINS,
  newState,
});
const filterCoin = (filterState) => ({
  type: FETCHCOINS,
  filterState,
});

const fetchCoins = async () => {
  const { data: post } = await axios.get('https://api.coincap.io/v2/assets?limit=100');
  return post.data;
};

export const coinList = () => async (dispatch) => {
  const coins = await fetchCoins();
  const newState = coins.slice(0, 51);
  dispatch(fetchCoin(newState));
};

export const coinFilter = (cryto) => async (dispatch) => {
  const coins = await fetchCoins();
  if (cryto === 'name') {
    coins.sort((a, b) => a.name.localeCompare(b.name));
  } else if (cryto === 'vol') {
    coins.sort((a, b) => b.priceUsd - a.priceUsd);
  }
  const filterState = coins.slice(0, 71);
  dispatch(filterCoin(filterState));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCHCOINS:
      return action.newState;
    case FILTERCOINS:
      return action.filterState;
    default:
      return state;
  }
};

export default reducer;
