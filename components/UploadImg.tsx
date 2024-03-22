/* import React, { Children, useState } from 'react';
import { uploadImage , fetchImage } from '@/utils/api';
import UploadText from "@/components/UploadText";


const UploadImg: React.FC = () => {
  const [uploadImgUrl, setUploadImgUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);


   React.useEffect(() => {
    if (uploadImgUrl) {
      fetchImage(uploadImgUrl);
      setIsSearchClicked(true)
    }
  }, [uploadImgUrl]);

  return (
    <div>
      
      <UploadText task2={true}>
      </UploadText>
    </div>
    
  );
}



export default UploadImg; */