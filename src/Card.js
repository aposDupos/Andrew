import React, {useEffect, useRef} from "react";
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer";

const cardVar = {
    initial: {
        opacity: 0,
        y: 500
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1.5,
            bounce: .3
        }
    }
}
const iconVar = {
    initial: {},
    animate: {
        rotate: ["-10deg", "10deg"],
        transition: {
            rotate: {
                repeat: Infinity,
                repeatType: "mirror",
                type: "spring",
                duration: 2,
            },

        },

    }
}
export const Card= ({item, color}) => {
    const iconRef = useRef(null)
    const controls = useAnimation()
    const [ref, inView] = useInView();
    useEffect(()=>{
        if (inView){
            controls.start("visible")
        }
    },[controls, inView])
    return <motion.div className={"cardContainer"} variants={cardVar}
                       initial={"initial"}
                       animate={controls}
                       ref={ref}
                       // whileInView="visible"
                       // viewport={{once: true, amount: .01}}
                       >
        <motion.div className="cardIconContainer" ref={iconRef}/>
        <motion.div variants={iconVar} animate={"animate"} initial={"initial"} className={"cardIcon"} drag
                    dragConstraints={iconRef}>
            < item.icon fill={color ? color : "black"}/>
        </motion.div>
        <motion.div className={"cardTitle"} >{item.title}</motion.div>
        <motion.div className={"cardCost"}>Стоимость: <span style={{color: color ? color : "black"}}>{item.cost}</span>
        </motion.div>
    </motion.div>
}