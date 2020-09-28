import React from 'react';
import NavbarMenu from './Components/NavbarMenu/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import PrincipalPage from './Components/PrincipalPage/PrincipalPage';
import WorksSection from './Components/Work/WorksSection';


function App() {
  return (
    <FontPage>
        <NavbarMenu />
        <PrincipalPage/>
        <WorksSection />
    </FontPage>
  );
}

export default App;

const FontPage = styled.div`{
  font-family: 'Roboto', sans-serif;
}`