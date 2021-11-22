import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

describe('App', () => {
  const mockedStore = createStore((state) => state);
  const component = (
    <Provider store={mockedStore}>
      <App />
    </Provider>
  );

  it('Render component', () => {
    render(component);
    expect(screen.getByTestId('App')).toBeInTheDocument();
  });
});
