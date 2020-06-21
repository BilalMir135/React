import React from 'react';

//conext is used to pass data to components without props
//and if we want to pass data to a child we don't need to pass it's parent first
//const UserContext = React.createContext();

//we can provide default value to context
//this default value wiil used when there is no userProvider
const UserContext = React.createContext('Man');
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
//this is 2nd method ContextType to use context value
//But can only be used with class component
export default UserContext;
