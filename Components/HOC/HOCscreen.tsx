import React, { ReactElement } from 'react';
import { chatData } from '../Chats';
import { ContactProps } from '../../Types/Types';
import { Text, View } from 'react-native';

interface newProps {
  ChatData: ContactProps[];
}

function HOCscreen<P>(OriginalComponent: React.ComponentType<P & newProps>) {
  const ComponentWithExtraInfo = (props: P) => {
    // At this point, the props being passed in are the original props the component expects.
    return <OriginalComponent {...props} ChatData={chatData} />;
  };
  return ComponentWithExtraInfo;
}

export default HOCscreen;

// Modify UsedComp to accept newProps
const UsedComp: React.FC<{ MyName: string } & newProps> = ({ MyName, ChatData }) => {
  return (
    <View>
      <Text>{MyName}</Text>

      <Text>{ChatData[1].ContactName}</Text>
      {/* You can use ChatData here if needed */}
    </View>
  );
};

const NewComp = HOCscreen(UsedComp);

export { NewComp };