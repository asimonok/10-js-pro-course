import {todosReducer, State} from '../store/reducer'
import {addTodo,
     toggleTodo,
     editTodo,
     TodoFilter,
     removeTodo,
     setFilter,
     deleteDoneTodo,
     deleteAllTodo} from '../store/reducer';

describe ('tasksReducer', () => {

    it('Add todo', () => {
        const initialState: State = {
            items: [],
            filter: TodoFilter.All,
        }
        const action = addTodo('added todo');
        const result = todosReducer( initialState, action)
        expect(result !== initialState).toBeTruthy();
        expect(result.items.length).toEqual(1); 
        expect(result.items[0]).toEqual(action.payload); 
    })
    
    it('toggleTodo', () => {
        const initialState: State = {
            items: [{id: '123', title: 'test', isDone: false},
                     {id: '321', title: 'test', isDone: false} 
                   ],
            filter: TodoFilter.All,
        }
        const action = toggleTodo('123');
        const result1 = todosReducer( initialState, action);
        expect(result1.items[0].isDone).toBeTruthy(); 
        expect(result1.items[1].isDone).toBeFalsy(); 
        const result2 = todosReducer( result1, action);
        expect(result2.items[0].isDone).toBeFalsy();
    })

    it('editTodo', () => {
        const initialState: State = {
            items:  [{id: '123', title: 'test', isDone: false},
                     {id: '321', title: 'test', isDone: false} 
                    ],
            filter: TodoFilter.All,
        }
        const action = editTodo('123', 'updated title');
        const result1 = todosReducer( initialState, action);
        expect(result1.items[0].title).toEqual('updated title'); 
    })

    it('removeTodo', () => {
        const initialState: State = {
            items:  [{id: '123', title: 'test', isDone: false},
                    {id: '321', title: 'test', isDone: false} 
                    ],
            filter: TodoFilter.All,
        }
        const action = removeTodo('123');
        const result = todosReducer( initialState, action);
        expect(result.items.length).toEqual(1);
        expect(result.items.find(({id}) => id === '123' )).not.toBeDefined();
    })

    it('filterTodo', () => {
        const initialState: State = {
            items: [],
            filter: TodoFilter.All,
        }
        const action = setFilter(TodoFilter.Done);
        const result = todosReducer( initialState, action);
        expect(result.filter).toEqual(TodoFilter.Done);
    })

    it('deleteAllTodo', () => {
        const initialState: State = {
            items:  [{id: '123', title: 'test', isDone: false},
                    {id: '321', title: 'test', isDone: false} 
                    ],
            filter: TodoFilter.All,
        }
        const action = deleteAllTodo();
        const result = todosReducer( initialState, action);
        expect(result.items.length).toEqual(0);
    })

    it('deleteDoneTodo', () => {
        const initialState: State = {
            items: [{id: '123', title: 'test', isDone: false},
                    {id: '321', title: 'test', isDone: true} 
                    ],
            filter: TodoFilter.All,
        }
        const action = deleteDoneTodo();
        const result = todosReducer( initialState, action);
        expect(result.items.length).toEqual(1);
        expect(result.items[0].isDone).toBeFalsy();
    })
})