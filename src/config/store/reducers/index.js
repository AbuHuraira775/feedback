import data from '../../../data/data.json'
const reduxState = data
const reducer = (state = reduxState, action) => {
    console.log('action : ', action)
    switch (action.type) {
        case 'add product':
            // return [...state, { ...action.data }]
            // return [...state,{...action.data}]
            // return [...state,...action.data]

            return [...state,{...action.data}]

    }

    return state
}

export default reducer;