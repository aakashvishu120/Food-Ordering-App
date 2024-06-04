import React from "react";

class UserClass extends React.Component {

    constructor(props)  {
        super(props); 

        this.state = {
            userInfo : {
                name : "dummy",
                location : "default",
                avatar_url : "",

            }
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aakashvishu120");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {
        const {name , location ,avatar_url,login} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : {login}@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;