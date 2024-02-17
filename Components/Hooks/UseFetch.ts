import axios from "axios";

const UseFetch = () => {
    
  const Read = async <T>(EndPoint: string): Promise<T> => {
    const result = fetch(EndPoint);

    const Data = (await result).json() as T;

    return Data;
  };


  type DataToSave = { [key: string]: any};

  const Create = async <T>(EndPoint: string, DataToSave?:DataToSave): Promise<T> => {
    

    let result = null


        result = await axios.post(EndPoint,DataToSave);
    result=fetch(EndPoint, {
  method: 'POST',
  body: JSON.stringify(DataToSave),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  if (DataToSave){
 
    // result = await axios.post(EndPoint,DataToSave);
//     result=fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
     

  }else{

    // alert("Here i am")
    // result = fetch(EndPoint);

  }


   

    const Data = (await result).json() as T;

    return Data;
  };



  const Update = async <T>(EndPoint: string): Promise<T> => {
    const result = fetch(EndPoint);

    const Data = (await result).json() as T;

    return Data;
  };

  const Delete = async <T>(EndPoint: string): Promise<T> => {
    const result = fetch(EndPoint);

    const Data = (await result).json() as T;

    return Data;
  };

  return { Read, Create, Update, Delete };
};

export default UseFetch;
