import { request, gql } from "graphql-request";

const MASTER_URL ="https://ap-southeast-2.cdn.hygraph.com/content/clrl7cnr105jh01up5wcgj77o/master";

type Contact = {
  createdAt: string;
  id: string;
  imageUrl: string;
  lastSeen: string;
  contactName: string;
  contactNumber: string;
  hasStatus: boolean;
  publishedAt: string;
};

interface ContactProps {
  contacts1: Contact[];
}
const UseHygraph = () => {
  const GqlQuery = async ({
    GqlString,
    SetSongData,
  }: {
    SetSongData: React.Dispatch<React.SetStateAction<Contact[]>>;
    GqlString: string;
  }) => {
    try {
      const results: ContactProps = await request(MASTER_URL, GqlString, {});

      SetSongData(results.contacts1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const GqlQuery1 = async <P> ({
    GqlString
  }: {
    
    GqlString: string;
  }) => {

   
    try {
      const results: P = await request<P>(MASTER_URL, GqlString, {});

    return results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const CreateARecord = async (GqlString: string) => {
    try {
      const results = await request(MASTER_URL, GqlString);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return {
    GqlQuery,
    CreateARecord,GqlQuery1
  };
};

export default UseHygraph;
