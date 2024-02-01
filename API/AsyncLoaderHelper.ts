

const LoadingCreate = <T>( Ascyncing:Promise<T>,SetIsLoginLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
   
 
    SetIsLoginLoading(true)
console.log('isoading TRUE');
    Ascyncing.then(result=>{

      console.log(result)
        SetIsLoginLoading(false)
        console.log('isoading FALSE');
      
    })

   
    
      }

   export{LoadingCreate}  
     