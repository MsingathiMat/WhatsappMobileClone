import { View, Text, Dimensions, Image } from "react-native";
import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Avatar = ({
  children,DeleteContact
}: {
  children?: ReactNode,DeleteContact:()=>void
  
}) => {
  let AvatarImage1: React.ReactNode = null;
  let LabelSectionElement: React.ReactNode = null;
  const ChildrenToArray = React.Children.toArray(children);



  ChildrenToArray.forEach((child) => {
    let ComponentName = "";
  
    if (React.isValidElement(child)) {
      const componentType = child.type as React.ComponentType<any>;

    if (componentType.name) {
        ComponentName = componentType.name;
      } else {
        console.warn("Unable to determine component name");
      }
    }
    if (ComponentName == "AvatarImage") {
      AvatarImage1 = child;
    }

    if (ComponentName == "LabelSection") {
      LabelSectionElement = child;
    }
  });

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
     
        // @ts-expect-error
        navigation.navigate("ChatDetail", { SelectedContactIndex: 0 });
      }}

      onLongPress={() => {
     
      
        DeleteContact()
      
      
      }}
    >
      <View
        style={{
          width: Dimensions.get("screen").width - 20,
          height: 60,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          gap: 8,
        }}
      >
        {AvatarImage1 ? AvatarImage1 : ""}

        {LabelSectionElement ? LabelSectionElement : <></>}
      </View>
    </TouchableOpacity>
  );
};

Avatar.AvatarImage = AvatarImage;
Avatar.LabelSection = LabelSection;
LabelSection.Title = Title;
function AvatarImage({
  RingScale,
  AvatarScale,
  ImageUrl,
  AvatarRing,
}: {
  RingScale: number;
  AvatarScale: number;
  ImageUrl: string;
  AvatarRing?: boolean;
}) {
  return (
    <>
      {AvatarRing ? (
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 25,
            borderColor: "#25D38A",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            transform: [{ scale: RingScale }],
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              transform: [{ scale: AvatarScale }],
            }}
            resizeMode="cover"
            source={{ uri: ImageUrl }}
          />
        </View>
      ) : (
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            transform: [{ scale: AvatarScale }],
          }}
          resizeMode="cover"
          source={{ uri: ImageUrl }}
        />
      )}
    </>
  );
}

function Title({ Title, Color }: { Title: string; Color: string }) {
  return <Text style={{ fontWeight: "bold", color: Color }}>{Title}</Text>;
}

function LabelSection({
  children,
  LastSeen,
  width,
  colorWhite = false,
  RightComponent = false,
  Icon,
}: {
  children?: ReactNode;
  Icon?: ReactNode;
  RightComponent?: boolean;
  colorWhite?: boolean;
  width?: number;
  LastSeen: string;
}) {
  let TitleElement: React.ReactNode = null;

  const ChildrenToArray = React.Children.toArray(children);

  ChildrenToArray.forEach((child) => {
    let ComponentName = "";
    let ElementName = "";
    if (React.isValidElement(child)) {
      const componentType = child.type as React.ComponentType<any>;

      if (componentType.displayName) {
        ElementName = componentType.displayName;
      } else if (componentType.name) {
        ComponentName = componentType.name;
      } else {
        console.warn("Unable to determine component name");
      }
    }

    if (ComponentName == "Title") {
      TitleElement = child;
    }
  });

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: RightComponent ? width - 78 : "auto",
        }}
      >
        <Text
          style={{ fontWeight: "bold", color: colorWhite ? "white" : "black" }}
        >
          {TitleElement ? TitleElement : <></>}
        </Text>

        {RightComponent ? (
          <Text
            style={{
              fontSize: 12,
              color: "#B4B3B3",
              position: "absolute",
              right: 5,
            }}
          >
            {LastSeen}
          </Text>
        ) : (
          ""
        )}
      </View>

      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        {Icon ? Icon : ""}

        <Text>Last Messsage</Text>
      </View>
    </View>
  );
}
export default Avatar;
