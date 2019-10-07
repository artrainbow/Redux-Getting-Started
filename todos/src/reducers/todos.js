const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    name: action.name,
                    id: action.id,
                },
            ];
        case 'TOGGLE_TODO':
            return [...state];
        default:
            return [...state];
    }
};

export default todos;