import React from "react";
import usePersistedState from "../Components/utils/usePersistedState";

const SUPPORTER_KEY = "SupporterDB";
const getLocalSupporter = () => JSON.parse(localStorage.getItem(SUPPORTER_KEY)) || []
const setLocalSupporter = (value) => localStorage.setItem(SUPPORTER_KEY, JSON.stringify(value))

export const SupporterContext = React.createContext();
export const SupporterStorage = ({children }) => {
  const [supporter, setSupporter] = usePersistedState(SUPPORTER_KEY, []);

 function CreateSupporter(data){
  setSupporter(prev => [...prev, data]) 
 }

 function UpdateSupporter(id, data){
  setSupporter(prev => prev.map((value, index) => {
    return index === id ? data:value;
  }));
 }

 function DeleteSupporter(id){
  setSupporter(prev => prev.filter((value, index) => {
    return index !== id;
  }));
 }

 return(
 <SupporterContext.Provider 
  value={{supporter,
          CreateSupporter, 
          DeleteSupporter, 
          UpdateSupporter}}>
            
  {children}
 </SupporterContext.Provider>
 )
}