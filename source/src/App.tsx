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
    <Layout style={{
      backgroundColor: COLOR_BACKGROUND
    }}>
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
              maxWidth: "52.5%",
              maxHeight: "auto"
            }}
            altImage="logo UCA"
            webSiteUri="uca.fr"
            description="Bachelor universitaire de technologie obtenu avec mention AB, en informatique et en développement d'applications intranet/internet, 2550 heures en tout (programme disponible sur mon linkedin)."
            />
          <AssetCard
            image={LogoCaillot}
            altImage="logo Caillot"
            imageStyle={{
              marginLeft: "10px"
            }}
            webSiteUri="caillot.fr"
            description="Stage universitaire de 4 mois. Développement d'une application Android de gestion des process et d'une plateforme de mise à jour interne."
            />
          <AssetCard
            image={LogoDevcsi}
            altImage="logo DevCSI"
            webSiteUri="devcsi.fr"
            description="Alternance universitaire de 1 an, ainsi que 10 mois de CDI. Recherche et développement en ingénierie logistique (norme S3000L). Application Android de traçabilité RFID des trains."
            />
          <AssetCard
            image={LogoPolyconseil}
            altImage="logo Polyconseil"
            webSiteUri="polyconseil.fr"
            description="8 mois de CDI suite à une coupure sabbatique à Paris. Logiciel de déclarations des émissions polluantes pour le Ministère de l'écologie. Logiciel de gestion des ressources humaines pour le groupe Bolloré."
            />
          <AssetCard
            image={LogoDevcsi}
            altImage="logo DevCSI"
            webSiteUri="devcsi.fr"
            description="2 ans de CDI en assumant une fonction de Tech Lead. Reprise des travaux de R&D. Logiciel de business intelligence pour SNCF Réseau. Logiciel de suivi de relation client pour Ecoconseil énergies."
            />
        </Flex>
      </Content>
      <Footer style={{
        backgroundColor: COLOR_BACKGROUND
      }}>
        <NavFooter imagePaths={[
          LogoMinistere, LogoSncfReseau, LogoEcoconseil, LogoBollore, LogoSncf, 
        ]} imageAlts={["logo Ministère de L'écologie, logo SNCF Réseau, logo Ecoconseil Energies, logo Bolloré, logo SNCF"]} />
      </Footer>
    </Layout>
  );
}

export default App;
