const initState = {
    users: [
        { id: 1, name: 'Erik'},
        { id: 2, name: 'Hoi Dan IT'},
        { id: 3, name: 'learn React from HOIDANIT'},

    ],
    post: [],

}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item=> item.id !== action.payload.id)
        return {
            ...state, users
        }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = {
                id,
                name: `user with id: ${id}`
            }
        return {
            ...state, users: [...state.users, user]
        }
    }
    return state
}

export default rootReducer