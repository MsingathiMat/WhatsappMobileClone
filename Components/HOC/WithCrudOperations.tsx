import React, { useState, useCallback } from "react";
import { Text, View } from "react-native";
import UseHygraph from "../Hooks/UseHygraph";
import UseFetch from "../Hooks/UseFetch";

const GraphQl = () => {
  return UseHygraph();
};

const Fetch = () => {
  return UseFetch();
};



type DbOperatorTypes = ReturnType<typeof Fetch> | ReturnType<typeof GraphQl>;

function WithCrudOperations<P>(
  OriginalComponent: React.ComponentType<P & { crudOperations: any }>,
  DbOperator: () => DbOperatorTypes
) {

  const { Create, Read, Update, Delete } = DbOperator();
  
  type DataToSave = { [key: string]: any};

  console.log(Create.length,Create.name,Create.toString())
const ArgNo = Create.length;


  const ComponentWithExtraInfo = (props: P) => {
    const crudOperations = {
      Create: 

      ArgNo==2?
        async function <T>(OperationString: string,DataToSave:DataToSave): Promise<T> {
        
          return Create<T>(OperationString,DataToSave);
          

        
        }:
        async function <T>(GqlString: string): Promise<T> {
        

          return Create<T>(GqlString);
          

        
        },
       
     

      Update: useCallback(
        async function <T>(OperationString: string): Promise<T> {
          return Update<T>(OperationString);
        },
        [Update]
      ),

      Read: useCallback(
        async function <T>(OperationString: string): Promise<T> {
          console.log(await Read<T>(OperationString));
          return Read<T>(OperationString);
        },
        [Read]
      ),

      Delete: useCallback(
        async function <T>(OperationString: string): Promise<T> {
          return Delete<T>(OperationString);
        },
        [Delete]
      ),
    };

    return <OriginalComponent {...props} crudOperations={crudOperations} />;
  };
  return ComponentWithExtraInfo;
}

export default WithCrudOperations;
WithCrudOperations.Fetch = Fetch;
WithCrudOperations.GraphQl = GraphQl;