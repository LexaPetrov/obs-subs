import React, { useState, useEffect } from 'react';
import '../index.css'

export default props => {
    const link = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    const params = window.location.search.split('&')
    params[0] = params[0].split('?')[1]
    const [state, setState] = useState({
        link,
        info: {
            subscriberCount: '',
            videoCount: '',
            viewCount: ''
        },
        params: {
            theme: '',
            goal: '',
            videos: false,
            subs: false,
            views: false
        }
    })

    let keys = []
    let vals = []

    params.map(p => {
        let newParam = (p.split('='))
        if (newParam[0] !== '' || newParam[1] !== undefined) {
            keys.push(newParam[0])
            vals.push(newParam[1])
        }

        return 0
    })

    let newParams = Object.assign(...keys.map((n, i) => ({ [n]: vals[i] })))


    useEffect(() => {
        setInterval(() => {
            fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${state.link}&key=AIzaSyBj811HF4_j0-j_Q-NSvu0zA90Gipz4aNg`)
                .then(res => {
                    return res.json()
                })
                .then((res) => {
                    if (res.items.length !== 0) {
                        setState({
                            ...state,
                            info: {
                                subscriberCount: res.items[0].statistics.subscriberCount,
                                videoCount: res.items[0].statistics.videoCount,
                                viewCount: res.items[0].statistics.viewCount
                            },
                            params: newParams
                        })
                    }
                })
        }, 300000)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    console.log(state.params);

    return (
        <div className='wrapper'>
            <div className={`link_theme${state.params.theme}`}>
                {
                    state.params.subs === 'true'
                        ? state.params.goal !== '' && state.params.goal !== undefined ?
                            <label>Подписчиков: {state.info.subscriberCount}  /  {state.params.goal} </label> : <label>Подписчиков: {state.info.subscriberCount} </label>
                        : null
                }
                {
                    state.params.videos === 'true' ? <label>Загружено видео: {state.info.videoCount} </label> : null
                }
                {
                    state.params.views === 'true' ? <label>Просмотров всего: {state.info.viewCount} </label> : null
                }
            </div>
        </div>
    )
}