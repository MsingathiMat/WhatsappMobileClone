

import {
    View,
   
    TouchableOpacity,
    Modal,
    Text,
    Image,
   
  } from "react-native";
  import React, { useEffect, useState } from "react";
 
  import UseHygraph from "./Hooks/UseHygraph";

  import { Feather } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { BlurView } from "expo-blur";
  import { FontAwesome5 } from "@expo/vector-icons";
  import LoadingButton from "./LoadingButton";
import { gql } from "graphql-request";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SendEmail from "../API/SendEmail";
import { HygraphDBoperationsProp } from "../Types/Types";
import WithHygraphDBoperations from "./HOC/WithHygraphDBoperations";



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
  
 
  

    const PureRegister = ({crudOperations}: {crudOperations: HygraphDBoperationsProp})=> {
     
      
      
        const [cName, setcName] = useState<string | null>(null);
        const [contact, setContact] = useState<string | null>(null);
        const [IsLoading, SetIsLoading] = useState(false);

  const [VerificationCode, SetVerificationCode] = useState("");
 

      
        const GqlString = gql`
          query Contacts1 {
            contacts1 {
              id
              contactName
              contactNumber
              lastSeen
              imageUrl
            }
          }
        `;
      


      const verify = ()=>{

        const VerificationCode = (Math.floor(Math.random() * 9000) + 1000).toString();
      
        SendEmail({Email:  cName,Name:contact,VerificationCode:VerificationCode}).then((result)=>{
     
          console.log(result.status)
        }).catch((error)=>{
      
          console.log(error)
        })
      }
        const CreateRecord = () => {
          const CreateRec =
            gql`
      mutation CreateContact {
        createContacts(
          data: {contactName: "` +
            cName +
            `", contactNumber:  "` +
            contact +
            `", imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png", lastSeen: "` +
            Date.now() +
            `"}
        ) {
          id
        }
        publishManyContacts1(to: PUBLISHED) {
          count
        }
      }
      `
          // CreateARecord(CreateRec)
          //   .then((res) => {
          //     GqlQuery({ GqlString, SetSongData });
          //     SetIsModalShown(false);
          //     SetIsLoading(false);
          //   })
          //   .catch((error) => {
          //     alert("Error Occured");
          //   });
      
        }
        const SaveData = () => {
          SetIsLoading(true);
      
          CreateRecord();
        };
      

        const saveData = () => {
          SetIsLoading(true);
          const cName = "Msingathi Hlazo01";
          const contact = "247";
      
          const GqlCreateString =
            gql`
      mutation CreateContact {
      createContacts(
        data: {contactName: "` +
            cName +
            `", contactNumber:  "` +
            contact +
            `", imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBIREBAVDQ0bEA0VDRAQEBASIB0iIiAdHx8kKDQsJCYxJx8fLTItMSwuMDAwIytKTT81TDQ2MDcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGAwQHBQj/xAA8EAABBAECAggEAwUIAwAAAAABAAIDEQQFIRIxBgcTIkFRYXEygZGhscHRI1JicvAUM0KCkrLC4SRUdP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqFITQgSE6RSBITpCBIpNCBITQgVITQgVITQgSE0IEhOkUgSKTQgVITQgSKTQgVITTQCFJCCKFJCCKFJCCKFKkIIoUlgzMpkTC+Q00ff2QZaUXytb8RA9yAuf9Iel8ziWxHsm77j4z7n9FWzrMrubiT4u8Sg7JHK13wuB9iCpLkmn6k4OBsg+dlXjRddcQBJ3h+8a4h+qCxoTaQQCNweRTQRQpIpBFCkhBFCkhAqSUkIFSE0IHSFJCCKFJCCNIUqQgjSKUkIIOIAJOwANnyXOekesmZ5IPcFhjfzVx6V5BjxX1sXU0H35/YFcsmJ3vkg15TZ804owTyCxcTLriF+Vhejj421jyBQZsfHAq1YcOICq8hsvAYWN3ea8hvut/A1OMOoWfWkFy0XLId2Z3B+E+RXtqr4xHde02LBtWpBFCkhBGkKSEEaRSkhBGkKSEEaQpIQOkUmhAkJoQJFJoQKkJoQVzpwwnHYB/7Db/ANLly3WWjiJe7hYDTWjmSrn0p6QTPy5sIBgjjfjd4glxsNcSD4c6VeyMJrt3AEg2LF0fMIK32MbmOc1zwGua1xMbgwOPIE+F+q3tLkcCGOdtuPNSkwmDiAAFnfbmfNbuk6eAQS3axzBQY9dxOyDSHCQOrbiAr+rWXotnCN0vFEJBGQC1rwXm9rbt3vlasOTgBzSXxmmiw6iBShpkXZn9nyKCx4LAWtABAcW00iiFZ6VXhhpp34O6e8HUR6grJ0Hmke3LEjnODc+RrOK7aA1u31QWSkUnSECRSaECpCaECpCaECpCaaATpNCBUik0IFSKTQgVIpNCDmXWHhGHNhyRfBMIg+vB7CL+rSP9JXlZruEkeC6R0s0d+XA2NhaHCVrrde4oir8Oa5rrkDopHxv+JriCRdFBoSP3BHMGx7pafqE7XkucHgkd00A0ehA/Fac2RRDdzZ8GklbGO3cdwkCrBiLr+qCx4WoSPc95mf2bwQ6Fxa9oHk3YV916GDCWSbD9md2jy8wtXAnL2Godw3kGCh+i29Ny3vL2viMXDRDSQfwQenqQc+GRsfxObTfSzVr3uj+H2WOwEcL3Fz5BtfG82b9rr5LzdKwu1uzTQQTtd+norIB4eyApJSQgVIpNCCKdJoQKkJoQRTTQgaFJCCNIpSQgiilJCCNIpSQgjSoPWVpobwZI24iGvHma2P0FfILoCpvWVkR9gyHib2vaB3ZWOPgoi68rIQcu8bHPdbEGoTtPdo/In81oTzuYTQsLDHqwB3BQXvQ8jJI3PC08wGt3+dleqbFk7eyq2k9IXcIaxjidq7pVg05kj3B8nhuG+AQXrRoQ2FtczZK3aVMw+nuHFkHBnLoHtEYbM6uxfYB5+HPx29VdAb5bjzQKkUpIpBGkUpIQRpFKSEEaRSkhBGkKSEDQmhAqRSaKQKkUnSECRSHuDQSSAADZJAAVO6RdZOn4ltY/+1Si/wBnEQWA+r+X0tBbciVsbHPds1rHFx8gBZXznJrTp8+bIk2M3FQJvhFim/IbfJXzTel2TqeFrD5OCNkeK0RwtB7oIeXEu5k03/pcncDYI5gghBaJGg7rX7CMuHFsLG6WnZIcBfPawtt4BQXDRtPjYxnCASB8Wx+69qCPmfdeRocobGB6Bek/JDAXE0ADaDlHWXFw6gXD/FFCT8rH5Lr3VTrJnw+ykNyQ8IBvcxn4fpRH0XGumOX/AGnMLhyAACuXV6yR7pMeF7opJcWURytcQWSN7zT7d2j6EoO00ilx7SetLKgPZ5cbZ62LtopR70KP0V00zrG06ag574HGtpGGvqLH1QW2kUsWLlRyt4onskb+8x7Xj7LMgVIpNCBIpOkIFSE00DpFJopAqQnS0db1OPEx5ciT4WMJra3HwA9zQQanSXpJjafGJMhxt19nE0AvkI8h+ZXLNb62cuQluMxmMzenkCWX77fZU/pLrs2dO6eZ1k/C0Xwxt8Gj0XkF17oN/VNaysk3PPLNv8L5HFo9hyHyXmkpkqBQdC6ppGPGo4Z+PIxKjHgaDgf94PyKpE8bo3uY8Fr2ucHsPNrhsQV6/QLXY8DOjnmDjHwSNcWgFzeIVdeKfWDn402fLPjPD45GxOsNe3v8IDtiPMINCCWqc3/MFZsGHjYH8x+CobcwjkPqvf0vpA6OwC0sNWx3dcPZBc8XJDNuS1df1WmE8VDl7rwM3WhVtFknut/VeDPmzOeDfE4Ebkngb8kGfHiL3F1Vuul9U0V5zf4ceU+3IfmuUwRvZuJHg/zGvorR0Q6XTYExl7NkxML2bksqyDe3sgxdNsfss/NYRVZc5A/hJJH2IXgwybEL1elGqPzJ5MmRrWvkLba0EN2AA5nyC8EuooPY0vUpYXccb3xkVTmuLSuj9GOsmRpazM/aRmv2wA7Rnv5j7rlLiRG31Lis8EtgAc7pB9RY8zZGtewhzHNBa4EEELIuc9VWu2X4bjYALof+Q/P6ro6BIpNFIFSE0IHSKUkIEuVdd+rENx8Rpq7kkH2b/wAvsurL5y6xdT/tOo5Tgba2Usb7M7u3zBPzQVZ5UY/EJOKUR7yBqPikTuVJg8UAQo8KyJUgxlqgWLNSRCB47uHauZom/BbAH/a1mtPvzWZ7twf3qKDKpxDdQCyQndBOcLzsgUV6sgWhnM8UE8jkweTG/qo4j+HiPlVe5SkfZJPg1n4KEZpoJ5Ek/l+qC2dFNQME8Uw5xua4jfceI+YX0PE8Oa1zTbS0Fp8weS+ZtOcQ0E83G/YeC7r1c6j2+BGCbdEXMPsPh+1fRBZkUpUhAkJoQNClSSDFkyhjHvPJrHE+wFr5PmmLi5zjbnOcXHzJX0z05yux03Nfy/8AFlaD6uHCPuV8wOKCJKjxUmVikKCV2VmHJa9rNaCQTCy4EPG+iCQBZaLsjxr+vBb2o4DI+Et46ddcYANgNvbw3KDzCFF3JZSFil5ICNxHL0WUttu3g0fmoQNBHr47LPAPiH8B3QQjfam11EH1CxwqUqD05Wcj5haWc3u/Nb0PejYfEWCtfOb3Qg83N2r1Df8AaAnEzieGf4WgcR/r1WPOP7QA8msj/AFZ4X0PU3aD0oZNyeQAoD0XT+pzMp0kV7PDzXmRX/a5Rx8LfUq99W8/ZZuIOVlzXD+YEfjSDuKFKkUgimnSEDQmhBy7ry1l0cEGIzlK4ul/kaRQ+u/+VcSevqHpJ0Wxc/hORCJC1pDXcb2PaPQgrn2q9UMDrOLkSREE9yRrZ2X5W2iPnaDjaxSK/ZvVVqbL4GwzjejHkNBPydSrWodFs+G+1xMhoF27sHub9QKQeCwraC1XCiQdjfJbDSgzQTOY4OYS1wPdcCQQs82TJI7ike55oDiJJNeS1QVkaUGYBYZQswUMgbIMOOfBbbeTvUELRjO63nckGPHG6ySt2UMf4lsubsUGxpDrjc3yIIUsiPiG3MeCw6M6u09AD91vTNvcIK3qYqT3az8E8Y2d+QRq398f5WfgtnTNMyJ6EMMsvoyJ7/wCCcZ4iD4CtlYtGynRywvb8TZo3e1GwvQ0bq01OWi6JsDfB0sjWfYWfsuhaD1XwxU7IldK7buMHZx/XmfsgvWNM2RjJG7tcxpafQhZaSjiaxrWtFNa0BoHIAKSBITQgkhOkIIrimTqMjZ5ZYpHxufK9xc15bdm9/Ndj1SXggmf+7DKfo0rhczt0FlxOl2YB3nMlH8cTb+opbj+nBa25IPcxzOb9iD+KqcLtlDNPcd7FBTen+sR5maZYxIBwNBDw0O4vkvFiUNV/vn/AMwTiOyDKpsUFJhQZi5TyW7BYQs83JBot5r0a2XnHmvShFt+SDDB8S3JRstQCnD3W89vdQYdIP7Qjza4LdD/AAXn4T+GVp/iC9XUIQ0n3KC2aRDHp+Pj5+Q648lzw1rYGvexzSRVnzAtWzB6fQHaOOdw8ON0cY+1qs9II+06L4MnjHmE36ccrfzCrnR6T4fZB2HD6SSSnZrIx83u+p/RetHkOJa4knceOyomhyeKuOI62oLGhRiNtB8wFOkCQmhA0IQg83pK6sPJ/wDnl/BcOlKEIMuOUZh7h9ihCDmOqf3z/cKMJQhBsBSCEIGw7raeNkkINN4Xo4htoQhBCUbrf5t+SSEGjVPB9V62u2YWvH8NlCEHTm6YT0R4CNximX5dr2t/Rcz0KbkhCDoGhv5K56ZIhCCy4LrYPSwthCEAmhCD/9k=", lastSeen: "` +
            Date.now() +
            `"}
      ) {
        id
      }
      publishManyContacts1(to: PUBLISHED) {
        count
      }
      }
      `;
      
          crudOperations
            .Create(GqlCreateString)
            .then((result) => {
              if (result) {
                alert("Added");
                console.log(result);
              } else {
                alert("Failed");
              }
              SetIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              SetIsLoading(false);
            });
        };
      
        return (
        
          <View
         
            
            style={{
              flex: 1,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            
            
            }}
          >
            <TouchableOpacity
              onPress={() => {
              
              }}
              style={{
                position: "absolute",
                top: 30,
                right: 30,
              }}
            >
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <View style ={{
     height:70,
     width:70, 
     borderRadius:35,
     justifyContent:'center',
     alignItems:'center',
    elevation:25,
    position:'absolute',
    top:-30,
    left:85,
    zIndex:40
    }}>

<Image resizeMode="cover"  source={({uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"})} style={{
   
    height:70,
    width:70, 
    borderRadius:35,
    borderColor:'#57F573',
    borderWidth:2.5,
    
    }}/> 
  
</View>

            <View
              style={{
                flexDirection: "column",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:'white',
                padding:30,
                borderRadius:10,
                paddingTop:10,
                height:350,
                overflow:'hidden',
                width:250
              }}
            >


  
                 <Text style={{
fontWeight:'bold',
color:"#128C7E"


                }}>Register</Text>


              <View>
                <TextInput
                  value={cName}
                  onChangeText={(value) => {
                    setcName(value);
                  }}
                  placeholder="Your email"
                  style={{
                    borderBottomColor: "#128C7E",
                    borderBottomWidth: 1,
                    width: 200,
                    paddingLeft: 30,
                    padding: 3,
                  }}
                />

                <MaterialIcons
                  style={{ position: "absolute", top: 8, left: 0 }}
                  name="email"
                  size={15}
                  color="black"
                />
              </View>
      
              <View>
                <TextInput
                  value={contact}
                  onChangeText={(value) => {
                    setContact(value);
                  }}
                 
                  placeholder="Password"
                  style={{
                    borderBottomColor: "#128C7E",
                    borderBottomWidth: 1,
                    width: 200,
                    paddingLeft: 30,
                    padding: 3,
                  }}
                />

                <Entypo
                  style={{ position: "absolute", top: 8, left: 0 }}
                  name="lock"
                  size={15}
                  color="black"
                />
              </View>
              <TouchableOpacity onPress={()=>{verify()}}>
                <LoadingButton
                  IsLoading={false}
                  OnPress={() => {}}
                  Title="Save"
                  BakcgroundColor="#128C7E"
                />
              </TouchableOpacity>

              <View style={{
                width:'150%',
               height:7,
               backgroundColor:'#57F573',
               position:'absolute',
               bottom:-1
               
               }}>

              </View>
            </View>
            </View>
          </View>
       
        )
              } 

  
const Register = WithHygraphDBoperations(PureRegister)

export default Register