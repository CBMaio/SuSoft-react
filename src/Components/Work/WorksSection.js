import React from 'react';
import styled from 'styled-components';
import CarouselComponent from './Carousel';
import BoxText from './BoxText';


const WorksSection = () => {
    return (
        <div className="position-relative">
        <PositionDiv id="works" ></PositionDiv>
        <WorksSectionStyle  className="container-fluid">
            <div className="row py-4 mx-auto">
                <BoxText 
                    text="¡Gracias por confiar en nosotros!"
                />
            </div>
            <div className="row">
                <CarouselComponent />
            </div>
        </WorksSectionStyle>
        </div>
    );
};

export default WorksSection;

const WorksSectionStyle = styled.section`{
    background: #E1E2E1;
    height: 90vh;
}`;

const PositionDiv = styled.div`{
    position: absolute;
    top: -10vh;
}`