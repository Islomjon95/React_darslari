import './App.css';
import React from 'react'

export default class App extends React.Component{
  render(){
    console.log(this.props.children.props.children)
    // const {ism, yoshi} = this.props
    return(
      <div className='parrent'>
        {this.props.children.props.children}
      </div>
    )
  }

}

