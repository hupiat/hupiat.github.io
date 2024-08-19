import { EllipsisOutlined, LinkOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { CSSProperties, useState } from "react";
import { redirect } from "../utils/tools";
import { motion } from "framer-motion";

interface IProps {
    image: string;
    altImage: string;
    imageStyle?: CSSProperties;
    webSiteUri: string;
    description: string;
}

export const CARD_HEIGHT_PX = 225;
export const CARD_WIDTH_PX = 250;

export default function AssetCard({ image, altImage, imageStyle, webSiteUri, description }: IProps) {
    const [flipValue, setFlipValue] = useState<number>(0);

    const isFlipped = () => flipValue === 180;

    const handleDetailsClick = () => {
        setFlipValue(isFlipped() ? 0 : 180);
    }


    return (
        <motion.div 
            animate={{ 
                transform: `rotateY(${flipValue}deg)`,
            }}
        >
            <Card 
                bordered
                hoverable
                onClick={handleDetailsClick}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "25px 50px",
                    backgroundColor: "whitesmoke",
                }}  
                cover={<img src={image} alt={altImage} style={{...imageStyle, display: isFlipped() ? "none" : "flex" }} />}
                styles={{
                    cover: !isFlipped() ? {
                        display: "flex",
                        width: CARD_WIDTH_PX + "px",
                        height: CARD_HEIGHT_PX + "px"
                    } : {}
                }}
                actions={[
                    <LinkOutlined key="goto" onClick={() => redirect(webSiteUri)} />,
                    <EllipsisOutlined key="ellipsis" onClick={handleDetailsClick} />,
                ]}>
                {isFlipped() && <p style={{ 
                        transform: "rotateY(180deg)",                         
                        width: CARD_WIDTH_PX + "px",
                        height: CARD_HEIGHT_PX - 80 + "px" 
                    }}>{description}</p>}
            </Card>
        </motion.div>
    )
}