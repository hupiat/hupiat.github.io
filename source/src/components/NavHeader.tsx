import { Button, Flex, Input } from "antd";
import React, { Dispatch, SetStateAction, useDeferredValue, useEffect, useState } from "react";
import Avatar from "../assets/avatar.png";
import { GithubFilled, LinkedinFilled, MediumCircleFilled, SearchOutlined } from "@ant-design/icons";
import { redirect } from "../utils/tools";
import ColorPicker from "./ColorPicker";
import { COLOR_DARK_PRIMARY, COLOR_DARK_PRIMARY_2, COLOR_DARK_PRIMARY_3, COLOR_DARK_PRIMARY_4, COLOR_DARK_PRIMARY_5 } from "../utils/constants";

interface IProps {
    setTheme: SetStateAction<Dispatch<string>>;
    onSearch: (query: string) => void;
}

export default function NavHeader({ setTheme, onSearch }: IProps) {
    const [query, setQuery] = useState<string>("");

    const deferredQuery = useDeferredValue(query);

    useEffect(() => {
        onSearch(deferredQuery);
    }, [deferredQuery, onSearch]);
    
    return (
        <Flex style={{
            height: "auto",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
        }}>
            <Flex style={{
                flexDirection: "column",
                color: "white",
            }}>
                <h1>Hugo Piat-Lillo</h1>
                <span>26 y.o, <br /> France</span>
                <h3>Professional Software Engineer <br /> (web & mobile)</h3>
                <Flex style={{
                    flexDirection: "row",
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
                <Input 
                    size="large" 
                    placeholder="rechercher" 
                    prefix={<SearchOutlined />} 
                    value={query} 
                    onChange={e => setQuery(e.target.value)}
                    style={{
                        marginTop: "35px"
                    }} />
            </Flex>

            <Flex style={{
                flexDirection: "column",
                // display for mobile devices
                position: "relative",
                top: "100px",
                left: "-25px",
                width: "min(25vw, 300px)",
            }}>
                <img src={Avatar} alt="avatar" style={{
                    width: "min(25vw, 300px)",
                    height: "min(25vw, 300px)",
                }} />

                <Flex style={{
                    flexWrap: "wrap",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    width: "min(25vw, 300px)",
                    top: "25px"
                }}>
                    <ColorPicker color={COLOR_DARK_PRIMARY} setTheme={setTheme} />
                    <ColorPicker color={COLOR_DARK_PRIMARY_2} setTheme={setTheme} />
                    <ColorPicker color={COLOR_DARK_PRIMARY_3} setTheme={setTheme} />
                    <ColorPicker color={COLOR_DARK_PRIMARY_4} setTheme={setTheme} />
                    <ColorPicker color={COLOR_DARK_PRIMARY_5} setTheme={setTheme} />
                </Flex>
            </Flex>
        </Flex>
    );
}