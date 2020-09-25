import React from 'react';
import { ArrowDown } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ButtonSusoft = () => {
    return (
        <ButtonBox className="container d-flex align-items-center justify-content-end">
            <ButtonStyle>
                SuSoft  <ArrowDown/>
            </ButtonStyle>
        </ButtonBox>
    );
};

export default ButtonSusoft;

const ButtonBox = styled.div`{
    position: relative;
    top: -19px;
}`;

const ButtonStyle = styled(Button)`{
    background: #f9aa33;
    border: none;
    outline: none;
    color: #000000;
    width: 100px;
    transition: all .2s ease-in-out;

    &:hover {
        border: none;
        background: #f9aa33;
        box-shadow: 0 0 2px #000;
        color: black;   
    }
}`