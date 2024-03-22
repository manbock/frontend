/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import ImageGrid from '@/components/imageGrid';
import Loading from '@/components/loading';
import { fetchFromAPI } from '@/utils/api';
import { uploadImage , fetchImage } from '@/utils/api';

import { RxCross2 } from "react-icons/rx";
import { IoCameraReverseOutline } from "react-icons/io5";
import { ImFilePicture } from "react-icons/im";
import { MdAddLink } from "react-icons/md";
import { BsFillPatchExclamationFill } from "react-icons/bs";

interface Props {
  task2: boolean;
} 

const UploadText: React.FC<Props> = ({ task2}) => {

  const [keyword, setKeyword] =useState<string>('');
  const [imageData, setImageData] = useState<string[]>([]);
  const [namedata, setNamedata] = useState<string[]>([]);
  const [branddata, setBranddata] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);

  const [isCameraClicked, setIsCameraClicked] = useState<boolean>(false); 
  const [uploadImgUrl, setUploadImgUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isFileSelected, setIsFileSelected] = useState<boolean>(false); 
  const [isActive, setActive] = useState<boolean>(false);

  
  //api1 출력
  const handleSearch = async () => {
    setLoading(true);
    setIsSearchClicked(true);

    try {
      const response = await fetchFromAPI(keyword);
      setImageData(response.data.result.map((item: any) => item.plp));
      setNamedata(response.data.result.map((item: any) => item.title));
      setBranddata(response.data.result.map((item: any) => item.brand));
      console.log(JSON.stringify(response.data));
      setError('');
    } catch (error) {
      console.log(error);
      setError('다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

   //api3 출력
   const handleImageSearch = async () => {
    

    const isValidImageUrl = (url: string): boolean => {
      // 이미지 URL의 패턴으로 유효성을 검사하는 로직
      const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const lowerCaseUrl = url.toLowerCase();
      return supportedExtensions.some(ext => lowerCaseUrl.endsWith(ext));
    };
    if(isValidImageUrl(keyword)){
      setLoading(true);
      setIsSearchClicked(true);
      try {
        const response = await fetchImage(keyword);
        setImageData(response.data.result.map((item: any) => item.plp));
        setNamedata(response.data.result.map((item: any) => item.title));
        setBranddata(response.data.result.map((item: any) => item.brand));
        /* console.log(JSON.stringify(response.data)); */
        setError('');
      } catch (error) {
        console.log(error);
        setError('이미지 검색 중 에러가 발생했습니다.');
      } finally {
        setLoading(false);
        setErrorMessage('');
      }
    }else{
      setErrorMessage('유효하지 않은 이미지 URL입니다.');
    }
  };
  //api2
  const onchangeImageUpload = async (file: File) => {
    // 파일 형식이 이미지인지 확인
    if (!file.type.startsWith('image/')) {
      setErrorMessage('이미지 파일만 업로드할 수 있습니다.');
      return;
    }
    
    const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSizeInBytes) {
      setErrorMessage('이미지 파일 크기가 너무 큽니다. 10MB 미만의 이미지를 업로드해주세요.');
      return;
    }
  
    try {
      const imageUrl = await uploadImage(file);
      console.log(imageUrl)
      setUploadImgUrl(imageUrl);
      setIsFileSelected(true);
      setKeyword(imageUrl);
      setErrorMessage('');
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생:', error);
      setErrorMessage('이미지 업로드 중 오류가 발생했습니다.');
    }
  }

  //클릭해서 이미지 고를 때
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onchangeImageUpload(file);
    }
  };

  //드래그 드롭으로 이미지 고를 때
  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver: React.DragEventHandler = (event) => {
    event.preventDefault();
  };
  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setActive(false);
  
    const file = event.dataTransfer.files[0];
    if (file) {
      await onchangeImageUpload(file);
      // 이미지가 업로드되면 입력 요소의 값을 해당 이미지 파일 경로로 설정
      const inputElement = document.querySelector<HTMLInputElement>('.file');
      if (inputElement) {
        inputElement.value = ""; // 파일을 이미 선택한 경우를 대비하여 먼저 input 값을 초기화
        inputElement.files = event.dataTransfer.files;
        inputElement.dispatchEvent(new Event('change', { bubbles: true })); // 입력 값이 변경되었음을 시뮬레이트
      }
    }
  };



  //검색결과로 나온 이미지를 클릭했을 때
  const handleImageClick = async (imageUrl: string) => {
    setKeyword(imageUrl); // 선택한 이미지의 URL을 검색어로 설정
    setUploadImgUrl(imageUrl);
    console.log(imageUrl)
    await handleImageSearch(); // 이미지 검색 API 호출
  };

  

  return (
    
    <div id="search">
      {!isSearchClicked && <SearchText task2={task2} />}
      
      <div className="container">

        <div className={`uploadImgBox ${isCameraClicked ? 'active' : ''}`}>
                 
          <label
            className={`preview${isActive ? ' active' : ''}`} 
            onDragEnter={handleDragStart} 
            onDragLeave={handleDragEnd}  
            onDrop={handleDrop as React.DragEventHandler}
            onDragOver={handleDragOver}
          >
            {isFileSelected && 
              <div className='selected_imgBox'>
                <img src={uploadImgUrl} alt="업로드된 이미지" /> 
                <button 
                className='newfile' 
                onClick={() => {
                    const fileInput = document.querySelector<HTMLInputElement>('.file');
                    if (fileInput) {
                      fileInput.click();
                    }
                  }}>
                  <ImFilePicture className='icon' />
                </button>
               
              </div>
            }
            <input className='file' type="file" accept="image/*" onChange={handleImageChange} />
            <button className='close_btn' onClick={() => setIsCameraClicked(false)}><RxCross2 style={{color: "gray"}}/></button>
            {!uploadImgUrl &&  <div className="preview_msg_wrap">
              <ImFilePicture className='imgFileIcon' />
              <p className="preview_msg">클릭 혹은 파일을 이곳에 드롭하세요.</p>
              <p className="preview_desc">파일당 최대 10MB</p>
            </div>}
          </label>
        </div>

        <div className="search__inner">
        { task2 && (errorMessage ? 
        <div className='search_icon error'><BsFillPatchExclamationFill /></div> 
        : <div className='search_icon normal'><MdAddLink /></div>)}
          <div className='text_and_camera'>
              {!isCameraClicked ? (
                <input
                  className="searchBar"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="검색어를 입력하세요"
                />
              ) : (
                <input
                className="Img_searchBar"
                type="url"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                readOnly={false}
                placeholder={errorMessage ? errorMessage : '이미지 주소를 입력하세요'}
                />
              )}
              {task2 && (
                <button className='camera'  onClick={() => setIsCameraClicked(true)}>
                  <IoCameraReverseOutline className='camera_svg'/>
                </button>
              )}
          </div>
          
          
          <button className='search' onClick={isCameraClicked ? handleImageSearch : handleSearch}>
            검색하기
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!error && 
          <ImageGrid 
            data={imageData}
            imageRatio={1}
            gridCount={6}
            brand={branddata}
            name={namedata}
            onImageClick={handleImageClick}
          />}
          {error && <ErrorComponent message={error} />}
        </>
      )}

    </div>
  );
};


const SearchText: React.FC<{ task2?: boolean }> = ({ task2 }) => (
  <div className="searchText">
    <h2>스마트 AI검색  &nbsp;{task2 && <span> PLUS</span>} </h2> 
    <p>
      AI를 활용한 스마트 검색 텍스트 페이지입니다. 우측의 
      <span> 검색하기 </span>
      버튼을 클릭하면 됩니다.
    </p>
    {task2 && <p>파일형식 &nbsp;&nbsp;  <span>JPG</span> &nbsp;&nbsp; <span>PNG</span> &nbsp;&nbsp; <span>JPEG</span> &nbsp;&nbsp; <span>GIF</span></p>}
  </div>
);

const ErrorComponent: React.FC<{ message: string }> = ({ message }) => (
  <div className='ErrorComponent'>
    <BsFillPatchExclamationFill className='error'/>
    <h3>검색실패!</h3>
    <p>{message}</p>
  </div>
);
export default UploadText;
