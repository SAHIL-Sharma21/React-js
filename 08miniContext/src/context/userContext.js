//writing our userContext here

import react from 'react';

const UserContext = react.createContext(); // creating context with react.createContext() method and assigning it to UserContext variable.
//(userContext is a provider) the provider will look like this below--->
{/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>   
</UserContext> */}


export default UserContext;