import { request } from "graphql-request";
import { HYGRAP_ENDPOINT } from "../../API/Constants";

const UseHygraph = () => {
  const Create = async <T>(GqlString: string): Promise<T> => {
    const res: T = await request(HYGRAP_ENDPOINT, GqlString);
    return res;
  };

  const Read = async <T>(GqlString: string): Promise<T> => {
    const res: T = await request(HYGRAP_ENDPOINT, GqlString);
    return res;
  };
  const Update = async <T>(GqlString: string): Promise<T> => {
    const res: T = await request(HYGRAP_ENDPOINT, GqlString);
    return res;
  };
  const Delete = async <T>(GqlString: string): Promise<T> => {
    const res: T = await request(HYGRAP_ENDPOINT, GqlString);
    return res;
  };

  return { Read, Create, Update, Delete };
};

export default UseHygraph;
