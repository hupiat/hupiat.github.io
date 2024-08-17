import { EllipsisOutlined, LinkOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { CSSProperties } from "react";
import { redirect } from "../utils/tools";

interface IProps {
    image: string;
    altImage: string;
    imageStyle?: CSSProperties;
    webSiteUri: string;
}

export default function AssetCard({ image, altImage, imageStyle, webSiteUri }: IProps) {

    const handleDetailsClick = () => {

    }

    return (
        <Card 
            bordered
            hoverable
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "25px 50px"
            }}  
            cover={<img src={image} alt={altImage} style={imageStyle} />} 
            actions={[
                <LinkOutlined key="goto" onClick={() => redirect(webSiteUri)} />,
                <EllipsisOutlined key="ellipsis" onClick={handleDetailsClick} />,
            ]}>

        </Card>
    )
}