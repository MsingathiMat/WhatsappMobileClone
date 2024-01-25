


const UploadFile =({Base64File,FileUri, FileType,EndPoint}:{FileUri:string, FileType:string,Base64File:string,EndPoint:string})=>{

  
  const cloudName ='dzrqwm7xi';
  EndPoint=`https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  


    FileType =  FileUri.split('.').pop();
      const PostData = async()=>{

        const file = new FormData();
    
    
      
    file.append('file',`data:audio/${FileType};base64,${Base64File}`)
        file.append('upload_preset', 'wclone');
    
      
      
      await fetch(EndPoint, {
        method: "post",
        headers:{   'Content-Type': 'multipart/form-data'},
        body: file,
        }).then((result)=>{
    
          console.log(result.ok)
        }).catch(error=>{
    
          console.log("Cloudinary Error")
    
        })
    
 
      }

      PostData();
       
}

export default UploadFile