import React from "react";
import userdata from "./users"


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Abdulloh",
            surname: "Ergashev",
            data: userdata
        }
    }
    render() {

        const onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }
        // Userdata dan to'g'ridan to'gri kelayotgan ma'lumotlarni filter qiladi. Includes asosida va res o'zgaruvchiga o'zlashtirilib qaytadan data state joylashtiriladi
        const onFilter = (e) => {
            let res = userdata.filter(value => value.name.includes(e.target.value))
            this.setState({ data: res })
        }

        return (
            <div className="user">
                <h1>Name: {this.state.name}</h1>
                <h1>Surname: {this.state.surname}</h1>
                <hr />
                <input name="name" onChange={onChange} placeholder="Name" type="text" />
                <input name="surname" onChange={onChange} placeholder="Surname" type="text" />
                <hr />

                <input onChange={onFilter} type="text" placeholder="search" />
                {/* UserDATA dan kelayotgan ma'lumotlarni map qilish */}
                {this.state.data.map(({ id, name, job }) => {
                    return (
                        <h1 key={id}>
                            {id} {name} {job}
                        </h1>
                    )
                })}

            </div>
        )
    }
}

export default User