type DataBaseOperationProp<T>={

    Create: (DataToSave: string | T) => Promise<void>;
    Read: (QueryString: string) => Promise<void>;
    Update: (Id: string, Data: T) => Promise<void>;
    Delete: (Id: string) => Promise<void>;
  }



const HygraphOperations= <T>()=>{


    const HygraphCreate= async(DataToSave:T)=>{}

const HygraphRead= async()=>{}


const HygraphUpdate= async()=>{}


const Hygraph= async()=>{}

const OPERATION ={
  Create: HygraphCreate,
  Read: HygraphRead,
  Update:HygraphUpdate,
  Delete: Hygraph
}

return OPERATION

}