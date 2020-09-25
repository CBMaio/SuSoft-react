import React from 'react';
import styled from 'styled-components';


const PrincipalTitle = () => {

    return(
        <PrincipalTitleStyle className="text-center my-5 display-4">Welcome</PrincipalTitleStyle>
    )
};

export default PrincipalTitle;

const PrincipalTitleStyle = styled.h1`{
    letter-spacing: 2px;
    text-transform: uppercase;
}`
