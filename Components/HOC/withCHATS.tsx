import React, { useEffect, useState } from 'react';

import { PosItemProp } from '../../Types/Types';

import {gql } from 'graphql-request'
import UseHygraph from '../Hooks/UseHygraph';
import { Text, View } from 'react-native';





function WithPOSTS<P>(OriginalComponent: React.ComponentType<P & {posts:PosItemProp[]}>) {

const [PostData,SetPostData] = useState<PosItemProp[]>(null)

const {GetData} = UseHygraph();


useEffect(()=>{


    GetData({ GqlString }).then(results=>{

        SetPostData(results.data)
        console.log(results);
    });
},[])

const GqlString = gql`
query getPosts {
  posts(orderBy: publishedAt_ASC) {
    category
    message
    contacts {
      contactName
      contactNumber
      id
      imageUrl
      lastSeen
    }
  
  }
}
`




  const ComponentWithExtraInfo = (props: P) => {
   
    return <OriginalComponent {...props} posts={PostData} />;
  };
  return ComponentWithExtraInfo;
}

export default WithPOSTS;

const UsedComp: React.FC< {posts:PosItemProp[]}> = ({  posts }) => {
 return(

    <View><Text>mmm</Text></View>
 )
};

const WithC = WithPOSTS(UsedComp);

export { WithC };
