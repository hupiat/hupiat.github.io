import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Navbar from './components/Navbar';
import { BACKGROUND_COLOR, PRIMARY_COLOR } from './utils/constants';

function App() {
  return (
    <Layout>
      <Header style={{
        backgroundColor: BACKGROUND_COLOR,
        borderBottom: "solid 5px " + PRIMARY_COLOR,
        height: "200px" 
      }} >
        <Navbar />
      </Header>
      <Content style={{
        backgroundColor: BACKGROUND_COLOR,
        position: "relative",
        top: "5vh"
      }} >
        Content
      </Content>
    </Layout>
  );
}

export default App;
