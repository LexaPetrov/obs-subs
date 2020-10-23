import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox'

import '../css/index.css'

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

    useEffect(() => {
        if (state.clicked === true) {
            buttonClick()
        }
    }, [state.params]) // eslint-disable-line react-hooks/exhaustive-deps


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

    let lang = state.params.lang

    return (
        
        <div className='wrapper'>
            <div className="language">
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
                    text='switch to english'
                    label={<label className='flag_icon'></label>}
                />

                <Checkbox
                    name='theme'
                    onChange={() => {
                        if (window.localStorage.getItem('theme') === 'dark') {
                            window.localStorage.setItem('theme', 'light')
                        } else {
                            window.localStorage.setItem('theme', 'dark')
                            // const style = document.createElement("style");
                            // document.head.appendChild(style);
                            // style.innerHTML = require('../dark.css');
                        }
                        window.location.reload()
                    }}
                    checked={window.localStorage.getItem('theme') === 'dark'}
                    text={lang === 'ru' ? '🌙 тёмная тема' : '🌙 darkmode'}
                />

            </div>
            {
                lang === 'ru' ? <h2>
                    1. Вставь ссылку на канал в формате https://www.youtube.com/channel/ID_канала <br />
                Или вставь ID канала, узнать его можешь по этой ссылке: <a href='https://www.youtube.com/account_advanced'>https://youtube.com/account_advanced</a>
                </h2> : <h2>
                        1. Paste the link to your channel in format https://www.youtube.com/channel/channel_ID <br />
                Or paste channel ID, you can find out it here: <a href='https://www.youtube.com/account_advanced'>https://youtube.com/account_advanced</a>
                    </h2>
            }
            <div className='inputContainer'>
                <form onSubmit={(event) => { event.preventDefault() }}>
                    <input type='text' placeholder={lang === 'ru' ? 'Ссылка или ID канала' : 'Channel link or channel ID'} required value={state.link} name='link' onChange={handleChange} />
                    <div className='tools'>
                        <div>
                            <Checkbox
                                name='checked'
                                onChange={() => setState({
                                    ...state,
                                    checked: !state.checked
                                })}
                                checked={state.checked}
                                text={lang === 'ru' ? 'Добавить цель кол-ва подписчиков' : 'Add sub goal'}
                            />
                            <div>
                                {
                                    state.checked ? <input
                                        type='number'
                                        value={state.params.goal}
                                        name='goal'
                                        placeholder={lang === 'ru' ? 'Введи число' : 'Enter goal number'}
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
                            text={lang === 'ru' ? 'Показывать число подписчиков' : 'Show subscribers count'}
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
                            text={lang === 'ru' ? 'Показывать число загруженных видео' : 'Show uploaded videos count'}
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
                            text={lang === 'ru' ? 'Показывать число просмотров' : 'Show views amount'}
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
                            text={lang === 'ru' ? 'Прозрачный фон' : 'Transparent background'}
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
                            text={lang === 'ru' ? 'Полупрозрачный тёмный фон' : '50% Transparent dark background'}
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
                            text={lang === 'ru' ? 'Тёмный непрозрачный фон' : 'Non-transparent dark background'}
                            value='3'
                        />

                    </div>
                    {
                        lang === 'ru' ? <h2>2. Выбери тему для своего счётчика</h2> : <h2>2. Choose a theme for the counter</h2>
                    }

                    <div className='themes'>
                        <div className='themeItem'>
                            <label htmlFor='theme1' className="container">
                                <input onClick={() => {
                                    setState({
                                        ...state,
                                        params: {
                                            ...state.params,
                                            theme: '1'
                                        }
                                    })
                                }} type="radio" name="theme" id='theme1' value="1" />
                                <img alt='' src={lang === 'ru' ? 'theme1.png' : 'theme1_eng.png'} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='themeItem'>
                            <label htmlFor='theme2' className="container">
                                <input onClick={() => {
                                    setState({
                                        ...state,
                                        params: {
                                            ...state.params,
                                            theme: '2'
                                        }
                                    })
                                }} type="radio" id='theme2' name="theme" value="2" />
                                <img alt='' src={lang === 'ru' ? 'theme2.png' : 'theme2_eng.png'} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='themeItem'>
                            <label htmlFor='theme3' className="container">
                                <input onClick={() => {
                                    setState({
                                        ...state,
                                        params: {
                                            ...state.params,
                                            theme: '3'
                                        }
                                    })
                                }} type="radio" name="theme" id='theme3' value="3" />
                                <img alt='' src={lang === 'ru' ? 'theme3.png' : 'theme3_eng.png'} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <button type='submit' className='go' onClick={buttonClick}>
                        {lang === 'ru' ? '3. Получи ссылку для OBS' : '3. Get the link to OBS'}
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
                            state.clicked && state.link !== '' ? <button className='go' onClick={copyToClipBoard}>{lang === 'ru' ? 'Скопировать в буфер обмена' : 'Copy link to clipboard'}</button> : null
                        }
                        {
                            state.clicked && state.link !== '' ?
                                <h2>{lang === 'ru' ? '4. Вставь полученную ссылку в CLR браузер OBS' : '4. Paste result link into CLR browser'}</h2> : null
                        }
                    </div>
                </form>

            </div>
            <div className='downloads'>
                <a className='downloads__link downloads__link__windows' download href='https://github.com/LexaPetrov/obs-subs/releases/download/1.0.0/windows-obs-subs.Setup.1.0.0.zip'>{lang === 'ru' ? 'Скачать приложение для Windows' : 'Download desktop app for Windows'}</a>
                <a className='downloads__link downloads__link__macos' download href='https://github.com/LexaPetrov/obs-subs/releases/download/1.0.0/macos-obs-subs.zip'>{lang === 'ru' ? 'Скачать приложение для MacOS' : 'Download desktop app for MacOS'}</a>
                <a className='downloads__link downloads__link__linux' download href='https://github.com/LexaPetrov/obs-subs/releases/download/1.0.0/linux-obs-subs-1.0.0.zip'>{lang === 'ru' ? 'Скачать приложение для Linux' : 'Download desktop app for Linux'}</a>
            </div>
            <div className={`donation`}>
                <a className='donation__link donation__link__1' target='_blank' rel="noopener noreferrer" href='https://www.tinkoff.ru/rm/petrov.aleksey68/IXJ5N7740' alt=''>
                </a>
                <a className='donation__link donation__link__2' target='_blank' rel="noopener noreferrer" href='https://money.yandex.ru/to/41001921826050' alt=''>
                </a>
                <a className='donation__link donation__link__3' target='_blank' rel="noopener noreferrer" href='https://www.donationalerts.com/r/ne_creator' alt=''>
                </a>
            </div>
            <footer>
                <div>
                    <label>made with</label><label className='footer__label1'></label><label>by <a target='_blank' rel="noopener noreferrer" alt='' href='http://lexapetrov.github.io'>petrovdev</a></label>
                </div>
                <div>
                    <a href='https://github.com/lexapetrov/obs-subs/'>github repository</a>
                </div>
            </footer>
        </div>
    )
}