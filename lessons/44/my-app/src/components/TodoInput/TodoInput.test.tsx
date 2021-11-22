import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoInput from './TodoInput';

describe('TodoInput', () => {
  const mockedStore = createStore((state) => state);
  const component = (
    <Provider store={mockedStore}>
      <TodoInput />
    </Provider>
  );

  it('Render TodoInput', () => {
    render(component);
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  });
});
