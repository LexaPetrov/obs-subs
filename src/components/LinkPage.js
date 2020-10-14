import React, { useEffect, useReducer } from 'react';
import '../css/index.css'
import reducer from '../reducer/reducer';
import { getLinkData } from '../reducer/actions';

export default props => {
    const link = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    const params = window.location.search.split('&')
    let sign = 'https://subsobs.xyz'
    params[0] = params[0].split('?')[1]

    const [state, dispatch] = useReducer(reducer, {
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
        getLinkData(state.link, dispatch, newParams)
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
        <div className='wrapper pt26' style={styles[+state.params.transparent - 1]}>
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