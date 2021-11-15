import React from "react";
import {motion} from "framer-motion"
import {Card} from "./Card";
import {cards} from "./data";
import {Heart} from "./icons";
// const mainVar = {}
// const variants = {
//     initial: {
//         y: "50vh",
//         x: "50%",
//         scale: 2
//     },
//     visible: {
//         y: "0vh",
//         x: "0%",
//         scale: 1,
//         transition: {
//             delay: 1,
//             easing: "easeInOut",
//             duration: 2,
//             type: "spring"
//
//         }
//     }
// }
const iconVar = {
    animate: {
        y: [-5, 3],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror"
            },
            type: "spring"
        }
    }
}
const colors = ["#FF9AA2", "#F8DF81","#E2F0CB", "#C7CEEA", "#FFFFB5","#C36F31", "#97C1A9", "#FCB9AA", "#E2F0CB", "#FF9AA2", "#E2F0CB","#C36F31", "#C7CEEA", "#877111","#F8DF81", "#E2F0CB", "#97C1A9", "#FCB9AA"]
export const Main = () => {
    return <div className={"container"}>
        <div className={"header"}>
            <div className="headerHead">Андрейкины желания</div>
            <div className="headerHead">Баланс: 1.000.000 <motion.div variants={iconVar} animate={"animate"}>
                <Heart fill={"#FF9AA2"}/></motion.div></div>
        </div>
        <div className="cards">
            {cards.map((item, index) => <Card item={item} color={colors[index]} key={item.title}/>)}
        </div>
        <footer>Потом тут что-то появится :)</footer>
    </div>
}