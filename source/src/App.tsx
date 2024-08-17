import React from 'react';
import './App.css';
import { Flex, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Navbar from './components/Navbar';
import { COLOR_BACKGROUND, COLOR_DARK_PRIMARY, COLOR_PRIMARY } from './utils/constants';
import LogoUca from "./assets/uca_logo.png";
import LogoDevcsi from "./assets/devcsi_logo.png";
import LogoPolyconseil from "./assets/polyconseil_logo.png";
import LogoCaillot from "./assets/caillot_logo.png";
import AssetCard from './components/AssetCard';


function App() {
  return (
    <Layout>
      <Header style={{
        backgroundColor: COLOR_DARK_PRIMARY,
        borderBottom: "solid 5px " + COLOR_PRIMARY,
        height: "450px" 
      }} >
        <Navbar />
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
    </Layout>
  );
}

export default App;
