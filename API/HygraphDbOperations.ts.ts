import { HygraphDBoperationsProp } from "../Types/Types";


import fetch, { Response } from 'node-fetch';


const HygraphDbOperations =(): HygraphDBoperationsProp => ({
  Create: async (DbString) => {
return {status:200, json:async()=>{message:"FROM HYPEGRAPH"}} as Response
 
  },
  Read: async () => {
    return fetch("")
  },
  Update: async () => {
    return fetch("")
  },
  Delete: async () => {
    return fetch("")
  },
});




export default HygraphDbOperations

