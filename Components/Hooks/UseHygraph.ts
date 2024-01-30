import { request } from "graphql-request";
import { HYGRAP_ENDPOINT } from "../../API/Constants";

const UseHygraph = () => {
  const Create = async (GqlString: string) => {
    return await request(HYGRAP_ENDPOINT, GqlString);
  };

  const Read = async ({ GqlString }: { GqlString: string }) => {
    return await request(HYGRAP_ENDPOINT, GqlString, {});
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
