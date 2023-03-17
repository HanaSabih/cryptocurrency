import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders title "CryptoMarket"', () => {
    render(
      <BrowserRouter><Navbar /></BrowserRouter>,
    );

    const title = screen.getByText('Cryptocurrency Market');
    expect(title).toBeInTheDocument();
  });

  test('component match with the snapshot', () => {
    // Assert
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
