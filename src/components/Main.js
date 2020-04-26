import React, { useState } from 'react';
import Checkbox from './Checkbox'

import '../index.css'

export default props => {
    //https://www.youtube.com/channel/UC4-phUrGgm63fZ9qZ1GOxBQ?view_as=subscriber
    const loc = window.location.origin
    const [state, setState] = useState({
        loc,
        link: '',
        // link: 'https://www.youtube.com/channel/UC4-phUrGgm63fZ9qZ1GOxBQ?view_as=subscriber',
        params: {
            theme: '1',
            goal: '',
            videos: false,
            subs: true,
            views: false
        },
        res: '',
        clicked: false,
        checked: false
    })

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function buttonClick() {
        let params = ''
        Object.keys(state.params).map(p => {
            if (state.params[p] !== '') {
                params += `${p}=${state.params[p]}&`
            }
            return 0
        })
        let channel
        if (state.link !== '') {
            channel = decodeURI(state.link)
            channel = channel.split('/')[4].split('?')[0]
        }

        setState({
            ...state,
            res: `${state.loc}/${channel}?${params}`,
            clicked: true
        })
    }


    function handleParamsChange(e) {
        setState({
            ...state,
            params: {
                ...state.params,
                [e.target.name]: e.target.value.trim()
            }
        })
    }


    return (
        <div className='wrapper'>
            <div className='header'>
                <h2>1. Вставь ссылку на канал в формате https://www.youtube.com/channel/[ID канала]</h2>
            </div>
            <div className='inputContainer'>
                <form onSubmit={(event) => { event.preventDefault() }}>
                    <input type='text' placeholder='Вставь ссылку' required value={state.link} name='link' onChange={handleChange} />
                    <div className='tools'>
                        <div>
                            <Checkbox
                                name='checked'
                                onChange={() => setState({
                                    ...state,
                                    checked: !state.checked
                                })}
                                checked={state.checked}
                                text='Добавить цель кол-ва подписчиков'
                            />
                            <div>
                                {
                                    state.checked ? <input
                                        type='number'
                                        value={state.params.goal}
                                        name='goal'
                                        placeholder='Введи число'
                                        onChange={handleParamsChange}
                                    /> : null
                                }
                            </div>

                        </div>
                        <Checkbox
                            onChange={() => setState({
                                ...state,
                                params: {
                                    ...state.params,
                                    subs: !state.params.subs
                                }
                            })}
                            checked={state.params.subs}
                            text='Показывать число подписчиков'
                        />
                        <Checkbox
                            onChange={() => setState({
                                ...state,
                                params: {
                                    ...state.params,
                                    videos: !state.params.videos
                                }
                            })}
                            checked={state.params.videos}
                            text='Показывать чисто загруженных видео'
                        />
                        <Checkbox
                            onChange={() => setState({
                                ...state,
                                params: {
                                    ...state.params,
                                    views: !state.params.views
                                }
                            })}
                            checked={state.params.views}
                            text='Показывать число просмотров'
                        />
                    </div>
                    <h2>2. Выбери тему для своего счётчика</h2>
                    <div className='themes'>
                        <div className='themeItem'>
                            <label htmlFor='theme1'>
                                <input onClick={() => {
                                    setState({
                                        ...state,
                                        params: {
                                            ...state.params,
                                            theme: '1'
                                        }
                                    })
                                }} type="radio" name="theme" id='theme1' value="1" />
                                <img alt='' src='theme1.png' />
                            </label>
                        </div>
                        <div className='themeItem'>
                            <label htmlFor='theme2'>
                                <input onClick={() => {
                                    setState({
                                        ...state,
                                        params: {
                                            ...state.params,
                                            theme: '2'
                                        }
                                    })
                                }} type="radio" id='theme2' name="theme" value="2" />
                                <img alt='' src='theme2.png' />
                            </label>
                        </div>
                        <div className='themeItem'>
                            <label htmlFor='theme3'>
                                <input onClick={() => {
                                    setState({
                                        ...state,
                                        params: {
                                            ...state.params,
                                            theme: '3'
                                        }
                                    })
                                }} type="radio" name="theme" id='theme3' value="3" />
                                <img alt='' src='theme3.png' />
                            </label>
                        </div>
                    </div>
                    <button type='submit' className='go' onClick={buttonClick}>
                        3. Получи ссылку для OBS 
                    </button>
                    <div>
                        {
                            state.clicked && state.link !== '' ? <input
                                type='text'
                                value={state.res}
                                name='res'
                                onChange={handleChange}
                            /> : null
                        }
                        {
                            state.clicked && state.link !== '' ?
                                <h2>4. Вставь полученную ссылку в CLR браузер OBS</h2> : null
                        }
                    </div>
                </form>

            </div>
        </div>
    )
}