import {tasksReducer, State} from './tasksReducer'
import {addTodo,
     toggleTodo,
     editTodo,
     TaskFilter,
     removeTodo,
     filterTodo,
     deleteDoneTodo,
     deleteAllTodo} from 'store/actions'

describe ('tasksReducer', () => {

    it('Add todo', () => {
        const initialState: State = {
            items: [],
            filter: TaskFilter.ALL,
        }
        const action = addTodo('added todo');
        const result = tasksReducer( initialState, action)
        expect(result !== initialState).toBeTruthy();
        expect(result.items.length).toEqual(1); 
        expect(result.items[0]).toEqual(action.payload); 
    })
    
    it('toggleTodo', () => {
        const initialState: State = {
            items: [{id: '111', title: 'title test', isDone: false},
                     {id: '222', title: 'title test', isDone: false} 
                   ],
            filter: TaskFilter.ALL,
        }
        const action = toggleTodo('111');
        const result1 = tasksReducer( initialState, action);
        expect(result1.items[0].isDone).toBeTruthy(); 
        expect(result1.items[1].isDone).toBeFalsy(); 
        const result2 = tasksReducer( result1, action);
        expect(result2.items[0].isDone).toBeFalsy();
    })

    it('editTodo', () => {
        const initialState: State = {
            items: [{id: '111', title: 'title test', isDone: false},
                     {id: '222', title: 'title test', isDone: false} 
                   ],
            filter: TaskFilter.ALL,
        }
        const action = editTodo('111', 'updated title');
        const result1 = tasksReducer( initialState, action);
        expect(result1.items[0].title).toEqual('updated title'); 
    })

    it('removeTodo', () => {
        const initialState: State = {
            items: [{id: '111', title: 'title test', isDone: false},
                     {id: '222', title: 'title test', isDone: false} 
                   ],
            filter: TaskFilter.ALL,
        }
        const action = removeTodo('111');
        const result = tasksReducer( initialState, action);
        expect(result.items.length).toEqual(1);
        // expect(result.items[0] !== initialState.items[0]).toBeTruthy(); 
        expect(result.items.find(({id}) => id === '111' )).not.toBeDefined();
    })

    it('filterTodo', () => {
        const initialState: State = {
            items: [],
            filter: TaskFilter.ALL,
        }
        const action = filterTodo(TaskFilter.DONE);
        const result = tasksReducer( initialState, action);
        expect(result.filter).toEqual(TaskFilter.DONE);
    })

    it('deleteAllTodo', () => {
        const initialState: State = {
            items: [{id: '111', title: 'title test', isDone: false},
                    {id: '222', title: 'title test', isDone: false} 
                   ],
            filter: TaskFilter.ALL,
        }
        const action = deleteAllTodo();
        const result = tasksReducer( initialState, action);
        expect(result.items.length).toEqual(0);
    })

    it('deleteDoneTodo', () => {
        const initialState: State = {
            items: [{id: '111', title: 'title test', isDone: true},
                    {id: '222', title: 'title test', isDone: true},
                    {id: '333', title: 'title test', isDone: false}  
                   ],
            filter: TaskFilter.ALL,
        }
        const action = deleteDoneTodo();
        const result = tasksReducer( initialState, action);
        expect(result.items.length).toEqual(1);
        expect(result.items[0].isDone).toBeFalsy();
    })

    it('no action', () => {
        const initialState: State = {
            items: [],
            filter: TaskFilter.ALL,
        }
        expect(tasksReducer( initialState, {action: "test"} ) === initialState).toBeTruthy();
    })

    it('no state', () => {
        const initialState: State = {
            items: [],
            filter: TaskFilter.ALL,
        }
        const result = tasksReducer( undefined, {action: "test"} );
        expect(result).toEqual( {
            items: [],
            filter: TaskFilter.ALL
        });
    })
})


