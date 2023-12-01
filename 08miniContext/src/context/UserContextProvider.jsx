//This is userContextProvider and it will provide all the component/ fragment /global variable then we can access in all the varibales (this is the main work to use this.)



import React, { useState } from "react";
import UserContext from "./userContext";

//defining the userContextProvider function. This is Method-1
//children is like outlet in react router we get as it as :-- jo bhi prop aa rahe hai children usko as its use krlo. --> children is like our div and all
const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //UserContext.provider we are passing prop as value and in there we are passing values in object which children will  access.
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;








