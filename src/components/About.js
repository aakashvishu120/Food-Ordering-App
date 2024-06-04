import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";    //using hook inside class using usercontext.consumer as component

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <div>
                    loggedInUser : 
                    <UserContext.Consumer>
                        {({loggedInUser})=><span className="font-bold">{loggedInUser}</span>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"aakash (class)"} location={"ghaziabad (class)"} />
            </div>
        )
    }
}

export default About;