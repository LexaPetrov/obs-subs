import React from 'react'
import '../index.css'

export default ({ name, value, text, onChange, checked }) => {

    return (
        <div style={{margin: '20px'}}>
            <label className="label">
                <div className="toggle">
                    <input className="toggle-state" checked={checked} onChange={onChange} type="checkbox" name={name} value={value} />
                    <div className="toggle-inner">
                        <div className="indicator"></div>
                    </div>
                    <div className="active-bg"></div>
                </div>
                <div className="label-text">{text}</div>
            </label>
        </div>
    )
}