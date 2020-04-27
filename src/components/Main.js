import React, { useState } from 'react';
import Checkbox from './Checkbox'

import '../index.css'

export default props => {
    const loc = window.location.origin
    const [state, setState] = useState({
        loc,
        link: '',
        params: {
            theme: '1',
            goal: '',
            videos: false,
            subs: true,
            views: false,
            transparent: '1',
            lang: 'ru'

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
            if (!channel.includes('youtube.com')) {
                channel = 'https://www.youtube.com/channel/' + channel
            }
            channel = channel.split('/')[4].split('?')[0]
        }

        setState({
            ...state,
            res: `${state.loc}${process.env.PUBLIC_URL}/${channel}?${params}`,
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

    function copyToClipBoard() {
        const textField = document.createElement('textarea');
        textField.innerText = state.res;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    }


    return (
        <div className='wrapper'>
            <h2>
                1. Вставь ссылку на канал в формате https://www.youtube.com/channel/ID_канала <br />
                Или вставь ID канала, узнать его можешь по этой ссылке: <a href='https://www.youtube.com/account_advanced'>https://youtube.com/account_advanced</a>
            </h2>
            <div className='inputContainer'>
                <form onSubmit={(event) => { event.preventDefault() }}>
                    <input type='text' placeholder='Ссылка или ID канала' required value={state.link} name='link' onChange={handleChange} />
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
                            text='Показывать число загруженных видео'
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
                        <Checkbox
                        name='transparent'
                            onChange={() => setState({
                                ...state,
                                params: {
                                    ...state.params,
                                    transparent: '1'
                                }
                            })}
                            checked={state.params.transparent === '1'}
                            text='Прозрачный фон'
                            value='1'
                        />
                        <Checkbox
                        name='transparent'
                            onChange={() => setState({
                                ...state,
                                params: {
                                    ...state.params,
                                    transparent: '2'
                                }
                            })}
                            checked={state.params.transparent === '2'}
                            text='Полупрозрачный тёмный фон'
                            value='2'
                        />
                        <Checkbox
                        name='transparent'
                            onChange={() => setState({
                                ...state,
                                params: {
                                    ...state.params,
                                    transparent: '3'
                                }
                            })}
                            checked={state.params.transparent === '3'}
                            text='Тёмный непрозрачный фон'
                            value='3'
                        />
                        <Checkbox
                        name='lang'
                            onChange={() => setState({
                                ...state,
                                params: {
                                    ...state.params,
                                    lang: state.params.lang === 'ru' ? 'eng' : 'ru'
                                }
                            })}
                            checked={state.params.lang === 'eng'}
                            text='🇺🇸english'
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
                            state.clicked && state.link !== '' ? <button className='go' onClick={copyToClipBoard}>Скопировать в буфер обмена</button> : null
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