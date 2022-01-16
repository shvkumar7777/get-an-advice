import React from 'react'
import './Button.css'

const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-primary', 'btn-outline'];
export const Button = ({ children, type, onClick, buttonSize, buttonStyle }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile' >
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            </button>
        </Link>
    )
}
