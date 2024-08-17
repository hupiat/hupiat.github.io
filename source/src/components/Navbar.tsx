import { Flex, Layout, Space } from "antd";
import React from "react";
import { COLOR_BACKGROUND, COLOR_DARK_PRIMARY } from "../utils/constants";
import Avatar from "../assets/avatar.png";

export default function Navbar() {
    
    
    return (
        <Flex style={{
            height: "100%",
            backgroundColor: COLOR_DARK_PRIMARY
        }}>
            <Layout style={{
                color: "white",
                backgroundColor: COLOR_DARK_PRIMARY
            }}>
                <h1>Hugo Piat</h1>
                <span>26 y.o</span>
                <h3>Professional Software Engineer</h3>
            </Layout>

            <img src={Avatar} alt="avatar" />
        </Flex>
    );
}