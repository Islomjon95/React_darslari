import React from "react";
import Card from "./card";
import "./fruits.css"

class Fruits extends React.Component {
    render() {
        const data = [
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST50QQvADid9QT7LfT_SLLpIXxIPrcOG2JUTJnWmAb0tW3Kbj2xKXYn8Kzv_s8T6Euw_c&usqp=CAU",
                name: "Aplle"
            },
            {
                src: "https://target.scene7.com/is/image/Target/GUEST_cf4773e6-afec-4aa1-89e7-74b7dfc09973?wid=488&hei=488&fmt=pjpeg",
                name: "Banana"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3Uw6U9JhZ6Ne0sLmKAVtPP4tX5NbIsqhwzWBC28TrTjWIYprUqbv8q5xTyo7wB1NOzM&usqp=CAU",
                name: "Pineapple"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQme9Bd-leBGTZZr5ZjZ4OIuqJ8ZFPQABUNksXN60DyWa-lxwACIdI2i_69rDwUoMfE-iM&usqp=CAU",
                name: "Grapes"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST50QQvADid9QT7LfT_SLLpIXxIPrcOG2JUTJnWmAb0tW3Kbj2xKXYn8Kzv_s8T6Euw_c&usqp=CAU",
                name: "Aplle"
            },
            {
                src: "https://target.scene7.com/is/image/Target/GUEST_cf4773e6-afec-4aa1-89e7-74b7dfc09973?wid=488&hei=488&fmt=pjpeg",
                name: "Banana"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3Uw6U9JhZ6Ne0sLmKAVtPP4tX5NbIsqhwzWBC28TrTjWIYprUqbv8q5xTyo7wB1NOzM&usqp=CAU",
                name: "Pineapple"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQme9Bd-leBGTZZr5ZjZ4OIuqJ8ZFPQABUNksXN60DyWa-lxwACIdI2i_69rDwUoMfE-iM&usqp=CAU",
                name: "Grapes"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST50QQvADid9QT7LfT_SLLpIXxIPrcOG2JUTJnWmAb0tW3Kbj2xKXYn8Kzv_s8T6Euw_c&usqp=CAU",
                name: "Aplle"
            },
            {
                src: "https://target.scene7.com/is/image/Target/GUEST_cf4773e6-afec-4aa1-89e7-74b7dfc09973?wid=488&hei=488&fmt=pjpeg",
                name: "Banana"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3Uw6U9JhZ6Ne0sLmKAVtPP4tX5NbIsqhwzWBC28TrTjWIYprUqbv8q5xTyo7wB1NOzM&usqp=CAU",
                name: "Pineapple"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQme9Bd-leBGTZZr5ZjZ4OIuqJ8ZFPQABUNksXN60DyWa-lxwACIdI2i_69rDwUoMfE-iM&usqp=CAU",
                name: "Grapes"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST50QQvADid9QT7LfT_SLLpIXxIPrcOG2JUTJnWmAb0tW3Kbj2xKXYn8Kzv_s8T6Euw_c&usqp=CAU",
                name: "Aplle"
            },
            {
                src: "https://target.scene7.com/is/image/Target/GUEST_cf4773e6-afec-4aa1-89e7-74b7dfc09973?wid=488&hei=488&fmt=pjpeg",
                name: "Banana"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3Uw6U9JhZ6Ne0sLmKAVtPP4tX5NbIsqhwzWBC28TrTjWIYprUqbv8q5xTyo7wB1NOzM&usqp=CAU",
                name: "Pineapple"
            },
            {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQme9Bd-leBGTZZr5ZjZ4OIuqJ8ZFPQABUNksXN60DyWa-lxwACIdI2i_69rDwUoMfE-iM&usqp=CAU",
                name: "Grapes"
            }
        ]
        return (
            <div className="wrapper">
               { data.map((value, index)=>{
                return(
                    <Card data={value} key={index}></Card>
                )
               })}
            </div>
        )
    }
}

export default Fruits