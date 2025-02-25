import React, { useCallback, useState } from "react";
import { Flex, FloatButton, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import {
  COLOR_BACKGROUND,
  COLOR_DARK_PRIMARY,
  COLOR_PRIMARY,
  DESC_CAILLOT,
  DESC_DEVCSI,
  DESC_DEVCSI_2,
  DESC_MCVAIC,
  DESC_NELIXAIR,
  DESC_POLYCONSEIL,
  DESC_UCA,
  DESC_INSOLVO,
} from "./utils/constants";
import LogoNelixair from "./assets/nelixair_logo.png";
import LogoUca from "./assets/uca_logo.png";
import LogoDevcsi from "./assets/devcsi_logo.png";
import LogoMCVAIC from "./assets/MCVAIC_logo.png";
import LogoPolyconseil from "./assets/polyconseil_logo.png";
import LogoCaillot from "./assets/caillot_logo.png";
import LogoInsolvo from "./assets/insolvo_logo.png";
import LogoBollore from "./assets/bollore_logo.png";
import LogoMinistere from "./assets/ministere_logo.png";
import LogoEcoconseil from "./assets/ecoconseil_logo.png";
import LogoSncf from "./assets/sncf_logo.png";
import LogoSncfReseau from "./assets/sncf_reseau_logo.png";
import LogoLufthansaSystems from "./assets/lufthansa_systems_logo.png";
import AssetCard from "./components/AssetCard";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import NavFloatButton from "./components/NavFloatButton";
import { getStorageKey } from "./utils/tools";

// should be placed right in the same order than components renders
// to make the feature works
const SEARCH_INDEXED_DESCRIPTIONS = [
  DESC_UCA,
  DESC_CAILLOT,
  DESC_DEVCSI,
  DESC_POLYCONSEIL,
  DESC_MCVAIC,
  DESC_DEVCSI_2,
  DESC_NELIXAIR,
  DESC_INSOLVO,
];

function App() {
  const storageTheme = localStorage.getItem(getStorageKey("theme"));

  const [theme, setTheme] = useState<string>(
    storageTheme ?? COLOR_DARK_PRIMARY
  );
  const [triggeredBySearch, setTriggeredBySearch] = useState<Set<number>>(
    new Set()
  );

  const handleSearch = useCallback((query: string) => {
    setTriggeredBySearch((triggeredBySearch) => {
      triggeredBySearch.clear();
      for (let i = 0; i < SEARCH_INDEXED_DESCRIPTIONS.length; i++) {
        const words = SEARCH_INDEXED_DESCRIPTIONS[i].split(" ");
        for (const word of words) {
          if (
            !!query &&
            word.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
          ) {
            triggeredBySearch.add(i);
          }
        }
      }
      return new Set<number>([...triggeredBySearch]);
    });
  }, []);

  return (
    <Layout
      style={{
        backgroundColor: COLOR_BACKGROUND,
      }}
    >
      <Header
        style={{
          backgroundColor: theme,
          borderBottom: "solid 5px " + COLOR_PRIMARY,
          height: "600px",
          display: "flex",
        }}
      >
        <NavHeader setTheme={setTheme} onSearch={handleSearch} />
      </Header>
      <Content
        style={{
          backgroundColor: COLOR_BACKGROUND,
          position: "relative",
          top: "5vh",
        }}
      >
        <Flex
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <AssetCard
            image={LogoUca}
            altImage="logo UCA"
            webSiteUri="uca.fr"
            description={DESC_UCA}
            forceFlip={triggeredBySearch.has(0)}
          />
          <AssetCard
            image={LogoCaillot}
            altImage="logo Caillot"
            imageStyle={{
              marginLeft: "10px",
            }}
            webSiteUri="caillot.fr"
            description={DESC_CAILLOT}
            forceFlip={triggeredBySearch.has(1)}
          />
          <AssetCard
            image={LogoDevcsi}
            altImage="logo DevCSI"
            webSiteUri="devcsi.fr"
            description={DESC_DEVCSI}
            forceFlip={triggeredBySearch.has(2)}
          />
          <AssetCard
            image={LogoPolyconseil}
            altImage="logo Polyconseil"
            webSiteUri="polyconseil.fr"
            description={DESC_POLYCONSEIL}
            forceFlip={triggeredBySearch.has(3)}
          />
          <AssetCard
            image={LogoMCVAIC}
            altImage="logo MCVAIC"
            webSiteUri="moncommerce-centreville.com"
            description={DESC_MCVAIC}
            forceFlip={triggeredBySearch.has(4)}
          />
          <AssetCard
            image={LogoDevcsi}
            altImage="logo DevCSI"
            webSiteUri="devcsi.fr"
            description={DESC_DEVCSI_2}
            forceFlip={triggeredBySearch.has(5)}
          />
          <AssetCard
            image={LogoNelixair}
            altImage="logo NELIXAIR Association"
            webSiteUri="association.nelixair.com"
            description={DESC_NELIXAIR}
            forceFlip={triggeredBySearch.has(6)}
          />
          <AssetCard
            image={LogoInsolvo}
            altImage="logo Insolvo"
            webSiteUri="insolvo.com"
            description={DESC_INSOLVO}
            forceFlip={triggeredBySearch.has(7)}
          />
        </Flex>
        <NavFloatButton />
        <FloatButton.BackTop
          type="primary"
          style={{
            position: "fixed",
            // should stay values of antd
            left: "24px",
            bottom: "48px",
          }}
        />
      </Content>
      <Footer
        style={{
          backgroundColor: COLOR_BACKGROUND,
        }}
      >
        <NavFooter
          imagePaths={[
            LogoMinistere,
            LogoLufthansaSystems,
            LogoSncfReseau,
            LogoEcoconseil,
            LogoBollore,
            LogoSncf,
          ]}
          imageAlts={[
            "logo Ministère de L'écologie",
            "logo Lufthansa Systems",
            "logo SNCF Réseau",
            "logo Ecoconseil Energies",
            "logo Bolloré",
            "logo SNCF",
          ]}
        />
      </Footer>
    </Layout>
  );
}

export default App;
