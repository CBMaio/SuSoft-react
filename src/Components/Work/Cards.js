import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Cards = (props) => {

    return(
        <CardBoxStyle className="col-12 d-flex justify-content-center align-items-center mx-auto">
            <CarrouselImgStyle variant="top" src={props.cardsImg} className="mx-0"/>
        </CardBoxStyle>
    );
};

export default Cards;

const CarrouselImgStyle = styled(Card.Img)`{
    width:200px;
}`;

const CardBoxStyle = styled(Card)`{
    width: 320px;
    height: 50vh;
   /*  background: #F5F5F6; */
   background: white;
}`