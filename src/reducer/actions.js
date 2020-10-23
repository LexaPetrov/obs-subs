import {
    FETCH_LINK_DATA
} from './actionType'

export const getLinkData = (link, dispatch, params) => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${link}&key=AIzaSyDnICHbhs5jRfs_pxfWq26ZR9j32iZwedU`)
        .then(res => {
            if (!res.ok) throw Error(res.status)
            return res.json()
        })
        .then((res) => {
            dispatch({ type: FETCH_LINK_DATA, payload: { data: res, newParams: params } })
        }).catch(err => { console.error('getLinkData ERROR - ', err)})
}