import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const  SendEmail = async({Email,Name, VerificationCode}:{Email:string,Name:string,VerificationCode:string}) => {


    // const RandomDigits = Math.floor(Math.random() * 9000) + 1000;


    const endpointUrl = 'https://codeddesign.org.za/';
    const dataToSend = {to:Email, message:'Hi '+Name+'  '+'use this VERIFICATION CODE   '+VerificationCode.toString(), subject:'WHATSAPP CLONE'}
    
   
  

const queryParams = new URLSearchParams(dataToSend);

// Append the parameters to the URL
const urlWithParams = `${endpointUrl}?${queryParams}`;


return await axios.get(urlWithParams);

    // await fetch(urlWithParams)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Response:', data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    


}

export default SendEmail
