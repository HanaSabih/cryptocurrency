import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { coinDetail } from '../redux/details/detailsSlice';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cryto = useSelector((store) => store.detail);
  useEffect(() => {
    dispatch(coinDetail(id));
  });
  const {
    symbol, name: title, rank, priceUsd, volumeUsd24Hr, supply,
  } = cryto;
  return (

    <Card className="text-center border-0 ">
      <ListGroup variant="flush">
        <ListGroup.Item variant="flush" className="py-5 d-flex flex-row justify-content-between align-items-center text-white">
          {' '}
          <h2 className="fs-1 ">{symbol}</h2>
          <h3 className="fs-1">{title}</h3>
        </ListGroup.Item>
        <ListGroup.Item className="text-white ">Details</ListGroup.Item>
        <ListGroup.Item className="d-flex flex-row justify-content-between align-items-center py-2 text-white">
          <span>Rank:</span>
          <span>
            #
            {rank}
          </span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex flex-row justify-content-between align-items-center py-5 text-white">
          <span>
            Price
            {' USD'}
            :
          </span>
          <span>
            {' $'}
            {priceUsd}

          </span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex flex-row justify-content-between align-items-center py-5 text-white">
          <span>Volume 24h:</span>
          <span>
            {' $'}
            {volumeUsd24Hr}
          </span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex flex-row justify-content-between align-items-center py-5 text-white">
          <span>Total Supply:</span>
          <span>
            {symbol}
            {' '}
            {supply}

          </span>
        </ListGroup.Item>

      </ListGroup>
    </Card>

  );
};

export default Details;
