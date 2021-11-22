import { render, screen, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import { editTodo, toggleTodo, removeTodo } from "../../store/reducer";
import ListItem from './Todo-list-item';
  
// const list = {
//     id: "123",
//     title: "Learn testing",
//     isDone: false,
//   };

  const mockDispatch = jest.fn();
  
  jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
    useEffect: jest.fn((fn) => fn()),
    useSelector: jest.fn((fn) => fn()),
  }));
  
  jest.mock("../../store/reducer", () => ({
    editTodo: jest.fn(),
    toggleTodo: jest.fn(),
    removeTodo: jest.fn(),
  }));

describe( 'ListItem', () => {
    
    const testStore = createStore((state) => state);
    const component = (
        <Provider store={testStore}>
            <ListItem id="123" />
        </Provider>
    )

    it('Title', () => {
        render(component);
        expect(screen.getByTestId('title')).toHaveTextContent('');
      });
    it('Switch if edit', () => {
        render(component);
        expect(screen.getByTestId('btn-edit')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('btn-edit'));
        expect(screen.getByTestId('btn-save')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('btn-save'));
        expect(screen.getByTestId('btn-edit')).toBeInTheDocument();
    });
    
  it("Updated title", () => {
    render(component);
    fireEvent.click(screen.getByTestId("btn-edit"));
    fireEvent.change(screen.getByTestId("edit-value"), {target: { value: "new title" }});
    expect(screen.getByTestId("edit-value").value).toEqual("new title");
    fireEvent.click(screen.getByTestId("btn-save"));
    expect(editTodo).toBeCalledWith("123", "new title");
  });

  it("Toggle isDone", () => {
    render(component);
    fireEvent.click(screen.getByTestId("isdone"));
    expect(toggleTodo).toBeCalledWith("123");
  });

  it("Remove", () => {
    render(component);
    fireEvent.click(screen.getByTestId("btn-remove"), { target: {} });
    expect(removeTodo).toBeCalledWith("123");
  });
} )
