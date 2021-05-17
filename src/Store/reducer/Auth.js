const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "Log_In":
        console.log('get the payload',payload
        )
        return { ...state, ...payload }

    default:
        return state
    }
}
