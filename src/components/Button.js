import React from "react";
import {motion} from "framer-motion";

export const Button = ({onClick, text}) => {
    return <motion.button whileTap={{scale: .95, borderRadius: "5px", duration: .5}} onClick={onClick}
                          className={"button"}>{text}</motion.button>
}