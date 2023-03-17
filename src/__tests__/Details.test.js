import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Details from '../components/Details';
import { coinDetail } from '../redux/details/detailsSlice';

describe('Details component', () => {
  test('component match with the snapshot', () => {
    store.dispatch(coinDetail('bitcoin'));
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
