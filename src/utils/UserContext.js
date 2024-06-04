//this is like global variable and can be accessible from anywhere in our app
import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Default User"
});

export default UserContext;