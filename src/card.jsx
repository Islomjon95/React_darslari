import React from "react"
import "./card.css"

class Card extends React.Component{
    render(){
            const {src, name} = this.props.data
        return(
            <div className="card">
               <img src={src} alt="apple" />
               <h3>{name}</h3>
            </div>
        )
    }
}

export default Card