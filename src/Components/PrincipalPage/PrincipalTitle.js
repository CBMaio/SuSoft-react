import React from 'react';
import styled from 'styled-components';


const PrincipalTitle = () => {

    return(
        <PrincipalTitleStyle className="text-center my-5">Welcome</PrincipalTitleStyle>
    )
};

export default PrincipalTitle;

const PrincipalTitleStyle = styled.h1`{
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: lighter;

    @media (min-width: 768px){
        font-size: 6rem;
        letter-spacing: 2px;
    }
}`
