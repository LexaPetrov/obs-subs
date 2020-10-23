import {
    FETCH_LINK_DATA
} from './actionType'


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LINK_DATA:
            let {data} = action.payload
            return { 
                ...state, 
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