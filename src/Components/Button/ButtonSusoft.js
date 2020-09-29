import React, { Component } from 'react';
import { ArrowDown } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

class ButtonSusoft extends Component {
    render(){
        return (
            <div className={styled.ButtonBox}>
                <ButtonStyle className="btn">
                   {this.props.btnText} <ArrowDown/>
                </ButtonStyle>
            </div>
        );
    }
}

export default ButtonSusoft;



const ButtonStyle = styled(Button)`{
    background: #f9aa33;
    border: none;
    outline: none;
    color: #000000;
    width: ${props => props.width}
    transition: all .2s ease-in-out;

    &:hover {
        border: none;
        background: #f9aa33;
        box-shadow: 0 0 2px #000;
        color: black;   
    }
}`;