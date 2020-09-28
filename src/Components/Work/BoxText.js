import React from 'react';
import styled from 'styled-components';

const BoxText = (props) => {
    return(
        <TextContainer className="container col-12 col-lg-6 ">
           <TextStyle className="text-center">{props.text}</TextStyle> 
        </TextContainer>
    );
};

export default BoxText;

const TextStyle = styled.h4`{
    color: #344955;
}`

const TextContainer = styled.div`{
/*     border: 2px solid #c17b00; */
    background: #F5F5F6; 
    border-radius: 7px;
    padding: 10px;
}`