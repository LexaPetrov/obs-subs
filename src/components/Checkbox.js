import React from 'react'
import './Checkbox.css'

export default ({ name, value, text, onChange, checked, label, classes = [] }) => {
    return (
        <div style={{ margin: '20px' }}>
            <label className="label">
                <div className={"toggle" + ' ' + classes.join(' ')}>
                    <input className="toggle-state" checked={checked} onChange={onChange} type="checkbox" name={name} value={value} />
                    <div className="toggle-inner">
                        <div className="indicator"></div>
                    </div>
                    <div className="active-bg"></div>
                </div>
                <div className="label-text"
               /*Только для иконки флага */ style={{ display: 'flex' }}><label>{label}</label>
                    {text}
                </div>
            </label>
        </div>
    )
}