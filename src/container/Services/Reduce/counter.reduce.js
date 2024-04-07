const initialeState = {
    count: 0,
    isEdit: true
}

export const counterReducer = (state = initialeState, action) => {

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }

        case "DECREMENT":
            if (state.count ) {
                return {
                    count: state.count - 1
                }
            } else {
                return {
                    count: 0
                }
            }

            default :
                return state;
        }
}
