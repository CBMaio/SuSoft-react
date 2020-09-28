import React from 'react';
import styled from 'styled-components';
import CarouselComponent from './Carousel';
import BoxText from './BoxText';


const WorksSection = () => {
    return (
        <WorksSectionStyle className="container-fluid">
            <div className="row">
                <CarouselComponent />
            </div>
            <BoxText 
                text="¡Gracias por confiar en nosotros!"
            />
        </WorksSectionStyle>
    );
};

export default WorksSection;

const WorksSectionStyle = styled.section`{
    background: #E1E2E1;
    height: 90vh;
/*     border-top: 2px dashed #F9AA33; */
}` 