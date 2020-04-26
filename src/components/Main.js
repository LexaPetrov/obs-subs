import React, { useState } from 'react';
import Checkbox from './Checkbox'

import '../index.css'

export default props => {
    //https://www.youtube.com/channel/UC4-phUrGgm63fZ9qZ1GOxBQ?view_as=subscriber
    const loc = window.location.origin
    const [state, setState] = useState({
        loc,
        link: 'https://www.youtube.com/c/UC4-phUrGgm63fZ9qZ1GOxBQ',
        // link: 'https://www.youtube.com/channel/UC4-phUrGgm63fZ9qZ1GOxBQ?view_as=subscriber',
        params: {
            theme: '',
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
                <p>Введи ссылку</p>
            </div>
            <div className='inputContainer'>
                <form onSubmit={(event) => { event.preventDefault() }}>
                    <input type='text' placeholder='Вставьте ссылку' required value={state.link} name='link' onChange={handleChange} />
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
                                        placeholder='Введите число'
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
                    <button type='submit' className='go' onClick={buttonClick}>
                        Получить ссылку для OBS
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
                    </div>
                </form>

            </div>
        </div>
    )
}