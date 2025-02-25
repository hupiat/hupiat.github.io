import { Carousel } from "antd";
import React from "react";
import { COLOR_PRIMARY } from "../utils/constants";

interface IProps {
  imagePaths: string[];
  imageAlts: string[];
}

export default function NavFooter({ imagePaths, imageAlts }: IProps) {
  return (
    <Carousel
      arrows
      swipeToSlide
      style={{
        marginTop: "15vh",
        borderTop: "5px solid " + COLOR_PRIMARY,
        paddingTop: "5vh",
      }}
    >
      {imagePaths.map((img, i) => (
        <div key={i}>
          <img
            src={img}
            alt={imageAlts[i]}
            style={{
              width: "250px",
              margin: "auto",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
