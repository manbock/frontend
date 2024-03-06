import ImageGrid from "@/components/imageGrid";
import UploadTextShort from "@/components/textShort";
import Header from "@/components/section/Header";
import Search from "@/components/section/Search";
import Head from "next/head";
import { DataObject } from "@/types/demo"; // 타입 임포트
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  // 예시 metaData와 metadataHandler 함수
  const [metaData, setMetaData] = useState<DataObject>({ exampleKey: "exampleValue" });
  const metadataHandler = (data: DataObject) => {
    console.log("Metadata updated:", data);
    setMetaData(data); // metaData 업데이트
  };

  useEffect(() => {
    // API 호출
    const fetchData = async () => {
      try {
        const response = await axios.post('https://cafe24-proxy.bravo.dalpha.so/api/test/text-search', {
          keyword: '검색어 예시'
        });
        setMetaData(response.data); // API 응답을 metaData에 설정
      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    };

    fetchData(); // 함수 호출
  }, []); // 빈 배열을 전달하여 페이지가 처음 로드될 때 한 번만 호출하도록 함

  return (
    <>
      <Head>
        <title>Dalpha Assignment</title>
        <meta name="description" content="Dalpha Assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />  
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="main" role="main">
        <UploadTextShort
          dataKey="exampleKey"
          metaData={metaData}
          metadataHandler={metadataHandler}
          maxLength={100} // maxLength 값 설정 (선택적)
          title="Your Title" // title 값 설정
          placeholder="Your Placeholder" // placeholder 값 설정 (선택적)
        />
      </main>
    </>
  );
} 