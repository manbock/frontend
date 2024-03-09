import Header from "@/components/section/Header";
import Head from "next/head";
import { DataObject } from "@/types/demo"; // 타입 임포트
import { useEffect, useState } from "react";
import UploadText, { fetchFromAPI } from '@/utils/api'
import Search from "./search";
import ImageGrid from "@/components/imageGrid";

export default function Home() {
  // 예시 metaData와 metadataHandler 함수
  const [metaData, setMetaData] = useState<DataObject>({ exampleKey: "exampleValue" });
  const metadataHandler = (data: DataObject) => {
    console.log("Metadata updated:", data);
    setMetaData(data); // metaData 업데이트
  };

  fetchFromAPI
  
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
       
        <UploadText></UploadText>
      </main>
    </>
  );
} 