import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ButtonSusoft = (props) => {

        const {background, btnText, colorText, className, arrowIcon} = props;

        return (
            <div className={styled.ButtonBox}>
                <ButtonStyle 
                className = {className}
                    style = {{
                        background: `${background}`,
                        color: `${colorText}`
                    }}
                >
                   {btnText} {arrowIcon}
                </ButtonStyle>
            </div>
        );
    
}

export default ButtonSusoft;



const ButtonStyle = styled(Button)`{
    font-size: 18px;
    border: none;
    outline: none;
    color: #000000;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: none;
        box-shadow: 0 0 2px #000;
        color: black;   
    }
}`;