import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Coin from '../components/Coin';

const cryto = {
  changePercent24Hr: '-2.8770796633988240',
  id: 'bitcoin',
  priceUsd: '29067.8651115798164805',
  symbol: 'BTC',
};

describe('Coin component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Coin
            key={cryto.id}
            id={cryto.id}
            symbol={cryto.symbol}
            price={cryto.priceUsd.substring(0, 8)}
            change={cryto.changePercent24Hr}
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
