import React, {useContext, useEffect} from "react";
import {motion} from "framer-motion"
import {Card} from "./Card";
import {cards} from "./data";
import {Heart} from "./icons";
import {FirebaseContext} from "./context/firebase/firebaseContext";
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
const colors = ["#FF9AA2", "#F8DF81", "#E2F0CB", "#C7CEEA", "#FFFFB5", "#C36F31", "#97C1A9", "#FCB9AA", "#E2F0CB", "#FF9AA2", "#E2F0CB", "#C36F31", "#C7CEEA", "#877111", "#F8DF81", "#E2F0CB", "#97C1A9", "#FCB9AA"]
export const Main = () => {
    //eslint-disable-next-line
    const {loading, balance, getMoney} = useContext(FirebaseContext)
    useEffect(() => {
        getMoney()
        //eslint-disable-next-line
    }, [])
    return <div className={"container"}>
        <div className={"header"}>
            <div className="headerHead">Андрейкины желания</div>
            <motion.div className="headerHead">Баланс: <motion.span layout>{!loading && balance}</motion.span>
                <motion.div variants={iconVar} animate={"animate"}>
                    <Heart fill={"#FF9AA2"}/></motion.div>
            </motion.div>
        </div>
        <div className="cards">
            {cards.map((item, index) => <Card item={item} color={colors[index]} key={item.title}/>)}
        </div>
        <footer>Потом тут что-то появится :)</footer>
    </div>
}