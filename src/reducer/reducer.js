import {
    FETCH_DATA
} from './actionType'


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DATA:
            let {data} = action.payload
            return { 
                ...state, 
                loading: "",
                info: {
                    subscriberCount: data.items[0].statistics.subscriberCount,
                    videoCount: data.items[0].statistics.videoCount,
                    viewCount: data.items[0].statistics.viewCount
                },
                params: action.payload.newParams, 
            }
        default:
            return state
    }
} 