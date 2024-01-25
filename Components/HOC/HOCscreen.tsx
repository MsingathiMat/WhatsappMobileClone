import React, { ReactElement, useEffect, useState } from 'react';
import { chatData } from '../Chats';
import { ContactProps } from '../../Types/Types';
import { Text, View } from 'react-native';
import {request, gql } from 'graphql-request'
import UseHygraph from '../Hooks/UseHygraph';

interface newProps {
  ChatData: ContactProps[];
}

interface SongProps {
   songs: Song[];
 }
 interface Song {
   artistName: string;
   id: string;
   imageUrl: string;
   songTitle: string;
   songUrl: string;
 }

function HOCscreen<P>(OriginalComponent: React.ComponentType<P & newProps>) {

  const ComponentWithExtraInfo = (props: P) => {
   
    return <OriginalComponent {...props} ChatData={chatData} />;
  };
  return ComponentWithExtraInfo;
}

export default HOCscreen;

const UsedComp: React.FC<{ MyName: string } & newProps> = ({ MyName, ChatData }) => {
  return (
    <View>
      <Text>{MyName}</Text>

      <Text>{ChatData[1].ContactName}</Text>

    </View>
  );
};

const NewComp = HOCscreen(UsedComp);

export { NewComp };
