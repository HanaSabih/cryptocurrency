import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Coin = ({ id, symbol, price }) => (
  <NavLink className="cardItem d-flex flex-row justify-content-around" to={`/detail/${id}`}>

    <div><h2 className="symbol fw-bold fs-1 py-3">{symbol}</h2></div>
    <div className=" fs-5 py-3">
      <small>{id}</small>
      <p>
        $
        {price}
      </p>
    </div>

  </NavLink>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Coin;
