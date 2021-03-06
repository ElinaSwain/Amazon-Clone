import React,{createContext,useContext,useReducer} from "react";

//creates the data layer
export const StateContext =createContext();

//Wrap the app and provide the data layer to every component in our app
export const StateProvider= ({reducer,initialState,children}) => (
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>
);

//pull information from data layer
export const useStateValue = () => useContext(StateContext);