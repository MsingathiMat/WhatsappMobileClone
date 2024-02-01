import React, { useState } from "react";
import { Text, View } from "react-native";
import { useCallback } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import UseHygraph from "../Hooks/UseHygraph";
import { gql } from "graphql-request";
import { HygraphDBoperationsProp } from "../../Types/Types";



  

interface WithCrudProps {
  crudOperations: HygraphDBoperationsProp;
}

function WithHygraphDBoperations<P>(OriginalComponent: React.ComponentType<WithCrudProps>) {






  const { Create,Read, Update,Delete } = UseHygraph();
  const ComponentWithExtraInfo = (props: P) => {
    const crudOperations ={
      Create: useCallback(async (GqlString: string) => {
        return Create(GqlString);
 
      }, []),

   
      Update: useCallback(async (GqlString: string) => {
    
        // return Create(GqlString);
      }, []),

      Read: useCallback(async (GqlString: string) => {
        return Read(GqlString);
      }, []),

      Delete: useCallback(async (GqlString: string) => {
   
        // return Create(GqlString);
    
      }, []),
    }

    return <OriginalComponent {...props} crudOperations={crudOperations} />;
  };
  return ComponentWithExtraInfo;
}

export default WithHygraphDBoperations;



