import { ReactNode, createContext,useContext, useState } from "react";
import { UserObjectProp } from "../Types/Types";


const AppContext = createContext(null);

const AppProvider =({children}:{children:ReactNode})=>{

const [UserData,SetUserData]= useState<UserObjectProp>(null);

return (


    <AppContext.Provider value={{UserData,SetUserData}}>

{children}
</AppContext.Provider>
)


}

const useAppProvider =()=>{

    const ContextToUse = useContext(AppContext)

if(ContextToUse){

    const {UserData,SetUserData} = useContext(AppContext)
    return {

        UserData,SetUserData
    }
}else{

    console.log('You are using the provider outside the CONTEXT')
}

 

}

export  {useAppProvider, AppProvider};