import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { COLOR_PRIMARY } from "../utils/constants";
import { getStorageKey } from "../utils/tools";

interface IProps {
    color: string;
    setTheme: SetStateAction<Dispatch<string>>;
}

const COLOR_PICKER_SIZE_PX = 18;

export default function ColorPicker({ color, setTheme } : IProps) {

    return (
        <motion.div whileHover={{ scale: "1.4" }} whileTap={{ scale: "1.4" }} style={{
            backgroundColor: color,
            width: COLOR_PICKER_SIZE_PX,
            height: COLOR_PICKER_SIZE_PX,
            borderRadius: "20%",
            border: "solid 3px " + COLOR_PRIMARY,
            margin: "5px",
            cursor: "pointer"
        }} onTap={() => {
            setTheme(color as any);
            localStorage.setItem(getStorageKey("theme"), color);
        }} />
    );
}