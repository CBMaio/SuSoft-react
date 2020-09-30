import React from 'react';
import styled from 'styled-components';
import PrincipalTitle from './PrincipalTitle';
import { ArrowDown } from 'react-bootstrap-icons';
import ButtonSusoft from '../Button/ButtonSusoft';

const PrincipalPage = () => {
    return (
        <MainPageSection className="container-fluid">
            <MainFlexBox className="d-flex justify-content-center align-items-center">
                <PrincipalTitle />
            </MainFlexBox>
            <ButtonBox className="container d-flex align-items-center justify-content-end">
                <ButtonSusoft 
                    background= '#f9aa33'
                    btnText="SuSoft"
                    arrowIcon = {<ArrowDown/>}
                />
            </ButtonBox>
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

