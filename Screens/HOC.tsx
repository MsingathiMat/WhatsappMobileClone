// import React from 'react';
// import withCRUD,{ CrudOperations }  from '../Components/HOC/withCRUD';

// interface User {
//   id: string;
//   name: string;
// }

// interface MyComponentProps {
//   crudOperations: CrudOperations<User>;
// }

// const MyComponent: React.FC<MyComponentProps> = ({ crudOperations }) => {
//   const [isEditMode, setEditMode] = React.useState(false);
//   const [userData, setUserData] = React.useState<User | null>(null);
//   const [tempUserData, setTempUserData] = React.useState<User | null>(null);

//   const handleCreate = async () => {
//     await crudOperations.create({ id: '1', name: 'John Doe' });
//   };

//   const handleFetch = async () => {
//     try {
//       const response = await fetchUser('1'); // Your API call to fetch user data
//       setUserData(response);
//       setTempUserData(response);
//       setEditMode(true);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleUpdate = async () => {
//     if (tempUserData) {
//       try {
//         await crudOperations.update(tempUserData.id, tempUserData);
//         setEditMode(false);
//       } catch (error) {
//         console.error('Error updating user data:', error);
//       }
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await crudOperations.delete('1');
//     } catch (error) {
//       console.error('Error deleting user data:', error);
//     }
//   };

//   const handleCancel = () => {
//     setTempUserData(userData);
//     setEditMode(false);
//   };

//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (tempUserData) {
//       setTempUserData({ ...tempUserData, name: event.target.value });
//     }
//   };

//   const fetchUser = async (id: string): Promise<User | null> => {
//     // Your API call to fetch user data
//     try {
//       const response = await fetch(`/api/user/${id}`); // Update the URL as needed
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(`Error fetching user with ID ${id}:`, error);
//       throw error;
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleCreate}>Create</button>
//       <button onClick={handleFetch}>Fetch</button>
//       {isEditMode ? (
//         <>
//           <input type="text" value={tempUserData?.name || ''} onChange={handleNameChange} />
//           <button onClick={handleUpdate}>Update</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </>
//       ) : null}
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// const MyComponentWithCrud = withCRUD(MyComponent);

import { View, Text } from 'react-native'
import React from 'react'

const HOC = () => {
  return (
    <View>
      <Text>HOC</Text>
    </View>
  )
}

export default HOC