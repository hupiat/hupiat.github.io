import { Button, Flex, Layout } from "antd";
import React from "react";
import { COLOR_DARK_PRIMARY } from "../utils/constants";
import Avatar from "../assets/avatar.png";
import { GithubFilled, LinkedinFilled, MediumCircleFilled } from "@ant-design/icons";
import { redirect } from "../utils/tools";

export default function NavHeader() {
    
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
                <h3>Professional Software Engineer (web & mobile)</h3>
                <Layout style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: COLOR_DARK_PRIMARY
                }}>
                    <Button 
                        type="dashed" 
                        shape="circle" 
                        icon={<LinkedinFilled />} 
                        onClick={() => redirect("linkedin.com/in/hupiat")} 
                        style={{ marginRight: "20px" }} />
                    <Button 
                        type="dashed" 
                        shape="circle" 
                        icon={<GithubFilled />} 
                        onClick={() => redirect("github.com/hupiat")} 
                        style={{ margin: "0px 20px" }} />
                    <Button 
                        type="dashed" 
                        shape="circle"
                        onClick={() => redirect("malt.fr/profile/hugopiat")}
                        icon={<MediumCircleFilled />} 
                        style={{ margin: "0px 20px" }} />
                </Layout>
            </Layout>

            <img src={Avatar} alt="avatar" style={{
                width: "min(30vw, 300px)",
                height: "min(30vw, 300px)"
            }} />
        </Flex>
    );
}