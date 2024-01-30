


const UploadFile =async({Base64File,FileUri, FileType,EndPoint}:{FileUri:string, FileType:string,Base64File:string,EndPoint:string})=>{

  FileType =  FileUri.split('.').pop();
  const cloudName ='dzrqwm7xi';
  EndPoint=`https://api.cloudinary.com/v1_1/${cloudName}/upload/`;
  



   

        const file = new FormData();
    
    
      
    file.append('file',`data:audio/${FileType};base64,${Base64File}`)
        file.append('upload_preset', 'wclone');
    
      

        
        
    return  await fetch(EndPoint, {
        method: "post",
        headers:{   'Content-Type': 'multipart/form-data'},
        body: file,
        })
    
 
     

  
       
}

export default UploadFile