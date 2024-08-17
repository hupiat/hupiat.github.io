import { Carousel } from "antd";
import React from "react";

interface IProps {
    imagePaths: string[];
    imageAlts: string[]
}

export default function NavFooter({ imagePaths, imageAlts } : IProps) {

    return (    
        <Carousel arrows infinite={false} autoplay>
            {
                imagePaths.map((img, i) => <div key={i}>
                    <img src={img} alt={imageAlts[i]} />
                </div>)
            }
        </Carousel>
      )
}