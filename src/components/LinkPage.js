import React, { useState, useEffect } from 'react';
import '../index.css'

export default props => {
    const link = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    const params = window.location.search.split('&')
    let sign = 'https://subsobs.xyz'
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
            views: false,
            transparent: '1',
            lang: 'ru'
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

    function fetchData() {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${state.link}&key=AIzaSyDnICHbhs5jRfs_pxfWq26ZR9j32iZwedU`)
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
            }).catch(err => {})
    }

    useEffect(() => {
        fetchData()
        setInterval(() => {
            fetchData()
        }, 600000)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const styles = [
        { background: 'rgba(0,0,0,0)' },
        { background: 'rgba(57,57,57,0.5)' },
        { background: 'rgba(57,57,57,1)' }
    ]




    return (
        <div className='wrapper' style={styles[+state.params.transparent - 1]}>
            <div className={`link_theme${state.params.theme}`}>
                {
                    state.params.subs === 'true'
                        ? state.params.goal !== '' && state.params.goal !== undefined ?
                            <label>
                                {state.params.lang === 'ru' ? 'Подписчиков: ' : 'Sub goal: '}{state.info.subscriberCount}  /  {state.params.goal}
                            </label> : <label>{state.params.lang === 'ru' ? 'Подписчиков: ' : 'Subscribers: '} {state.info.subscriberCount} </label>
                        : null
                }
                {
                    state.params.videos === 'true' ? <label> {state.params.lang === 'ru' ? 'Загружено видео: ' : 'Videos amount: '} {state.info.videoCount} </label> : null
                }
                {
                    state.params.views === 'true' ? <label>{state.params.lang === 'ru' ? 'Просмотров всего: ' : 'Views amount: '}  {state.info.viewCount} </label> : null
                }
            </div>
            <div className={`link_theme${state.params.theme} sign`}><label>{sign}</label></div>
        </div>
    )
}