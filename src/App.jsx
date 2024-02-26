import React from "react";
import "./App.css"
import users from "./user"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            job: "",
            user: users,
            search: "id"

        }
    }
    render() {
        const onDelete = (id) => {
            let res = this.state.user.filter(value => {
                return value.id !== id
            })
            this.setState({ user: res })

        }

        const onSearch = (e) => {
            const { value } = e.target
            let res = users.filter(item => {
                return `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
            })
            this.setState({ user: res })
        }

        const onSelect = (e)=>{
            this.setState({search: e.target.value})
        }
        const onChange = (e)=>{
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        const onAdd = ()=>{
            let id = this.state.user[this.state.user.length - 1].id
            let newUser = {
                id: ++id,
                name: this.state.name,
                job: this.state.job
            }
            console.log(newUser)

            this.setState({
                user: [...users, newUser],
                name: "",
                job: "",
            })

        }
        return (
            <div className="container">

                <h1>Name: {this.state.name}</h1>
                <h1>Job: {this.state.job}</h1>

                <input name="name" value={this.state.name} onChange={onChange}  type="text" placeholder="Name" />
                <input name="job" value={this.state.job} onChange={onChange} type="text" placeholder="Job" />
                <button onClick={onAdd}>Add</button>

                <hr />
                <select onChange={onSelect} name="" id="">
                    <option value="id">Id</option>
                    <option value="name">Name</option>
                    <option value="job">Job</option>
                </select>
                <input type="text" onChange={onSearch} placeholder="search" />
                <br />
                <br />

                <table border={1} cellSpacing="0" width="80%" align="center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.length ? (
                                this.state.user.map(({ id, name, job }) => {
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{job}</td>
                                        <td>
                                            <button>
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => onDelete(id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })) : (
                                <tr>
                                    <th colSpan={5}>
                                        <h1>No data</h1>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}

export default App