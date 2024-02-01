import { request } from "graphql-request";
import { HYGRAP_ENDPOINT } from "../../API/Constants";

const UseHygraph = () => {
  const Create = async <T>(GqlString: string) => {
    const res:T= await request(HYGRAP_ENDPOINT, GqlString);
    return res;
  };

  const Read = async <T>(GqlString: string) => {
    const res= await request<T>(HYGRAP_ENDPOINT, GqlString);
    return res;
  };


  const Update = async (GqlString: string) => {
    return await request(HYGRAP_ENDPOINT, GqlString);
  };

  const Delete = async (GqlString: string) => {
    return await request(HYGRAP_ENDPOINT, GqlString);
  };

  return { Read, Create ,Update,Delete};
};

export default UseHygraph;
