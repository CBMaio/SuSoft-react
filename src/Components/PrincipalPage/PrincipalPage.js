import React, { useState } from 'react';
import styled from 'styled-components';
import PrincipalTitle from './PrincipalTitle';
import { GoCheck } from 'react-icons/go'; 
import { ImHappy } from 'react-icons/im';
import ButtonSusoft from '../Button/ButtonSusoft';


const Phrase = () => {

        return(
            <StyleBox>
                <h2>Te presentamos nuestra página web {<ImHappy/>}</h2>
            </StyleBox>
        );
    
};

const StyleBox = styled.div`{
    height: 40%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #cbd9e1;
    text-transform: uppercase;
    font-style: italic;
}`;


const PrincipalPage = () => {

    const [showPhrase, setShowPhrase] = useState(false);

    const showPhraseFn = () => {     
        showPhrase ? setShowPhrase(false) : setShowPhrase(true);    
    }
        
    return (
        <MainPageSection className="container-fluid position-relative">
            <PositionDiv id="home" ></PositionDiv>
            <MainFlexBox className="d-flex justify-content-center align-items-center">
                <PrincipalTitle />
            </MainFlexBox>
            <ButtonBox className="container d-flex align-items-center justify-content-end">
                <ButtonSusoft 
                        background= '#f9aa33'
                        btnText="SuSoft"
                        arrowIcon = {<GoCheck/>}
                        buttonFunction = {showPhraseFn}
                />
            </ButtonBox>

            {showPhrase ?  < Phrase />  : null }

        </MainPageSection>
        );
    
};

export default PrincipalPage;

const MainPageSection = styled.section`{
    background: linear-gradient(180deg, #E1E2E1 50%, /* #F5F5F6 */ #5f7481 0);
    height: 90vh;
}`;

const MainFlexBox = styled.main`{
    color: #344955;
    height: 50%;
}`;

const ButtonBox = styled.div`{
    position: relative;
    top: -19px;
}`; 

const PositionDiv = styled.div`{
    position: absolute;
    top: -10vh;
}`;
