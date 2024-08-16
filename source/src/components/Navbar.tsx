import { Flex } from "antd";
import React from "react";
import { BACKGROUND_COLOR } from "../utils/constants";

export default function Navbar() {
    
    
    return (
        <Flex style={{
            height: "100%",
            backgroundColor: BACKGROUND_COLOR
        }}>
            <h1>Hugo Piat</h1>
        </Flex>
    );
}