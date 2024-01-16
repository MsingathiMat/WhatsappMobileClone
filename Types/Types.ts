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

  export {ContactProps}