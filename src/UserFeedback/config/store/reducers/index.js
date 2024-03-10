const reduxState = [
    {
        name: "Abu Huraira",
        description : "This is the best Website Developer that I ever met.",
        date : '12/03/2024'
    },
    {
        name: "Abu Huraira",
        description : "This is the best Website Developer that I ever met.",
        date : '12/01/2024'
    }

]

const reducer = (state = reduxState , action)=>{

    if(action.type == 'add-feedback'){
        return [...state,{...action.data}]
    }

    return state
}

export default reducer;