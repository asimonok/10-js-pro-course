import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoItem from './TodoItem';
import { editTodo, completeTodo, deleteTodo } from 'redux/actions/todoActions';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useEffect: jest.fn((fn) => fn()),
  useSelector: jest.fn((fn) => fn()),
}));

jest.mock('redux/actions/todoActions', () => ({
  editTodo: jest.fn(),
  completeTodo: jest.fn(),
  deleteTodo: jest.fn(),
}));

describe('TodoItem', () => {
  const mockedStore = createStore((state) => state);
  const component = (
    <Provider store={mockedStore}>
      <TodoItem title={'title'} isDone={false} id={'1'} />
    </Provider>
  );

  it('Print title', () => {
    render(component);
    expect(screen.getByTestId('todo-title')).toHaveTextContent('title');
  });

  it('Switch if edit title', () => {
    render(component);
    expect(screen.getByTestId('todo-start-edit')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('todo-start-edit'));
    expect(screen.getByTestId('todo-stop-edit')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('todo-stop-edit'));
    expect(screen.getByTestId('todo-start-edit')).toBeInTheDocument();
  });

  it('Update title', () => {
    render(component);
    fireEvent.click(screen.getByTestId('todo-start-edit'));
    fireEvent.change(screen.getByTestId('todo-changed-title'), {
      target: { value: 'new title' },
    });
    expect(
      (screen.getByTestId('todo-changed-title') as HTMLInputElement).value
    ).toEqual('new title');
    fireEvent.click(screen.getByTestId('todo-stop-edit'));
    expect(editTodo).toBeCalledWith('1', 'new title');
  });

  it('Toogle isDone', () => {
    render(component);
    fireEvent.click(screen.getByTestId('todo-done'));
    expect(completeTodo).toBeCalledWith('1');
  });

  it('Delete todo', () => {
    render(component);
    fireEvent.click(screen.getByTestId('todo-delete'));
    expect(deleteTodo).toBeCalledWith('1');
  });
});
