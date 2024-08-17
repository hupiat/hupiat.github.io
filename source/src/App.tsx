import React from 'react';
import './App.css';
import { Flex, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { COLOR_BACKGROUND, COLOR_DARK_PRIMARY, COLOR_PRIMARY } from './utils/constants';
import LogoUca from "./assets/uca_logo.png";
import LogoDevcsi from "./assets/devcsi_logo.png";
import LogoPolyconseil from "./assets/polyconseil_logo.png";
import LogoCaillot from "./assets/caillot_logo.png";
import LogoBollore from "./assets/bollore_logo.png";
import LogoMinistere from "./assets/ministere_logo.png";
import LogoEcoconseil from "./assets/ecoconseil_logo.png";
import LogoSncf from "./assets/sncf_logo.png";
import LogoSncfReseau from "./assets/sncf_reseau_logo.png";
import AssetCard from './components/AssetCard';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';


function App() {
  return (
    <Layout>
      <Header style={{
        backgroundColor: COLOR_DARK_PRIMARY,
        borderBottom: "solid 5px " + COLOR_PRIMARY,
        height: "450px" 
      }} >
        <NavHeader />
      </Header>
      <Content style={{
        backgroundColor: COLOR_BACKGROUND,
        position: "relative",
        top: "5vh"
      }} >
        <Flex style={{
          flexWrap: "wrap"
        }}>
          <AssetCard
            image={LogoUca}
            imageStyle={{
              maxWidth: "60%",
              maxHeight: "auto"
            }}
            altImage="logo UCA"
            webSiteUri="uca.fr"
          />
          <AssetCard
            image={LogoCaillot}
            altImage="logo Caillot"
            imageStyle={{
              marginLeft: "10px"
            }}
            webSiteUri="caillot.fr"
          />
          <AssetCard
            image={LogoDevcsi}
            altImage="logo DevCSI"
            webSiteUri="devcsi.fr"
          />
          <AssetCard
            image={LogoPolyconseil}
            altImage="logo Polyconseil"
            webSiteUri="polyconseil.fr"
          />
          <AssetCard
            image={LogoDevcsi}
            altImage="logo DevCSI"
            webSiteUri="devcsi.fr"
          />
        </Flex>
      </Content>
      <Footer>
        <NavFooter imagePaths={[
          LogoMinistere, LogoSncfReseau, LogoEcoconseil, LogoBollore, LogoSncf, 
        ]} imageAlts={["logo Ministère de L'écologie, logo SNCF Réseau, logo Ecoconseil Energies, logo Bolloré, logo SNCF"]} />
      </Footer>
    </Layout>
  );
}

export default App;
