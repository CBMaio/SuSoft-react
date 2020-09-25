import React from 'react';
import styled from 'styled-components';
import PrincipalTitle from './PrincipalTitle';
import ButtonSusoft from '../Button/ButtonSusoft';

const PrincipalPage = () => {
    return (
        <MainPageSection className="container">
            <MainFlexBox className="d-flex justify-content-center align-items-center">
                <PrincipalTitle />
            </MainFlexBox>
            <div>
                <ButtonSusoft />
            </div>
        </MainPageSection>
    );
};

export default PrincipalPage;

const MainPageSection = styled.section`{
    background: linear-gradient(180deg, #E1E2E1 50%, #F5F5F6 0);
    height: 90vh;
}`;

const MainFlexBox = styled.main`{
    color: #344955;
    height: 50%;
}`;



