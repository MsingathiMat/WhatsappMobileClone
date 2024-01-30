type MessageProps = {
    id: number;
    WoIs: string;
    Message: string;
    TimeStamp: string;
    ArivalStatus: string;
    Date: string;
    EmojiResponse: string;
    MessageType: string;
  };
  
  type ContactProps = {
    id: number;
    ImageUrl: string;
    ContactName: string;
    ContactNumber: string;
    HasStatus: boolean;
    Conversation: MessageProps[];
  };

 

  type PosItemProp={
    category: string,
    contacts: {
      contactName:string,
      contactNumber:string,
      id: string
      imageUrl: string,
      lastSeen:string
    },
    message: string
  }


  //This is a INTERFACE for all DATATABASE TYPES (Data Sources),
type DatabaseOperations<T> = {
  Create: (DataToSave: string | T) => Promise<void>;
  Read: (QueryString: string) => Promise<void>;
  Update: (Id: string, Data: T) => Promise<void>;
  Delete: (Id: string) => Promise<void>;
};


  export {ContactProps, 
    PosItemProp,
    DatabaseOperations,
    HygraphDBoperationsProp}

    
interface HygraphDBoperationsProp {
  Create: (GqlString: string) => Promise<unknown>;
  Read: (GqlString: string) => Promise<unknown>;
  Update: (GqlString: string) => Promise<unknown>;
  Delete: (GqlString: string) => Promise<unknown>;
}