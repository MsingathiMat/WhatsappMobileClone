import { request, gql } from 'graphql-request'


const MASTER_URL ='https://api-ap-southeast-2.hygraph.com/v2/clrl7cnr105jh01up5wcgj77o/master';
const query = gql`
query Contacts1 {
  contacts1 {
    createdAt
    id
    imageUrl
    lastSeen
    mobileNo
    name
    publishedAt
    updatedAt
  }
}
`

const CreateRec = gql`
 mutation CrateRecord {
  createSong(
    data: {artistName: "No header now", description: "Buchule Now to", genre: "Gospel", imageUrl: "https://images.pexels.com/photos/4132776/pexels-photo-4132776.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", songTitle: "Hlalasik"}
  ) {
    id
  }
}
`

type Contact = {
  createdAt:string,
  id: string;
  imageUrl: string;
  lastSeen: string,
  contactName: string;
  contactNumber: string;
  hasStatus: boolean;
  publishedAt:string
};


interface ContactProps {
  contacts1: Contact[];
}
const UseHygraph =()=>{

  const GqlQuery = async ({GqlString,SetSongData}:{SetSongData:React.Dispatch<React.SetStateAction<Contact[]>>,GqlString:string}) => {
    try {


      const results: ContactProps = await request(MASTER_URL, GqlString,
      
       );
   
       console.warn(results)
       SetSongData(results.contacts1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const Mytation = async()=>{

  //  const token ='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDU2NDg5OTksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbHIzMTk5MzRkazM5MDF0NzN0NGg3MzY2L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LWFwLXNvdXRoZWFzdC0yLmh5Z3JhcGguY29tLyIsInN1YiI6IjFiOWM2ZmNkLWYzOWUtNDRlNS1hYTZlLTdhNjg2MTdkMzc5NCIsImp0aSI6ImNscmtiZGl0cDA1Z2IwMTFhOTkxYWR3dHAifQ.SAhk7JRkEqJm8dl83i4pxzJSKvbZiDzwRkvngwPwuNzxvsax8FVfM4y2-7QdqVqgmW8B5A3awGNmMW_wXMa6TjeNN0I3eMFh9ba2ta8Bl-k0nYIDf9NQ6SMOz-VzQO2_nxsm9NNpGKRyj64nhYAOpCjgcBSZMGbC1cIf4OYwLsB_s4duY-w5OqAnkiut98f-XbXuGfyJksRu_zNWQwUA6PxGATlW9bX_ZJFZa5K_7zRuhN1Ey4L4OwztvmMejFY4ZlHziopDCixNBsMct-qokYDzEyqvsNmqILekY3ZqJY8HP7XT9IbN159Tvb1uTnaxd7bRx2lkTzKnEEmSKH6EuIIrx71lC42Bwe5sm1fS3Hew_Vts1Xc5ku2VmZ7cTJAHge6Drg_kjqcdtGSojhCwzgEW3CsB4vmIQQLXyWB2qr0HReAC3gvCFSU4VcNhsNSgnDnIEZeyPMZgN8IKj4UjH_2l3fRUZObkDs2gncLL0r2Snn3ooDPjUQehlPOdsZmE6fHOtq7djOsMYtwxXol7FfCNyf5qG0UmHuTJRwjwwFnW7w6Rf673G-p799TPilj9KqA4VNsSB2iR0hm4cDROOpzsxlzoH_y5Q9ynrcZN600vtk8fnFqBIM1fGHai4XYZ9mM9O--YeONQCkXaBCET1C6mhGodBTYgw3Vnfb9C9Xk';
  //  try {
  //    const results: SongProps = await request(MASTER_URL, CreateRec,{
     
  //    }
      
  //     );
  
 
  //    console.warn(results);
    
  //  } catch (error) {
  //    console.error('Error fetching data:', error);
  //  }
  // }

  return {

    GqlQuery,

  }


    }

   

    

export default UseHygraph




