import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Navbar from './components/Navbar';
import { COLOR_BACKGROUND, COLOR_DARK_PRIMARY, COLOR_PRIMARY } from './utils/constants';

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
        Content
      </Content>
    </Layout>
  );
}

export default App;
