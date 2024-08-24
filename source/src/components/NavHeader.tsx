import { Button, Flex } from "antd";
import React from "react";
import { COLOR_DARK_PRIMARY } from "../utils/constants";
import Avatar from "../assets/avatar.png";
import { GithubFilled, LinkedinFilled, MediumCircleFilled } from "@ant-design/icons";
import { redirect } from "../utils/tools";

export default function NavHeader() {
    
    return (
        <Flex style={{
            height: "auto",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            backgroundColor: COLOR_DARK_PRIMARY
        }}>
            <Flex style={{
                flexDirection: "column",
                color: "white",
                backgroundColor: COLOR_DARK_PRIMARY
            }}>
                <h1>Hugo Piat-Lillo</h1>
                <span>26 y.o, <br /> France</span>
                <h3>Professional Software Engineer <br /> (web & mobile)</h3>
                <Flex style={{
                    flexDirection: "row",
                    backgroundColor: COLOR_DARK_PRIMARY
                }}>
                    <Button 
                        type="primary" 
                        shape="circle" 
                        icon={<LinkedinFilled />} 
                        onClick={() => redirect("linkedin.com/in/hupiat")} 
                        style={{ marginRight: "20px" }} />
                    <Button 
                        type="primary" 
                        shape="circle" 
                        icon={<GithubFilled />} 
                        onClick={() => redirect("github.com/hupiat")} 
                        style={{ margin: "0px 20px" }} />
                    <Button 
                        type="primary" 
                        shape="circle"
                        onClick={() => redirect("malt.fr/profile/hugopiat")}
                        icon={<MediumCircleFilled />} 
                        style={{ margin: "0px 20px" }} />
                </Flex>
            </Flex>

            <img src={Avatar} alt="avatar" style={{
                width: "min(30vw, 300px)",
                height: "min(30vw, 300px)",
                // display for mobile devices
                position: "relative",
                top: "100px",
                left: "-25px"
            }} />
        </Flex>
    );
}