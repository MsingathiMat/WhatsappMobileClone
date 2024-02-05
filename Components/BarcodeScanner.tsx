import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { HygraphDBoperationsProp, Navigatable } from '../Types/Types';
import WithHygraphDBoperations from './HOC/WithHygraphDBoperations';
import { gql } from 'graphql-request';
import { useAppProvider } from '../Store/AppContext';

 function PureBarcodeScanner({
  crudOperations,
}: {
  crudOperations: HygraphDBoperationsProp;
}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

const navigation:Navigatable = useNavigation()

const { UserData } = useAppProvider();
  const LogQrCode = (QrDigit:string, userId:string) => {


  
    const GqlString =
  gql`
  mutation createQrLog {
    createQrLogs(
      data: {qrCode: "`+QrDigit+`", appUsers: {connect: {id: "`+userId+`"}}}
    ) {
      id
    }
    publishManyQrLog {
      count
    }
  }
    `;
  
  
  
  
   
  
  
  
    crudOperations
      .Create(GqlString)
      .then((results) => {
      
       
  
  
  
      })
      .catch((error) => {
        console.log(error);
      });
  };


//   const navigation = useNavigation();
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(false);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    
    LogQrCode(data,UserData.id)

 alert("Click LOGIN below the QR CODE")
    navigation.navigate('Welcome');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const BarcodeScanner = WithHygraphDBoperations(PureBarcodeScanner);

export default BarcodeScanner