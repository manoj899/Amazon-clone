//setup data layer
//we need this to break the basket
//ITS LIke a creating global variable
import React, {createContext, useContext, useReducer} from "react"

//This is DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext)


