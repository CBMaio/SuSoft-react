import React from 'react';
import FormContact from './FormContact';
import BoxText from '../Work/BoxText';
import ButtonSusoft from '../Button/ButtonSusoft';
import styled from 'styled-components';

const ContactSection = () => {
    return (
        <section className="container-fluid py-3">
            <BoxText 
                text= '¡Tu opinión nos interesa, contáctanos!'
            />
            <BoxFontStyle className="container d-flex align-items-center justify-content-center">
                <ButtonSusoft
                    btnText= 'Formulario de Contacto'
                />
            </BoxFontStyle>
            <FormContact />
        </section>
    );
};

export default ContactSection;

const BoxFontStyle = styled.div`{
    font-size: 20px;
}`