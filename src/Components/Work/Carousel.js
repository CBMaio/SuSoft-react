import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';

const CarouselComponent = () => {
    
    const business = ["eynes.jpeg", "fbasetv.jpeg", "itelkom.jpeg", "kasan.jpeg", "pevgrow.jpeg", "ubitech.jpeg", "mgi.jpeg"]

    return (
    

       <div className="container d-flex row justify-content-center mx-auto col-12">
            <Carousel indicators={false} prevIcon={false} nextIcon={false}> 
                {
                    business.map((img, index) => {
                        return(
                            <Carousel.Item key={index}>
                            <Cards 
                                cardsImg = {require('../../Images/' + img)}
                            />
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
       </div> 

    );
};

export default CarouselComponent;
