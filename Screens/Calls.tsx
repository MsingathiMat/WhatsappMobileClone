import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { CRUDprops } from "../Types/Types";
import WithCrudOperations from "../Components/HOC/WithCrudOperations";
import { ScrollView } from "react-native-gesture-handler";


const CleanCalls = ({ crudOperations }: { crudOperations: ReturnType<typeof WithCrudOperations.Fetch>}) => {
  const [DogIMG, SetDogIMG] = useState<string[] | null>(null);
  type DogImages = {
    message: string[];
  };

  const getDogImages = () => {
    const DogImages = crudOperations.Read<DogImages>(
      "https://dog.ceo/api/breed/hound/images/random/4"
    );


    DogImages.then((data) => {
      SetDogIMG(data.message);
    }).catch((error) => {
      console.log(error);
    });
  };


  const SendData=()=>{

    const resp = crudOperations.Create('https://codeddesign.org.za/post/index.php',{
      "body": "Mabaso",
      "title": "buzani"
  })

    resp.then(result=>{

      console.log(result)
    }).catch(error=>{

      console.log(error)
    })

  }
  useEffect(() => {
    getDogImages();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        {DogIMG?.map((imgUrl, index) => (
       <Pressable  onPress={()=>{SendData()}} key={index}>

<Image
            resizeMode="cover"
           
            source={{ uri: imgUrl }}
            style={{
              width: 300,
              height: 200,
              borderRadius: 10,
              marginBottom: 20,
            }}
          />

       </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const Calls = WithCrudOperations(CleanCalls, WithCrudOperations.Fetch);
export default Calls;
