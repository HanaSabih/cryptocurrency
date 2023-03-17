import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { coinList, coinFilter } from '../redux/coins/coinsSlice';
import Coin from './Coin';

const Coins = () => {
  const dispatch = useDispatch();
  const crytoList = useSelector((store) => store.cryto);
  useEffect(() => {
    dispatch(coinList());
  });
  const changeHandler = (e) => {
    dispatch(coinFilter(e.target.value));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    window.location.href = `/detail/${e.target.coinSearch.value}`;
  };

  return (
    <section>
      <div className="infos d-none">
        <select className="filter" onChange={changeHandler}>
          <option value="price"> Rank </option>
          <option value="name"> Name </option>
          <option value="vol"> Price </option>
        </select>
        <form onSubmit={searchHandler}>
          <input type="text" name="coinSearch" placeholder="Crypto cryto name" required />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        <ul className="d-grid mx-0 px-0 cardContainer">
          {crytoList.map((cryto) => (
            <Coin
              key={cryto.id}
              id={cryto.id}
              symbol={cryto.symbol}
              price={cryto.priceUsd.substring(0, 8)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Coins;
