import React from "react"
import "./App.css"

class App extends React.Component {
    constructor(props) {
        console.log("Constructor")
        super(props)
        this.state = {
            count: 1,
            title: "Salom Dasturchilar",
            inputValue: "",
            checked: false
        }

    }
    render() {
        console.log("render")

        const plus = () => {
            if (this.state.count < 10) {
                this.setState({ count: this.state.count + 1 })
            }

        }

        const minus = () => {
            if (this.state.count > 1) {
                this.setState({ count: this.state.count - 1 })
            }

        }


        const onChanges = (e) => {
            this.setState({ inputValue: e.target.value })

        }

        const onChangeTitle = () => {
            this.setState({ title: this.state.inputValue, inputValue: "" })
        }


        const checkedInput = (e)=>{
            this.setState({checked: e.target.checked})
        }
        return (
            <div className="app">
                {this.state.checked ? <h1>{this.state.title}</h1> : <h1>Salom Dasturchilar</h1>}
                <h1>State = {this.state.count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>

                <br />

                <input value={this.state.inputValue} onChange={onChanges} type="text" />
                <button onClick={onChangeTitle}>Ok</button>

                <br />
                <input onChange={checkedInput} type="checkbox" />
            </div>
        )
    }
}

export default App